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
import { Button } from '@/components/ui/button';

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
            <Button
              variant="outline"
              className={cn('w-full block text-left border-0', {
                'bg-accent/50': option.value === filter.sort,
              })}
              key={option.name}
              onClick={() =>
                setFilter((prev) => ({ ...prev, sort: option.value }))
              }
            >
              {option.name}
            </Button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button className="-m-2 ml-4 p-2 sm:ml-6 lg:hidden">
        <Filter className="size-5" />
      </Button>
    </div>
  );
};
