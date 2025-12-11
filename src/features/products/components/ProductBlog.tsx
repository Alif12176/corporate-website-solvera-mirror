"use client";
import React, { useEffect, useState } from "react";
import { Filter } from "./ProductFilter";
import { List } from "./ProductList";

interface BlogFilters {
  kategori: string;
  industri: string;
  segmen: string;
  search: string;
  page: number;
}

export const Blog = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [filters, setFilters] = useState<BlogFilters>({
    kategori: "",
    industri: "",
    segmen: "",
    search: "",
    page: 1,
  });

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="md:py-12 py-10 md:px-16 px-6 flex justify-between gap-6 w-full max-w-7xl mx-auto">
      {!isMobile && <div className="w-[20%] hidden md:block">
        <Filter filters={filters} setFilters={setFilters} />
      </div>}
      <div className="md:w-[80%]">
        <List 
          filters={filters}
          setFilters={setFilters}
          onOpenFilter={() => setShowFilter(true)}
        />
      </div>

      {isMobile && showFilter && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setShowFilter(false)}
          />

          {/* drawer */}
          <div className="fixed top-0 left-0 h-full w-72 bg-white p-6 z-50 shadow-lg md:hidden overflow-y-auto">
            <Filter filters={filters} setFilters={setFilters} />

            <button
              className="mt-4 bg-gray-200 py-2 px-4 w-full rounded"
              onClick={() => setShowFilter(false)}
            >
              Tutup
            </button>
          </div>
        </>
      )}
    </div>
  );
}
