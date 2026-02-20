import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Factory",
    title: "Собственное производство",
    description: "Полный цикл изготовления на территории России",
  },
  {
    icon: "ShieldCheck",
    title: "Контроль качества",
    description: "Входной контроль сырья и проверка каждой партии",
  },
  {
    icon: "Truck",
    title: "Доставка по РФ",
    description: "Отгрузка со складов в Москве и Новосибирске",
  },
  {
    icon: "Headphones",
    title: "Техподдержка 24/7",
    description: "Консультации по подбору и эксплуатации",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            О компании
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-foreground">RUHOSE</span> — российский производитель промышленных
              рукавов и шлангов. Мы специализируемся на выпуске продукции из
              ПВХ, ТПУ и TPE для различных отраслей промышленности.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Компания обеспечивает полный цикл — от разработки и производства
              до доставки конечному потребителю. Мы работаем как с крупными
              промышленными предприятиями, так и с малым бизнесом.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наши офисы и склады расположены в Новосибирске и Москве, что
              позволяет оперативно обслуживать клиентов по всей территории
              Российской Федерации.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={adv.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {adv.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
