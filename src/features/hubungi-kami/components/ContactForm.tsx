"use client";

import React from "react";
import { Input, Button, Textarea, Checkbox, Select, SelectItem } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa6";

export const ContactForm = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 pb-16">
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        label="Nama Lengkap"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium",
                            mainWrapper: "h-full"
                        }}
                    />
                    <Input
                        isRequired
                        type="email"
                        label="Email Bisnis"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        label="Nama Perusahaan"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                    <Input
                        isRequired
                        label="Jabatan"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        label="Nomor Telepon"
                        type="tel"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                    <Input
                        label="Website"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        radius="sm"
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <Select
                    isRequired
                    label="Jumlah Karyawan"
                    labelPlacement="outside"
                    placeholder="Select one..."
                    variant="bordered"
                    radius="sm"
                    classNames={{
                        trigger: "border-brand-border-subtle bg-[#E7EBFB]/50",
                        label: "text-neutral-600 font-medium"
                    }}
                >
                    <SelectItem key="1-10">1 - 10</SelectItem>
                    <SelectItem key="11-50">11 - 50</SelectItem>
                    <SelectItem key="51-200">51 - 200</SelectItem>
                    <SelectItem key="201-500">201 - 500</SelectItem>
                    <SelectItem key="500+">500+</SelectItem>
                </Select>

                <Textarea
                    id="kebutuhan-bisnis"
                    label="Kebutuhan Bisnis"
                    labelPlacement="outside"
                    placeholder="Type your message..."
                    variant="bordered"
                    radius="sm"
                    minRows={6}
                    classNames={{
                        inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                        label: "text-neutral-600 font-medium"
                    }}
                />

                <Checkbox defaultSelected size="sm" classNames={{ label: "text-neutral-600" }}>
                    Saya menerima Syarat dan Ketentuan
                </Checkbox>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <Button
                        variant="flat"
                        size="lg"
                        className="bg-[#C0CAF2] text-brand-primary font-medium"
                        startContent={<FaWhatsapp className="text-xl" />}
                        as="a"
                        href="https://wa.me/62xxxxxxxx" // Ganti dengan nomor asli
                        target="_blank"
                    >
                        Tanyakan Langsung
                    </Button>
                    <Button
                        color="primary"
                        size="lg"
                        className="bg-brand-primary font-medium"
                    >
                        Jadwalkan Sesi Anda
                    </Button>
                </div>
            </form>
        </div>
    );
};
