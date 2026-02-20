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
  { name: "100F", label: "пищевые" },
  { name: "100C", label: "для кислот и щёлочей" },
  { name: "100GP", label: "общего назначения" },
  { name: "100GPAS", label: "антистатичные" },
  { name: "115", label: "для дизеля и бензина" },
];

const sizes = [
  { id: 6, od: 10, wp: 20, bp: 60, weight: 0.08, length: 50 },
  { id: 8, od: 12, wp: 20, bp: 60, weight: 0.1, length: 50 },
  { id: 10, od: 14, wp: 20, bp: 60, weight: 0.14, length: 50 },
  { id: 13, od: 19, wp: 20, bp: 60, weight: 0.2, length: 50 },
  { id: 16, od: 23, wp: 20, bp: 60, weight: 0.27, length: 25 },
  { id: 19, od: 26, wp: 20, bp: 60, weight: 0.35, length: 25 },
  { id: 25, od: 34, wp: 20, bp: 60, weight: 0.52, length: 25 },
  { id: 32, od: 40, wp: 20, bp: 60, weight: 0.68, length: 25 },
  { id: 38, od: 48, wp: 15, bp: 45, weight: 0.85, length: 25 },
  { id: 50, od: 62, wp: 10, bp: 30, weight: 1.2, length: 25 },
];

const features = [
  { icon: "Gauge", text: "Высокое рабочее давление до 20 бар" },
  { icon: "Shield", text: "Трёхкратный запас прочности" },
  { icon: "Fuel", text: "Маслобензостойкость (серия 115)" },
  { icon: "FlaskConical", text: "Химическая стойкость (серия 100C)" },
  { icon: "Apple", text: "Пищевой допуск (серия 100F)" },
  { icon: "Move", text: "Гибкость и износостойкость" },
];

const applications = [
  "Подача воды",
  "Подача воздуха",
  "Химические растворы",
  "Пищевые продукты",
  "Топливо",
  "Пескоструйные аппараты",
  "Пневмосистемы",
];

const Series100 = () => {
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
              <span className="text-foreground">Серия 100</span>
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
              Серия 100
            </h1>
            <p className="text-lg text-foreground/80 mb-2">
              Напорные рукава с текстильным каркасом
            </p>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Напорные рукава из ПВХ с текстильным армированием для
              транспортировки жидкостей и газов под давлением. Широко применяются
              в промышленности, строительстве, сельском хозяйстве.
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
                  Напорные рукава из ПВХ с текстильным полиэфирным каркасом для
                  транспортировки жидкостей и газов под давлением. Универсальное
                  решение для промышленности, строительства и сельского
                  хозяйства. Серия включает пищевые, химостойкие,
                  маслобензостойкие и антистатичные модификации.
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
                      -35°C ... +60°C
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
                      до 20 Атм
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
                      6–50 мм
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
                      ТУ, ГОСТ 18698-79
                    </p>
                  </Card>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="text-foreground font-medium">ПВХ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Армирование</span>
                    <span className="text-foreground font-medium">
                      Текстильный полиэфирный каркас
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Соответствие</span>
                    <span className="text-foreground font-medium">
                      ТУ, ГОСТ 18698-79
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
                    <TableHead>Наруж. Ø мм</TableHead>
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
                      <TableCell>{s.od}</TableCell>
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

export default Series100;
