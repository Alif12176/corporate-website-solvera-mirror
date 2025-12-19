import React from "react";
import Image from "next/image";
import { Disclosure } from "@/features/layout/components/Disclosure";
import { Button } from "@/features/layout/components/Button";
import { FAQ } from "../data/product";

interface Props {
  faqs: FAQ[];
}

export const ProductFAQ = ({ faqs }: Props) => {
  return (
    <div className="md:px-20 px-4 py-10 flex md:flex-row flex-col gap-12 max-w-7xl mx-auto">
      <div className="md:w-1/2">
        <div className="sticky top-14 self-start flex flex-col gap-8">
          <div className="flex justify-center">
            <Image
              src="/images/faq.png"
              alt="faq"
              className="object-contain w-[400px] h-[282px]"
              width={400}
              height={282}
            />
          </div>

          <div className="space-y-4">
            <p className="text-heading tagline-md font-semibold">FAQ</p>
            <h2 className="text-brand-primary">Pertanyaan Umum</h2>
            <p className="text-medium">
              Jika pertanyaan Anda belum terjawab di sini, silakan hubungi tim
              dukungan kami untuk mendapatkan bantuan lebih lanjut.
            </p>
          </div>

          <div>
            <Button
              as="a"
              href="https://wa.me/62xxxxxxxx" // Ganti dengan nomor asli
              target="_blank"
              color="primary"
              radius="normal"
              className="flex gap-3 w-fit">
              <Image
                src="/icons/WhatsappLogo.svg"
                alt="wa"
                height={24}
                width={24}
              />
              Tanyakan Langsung
            </Button>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 space-y-4">
        {faqs.map((f, index) => (
          <Disclosure key={index} title={f.question} content={f.answer} />
        ))}
      </div>
    </div>
  );
};
