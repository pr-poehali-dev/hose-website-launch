import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const RequestForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="request" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Оставить заявку
            </h2>
            <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
            <p className="mt-4 text-muted-foreground">
              Заполните форму и мы свяжемся с вами в течение 30 минут
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Имя <span className="text-destructive">*</span>
                </label>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Телефон <span className="text-destructive">*</span>
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="email@company.ru"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Компания
                </label>
                <Input
                  name="company"
                  placeholder="Название компании"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Сообщение
              </label>
              <Textarea
                name="message"
                placeholder="Опишите ваши потребности: тип рукава, диаметр, рабочая среда, объём..."
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base" disabled={loading}>
              {loading ? (
                <Icon name="Loader2" size={18} className="animate-spin" />
              ) : (
                <Icon name="Send" size={18} />
              )}
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
