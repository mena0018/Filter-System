'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, Filter } from 'lucide-react';
import { useQueryParams } from '@/hooks/useQueryParams';
import { SORT_OPTIONS, FilterURL } from '@/app/_filter/filter-data';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const FilterDropdown = () => {
  const { getQuery, setOrDeleteQuery } = useQueryParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Sort
          <ChevronDownIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.name}
            onClick={() => setOrDeleteQuery(FilterURL.Sort, option.value)}
            className={cn({ 'bg-accent/50': option.value === getQuery(FilterURL.Sort) })}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>

      <Button className="-m-2 ml-4 p-2 sm:ml-6 lg:hidden">
        <Filter className="size-5" />
      </Button>
    </DropdownMenu>
  );
};
