import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const documents = [
  {
    title: "Пищевой допуск",
    description: "Экспертное заключение о соответствии продукции для контакта с пищевыми продуктами",
    url: "https://holzerflexo.com/upload/iblock/41b/49x3arwoua9d9qyx7n9hsr4hlgo8pl3p.pdf",
  },
  {
    title: "Сертификат соответствия",
    description: "Подтверждение соответствия продукции государственным стандартам качества",
    url: "https://holzerflexo.com/upload/iblock/238/z6d4uvy0nbiboz2m3qfdqgdmzp4ptf9f.pdf",
  },
  {
    title: "Протокол испытаний",
    description: "Результаты лабораторных испытаний продукции на соответствие нормативам",
    url: "https://holzerflexo.com/upload/iblock/fec/47gy2b7y6vk9gw7si2ax52h878wbkony.pdf",
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
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-primary p-0 h-auto">
                    <Icon name="Download" size={16} />
                    Скачать PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Полный каталог продукции доступен для скачивания в формате PDF
          </p>
          <a href="https://holzerflexo.com/upload/iblock/dfd/lzwongnq0n0iiq80t7jhpk3hrs2x01el.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Icon name="FileDown" size={16} />
              Скачать каталог PDF
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;