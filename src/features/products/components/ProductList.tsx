"use client";

import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/features/layout/components/Button";
import { Card } from "./ProductCard";
import { PiFunnel } from "react-icons/pi";
import { Input, Pagination } from "@heroui/react";
import { FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import { useProducts } from "../hooks/useProducts";

interface BlogItem {
  title: string;
  subtitle: string;
  kategori: string;
  industri: string;
  segmen: string;
}

interface BlogFilters {
  kategori: string;
  industri: string;
  segmen: string;
  search: string;
  page: number;
}

interface ListProps {
  filters: BlogFilters;
  setFilters: React.Dispatch<React.SetStateAction<BlogFilters>>;
  onOpenFilter: () => void;
}

const data: BlogItem[] = [
  {
    title: "ERP System",
    subtitle: "ERP terintegrasi untuk efisiensi bisnis Anda.",
    kategori: "Software Development & Implementation",
    industri: "Industri & Manufaktur",
    segmen: "Large Enterprise",
  },
  {
    title: "IT Consulting Service",
    subtitle: "Konsultasi strategi TI untuk bisnis modern.",
    kategori: "Advisory & Consulting",
    industri: "Layanan & Jasa",
    segmen: "Startup",
  },
  {
    title: "Project Management Office",
    subtitle: "Meningkatkan efisiensi proyek Anda.",
    kategori: "Program & Project Management",
    industri: "Properti & Real Estate",
    segmen: "Large Enterprise",
  },
  {
    title: "Managed IT Services",
    subtitle: "Layanan IT yang handal untuk perusahaan Anda.",
    kategori: "Managed Services & IT Operation",
    industri: "Logistik & Transportasi",
    segmen: "UMKM",
  },
  {
    title: "Hospital IT Solution",
    subtitle: "Solusi TI untuk rumah sakit modern.",
    kategori: "Software Development & Implementation",
    industri: "Kesehatan & Rumah Sakit",
    segmen: "Large Enterprise",
  },
  {
    title: "Retail Analytics",
    subtitle: "Optimalkan strategi ritel Anda.",
    kategori: "Advisory & Consulting",
    industri: "Bisnis Ritel & Toko",
    segmen: "Startup",
  },
  {
    title: "Startup Incubator",
    subtitle: "Dukungan untuk pertumbuhan startup.",
    kategori: "Program & Project Management",
    industri: "Layanan & Jasa",
    segmen: "Startup",
  },
  {
    title: "Logistics Optimization",
    subtitle: "Efisiensi logistik dengan teknologi terbaru.",
    kategori: "Managed Services & IT Operation",
    industri: "Logistik & Transportasi",
    segmen: "Large Enterprise",
  },
  {
    title: "Hospitality Management",
    subtitle: "Sistem manajemen hotel & restoran.",
    kategori: "Software Development & Implementation",
    industri: "Perhotelan & Restoran",
    segmen: "UMKM",
  },
];

export const List = ({ filters, setFilters, onOpenFilter }: ListProps) => {
  const { data, isLoading, isError } = useProducts();

  console.log(data)
  const router = useRouter();

  const [searchInput, setSearchInput] = React.useState(filters.search);

  const itemsPerPage = 6;

  const filtered = useMemo(() => {
    const products = data?.data ?? [];

    return products
      .filter((item:any) =>
        !filters.kategori ? true : item.kategori === filters.kategori
      )
      .filter((item:any) =>
        !filters.industri ? true : item.industri === filters.industri
      )
      .filter((item:any) =>
        !filters.segmen ? true : item.segmen === filters.segmen
      )
      .filter((item:any) =>
        filters.search
          ? item.title.toLowerCase().includes(filters.search.toLowerCase())
          : true
      );
  }, [filters]);

  const start = (filters.page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  useEffect(() => {
    if (searchInput === "") {
      setFilters((prev) => ({ ...prev, search: "", page: 1 }));
    }
  }, [searchInput, setFilters]);

  return (
    <div className="space-y-6">
      {/* SEARCH */}
      <div className="flex gap-4">
        <Button
          className="md:hidden px-2.5!"
          radius="normal"
          variant="outline"
          onClick={onOpenFilter}
        >
          {" "}
          <PiFunnel className="h-5" />{" "}
        </Button>
        <Input
          type="text"
          radius="sm"
          placeholder="Cari..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFilters((prev) => ({ ...prev, search: searchInput, page: 1 }));
            }
          }}
        />
        <Button
          className="flex"
          color="primary"
          radius="normal"
          onClick={() =>
            setFilters({ ...filters, search: searchInput, page: 1 })
          }
        >
          Cari <FaMagnifyingGlass className="h-5 w-5" />
        </Button>
      </div>

      {/* CARD LIST */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {paginated.map((item:any, idx:number) => (
          <Card
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
            action={
              <Button
                radius="normal"
                color="primary"
                onClick={() => router.push("/products/1")}
              >
                Pelajari Selengkapnya <FaArrowRight className="h-5" />
              </Button>
            }
          />
        ))}

      </div>
        {paginated.length === 0 ? (
          <p className="col-span-3 text-center py-10 text-gray-500">
            Tidak ada data ditemukan.
          </p>
        ) : (
          <div className="flex justify-center">
            <Pagination
              initialPage={filters.page}
              total={totalPages}
              onChange={(p: number) => setFilters({ ...filters, page: p })}
            />
          </div>
        )}
    </div>
  );
};
