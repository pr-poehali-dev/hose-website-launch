import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const documents = [
  {
    title: "Сертификат соответствия ГОСТ",
    description: "Подтверждение соответствия продукции государственным стандартам качества",
  },
  {
    title: "Декларация ТР ТС",
    description: "Декларация соответствия техническим регламентам Таможенного союза",
  },
  {
    title: "Паспорт качества",
    description: "Документация с техническими характеристиками и результатами испытаний",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Сертификаты и документы
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Вся продукция сертифицирована и соответствует российским и
            международным стандартам качества
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Card
              key={doc.title}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <Button variant="ghost" className="text-primary p-0 h-auto mt-auto">
                  <Icon name="Download" size={16} />
                  Скачать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Полный каталог продукции доступен для скачивания в формате PDF
          </p>
          <Button variant="outline">
            <Icon name="FileDown" size={16} />
            Скачать каталог PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
