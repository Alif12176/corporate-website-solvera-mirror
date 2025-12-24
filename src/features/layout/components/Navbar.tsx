"use client";

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as HeroLink, // Ganti nama agar tidak bentrok
  NavbarMenuToggle,
  NavbarMenu,
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NextLink from "next/link"; // Import Link dari Next.js
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { PromoBanner } from "./PromoBanner";
import { PromoData } from "../types/promo";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowRightLine,
  RiBuilding4Line,
  RiTruckLine,
  RiHomeGearLine,
  RiHospitalLine,
  RiStore3Line,
  RiServiceLine,
  RiRestaurantLine,
  RiCarLine,
  RiFlashlightLine,
  RiBankLine,
  RiPlantLine,
  RiBookOpenLine,
  RiGovernmentLine,
  RiBroadcastLine,
  RiHammerLine,
  RiShoppingBag3Line,
  RiCustomerService2Line,
  RiFileList3Line,
  RiArchiveDrawerLine,
  RiUserSettingsLine,
  RiComputerLine,
  RiContactsBookLine,
  RiSettings4Line,
  RiShieldCheckLine,
  RiGlobalLine,
  RiUserLine,
} from "react-icons/ri";

// --- DATA STATIS (Dipindahkan ke luar component) ---
const productCategories = [
  {
    title: "Enterprise",
    items: [
      { name: "Industri & Manufaktur", href: "/products/industri-dan-manufaktur", icon: <RiBuilding4Line /> },
      { name: "Logistik & Transportasi", href: "/products/logistic-dan-transportasi ", icon: <RiTruckLine /> },
      { name: "Properti & Real Estate", href: "/products/properti-dan-real-estate", icon: <RiHomeGearLine /> },
      { name: "Konstruksi dan Proyek", href: "/products/konstruksi-dan-proyek", icon: <RiHammerLine /> },
    ],
  },
  {
    title: "Service & Commerce",
    items: [
      { name: "Ritel & Grosir", href: "/products/ritel-dan-grosir", icon: <RiStore3Line /> },
      { name: "Jasa & Profesional", href: "/products/jasa-dan-layanan-profesional", icon: <RiServiceLine /> },
      { name: "Hospitality & Restaurant", href: "/products/hospitality-dan-restoran", icon: <RiRestaurantLine /> },
      { name: "Otomotif", href: "/products/otomotif-sales-and-aftermarket", icon: <RiCarLine /> },
    ],
  },
  {
    title: "Specialized Industries",
    items: [
      { name: "Kesehatan & Rumah Sakit", href: "/products/kesehatan-dan-rumah-sakit", icon: <RiHospitalLine /> },
      { name: "Energi, Pertambangan & Utilitas", href: "/products/energi-pertambangan-dan-utilitas", icon: <RiFlashlightLine /> },
      { name: "Keuangan, Perbankan & Asuransi", href: "/products/keuangan-perbankan-dan-asuransi", icon: <RiBankLine /> },
      { name: "Agro & Perkebunan", href: "/products/agro-dan-perkebunan", icon: <RiPlantLine /> },
    ],
  },
  {
    title: "",
    items: [
      { name: "Pendidikan", href: "/products/pendidikan", icon: <RiBookOpenLine /> },
      { name: "Pemerintahan / Publik", href: "/products/pemerintahan-dan-publik", icon: <RiGovernmentLine /> },
      { name: "Media, Telekomunikasi & Kreatif", href: "/products/media-telekomunikasi-dan-kreatif", icon: <RiBroadcastLine /> },
    ],
  },
];

