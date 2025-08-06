import { useEffect, useState } from 'react';

interface PaginatedData<T> {
  data: T[];
  total: number;
}

interface UsePaginatedDataReturn<T> {
  data: PaginatedData<T> | null;
  paginatedData: T[];
  isLoading: boolean;
  isPageLoading: boolean;
  reset: () => void;
  onEndReached: () => void;
}

const usePaginatedData = <T>(
  apiHook: any,
  params: any = {},
): UsePaginatedDataReturn<T> => {
  console.log('🚀 ~ params:', params);
  const LIMIT = 10;
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [skip, setSkip] = useState(0);

  const { data, ...rest } = apiHook({
    skip,
    limit: LIMIT,
    ...params,
  });

  const onEndReached = () => {
    if (data?.total && skip + LIMIT < data.total) {
      setSkip(prevSkip => prevSkip + LIMIT);
      setIsPageLoading(true);
    }
  };

  const reset = () => setPaginatedData([]);

  useEffect(() => {
    if (rest.isLoading == false) {
      setIsPageLoading(false);
    }
  }, [rest.isLoading, rest.requestId]);

  useEffect(() => {
    if (data?.data) {
      setPaginatedData(prevData => [...prevData, ...data.data]);
    }
  }, [data]);

  return {
    data,
    reset,
    paginatedData,
    isPageLoading,
    ...rest,
    onEndReached,
  };
};

export default usePaginatedData;
