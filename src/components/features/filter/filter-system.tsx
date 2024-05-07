'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Filter } from 'lucide-react';
import { SORT_OPTIONS } from '@/components/features/filter/filter-data';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

export const FilterSystem = () => {
  const [filter, setFilter] = useState({
    sort: 'none',
  });

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="group inline-flex justify-center gap-1 text-sm">
          Sort
          <ChevronDownIcon className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {SORT_OPTIONS.map((option) => (
            <button
              className={cn(
                'text-left w-full block px-4 py-2 text-sm hover:bg-gray-200',
                { 'bg-gray-100': option.value === filter.sort }
              )}
              key={option.name}
              onClick={() =>
                setFilter((prev) => ({ ...prev, sort: option.value }))
              }
            >
              {option.name}
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
        <Filter className="size-5" />
      </button>
    </div>
  );
};