const solusiCategories = [
  {
    items: [
      { name: "Sales Management", href: "/solusi/sales-management", icon: <RiShoppingBag3Line /> },
      { name: "CRM", href: "/solusi/crm", icon: <RiCustomerService2Line /> },
      { name: "Point of Sales", href: "/solusi/pos", icon: <RiStore3Line /> },
      { name: "Accounting & Finance", href: "/solusi/finance-accounting", icon: <RiFileList3Line /> },
      { name: "Purchasing Management", href: "/solusi/purchasing", icon: <RiShoppingBag3Line /> },
    ]
  },
  {
    items: [
      { name: "Inventory & Warehouse", href: "/solusi/inventory-warehouse", icon: <RiArchiveDrawerLine /> },
      { name: "Learning Management (LMS)", href: "/solusi/lms", icon: <RiBookOpenLine /> },
      { name: "Quality Control", href: "/solusi/quality-control", icon: <RiServiceLine /> },
      { name: "Document Management", href: "/solusi/document-management", icon: <RiFileList3Line /> },
      { name: "Project Management", href: "/solusi/project-management", icon: <RiHammerLine /> },
    ]
  },
  {
    items: [
      { name: "Fleet Management", href: "/solusi/fleet-management", icon: <RiTruckLine /> },
      { name: "Asset Management", href: "/solusi/asset-management", icon: <RiComputerLine /> },
      { name: "HR Management", href: "/solusi/hr-management", icon: <RiUserSettingsLine /> },
      { name: "Helpdesk & Ticketing", href: "/solusi/helpdesk-ticketing", icon: <RiCustomerService2Line /> },
    ]
  },
];

const layananCategories = [
  { name: "Konsultasi Bisnis", href: "/layanan/konsultasi-page", icon: <RiUserLine /> },
  { name: "Managed Services", href: "/layanan/managed-services", icon: <RiSettings4Line /> },
  { name: "Transformasi Digital", href: "/layanan/transformasi-digital", icon: <RiShieldCheckLine /> },
  { name: "Layanan Bidang Industri", href: "/layanan/bidang-industri", icon: <RiGlobalLine /> },
  { name: "Pelatihan dan Sertifikasi", href: "/layanan/pelatihan-dan-sertifikasi", icon: <RiBookOpenLine /> },
  { name: "Talenta Digital", href: "/layanan/talenta-digital", icon: <RiUserLine /> },
  { name: "Layanan Manajemen", href: "/layanan/manajemen-page", icon: <RiSettings4Line /> },
];

const tentangKami = [
  { name: "Tentang Kami", href: "/about-us" },
  { name: "Kontak", href: "/hubungi-kami" },
];



