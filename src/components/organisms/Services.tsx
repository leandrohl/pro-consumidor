import { services } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-primary flex flex-col items-center py-16">
      <h3 className="font-dinamica text-white text-5xl text-center">
        Direito do consumidor sem burocracia e com transparência
      </h3>
      <p className="text-white text-xl pb-16 pt-2 text-center">
        Nós podemos te ajudar em casos de:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-white rounded-xl p-8 shadow-xl"
          >
            <div className="bg-primary rounded-full p-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
            </div>
            <h4 className="text-primary font-bold text-2xl text-center pt-6 pb-4">
              {service.title}
            </h4>
            <p className="text-black text-center text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
