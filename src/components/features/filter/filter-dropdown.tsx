'use client';

import { useQueryState } from 'nuqs';
import { ChevronDownIcon, Filter } from 'lucide-react';
import { SORT_OPTIONS } from '@/app/_filter/filter-data';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const FilterDropdown = () => {
  const [sort, setSort] = useQueryState('sort', { defaultValue: '' });

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
            onClick={() => setSort(option.value)}
            className={cn({ 'bg-accent/50': option.value === sort })}
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
