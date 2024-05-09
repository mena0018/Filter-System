import { FilterDropdown } from '@/app/_filter/filter-dropdown';

export default async function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b pb-6 pt-24">
        <h1 className="text-lg font-bold md:text-4xl">High-quality cotton selection</h1>

        <FilterDropdown />
      </div>
    </main>
  );
}
