"use client";

import { Button } from "@/features/layout/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BiReset } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HiArrowPath } from "react-icons/hi2";

type Option = { label: string };

interface BlogFilters {
  kategori: string;
  industri: string;
  segmen: string;
  search: string;
  page: number;
}

interface Props {
  filters: BlogFilters;
  setFilters: React.Dispatch<React.SetStateAction<BlogFilters>>;
}

export const Filter = ({ filters, setFilters }: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const router = useRouter();
  const kategori: Option[] = [
    { label: "Produk Utama" },
    { label: "Enterprise" },
    { label: "Service & Commerce" },
    { label: "Specialized Industries" },
  ];

  const industri: Option[] = [
    { label: "Industri & Manufaktur" },
    { label: "Logistik & Transportasi" },
    { label: "Layanan & Jasa" },
    { label: "Perhotelan & Restoran" },
    { label: "Properti & Real Estate" },
    { label: "Kesehatan & Rumah Sakit" },
    { label: "Bisnis Ritel & Toko" },
  ];

  const segmen: Option[] = [
    { label: "UMKM" },
    { label: "Startup" },
    { label: "Large Enterprise" },
  ];

  const [openKategori, setOpenKategori] = React.useState(true);
  // const [openIndustri, setOpenIndustri] = React.useState(true);
  // const [openSegmen, setOpenSegmen] = React.useState(true);

  const resetFilter = () => {
    setFilters({
      kategori: "",
      industri: "",
      segmen: "",
      search: "",
      page: 1,
    });
    router.replace('/products',{scroll: false})
  };

  const Chevron = ({ open }: { open: boolean }) =>
    open ? (
      <FaChevronUp className="h-5 text-primary" />
    ) : (
      <FaChevronDown className="h-5 text-primary" />
    );

  return (
    <div className="space-y-6 max-w-60">
      <div className="flex justify-between items-center">
        <h5 className="text-primary">Filter</h5>
        <Button
          radius="normal"
          color="primary"
          className="flex gap-3"
          onClick={resetFilter}
        >
          Reset <HiArrowPath className="h-5" />
        </Button>
      </div>

      {/* ================== KATEGORI ================== */}
      <hr className="border-[#00080426]" />
      <div>
        <div
          className="flex justify-between items-center py-5 cursor-pointer"
          onClick={() => setOpenKategori(!openKategori)}
        >
          <p className="font-bold text-primary">Kategori Utama</p>
          <Chevron open={openKategori} />
        </div>

        {openKategori &&
          kategori.map((k, index) => (
            <label
              key={index}
              className="flex items-center gap-2 py-2 cursor-pointer"
            >
              <input
                type="radio"
                name="kategori-filter"
                value={k.label}
                checked={category=== k.label}
                onChange={() => {
                  setFilters({ ...filters, kategori: k.label, page: 1 });
                  const searchParams = new URLSearchParams(
                    window.location.search
                  );
                  searchParams.set("category", k.label); 

                  router.replace(`/products?${searchParams.toString()}`, {
                    scroll: false,
                  });
                }}
                className="peer hidden"
              />
              <span className="inline-block shrink-0 w-4 h-4 rounded-full border border-primary bg-border-subtle peer-checked:bg-primary peer-checked:border-primary"></span>
              {k.label}
            </label>
          ))}
      </div>

      {/* ================== INDUSTRI ================== */}
      {/* <hr className="border-[#00080426]" />
      <div>
        <div className="flex justify-between items-center py-5 cursor-pointer" onClick={() => setOpenIndustri(!openIndustri)}>
          <p className="font-bold text-primary">Bidang Industri</p>
          <Chevron open={openIndustri} />
        </div>

        {openIndustri &&
          industri.map((i, index) => (
            <label key={index} className="flex items-center gap-2 py-2 cursor-pointer">
              <input
                type="radio"
                name="industri-filter"
                value={i.label}
                checked={filters.industri === i.label}
                onChange={() => setFilters({ ...filters, industri: i.label, page: 1 })}
                className="peer hidden"
              />
              <span className="w-4 h-4 rounded-full border border-primary bg-border-subtle peer-checked:bg-primary peer-checked:border-primary"></span>
              {i.label}
            </label>
          ))}
      </div> */}

      {/* ================== SEGMEN ================== */}
      {/* <hr className="border-[#00080426]" />
      <div>
        <div className="flex justify-between items-center py-5 cursor-pointer" onClick={() => setOpenSegmen(!openSegmen)}>
          <p className="font-bold text-primary">Segmen</p>
          <Chevron open={openSegmen} />
        </div>

        {openSegmen &&
          segmen.map((s, index) => (
            <label key={index} className="flex items-center gap-2 py-2 cursor-pointer">
              <input
                type="radio"
                name="segmen-filter"
                value={s.label}
                checked={filters.segmen === s.label}
                onChange={() => setFilters({ ...filters, segmen: s.label, page: 1 })}
                className="peer hidden"
              />
              <span className="w-4 h-4 rounded-full border border-primary bg-border-subtle peer-checked:bg-primary peer-checked:border-primary"></span>
              {s.label}
            </label>
          ))}
      </div> */}
    </div>
  );
};
