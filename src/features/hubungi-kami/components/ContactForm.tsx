"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Input,
    Button,
    Textarea,
    Checkbox,
    Select,
    SelectItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // 3. State Data Form
    const [formData, setFormData] = useState({
        nama_lengkap: "",
        email: "",
        partner_name: "",
        function: "",
        phone: "",
        website: "",
        x_studio_jumlah_karyawan: "",
        description: "",
        "g-recaptcha-response": ""
    });

    const [isAgreed, setIsAgreed] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalInfo, setModalInfo] = useState({ title: "", message: "", isError: false });

    const [isFormValid, setIsFormValid] = useState(false);

    const onCaptchaChange = (token: string | null) => {
        setFormData(prev => ({
            ...prev,
            "g-recaptcha-response": token || ""
        }));
    };

    useEffect(() => {
        const requiredFieldsFilled =
            formData.nama_lengkap.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.partner_name.trim() !== "" &&
            formData.function.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.x_studio_jumlah_karyawan !== "";

        const isCaptchaFilled = formData["g-recaptcha-response"] !== "";

        let isWebsiteValid = true;
        if (formData.website.trim() !== "") {
            const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            isWebsiteValid = urlPattern.test(formData.website);
        }

        setIsFormValid(requiredFieldsFilled && isAgreed && isWebsiteValid && isCaptchaFilled);
    }, [formData, isAgreed]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, x_studio_jumlah_karyawan: e.target.value }));
    };

    const validateOnSubmit = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.nama_lengkap) newErrors.nama_lengkap = "Nama lengkap wajib diisi";
        if (!formData.email) newErrors.email = "Email wajib diisi";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format email tidak valid";

        if (!formData.partner_name) newErrors.partner_name = "Nama perusahaan wajib diisi";
        if (!formData.function) newErrors.function = "Jabatan wajib diisi";
        if (!formData.phone) newErrors.phone = "Nomor telepon wajib diisi";
        if (!formData.x_studio_jumlah_karyawan) newErrors.x_studio_jumlah_karyawan = "Pilih jumlah karyawan";

        if (!formData["g-recaptcha-response"]) {
            // Opsional: tampilkan alert jika captcha kosong (meski tombol disabled menahannya)
        }

        if (formData.website) {
            const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            if (!urlPattern.test(formData.website)) {
                newErrors.website = "Format URL tidak valid (contoh: https://solvera.id)";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Submit
    const handleSubmit = async () => {
        if (!validateOnSubmit()) return;
        if (!isAgreed) return;
        if (!formData["g-recaptcha-response"]) return;

        setIsLoading(true);

        try {
            const payload = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                payload.append(key, value);
            });

            const response = await fetch("https://form-solvera.vercel.app/api/submit_consultation", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: payload,
            });

            const contentType = response.headers.get("content-type");
            let body;

            if (contentType && contentType.indexOf("application/json") !== -1) {
                body = await response.json();
            } else {
                const text = await response.text();
                throw new Error("Respons server bukan JSON: " + text);
            }

            if (response.status === 200 && body.success) {
                setModalInfo({
                    title: "Berhasil Terkirim!",
                    message: "Terima kasih! Konsultasi Anda telah berhasil dikirim.",
                    isError: false
                });
                onOpen();

                // Reset Form
                setFormData({
                    nama_lengkap: "",
                    email: "",
                    partner_name: "",
                    function: "",
                    phone: "",
                    website: "",
                    x_studio_jumlah_karyawan: "",
                    description: "",
                    "g-recaptcha-response": ""
                });
                setIsAgreed(false);

                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }

            } else {
                throw new Error(body.message || "Gagal mengirim data.");
            }

        } catch (error: unknown) {
            const errMessage = error instanceof Error ? error.message : String(error);
            console.error("Error:", errMessage);
            setModalInfo({
                title: "Oops... Terjadi Kesalahan",
                message: errMessage || "Terjadi kesalahan koneksi.",
                isError: true
            });
            onOpen();
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
                setFormData(prev => ({ ...prev, "g-recaptcha-response": "" }));
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pb-16">
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        name="nama_lengkap"
                        label="Nama Lengkap"
                        labelPlacement="outside"
                        placeholder="Contoh: Budi Santoso"
                        variant="bordered"
                        radius="sm"
                        value={formData.nama_lengkap}
                        onChange={handleChange}
                        isInvalid={!!errors.nama_lengkap}
                        errorMessage={errors.nama_lengkap}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium",
                        }}
                    />
                    <Input
                        isRequired
                        type="email"
                        name="email"
                        label="Email Bisnis"
                        labelPlacement="outside"
                        placeholder="Contoh: nama@perusahaan.com"
                        variant="bordered"
                        radius="sm"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        name="partner_name"
                        label="Nama Perusahaan"
                        labelPlacement="outside"
                        placeholder="Contoh: PT. Solvera Teknologi"
                        variant="bordered"
                        radius="sm"
                        value={formData.partner_name}
                        onChange={handleChange}
                        isInvalid={!!errors.partner_name}
                        errorMessage={errors.partner_name}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                    <Input
                        isRequired
                        name="function"
                        label="Jabatan"
                        labelPlacement="outside"
                        placeholder="Contoh: Manager IT"
                        variant="bordered"
                        radius="sm"
                        value={formData.function}
                        onChange={handleChange}
                        isInvalid={!!errors.function}
                        errorMessage={errors.function}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        isRequired
                        type="tel"
                        name="phone"
                        label="Nomor Telepon"
                        labelPlacement="outside"
                        placeholder="Contoh: 08123456789"
                        variant="bordered"
                        radius="sm"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                        errorMessage={errors.phone}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                    <Input
                        name="website"
                        label="Website"
                        labelPlacement="outside"
                        placeholder="Contoh: https://solvera.id"
                        variant="bordered"
                        radius="sm"
                        value={formData.website}
                        onChange={handleChange}
                        isInvalid={!!errors.website}
                        errorMessage={errors.website}
                        classNames={{
                            inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                            label: "text-neutral-600 font-medium"
                        }}
                    />
                </div>

                <Select
                    isRequired
                    name="x_studio_jumlah_karyawan"
                    label="Jumlah Karyawan"
                    labelPlacement="outside"
                    placeholder="Pilih jumlah karyawan..."
                    variant="bordered"
                    radius="sm"
                    selectedKeys={formData.x_studio_jumlah_karyawan ? [formData.x_studio_jumlah_karyawan] : []}
                    onChange={handleSelectChange}
                    isInvalid={!!errors.x_studio_jumlah_karyawan}
                    errorMessage={errors.x_studio_jumlah_karyawan}
                    classNames={{
                        trigger: "border-brand-border-subtle bg-[#E7EBFB]/50",
                        label: "text-neutral-600 font-medium"
                    }}
                >
                    <SelectItem key="1 - 25 Karyawan">1 - 25 Karyawan</SelectItem>
                    <SelectItem key="26 - 50 Karyawan">26 - 50 Karyawan</SelectItem>
                    <SelectItem key="51 - 100 Karyawan">51 - 100 Karyawan</SelectItem>
                    <SelectItem key="101 - 300 Karyawan">101 - 300 Karyawan</SelectItem>
                    <SelectItem key="301 - 500 Karyawan">301 - 500 Karyawan</SelectItem>
                    <SelectItem key=">500 Karyawan">&gt;500 Karyawan</SelectItem>
                </Select>

                <Textarea
                    id="kebutuhan-bisnis"
                    name="description"
                    label="Kebutuhan Bisnis"
                    labelPlacement="outside"
                    placeholder="Ceritakan tantangan bisnis atau kebutuhan sistem ERP yang Anda harapkan..."
                    variant="bordered"
                    radius="sm"
                    minRows={6}
                    value={formData.description}
                    onChange={handleChange}
                    classNames={{
                        inputWrapper: "border-brand-border-subtle bg-[#E7EBFB]/50",
                        label: "text-neutral-600 font-medium"
                    }}
                />

                <div className="flex items-center gap-2 mt-2">
                    <Checkbox
                        isSelected={isAgreed}
                        onValueChange={setIsAgreed}
                        size="sm"
                        classNames={{ base: "m-0 p-0" }}
                    />
                    <div className="text-small text-neutral-600">
                        <span
                            className="cursor-pointer select-none"
                            onClick={() => setIsAgreed(!isAgreed)}
                        >
                            Saya menerima{" "}
                        </span>
                        <Link
                            href="/syarat-dan-ketentuan"
                            className="text-brand-primary underline hover:text-brand-primary/80 font-medium"
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Syarat dan Ketentuan
                        </Link>
                    </div>
                </div>

                <div className="mt-2">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIHs0rAAAAAL8Y6D37HOWxFaxqYp2SMzyR1GzL"
                        onChange={onCaptchaChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <Button
                        variant="flat"
                        size="lg"
                        className="bg-[#C0CAF2] text-brand-primary font-medium"
                        startContent={<FaWhatsapp className="text-xl" />}
                        as="a"
                        href="https://wa.me/6281390009640"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tanyakan Langsung
                    </Button>
                    <Button
                        color="primary"
                        size="lg"
                        className="bg-brand-primary font-medium data-[disabled=true]:bg-neutral-300"
                        isLoading={isLoading}
                        onPress={handleSubmit}
                        isDisabled={!isFormValid}
                    >
                        {isLoading ? "Mengirim..." : "Jadwalkan Sesi Anda"}
                    </Button>
                </div>
            </form>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={`flex flex-col gap-1 ${modalInfo.isError ? "text-danger" : "text-success"}`}>
                                {modalInfo.title}
                            </ModalHeader>
                            <ModalBody>
                                <p>{modalInfo.message}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={modalInfo.isError ? "danger" : "primary"} onPress={onClose}>
                                    {modalInfo.isError ? "Tutup" : "OK"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};