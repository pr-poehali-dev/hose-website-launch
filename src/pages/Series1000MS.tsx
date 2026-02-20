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
  { name: "1000MS", label: "стандартный морозостойкий" },
  { name: "1000MSF", label: "пищевой" },
  { name: "1000MSFA", label: "пищевой антистатичный" },
  { name: "1000MSA", label: "антистатичный" },
];

const sizes = [
  { id: 12, od: 18, wall: 3, bend: 32, weight: 0.2, length: 50 },
  { id: 16, od: 22, wall: 3, bend: 32, weight: 0.31, length: 30 },
  { id: 19, od: 25, wall: 3, bend: 45, weight: 0.31, length: 30 },
  { id: 25, od: 32, wall: 3.5, bend: 55, weight: 0.5, length: 30 },
  { id: 32, od: 41, wall: 4.5, bend: 65, weight: 0.72, length: 30 },
  { id: 38, od: 48, wall: 5, bend: 80, weight: 0.9, length: 30 },
  { id: 40, od: 50, wall: 5, bend: 85, weight: 0.95, length: 25 },
  { id: 50, od: 59, wall: 4.5, bend: 105, weight: 1.15, length: 25 },
  { id: 64, od: 76, wall: 6, bend: 140, weight: 1.7, length: 20 },
  { id: 76, od: 88, wall: 6, bend: 160, weight: 2.1, length: 20 },
  { id: 80, od: 92, wall: 6, bend: 170, weight: 2.2, length: 20 },
  { id: 90, od: 102, wall: 6, bend: 190, weight: 2.5, length: 20 },
  { id: 102, od: 116, wall: 7, bend: 220, weight: 3.1, length: 20 },
];

const features = [
  { icon: "Shield", text: "Цельный монолит без стыков и соединений" },
  { icon: "Infinity", text: "Невозможно сломать при изгибе" },
  { icon: "Sun", text: "Защита от УФ и старения" },
  { icon: "Layers", text: "Гладкая внутренняя поверхность" },
  { icon: "Snowflake", text: "Морозостойкость до -40\u00B0C" },
];

const applications = [
  "Пищевая промышленность",
  "Молочное производство",
  "Пивоварение",
  "Виноделие",
  "Химическая промышленность",
  "Фармацевтика",
  "Откачка жидкостей",
];

const Series1000MS = () => {
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
              <span className="text-foreground">Серия 1000MS</span>
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
              Серия 1000MS
            </h1>
            <p className="text-lg text-foreground/80 mb-2">
              Рукава ПВХ с металло-спиралью (вакуумные напорно-всасывающие)
            </p>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Цельноэкструдированные прозрачные рукава из ПВХ со встроенной
              спиралью из оцинкованной антикоррозийной проволоки. Серия 1000MS —
              морозостойкие вакуумные рукава для перекачки пищевых продуктов,
              химических веществ, масел, суспензий и гранул.
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
                  Цельноэкструдированные прозрачные рукава из ПВХ со встроенной
                  спиралью из оцинкованной антикоррозийной проволоки.
                  Предназначены для перекачки пищевых продуктов, химических
                  веществ, масел, суспензий и гранул. Производятся из 100%
                  первичных гранул ПВХ Elastic на территории России.
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
                      -40°C ... +60°C
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
                      12–102 мм
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
                      ТУ 22.21.29-001-48076490-2022
                    </p>
                  </Card>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="text-foreground font-medium">
                      ПВХ Elastic (100% первичные гранулы)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Армирование</span>
                    <span className="text-foreground font-medium">
                      Стальная оцинкованная спираль
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Цвет</span>
                    <span className="text-foreground font-medium">
                      Прозрачный
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
                    <TableHead>Толщина стенки мм</TableHead>
                    <TableHead>Мин. радиус изгиба мм</TableHead>
                    <TableHead>Вес кг/м</TableHead>
                    <TableHead>Длина рулона м</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizes.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.id}</TableCell>
                      <TableCell>{s.od}</TableCell>
                      <TableCell>{s.wall}</TableCell>
                      <TableCell>{s.bend}</TableCell>
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

export default Series1000MS;
