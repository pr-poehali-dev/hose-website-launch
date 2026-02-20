import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    icon: "CircleDot",
    series: "Серия 1000MS",
    name: "Рукава ПВХ с металло-спиралью",
    description:
      "Прозрачные армированные рукава для перекачки пищевых продуктов, химических веществ и масел.",
    features: [
      "Прозрачный ПВХ",
      "Стальная спираль",
      "от -20\u00B0C до +60\u00B0C",
      "\u00D8 от 19 до 200мм",
    ],
  },
  {
    icon: "Layers",
    series: "Серия 2000",
    name: "Напорные рукава с текстильным каркасом",
    description:
      "Рукава для подачи воды, воздуха и химических растворов под давлением.",
    features: [
      "Давление до 20 бар",
      "Текстильное армирование",
      "Маслобензостойкие",
      "\u00D8 от 6 до 100мм",
    ],
  },
  {
    icon: "Milk",
    series: "Серия 3000",
    name: "Трубки пищевые из ПВХ",
    description:
      "Трубки для молока, пива, напитков и пищевого производства с допуском.",
    features: [
      "Пищевой допуск",
      "Без запаха и вкуса",
      "Прозрачные",
      "\u00D8 от 4 до 50мм",
    ],
  },
  {
    icon: "Wind",
    series: "Серия 4000",
    name: "Трубки пневматические",
    description:
      "Трубки из ТПУ и ПВХ для пневматических систем и компрессоров.",
    features: [
      "Из ТПУ и ПВХ",
      "Высокое давление",
      "Гибкие",
      "\u00D8 от 4 до 16мм",
    ],
  },
];

const CatalogSection = () => {
  return (
    <section id="catalog" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Каталог продукции
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент промышленных рукавов и трубок для различных
            отраслей и условий эксплуатации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Card
              key={product.series}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={product.icon}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {product.series}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
                    >
                      <Icon
                        name="Check"
                        size={12}
                        className="text-primary"
                      />
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
