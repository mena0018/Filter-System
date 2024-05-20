import { XCircle } from 'lucide-react';

export const ProductEmptyState = () => {
  return (
    <div className="col-span-full flex h-96 w-full flex-1 flex-col items-center justify-center gap-2 bg-primary-foreground p-12">
      <XCircle className="size-8 text-destructive" />
      <h3 className="text-xl font-semibold">No products found</h3>
      <p className="text-sm text-muted-foreground">We found no search results for these filters.</p>
    </div>
  );
};
