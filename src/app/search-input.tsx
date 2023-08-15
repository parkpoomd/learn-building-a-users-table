"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchInput({ search }: { search?: string }) {
  const router = useRouter();

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-gray-300 pl-10 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0"
        placeholder="Search"
        defaultValue={search}
        onChange={(event) => router.push(`/?search=${event.target.value}`)}
      />
    </div>
  );
}
