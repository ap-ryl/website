import { InfraIcons } from "./Icons";
import type { FloatingIcon } from "@/types/landing";

interface FloatingIconsProps {
  icons: FloatingIcon[];
}

export function FloatingIcons({ icons }: FloatingIconsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => {
        const IconComponent = InfraIcons[icon.type as keyof typeof InfraIcons];
        if (!IconComponent) return null;

        return (
          <div
            key={icon.id}
            className="absolute transition-all duration-300 ease-out flex items-center justify-center animate-infra-pop"
            style={{
              left: icon.x,
              top: icon.y,
              width: "160px",
              height: "160px",
              transform: `translate(-50%, -50%) rotate(${icon.rotation}deg) scale(${icon.scale})`,
              opacity: icon.opacity,
            }}
          >
            <div className="w-full h-full p-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <IconComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
}
