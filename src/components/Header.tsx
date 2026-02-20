import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "О компании", href: "#about" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tight text-foreground"
        >
          RUHOSE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => handleNavClick("#request")}
          >
            Оставить заявку
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full"
              onClick={() => handleNavClick("#request")}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
