import { Product } from '@/app/_product/product-data';

export const ProductItem = ({ color, imageId, name, price, size }: Product) => {
  return (
    <li className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-slate-100 group-hover:opacity-75 dark:bg-slate-400 lg:h-80">
        <img src={imageId} alt="product image" className="size-full object-cover object-center" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3>{name}</h3>
          <p className="mt-1 text-sm text-foreground/70">
            Size {size.toUpperCase()}, {color}
          </p>
        </div>
        <p className="font-medium">{price}</p>
      </div>
    </li>
  );
};
