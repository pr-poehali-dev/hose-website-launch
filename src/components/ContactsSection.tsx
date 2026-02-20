import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const offices = [
  {
    city: "Новосибирск",
    address: "Толмачевская 43/1",
    phone: "+7 952 930-44-08",
    phoneTel: "+79529304408",
  },
  {
    city: "Москва",
    address: "ул. Дорожная 60Б",
    phone: "+7 495 057-38-4",
    phoneTel: "+74950573840",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Контакты
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {offices.map((office) => (
            <Card
              key={office.city}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="MapPin"
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-muted-foreground">
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon
                      name="Phone"
                      size={18}
                      className="text-primary shrink-0"
                    />
                    <a
                      href={`tel:${office.phoneTel}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3">
            <Icon name="Mail" size={18} className="text-primary" />
            <a
              href="mailto:sale@holzerflexo.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              sale@holzerflexo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
