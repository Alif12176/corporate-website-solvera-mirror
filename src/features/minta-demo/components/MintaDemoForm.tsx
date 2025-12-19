"use client";

import React from "react";
import { Input, Button, Select, SelectItem, Checkbox, Textarea } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa6"; // Assuming fa6 is available

export const MintaDemoForm = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center p-6 lg:p-12 bg-white">
            <div className="max-w-xl mx-auto w-full">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#1E41C6] mb-8 text-center lg:text-left">
                    Minta Demo Gratis
                </h1>

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
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
                            }}
                        />
                        <Input
                            isRequired
                            label="Email Bisnis"
                            type="email"
                            labelPlacement="outside"
                            placeholder=" "
                            variant="bordered"
                            radius="sm"
                            classNames={{
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
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
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
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
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
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
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
                            }}
                        />
                        <Input
                            label="Website"
                            labelPlacement="outside"
                            placeholder=" "
                            variant="bordered"
                            radius="sm"
                            classNames={{
                                inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                                label: "text-brand-text-secondary font-medium"
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
                            trigger: "border-brand-border-subtle bg-[#E7EBFB]/20",
                            label: "text-brand-text-secondary font-medium"
                        }}
                    >
                        <SelectItem key="1-10">1 - 10</SelectItem>
                        <SelectItem key="11-50">11 - 50</SelectItem>
                        <SelectItem key="51-200">51 - 200</SelectItem>
                        <SelectItem key="201-500">201 - 500</SelectItem>
                        <SelectItem key="500+">500+</SelectItem>
                    </Select>

                    <Textarea
                        label="Kebutuhan Bisnis"
                        labelPlacement="outside"
                        placeholder="Type your message..."
                        variant="bordered"
                        radius="sm"
                        minRows={4}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/20",
                            label: "text-brand-text-secondary font-medium"
                        }}
                    />

                    <Checkbox defaultSelected size="sm">
                        Saya menerima Syarat dan Ketentuan
                    </Checkbox>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <Button
                            variant="flat"
                            color="primary"
                            size="lg"
                            className="bg-[#C0CAF2] text-brand-text-primary font-medium"
                            startContent={<FaWhatsapp className="text-xl" />}
                        >
                            Tanyakan Langsung
                        </Button>
                        <Button
                            color="primary"
                            size="lg"
                            className="bg-[#1E41C6] font-medium"
                        >
                            Minta Demo
                        </Button>
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        Solvera © 2025 All rights reserved
                    </p>
                </form>
            </div>
        </div>
    );
};
