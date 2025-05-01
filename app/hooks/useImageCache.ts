'use client';

// Cache expiration time (24 hours in milliseconds)
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

// In-memory cache
const memoryCache = new Map<string, string>();

export const useImageCache = () => {
  const isClient = typeof window !== 'undefined';

  const getFromLocalStorage = (key: string): string | null => {
    if (!isClient) return null;

    try {
      const cacheData = localStorage.getItem(`image_cache_${key}`);
      if (!cacheData) return null;

      const { timestamp, url } = JSON.parse(cacheData);

      if (Date.now() - timestamp > CACHE_EXPIRATION) {
        localStorage.removeItem(`image_cache_${key}`);
        return null;
      }

      return url;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  };

  const saveToLocalStorage = (key: string, url: string): void => {
    if (!isClient) return;

    try {
      const cacheData = { timestamp: Date.now(), url };
      localStorage.setItem(`image_cache_${key}`, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const getCachedImage = (url: string): string => {
    if (memoryCache.has(url)) return memoryCache.get(url)!;

    const cachedUrl = getFromLocalStorage(url);
    if (cachedUrl) {
      memoryCache.set(url, cachedUrl);
      return cachedUrl;
    }

    memoryCache.set(url, url);
    saveToLocalStorage(url, url);
    return url;
  };

  return {
    getCachedImage,
  };
};
