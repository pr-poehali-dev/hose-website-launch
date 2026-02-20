import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import funcUrls from "../../backend/func2url.json";

const stats = [
  { value: "50+", label: "типоразмеров", icon: "Ruler" },
  { value: "8", label: "отраслей", icon: "Factory" },
  { value: "2", label: "офиса в РФ", icon: "MapPin" },
  { value: "ГОСТ", label: "сертифицировано", icon: "ShieldCheck" },
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      message: "Запрос прайс-листа",
    };

    try {
      const res = await fetch(funcUrls["send-telegram"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Запрос отправлен!",
          description: "Прайс-лист будет направлен на вашу почту.",
        });
        setOpen(false);
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить запрос. Позвоните нам напрямую.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Ошибка сети",
        description: "Проверьте подключение к интернету.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                onClick={() => setOpen(true)}
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Получить прайс-лист</DialogTitle>
            <DialogDescription>
              Оставьте контакты — отправим актуальный прайс-лист на почту
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Имя <span className="text-destructive">*</span>
              </label>
              <Input name="name" placeholder="Ваше имя" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Телефон <span className="text-destructive">*</span>
              </label>
              <Input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input name="email" type="email" placeholder="email@company.ru" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Icon name="Loader2" size={18} className="animate-spin" />
              ) : (
                <Icon name="Send" size={18} />
              )}
              Отправить запрос
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
