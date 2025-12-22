import Image from "next/image";
import { Button } from "@/features/layout/components/Button";
import Link from "next/link";

interface Props {
  image: any;
  title: string;
  subtitle?: string;
}

export const Hero = ({ image, title, subtitle }: Props) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src={image}
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 mt-[72px]">
        <div className="max-w-5xl text-center text-white space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="font-medium leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/90">
                {subtitle}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="animate-in delay-200">
            <Button variant="default" as={Link} size="lg" href="/minta-demo" className="px-6 py-2 rounded-md mr-4">
              Jadwalkan Demo
            </Button><Button variant="alternative" as={Link} size="lg" href="/hubungi-kami" className="px-6 py-2 rounded-md">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
