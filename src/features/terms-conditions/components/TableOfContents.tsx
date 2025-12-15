"use client";

import { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { RiListUnordered } from "react-icons/ri";

interface Section {
    id: string;
    title: string;
}

interface TableOfContentsProps {
    sections: Section[];
}

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -60% 0px" }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-24 h-fit w-64 shrink-0">
                <div className="bg-brand-primary-subtle/30 rounded-xl p-6 border border-brand-border-subtle">
                    <h3 className="text-lg font-bold text-brand-primary mb-4 flex items-center gap-2">
                        <RiListUnordered /> Daftar Isi
                    </h3>
                    <ul className="flex flex-col gap-2">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => handleScroll(section.id)}
                                    className={`text-left text-sm transition-colors w-full py-1 ${activeId === section.id
                                        ? "text-brand-primary font-bold"
                                        : "text-foreground hover:text-brand-primary"
                                        }`}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Sticky Header */}
            <div className="lg:hidden sticky top-[72px] z-1 bg-background/80 backdrop-blur-md border-b border-brand-border-subtle w-full">
                <Accordion isCompact>
                    <AccordionItem
                        key="1"
                        aria-label="Daftar Isi"
                        title={
                            <span className="text-brand-primary font-bold flex items-center gap-2">
                                <RiListUnordered /> Kebijakan Privasi Solvera
                            </span>
                        }
                        classNames={{
                            title: "text-sm",
                            trigger: "py-3 px-4",
                            content: "px-4 pb-4 bg-background"
                        }}
                    >
                        <ul className="flex flex-col gap-3">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => handleScroll(section.id)}
                                        className={`text-left text-sm w-full ${activeId === section.id
                                            ? "text-brand-primary font-bold"
                                            : "text-foreground"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};
