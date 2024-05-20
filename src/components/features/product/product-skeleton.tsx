const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="lg:aspect-none aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
        <div className="size-full bg-gray-200" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="h-4 w-full bg-gray-200" />
        <div className="h-4 w-full bg-gray-200" />
      </div>
    </div>
  );
};

export const ProductsSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 gap-8 overflow-scroll sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </ul>
  );
};
