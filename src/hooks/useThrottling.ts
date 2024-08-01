import { useState, useCallback } from 'react';

const useThrottling = (requestNum: number, requestTimeLimit: number) => {
  const [requestCount, setRequestCount] = useState(0);
  const [lastRequestTime, setLastRequestTime] = useState<number | null>(null);

  const canMakeRequest = useCallback(() => {
    const now = Date.now();

    if (lastRequestTime && now - lastRequestTime < requestTimeLimit && requestCount >= requestNum) {
      return false;
    }

    if (lastRequestTime && now - lastRequestTime >= requestTimeLimit) {
      setRequestCount(0);
      setLastRequestTime(now);
    }

    setRequestCount(prevCount => prevCount + 1);
    setLastRequestTime(now);

    return true;
  }, [lastRequestTime, requestCount, requestNum, requestTimeLimit]);

  return canMakeRequest;
};

export default useThrottling;