import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "О компании", href: "#about" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Контакты", href: "#contacts" },
  { label: "Оставить заявку", href: "#request" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <span className="text-xl font-bold tracking-tight">RUHOSE</span>
            <p className="mt-3 text-sm text-background/60 leading-relaxed max-w-xs">
              Российский производитель промышленных рукавов и шлангов из ПВХ,
              ТПУ и TPE
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
              Навигация
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
              Контакты
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-background/60">
              <a
                href="tel:+79529304408"
                className="hover:text-background transition-colors"
              >
                +7 952 930-44-08
              </a>
              <a
                href="tel:+74950573840"
                className="hover:text-background transition-colors"
              >
                +7 495 057-38-4
              </a>
              <a
                href="mailto:sale@holzerflexo.com"
                className="hover:text-background transition-colors"
              >
                sale@holzerflexo.com
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <p className="text-xs text-background/40 text-center">
          &copy; 2025&ndash;2026 RUHOSE. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
