import Image from "next/image";

interface Props {
  image: any;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const Hero = ({ image, title, subtitle, action }: Props) => {
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
            <h1 className="font-bold leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/90">
                {subtitle}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div>{action}</div>
        </div>
      </div>
    </div>
  );
}
