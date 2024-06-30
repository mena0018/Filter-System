'use client';

import { useURLParams } from '@/hooks/useURLParams';
import { FilterURL } from '@/app/_filter/filter-data';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useQueryParams() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());
  const queryParams = useURLParams(searchParams.toString());

  const hasQuery = (name: FilterURL) => {
    return searchParams.has(name);
  };

  const getQuery = (name: FilterURL) => {
    return searchParams.get(name);
  };

  const setQuery = (name: FilterURL, value: string) => {
    searchParams.set(name, value);
    replace(`${pathname}?${searchParams.toString()}`);
  };

  const deleteQuery = (name: FilterURL) => {
    searchParams.delete(name);
    replace(`${pathname}?${searchParams.toString()}`);
  };

  const setOrDeleteQuery = (name: FilterURL, value?: string) => {
    const initialValue = searchParams.get(name);

    if (initialValue == value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value ?? '');
    }
    replace(`${pathname}?${searchParams.toString()}`);
  };

  const setOrDeleteQueryMultiple = (name: FilterURL, value: string) => {
    const initialValues = searchParams.get(name)?.split(',') || [];

    if (initialValues.includes(value)) {
      initialValues.splice(initialValues.indexOf(value), 1);
    } else {
      initialValues.push(value);
    }

    if (initialValues.length === 0) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, initialValues.join(','));
    }

    replace(`${pathname}?${searchParams.toString()}`);
  };

  return {
    queryParams,
    hasQuery,
    getQuery,
    setQuery,
    deleteQuery,
    setOrDeleteQuery,
    setOrDeleteQueryMultiple,
  };
}
