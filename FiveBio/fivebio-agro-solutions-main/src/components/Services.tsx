import { Microscope, Shield, Handshake, Leaf } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Microscope className="text-green-600" size={48} />,
      title: "Consultoria em Bioinsumos On Farm",
      description:
        "Assistência na produção de bioinsumos diretamente nas propriedades rurais, promovendo técnicas seguras e eficientes para o uso de microrganismos benéficos.",
    },
    {
      icon: <Shield className="text-blue-600" size={48} />,
      title: "Diagnóstico e Controle de Contaminação",
      description:
        "Identificação e solução de problemas recorrentes na produção de bioinsumos, como contaminação por coliformes fecais, garantindo qualidade e segurança.",
    },
    {
      icon: (
        <img
          src="/images/icons/favicon.png"
          alt="Parceria com a Cebio"
          className="w-12 h-12 object-contain rounded-lg"
        />
      ),
      title: "Parceria com a Cebio",
      description:
        "Colaboração estratégica para análises laboratoriais de amostras coletadas nas fazendas, fornecendo recomendações personalizadas aos produtores.",
    },
    {
      icon: <Leaf className="text-blue-600" size={48} />,
      title: "Produtos Biológicos Certificados",
      description:
        "Disponibilização de insumos biológicos das marcas Bayer, Corteva e Syngenta, promovendo práticas mais sustentáveis e seguras.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-green-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções técnicas especializadas para implementação e manutenção de
            sistemas produtivos mais eficientes e sustentáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
