import { toast } from 'sonner';

type FetcherParams<Res, Body> = {
  fetchFunc: (params: Body) => Promise<Res>;
  bodyRequest: { success: false } | { success: true; data: Body };
};

export const fetcher = <Res, Body>({ fetchFunc, bodyRequest }: FetcherParams<Res, Body>) => {
  if (!bodyRequest.success) {
    toast.error('Invalid parameter...');
    return Promise.reject('Invalid parameter...');
  }

  return fetchFunc(bodyRequest.data);
};
