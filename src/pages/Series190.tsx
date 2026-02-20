import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const subcategories = [
  { name: "180", label: "рабочее давление 4 Атм" },
  { name: "186", label: "рабочее давление 6 Атм" },
  { name: "190", label: "рабочее давление 10–16 Атм" },
];

const sizes = [
  { id: 25, width: 42, wp: 10, bp: 30, weight: 0.12, length: 100 },
  { id: 32, width: 54, wp: 10, bp: 30, weight: 0.16, length: 100 },
  { id: 38, width: 62, wp: 10, bp: 30, weight: 0.2, length: 100 },
  { id: 50, width: 82, wp: 10, bp: 30, weight: 0.28, length: 50 },
  { id: 65, width: 105, wp: 10, bp: 30, weight: 0.38, length: 50 },
  { id: 75, width: 120, wp: 10, bp: 30, weight: 0.45, length: 50 },
  { id: 100, width: 160, wp: 10, bp: 30, weight: 0.65, length: 50 },
  { id: 125, width: 200, wp: 10, bp: 30, weight: 0.85, length: 50 },
  { id: 150, width: 240, wp: 10, bp: 30, weight: 1.1, length: 50 },
  { id: 200, width: 320, wp: 10, bp: 30, weight: 1.55, length: 30 },
  { id: 250, width: 400, wp: 10, bp: 30, weight: 2.0, length: 30 },
];

const features = [
  { icon: "Package", text: "Плоская конструкция — компактное хранение" },
  { icon: "Shield", text: "Износостойкий внутренний слой" },
  { icon: "Zap", text: "Минимальная электропроводность" },
  { icon: "Snowflake", text: "Морозостойкость до -40\u00B0C" },
  { icon: "Grip", text: "Ребристая наружная поверхность" },
  { icon: "Truck", text: "Простота транспортировки" },
];

const applications = [
  "Полив и орошение",
  "Подача удобрений и пестицидов",
  "Перекачка бензина и топлива",
  "Водоснабжение",
  "Химическая промышленность",
  "Пожаротушение",
];

const Series190 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <section className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">
                Главная
              </Link>
              <Icon name="ChevronRight" size={14} />
              <Link
                to="/#catalog"
                className="hover:text-foreground transition-colors"
              >
                Каталог
              </Link>
              <Icon name="ChevronRight" size={14} />
              <span className="text-foreground">Серия 190</span>
            </nav>

            <Link
              to="/#catalog"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к каталогу
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {subcategories.map((sub) => (
                <Badge key={sub.name} variant="secondary">
                  {sub.name} — {sub.label}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Серия 190
            </h1>
            <p className="text-lg text-foreground/80 mb-2">
              Рукава LayFlat (плоскосворачиваемые)
            </p>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Плоскосворачиваемые напорные рукава из композита ПВХ, ТПУ и
              каучука. Армированы высокопрочной полиэфирной нитью. Предназначены
              для подачи воды, удобрений, химикатов, бензина. Серия 190 —
              высокое давление 10 Атм.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Описание
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Плоскосворачиваемые напорные рукава из композита ПВХ, ТПУ и
                  каучука. Армированы многоплёточным полиэфирным кордом для
                  высокой прочности при минимальном весе. Ребристая наружная
                  поверхность обеспечивает дополнительную защиту от истирания.
                  Идеальны для временных и стационарных систем подачи жидкостей.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Преимущества
                </h3>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon
                          name={f.icon}
                          size={16}
                          className="text-primary"
                        />
                      </div>
                      <span className="text-foreground/80">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Технические характеристики
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        name="Thermometer"
                        size={18}
                        className="text-primary"
                      />
                      <span className="text-sm text-muted-foreground">
                        Температура
                      </span>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      -40°C ... +80°C
                    </p>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Gauge" size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Давление
                      </span>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      до 10 Атм
                    </p>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Circle" size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Диаметр
                      </span>
                    </div>
                    <p className="text-xl font-bold text-foreground">
                      25–250 мм
                    </p>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        name="FileCheck"
                        size={18}
                        className="text-primary"
                      />
                      <span className="text-sm text-muted-foreground">
                        Стандарт
                      </span>
                    </div>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      ТУ, сертифицировано
                    </p>
                  </Card>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="text-foreground font-medium">
                      Композит ПВХ + ТПУ + каучук
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Армирование</span>
                    <span className="text-foreground font-medium">
                      Многоплёточный полиэфирный корд
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Поверхность</span>
                    <span className="text-foreground font-medium">
                      Ребристая
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Производство</span>
                    <span className="text-foreground font-medium">Россия</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Таблица размеров
            </h2>
            <div className="rounded-lg border bg-background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Внутр. Ø мм</TableHead>
                    <TableHead>Ширина в сложенном виде мм</TableHead>
                    <TableHead>Рабочее давление Атм</TableHead>
                    <TableHead>Разрывное давление Атм</TableHead>
                    <TableHead>Вес кг/м</TableHead>
                    <TableHead>Длина рулона м</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizes.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.id}</TableCell>
                      <TableCell>{s.width}</TableCell>
                      <TableCell>{s.wp}</TableCell>
                      <TableCell>{s.bp}</TableCell>
                      <TableCell>{s.weight}</TableCell>
                      <TableCell>{s.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Области применения
            </h2>
            <div className="flex flex-wrap gap-3">
              {applications.map((app) => (
                <Badge
                  key={app}
                  variant="outline"
                  className="text-sm px-4 py-2"
                >
                  {app}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Нужна консультация по подбору?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Наши специалисты помогут подобрать оптимальный рукав для ваших
                задач. Оставьте заявку или позвоните нам.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#request">
                  <Button size="lg">
                    <Icon name="FileText" size={18} />
                    Оставить заявку
                  </Button>
                </Link>
                <a href="tel:+79529304408">
                  <Button variant="outline" size="lg">
                    <Icon name="Phone" size={18} />
                    +7 952 930-44-08
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Series190;
