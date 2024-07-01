import { toast } from 'sonner';

type FetcherParams<Res, T> = {
  fetcher: (params: T) => Promise<Res>;
  bodyRequest: { success: false } | { success: true; data: T };
};

export const fetcherWithToastError = <Res, T>({ fetcher, bodyRequest }: FetcherParams<Res, T>) => {
  if (!bodyRequest.success) {
    toast.error('Invalid parameter...');
    return Promise.reject('Invalid parameter...');
  }

  return fetcher(bodyRequest.data);
};
