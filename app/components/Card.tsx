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
    <Link href={href} className="card__link">
      <article className={`card ${className}`}>
        {imagePath ? (
          <div className="card__image-container">
            <Image
              src={imagePath}
              alt={typeof title === "string" ? title : "Card image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="card__image"
              priority
            />
            <div className="card__image-overlay" />
          </div>
        ) : (
          icon && <div className="card__icon">{icon}</div>
        )}

        <h2 className="card__title">{title}</h2>
        <p className="card__subtitle">{subtitle}</p>
        {children && <div className="card__content">{children}</div>}

        <div className="card__arrow">
          <ArrowIcon className="card__arrow-icon" />
        </div>
      </article>
    </Link>
  );
}
