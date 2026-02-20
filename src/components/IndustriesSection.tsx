import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const industries = [
  { name: "Пищевая промышленность", icon: "Milk" },
  { name: "Нефть и газ", icon: "Fuel" },
  { name: "Химическая промышленность", icon: "FlaskConical" },
  { name: "Сельское хозяйство", icon: "Sprout" },
  { name: "Медицина", icon: "Heart" },
  { name: "Пивоварение", icon: "Beer" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Отрасли применения
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Наша продукция используется в ключевых отраслях российской
            промышленности
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <Card
              key={industry.name}
              className="group flex items-center gap-4 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Icon
                  name={industry.icon}
                  size={24}
                  className="text-primary"
                />
              </div>
              <span className="font-medium text-foreground">
                {industry.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
