import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandEmblem: React.FC<{ className?: string; color?: string }> = ({
  className = "w-9 h-9",
}) => (
  <div className={`relative inline-block shrink-0 ${className}`}>
    <Image
      src="/images/resilience-logo.png"
      alt="Resilience Reading Room Tree & Book Emblem"
      fill
      className="object-contain"
    />
  </div>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  showTagline = true,
  size = "md",
}) => {
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-white" : "text-[#0B1E3D]";
  const secondaryTextColor = isLight ? "text-white/60" : "text-[#202833]/70";

  const sizeConfigs = {
    sm: {
      emblem: "w-7 h-7",
      title: "text-sm tracking-wider",
      tagline: "text-[9px] tracking-[0.2em]",
      gap: "gap-2",
    },
    md: {
      emblem: "w-9 h-9",
      title: "text-base tracking-wider",
      tagline: "text-[10px] tracking-[0.24em]",
      gap: "gap-3",
    },
    lg: {
      emblem: "w-12 h-12",
      title: "text-xl tracking-wider",
      tagline: "text-xs tracking-[0.28em]",
      gap: "gap-3.5",
    },
  };

  const config = sizeConfigs[size];

  return (
    <div className={`inline-flex items-center ${config.gap} select-none ${className}`}>
      <BrandEmblem className={config.emblem} />

      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase ${primaryTextColor} ${config.title} leading-tight`}
        >
          Resilience
        </span>
        <span
          className={`font-sans font-medium uppercase ${secondaryTextColor} ${config.tagline} leading-tight`}
        >
          {showTagline ? "Reading Room" : "Kuravankonam"}
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
