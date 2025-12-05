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
    PopoverContent
} from "@heroui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { RiBox2Line, RiArrowDownSLine, RiArrowRightLine, RiArrowUpSLine } from "react-icons/ri";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopoverOpenProduct, setIsPopoverOpenProduct] = useState(false);
    const [isPopoverOpenLayanan, setIsPopoverOpenLayanan] = useState(false);
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
            items: ["Industri & Manufaktur", "Logistik & Transportasi", "Properti & Real Estate", "Kesehatan & Rumah Sakit"]
        },
        {
            title: "Service & Commerce",
            items: ["Ritel & Grosir", "Jasa & Profesional", "Hospitality & Restaurant", "Otomotif"]
        },
        {
            title: "Specialized Industries",
            items: ["Kesehatan & Rumah Sakit", "Energi, Pertambangan & Utilitas", "Keuangan, Perbankan & Asuransi", "Agro & Perkebunan"]
        },
        {
            title: "",
            items: ["Pendidikan", "Pemerintahan / Publik", "Media, Telekomunikasi & Kreatif"]
        }
    ];

    const layananCategories = ["Konsultasi Bisnis", "Managed Services", "Transformasi Digital", "Layanan Bidang Industri", "Pelatihan dan Sertifikasi", "Talenda Digital", "Layanan Manajemen"];

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
                    <Image src={logoDesktop} alt="Solvera Logo" width={179} height={56} />
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
                    <Popover placement="bottom" showArrow={true} offset={20} isOpen={isPopoverOpenProduct} onOpenChange={(open) => setIsPopoverOpenProduct(open)}>
                        <PopoverTrigger>
                            <Button
                                disableRipple
                                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${isPopoverOpenProduct ? "text-brand-primary font-semibold" : "text-foreground"}`}
                                endContent={isPopoverOpenProduct ? <RiArrowUpSLine color="text-brand-primary" /> : <RiArrowDownSLine />}
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
                                            <h3 className="text-brand-primary font-bold text-body-md pb-[16px]">{category.title}</h3>
                                            <ul className="flex flex-col gap-8">
                                                {category.items.map((item, itemIdx) => (
                                                    <li key={itemIdx}>
                                                        <Link href="#" className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors">
                                                            <RiBox2Line className="text-xl" />
                                                            <span className="text-body font-semibold">{item}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-brand-border-subtle pt-6 flex items-center gap-2">
                                    <span className="font-semibold text-foreground">Pelajari Lebih Lanjut Tentang Produk Solvera</span>
                                    <Link href="#" className="text-brand-primary font-bold flex items-center gap-1">
                                        Lihat Semua Produk <RiArrowRightLine />
                                    </Link>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </NavbarItem>
                {/* Layanan */}
                <NavbarItem>
                    <Popover placement="bottom" showArrow={false} offset={20} isOpen={isPopoverOpenLayanan} onOpenChange={(open) => setIsPopoverOpenLayanan(open)}>
                        <PopoverTrigger>
                            <Button
                                disableRipple
                                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-base ${isPopoverOpenLayanan ? "text-brand-primary font-semibold" : "text-foreground"}`}
                                endContent={isPopoverOpenLayanan ? <RiArrowUpSLine color="text-brand-primary" /> : <RiArrowDownSLine />}
                                radius="none"
                                variant="light"
                            >
                                Layanan
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80  p-0 rounded-xl overflow-hidden">
                            <div className="w-full bg-brand-primary-subtle p-6">
                                <div className="flex flex-col gap-8">
                                    {layananCategories.map((category, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <ul className="flex flex-col gap-3">
                                                <li key={idx}>
                                                    <Link href="#" className="text-foreground flex items-center gap-3 hover:text-brand-primary transition-colors">
                                                        <RiBox2Line className="text-xl" width={24} height={24} />
                                                        <span className="text-body font-semibold">{category}</span>
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
                    <Link color="foreground" href="#">
                        Berita Dan Artikel
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" radius="normal">
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
                    <Link color="foreground" href="#" className="text-body-md font-medium">
                        Home
                    </Link>
                    <Link color="foreground" href="#" className="text-body-md font-medium">
                        Layanan
                    </Link>
                    <Link color="foreground" href="#" className="text-body-md font-medium">
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
                            content: "pb-2"
                        }}
                    >
                        <AccordionItem key="produk" aria-label="Produk" title="Produk">
                            <div className="flex flex-col gap-6 pl-2">
                                {productCategories.map((category, catIdx) => (
                                    <div key={catIdx} className="flex flex-col gap-3">
                                        <p className="text-body-sm font-bold text-foreground">{category.title}</p>
                                        <div className="flex flex-col gap-3">
                                            {category.items.map((subItem, subIdx) => (
                                                <Link key={subIdx} href="#" className="text-body-sm text-foreground flex items-center gap-3">
                                                    <RiBox2Line className="text-xl" />
                                                    {subItem}
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
