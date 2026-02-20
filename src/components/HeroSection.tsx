import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "50+", label: "типоразмеров", icon: "Ruler" },
  { value: "8", label: "отраслей", icon: "Factory" },
  { value: "2", label: "офиса в РФ", icon: "MapPin" },
  { value: "ГОСТ", label: "сертифицировано", icon: "ShieldCheck" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/87f9bc30-f9e7-4dd5-8a4f-55bc75e3c57e/files/357daf2c-0204-4139-bba5-6cb06b828c91.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Промышленные рукава и шланги от российского производителя
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Производим рукава и трубки из ПВХ, ТПУ и TPE для пищевой,
            химической, нефтегазовой и других отраслей промышленности
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base"
              onClick={() => scrollTo("#catalog")}
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => scrollTo("#request")}
            >
              Получить прайс-лист
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon name={stat.icon} size={20} className="text-white/60" />
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