export const Navbar = ({ promoData }: { promoData: PromoData | null }) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY > 120) {
            setIsScrolled(true);
          } else if (scrollY <= 5) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- HANDLER FUNCTIONS ---
  const handleMenuOpenChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
    if (isOpen) setActiveMenu(null);
  };

  const handlePopoverChange = (menuName: string, isOpen: boolean) => {
    setActiveMenu(isOpen ? menuName : null);
  };

  const logoMobile = "/icons/solvera.svg";
  const logoDesktop = "/icons/solvera-logo-text.svg";

  if (pathname === "/minta-demo") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col font-sans">
      <PromoBanner isScrolled={isScrolled} data={promoData} />
      <HeroNavbar
        onMenuOpenChange={handleMenuOpenChange}
        position="sticky"
        maxWidth="full"
        className="px-page-mobile md:px-page-global h-[72px] border-b border-brand-border-subtle"
        classNames={{
          base: "px-0",
          wrapper: "px-0",
        }}
      >
        {/* Logo */}
        <NavbarContent>
          <NavbarBrand className="hidden sm:block">
            <NextLink href="/">
              <Image src={logoDesktop} alt="Solvera Logo" width={179} height={56} priority />
            </NextLink>
          </NavbarBrand>
          <NavbarBrand className="block sm:hidden">
            <NextLink href="/">
              <Image src={logoMobile} alt="Solvera Logo" width={36} height={26} />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Navbar Content (Desktop) */}
        <NavbarContent justify="end" className="hidden sm:flex gap-8">

          {/* 1. PRODUK */}
          <NavbarItem>
            <Popover
              placement="bottom"
              showArrow={true}
              offset={20}
              isOpen={activeMenu === "produk"}
              onOpenChange={(open) => handlePopoverChange("produk", open)}
            >
              <PopoverTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${activeMenu === "produk" ? "text-brand-primary font-semibold" : "text-foreground"
                    }`}
                  endContent={
                    activeMenu === "produk" ? <RiArrowUpSLine className="text-brand-primary" /> : <RiArrowDownSLine />
                  }
                  radius="none"
                  variant="light"
                >
                  Produk
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-screen p-0 rounded-b-xl overflow-hidden shadow-lg border-t border-brand-border-subtle">
                <div className="w-full bg-brand-primary-subtle p-8 md:px-page-global">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {productCategories.map((category, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {category.title && (
                          <h3 className="text-brand-primary font-bold text-body-md pb-2 border-b border-brand-border-subtle/20 w-fit">
                            {category.title}
                          </h3>
                        )}
                        <ul className={`flex flex-col gap-4 ${!category.title ? "mt-8" : ""}`}>
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <HeroLink as={NextLink} href={item.href} className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors group">
                                <span className="text-xl text-gray-500 group-hover:text-brand-primary transition-colors">
                                  {item.icon}
                                </span>
                                <span className="text-body font-semibold">
                                  {item.name}
                                </span>
                              </HeroLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-brand-border-subtle pt-6 flex items-center justify-start gap-2">
                    <span className="font-semibold text-foreground text-sm">
                      Pelajari Lebih Lanjut Tentang Produk Solvera
                    </span>
                    <HeroLink as={NextLink} href="/products" className="text-brand-primary font-bold flex items-center gap-1">
                      Lihat Semua Produk <RiArrowRightLine />
                    </HeroLink>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

          {/* 2. SOLUSI */}
          <NavbarItem>
            <Popover
              placement="bottom"
              showArrow={true}
              offset={20}
              isOpen={activeMenu === "solusi"}
              onOpenChange={(open) => handlePopoverChange("solusi", open)}
            >
              <PopoverTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${activeMenu === "solusi" ? "text-brand-primary font-semibold" : "text-foreground"
                    }`}
                  endContent={
                    activeMenu === "solusi" ? <RiArrowUpSLine className="text-brand-primary" /> : <RiArrowDownSLine />
                  }
                  radius="none"
                  variant="light"
                >
                  Solusi
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-screen p-0 rounded-b-xl overflow-hidden shadow-lg border-t border-brand-border-subtle">
                <div className="w-full bg-brand-primary-subtle p-8 md:px-page-global">
                  <h3 className="text-brand-primary font-bold text-body-md mb-6">SOLUSI KAMI</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
                    {solusiCategories.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <ul className="flex flex-col gap-6">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <HeroLink as={NextLink} href={item.href} className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors group">
                                <span className="text-xl text-gray-500 group-hover:text-brand-primary transition-colors">
                                  {item.icon}
                                </span>
                                <span className="text-body font-semibold">
                                  {item.name}
                                </span>
                              </HeroLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

          {/* 3. LAYANAN */}
          <NavbarItem>
            <Popover
              placement="bottom"
              showArrow={false}
              offset={20}
              isOpen={activeMenu === "layanan"}
              onOpenChange={(open) => handlePopoverChange("layanan", open)}
            >
              <PopoverTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${activeMenu === "layanan" ? "text-brand-primary font-semibold" : "text-foreground"
                    }`}
                  endContent={
                    activeMenu === "layanan" ? <RiArrowUpSLine className="text-brand-primary" /> : <RiArrowDownSLine />
                  }
                  radius="none"
                  variant="light"
                >
                  Layanan
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full bg-brand-primary-subtle p-4">
                  <div className="flex flex-col gap-2">
                    {layananCategories.map((category, idx) => (
                      <HeroLink as={NextLink} key={idx} href={category.href} className="text-foreground flex items-center gap-3 hover:text-brand-primary hover:bg-brand-primary-subtle p-3 rounded-lg transition-all">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-body font-semibold">
                          {category.name}
                        </span>
                      </HeroLink>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

          {/* 4. TENTANG KAMI */}
          <NavbarItem>
            <Popover
              placement="bottom"
              showArrow={false}
              offset={20}
              isOpen={activeMenu === "tentang"}
              onOpenChange={(open) => handlePopoverChange("tentang", open)}
            >
              <PopoverTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${activeMenu === "tentang" ? "text-brand-primary font-semibold" : "text-foreground"
                    }`}
                  endContent={
                    activeMenu === "tentang" ? <RiArrowUpSLine className="text-brand-primary" /> : <RiArrowDownSLine />
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
                            <HeroLink as={NextLink} href={category.href} className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors">
                              {category.name === "Tentang Kami" ? (
                                <RiUserLine className="text-xl" />
                              ) : (
                                <RiContactsBookLine className="text-xl" />
                              )}
                              <span className="text-body font-semibold">
                                {category.name}
                              </span>
                            </HeroLink>
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
            <HeroLink as={NextLink} color="foreground" href="/blog" className="text-base font-medium">
              Berita Dan Artikel
            </HeroLink>
          </NavbarItem>

          <NavbarItem>
            <Button as={NextLink} color="primary" href="/hubungi-kami" radius="sm" className="font-bold px-6">
              Hubungi Kami
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Navigation */}
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-background pt-6 px-6 h-[calc(100vh-72px)] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <HeroLink as={NextLink} color="foreground" href="/" className="text-body-md font-medium">
              Home
            </HeroLink>

            {/* Accordion for Mobile */}
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
              {/* Mobile Produk */}
              <AccordionItem key="produk" aria-label="Produk" title="Produk">
                <div className="flex flex-col gap-6 pl-2">
                  {productCategories.map((category, catIdx) => (
                    <div key={catIdx} className="flex flex-col gap-3">
                      {category.title && <p className="text-body-sm font-bold text-brand-primary">{category.title}</p>}
                      <div className="flex flex-col gap-3">
                        {category.items.map((subItem, subIdx) => (
                          <HeroLink as={NextLink} key={subIdx} href={subItem.href} className="text-body-sm text-foreground flex items-center gap-3">
                            {subItem.icon} {subItem.name}
                          </HeroLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              {/* Mobile Solusi */}
              <AccordionItem key="solusi" aria-label="Solusi" title="Solusi">
                <div className="flex flex-col gap-4 pl-2">
                  {solusiCategories.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      {col.items.map((item, i) => (
                        <HeroLink as={NextLink} key={i} href={item.href} className="text-body-sm text-foreground flex items-center gap-3">
                          {item.icon} {item.name}
                        </HeroLink>
                      ))}
                    </div>
                  ))}
                </div>
              </AccordionItem>

              {/* Mobile Layanan */}
              <AccordionItem key="layanan" aria-label="Layanan" title="Layanan">
                <div className="flex flex-col gap-3 pl-2">
                  {layananCategories.map((item, i) => (
                    <HeroLink as={NextLink} key={i} href={item.href} className="text-body-sm text-foreground flex items-center gap-3">
                      {item.icon} {item.name}
                    </HeroLink>
                  ))}
                </div>
              </AccordionItem>

              {/* Mobile Tentang Kami */}
              <AccordionItem key="tentang" aria-label="Tentang Kami" title="Tentang Kami">
                <div className="flex flex-col gap-3 pl-2">
                  {tentangKami.map((item, i) => (
                    <HeroLink as={NextLink} key={i} href={item.href} className="text-body-sm text-foreground flex items-center gap-3">
                      {item.name}
                    </HeroLink>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>

            <HeroLink as={NextLink} color="foreground" href="/blog" className="text-body-md font-medium">
              Berita Dan Artikel
            </HeroLink>
          </div>

          {/* Footer Buttons */}
          <div className="mt-auto pb-8 flex flex-col gap-3">
            <Button as={NextLink} href="/hubungi-kami" fullWidth color="primary" radius="sm">
              Hubungi Kami
            </Button>
          </div>
        </NavbarMenu>
      </HeroNavbar>
    </header>
  );
};