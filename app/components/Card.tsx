import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "./icons/ArrowIcon";

interface CardProps {
  title: string | React.ReactNode;
  subtitle: string;
  icon?: string;
  imagePath?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  subtitle,
  icon,
  imagePath,
  href,
  className = "",
  children,
}: CardProps) {
  return (
    <Link href={href}>
      <div
        role="article"
        className={`
          relative p-6 rounded-3xl 
          bg-[#333639] hover:bg-[#3c3f42]
          shadow-lg
          transition-all duration-500 ease-in-out
          group cursor-pointer
          h-full
          ${className}
        `}
      >
        <div className="mb-4">
          {imagePath ? (
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9]">
              <Image
                src={imagePath}
                alt={typeof title === "string" ? title : "Card image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent opacity-20" />
            </div>
          ) : (
            icon && <div className="text-4xl">{icon}</div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-[#888888] mb-4">{subtitle}</p>
        {children}

        <div className="absolute bottom-6 right-6">
          <div
            className="
            w-10 h-10 
            bg-transparent rounded-full 
            border-2 border-white
            flex items-center justify-center
            group-hover:border-[rgb(241,180,62)]
            transition-all duration-500 ease-out
          "
          >
            <ArrowIcon className="w-5 h-5 text-white group-hover:text-[rgb(241,180,62)]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
