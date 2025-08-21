import { useState, useEffect } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

export const useBackgroundRemoval = (imageUrl: string) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      if (!imageUrl) return;
      
      setIsProcessing(true);
      setError(null);
      
      try {
        const img = await loadImageFromUrl(imageUrl);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (err) {
        console.error('Error processing image:', err);
        setError('Failed to process image');
        // Fallback to original image
        setProcessedImageUrl(imageUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [imageUrl]);

  return { processedImageUrl, isProcessing, error };
};