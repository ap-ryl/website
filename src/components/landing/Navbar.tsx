import { Logo } from "./Logo";
import type { NavItem } from "@/types/landing";

const NAV_ITEMS: NavItem[] = [
  { label: "Platform", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Documentation", href: "#" },
];

interface NavbarProps {
  isScrolled: boolean;
  onWaitlistClick: () => void;
}

export function Navbar({ isScrolled, onWaitlistClick }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group cursor-pointer">
          <Logo
            size={24}
            className="text-white group-hover:rotate-12 transition-transform duration-500"
          />
          <span className="text-lg font-bold tracking-tight">APRYL</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onWaitlistClick}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
