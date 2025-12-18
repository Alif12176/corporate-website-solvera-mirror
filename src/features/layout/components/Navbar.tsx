"use client";

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import {
  RiBox2Line,
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowUpSLine,
  RiErrorWarningFill,
} from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopoverOpenProduct, setIsPopoverOpenProduct] = useState(false);
  const [isPopoverOpenLayanan, setIsPopoverOpenLayanan] = useState(false);
  const [isPopoverOpenTentangKami, setIsPopoverOpenTentangKami] = useState(false);
  const logoMobile = "/icons/solvera.svg";
  const logoDesktop = "/icons/solvera-logo-text.svg";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsPopoverOpenProduct(false);
        setIsPopoverOpenLayanan(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpenChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
    if (isOpen) {
      setIsPopoverOpenProduct(false);
      setIsPopoverOpenLayanan(false);
    }
  };

  const productCategories = [
    {
      title: "Enterprise",
      items: [
        { label: "Industri & Manufaktur", href: "/products/industri-dan-manufaktur" },
        { label: "Logistik & Transportasi", href: "/products/logistic-dan-transportasi " },
        { label: "Properti & Real Estate", href: "/products/properti-dan-real-estate" },
        { label: "Kesehatan & Rumah Sakit", href: "/products/konstruksi-dan-proyek" },
      ],
    },
    {
      title: "Service & Commerce",
      items: [
        { label: "Ritel & Grosir", href: "/products/ritel-dan-grosir" },
        { label: "Jasa & Profesional", href: "/products/jasa-dan-layanan-profesional" },
        { label: "Hospitality & Restaurant", href: "/products/hospitality-dan-restoran" },
        { label: "Otomotif", href: "/products/otomotif-sales-and-aftermarket" },
      ],
    },
    {
      title: "Specialized Industries",
      items: [
        { label: "Kesehatan & Rumah Sakit", href: "/products/kesehatan-dan-rumah-sakit" },
        { label: "Energi, Pertambangan & Utilitas", href: "/products/energi-pertambangan-dan-utilitas" },
        { label: "Keuangan, Perbankan & Asuransi", href: "/products/keuangan-perbankan-dan-asuransi" },
        { label: "Agro & Perkebunan", href: "/products/agro-dan-perkebunan" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Pendidikan", href: "/products/pendidikan" },
        { label: "Pemerintahan / Publik", href: "/products/pemerintahan-dan-publik" },
        { label: "Media, Telekomunikasi & Kreatif", href: "/products/media-telekomunikasi-dan-kreatif" },
      ],
    },
  ];

  const layananCategories = [
    {
      name: "Konsultasi Bisnis",
      url: "/layanan/konsultasi-bisnis",
    },
    {
      name: "Managed Services",
      url: "/layanan/managed-services",
    },
    {
      name: "Transformasi Digital",
      url: "/layanan/transformasi-digital",
    },
    {
      name: "Layanan Bidang Industri",
      url: "/layanan/bidang-industri",
    },
    {
      name: "Pelatihan dan Sertifikasi",
      url: "/layanan/pelatihan-sertifikasi",
    },
    {
      name: "Talenda Digital",
      url: "/layanan/talenda-digital",
    },
    {
      name: "Layanan Manajemen",
      url: "/layanan/layanan-manajemen",
    },
  ];

  const tentangKami = [
    {
      name: "Tentang Kami",
      url: "/about-us",
    },
    {
      name: "Kontak",
      url: "/hubungi-kami",
    },
  ];

  return (
    <HeroNavbar
      onMenuOpenChange={handleMenuOpenChange}
      position="sticky"
      maxWidth="full"
      className="px-page-mobile md:px-page-global h-[72px]"
      classNames={{
        base: "px-0",
        wrapper: "px-0",
      }}
    >
      {/* Logo */}
      <NavbarContent>
        {/* Desktop Logo */}
        <NavbarBrand className="hidden sm:block">
          <Link href="/">
            <Image src={logoDesktop} alt="Solvera Logo" width={179} height={56} />
          </Link>
        </NavbarBrand>
        {/* Mobile Logo */}
        <NavbarBrand className="block sm:hidden">
          <Image src={logoMobile} alt="Solvera Logo" width={36} height={26} />
        </NavbarBrand>
      </NavbarContent>
      {/* Navbar Content */}
      <NavbarContent justify="end" className="hidden sm:flex gap-8">
        {/* Produk */}
        <NavbarItem>
          <Popover
            placement="bottom"
            showArrow={true}
            offset={20}
            isOpen={isPopoverOpenProduct}
            onOpenChange={(open) => setIsPopoverOpenProduct(open)}
          >
            <PopoverTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${isPopoverOpenProduct
                  ? "text-brand-primary font-semibold"
                  : "text-foreground"
                  }`}
                endContent={
                  isPopoverOpenProduct ? (
                    <RiArrowUpSLine color="text-brand-primary" />
                  ) : (
                    <RiArrowDownSLine />
                  )
                }
                radius="none"
                variant="light"
              >
                Produk
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-screen  p-0 rounded-xl overflow-hidden">
              <div className="w-full bg-brand-primary-subtle p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  {productCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      <h3 className="text-brand-primary font-bold text-body-md pb-[16px]">
                        {category.title}
                      </h3>
                      <ul className="flex flex-col gap-8">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors"
                            >
                              <RiBox2Line className="text-xl" />
                              <span className="text-body font-semibold">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-border-subtle pt-6 flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    Pelajari Lebih Lanjut Tentang Produk Solvera
                  </span>
                  <Link
                    href="/products"
                    className="text-brand-primary font-bold flex items-center gap-1"
                  >
                    Lihat Semua Produk <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        {/* Layanan */}
        <NavbarItem>
          <Popover
            placement="bottom"
            showArrow={false}
            offset={20}
            isOpen={isPopoverOpenLayanan}
            onOpenChange={(open) => setIsPopoverOpenLayanan(open)}
          >
            <PopoverTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${isPopoverOpenLayanan
                  ? "text-brand-primary font-semibold"
                  : "text-foreground"
                  }`}
                endContent={
                  isPopoverOpenLayanan ? (
                    <RiArrowUpSLine color="text-brand-primary" />
                  ) : (
                    <RiArrowDownSLine />
                  )
                }
                radius="none"
                variant="light"
              >
                Layanan
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 rounded-xl overflow-hidden">
              <div className="w-full bg-brand-primary-subtle p-6">
                <div className="flex flex-col gap-8">
                  {layananCategories.map((category, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <ul className="flex flex-col gap-3">
                        <li>
                          <Link
                            href={category.url}
                            className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors"
                          >
                            <RiBox2Line
                              className="text-xl"
                              width={24}
                              height={24}
                            />
                            <span className="text-body font-semibold">
                              {category.name}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        {/* Tentang Kami */}
        <NavbarItem>
          <Popover
            placement="bottom"
            showArrow={false}
            offset={20}
            isOpen={isPopoverOpenTentangKami}
            onOpenChange={(open) => setIsPopoverOpenTentangKami(open)}
          >
            <PopoverTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${isPopoverOpenTentangKami
                  ? "text-brand-primary font-semibold"
                  : "text-foreground"
                  }`}
                endContent={
                  isPopoverOpenTentangKami ? (
                    <RiArrowUpSLine color="text-brand-primary" />
                  ) : (
                    <RiArrowDownSLine />
                  )
                }
                radius="none"
                variant="light"
              >
                Tentang Kami
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 rounded-xl overflow-hidden">
              <div className="w-full bg-brand-primary-subtle p-6">
                <div className="flex flex-col gap-8">
                  {tentangKami.map((category, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <ul className="flex flex-col gap-3">
                        <li>
                          <Link
                            href={category.url}
                            className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors"
                          >
                            {category.name === "Tentang Kami" ? (
                              <RiErrorWarningFill
                                className="text-xl"
                                width={24}
                                height={24}
                              />
                            ) : (
                              <FaPhoneAlt
                                className="text-xl"
                                width={24}
                                height={24}
                              />
                            )}
                            <span className="text-body font-semibold">
                              {category.name}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blog">
            Berita Dan Artikel
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/hubungi-kami" radius="normal">
            Hubungi Kami
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile Navigation */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarMenu className="bg-background pt-6 px-6 h-[calc(100vh-72px)] flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Link
            color="foreground"
            href="/"
            className="text-body-md font-medium"
          >
            Home
          </Link>
          <Link
            color="foreground"
            href="#"
            className="text-body-md font-medium"
          >
            Layanan
          </Link>
          <Link
            color="foreground"
            href="/blog"
            className="text-body-md font-medium"
          >
            Berita Dan Artikel
          </Link>

          {/* Accordion for Produk */}
          <Accordion
            selectionMode="multiple"
            className="px-0 w-full"
            showDivider={false}
            itemClasses={{
              trigger: "px-0 py-2",
              title: "text-body-md font-medium",
              content: "pb-2",
            }}
          >
            <AccordionItem key="produk" aria-label="Produk" title="Produk">
              <div className="flex flex-col gap-6 pl-2">
                {productCategories.map((category, catIdx) => (
                  <div key={catIdx} className="flex flex-col gap-3">
                    <p className="text-body-sm font-bold text-foreground">
                      {category.title}
                    </p>
                    <div className="flex flex-col gap-3">
                      {category.items.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.href}
                          className="text-body-sm text-foreground flex items-center gap-3"
                        >
                          <RiBox2Line className="text-xl" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer Buttons */}
        <div className="mt-auto pb-8 flex flex-col gap-3">
          <Button fullWidth variant="flat" color="primary" radius="sm">
            Masuk
          </Button>
          <Button fullWidth color="primary" radius="sm">
            Daftar Sekarang
          </Button>
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
};
