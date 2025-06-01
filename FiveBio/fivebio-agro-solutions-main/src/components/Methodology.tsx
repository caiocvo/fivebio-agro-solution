import {
  Search,
  FlaskConical,
  FileText,
  Settings,
  GraduationCap,
} from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="text-green-600" size={32} />,
      title: "Diagnóstico Inicial",
      description:
        "Avaliação da situação da propriedade e identificação de problemas relacionados à produção de bioinsumos e manejo agrícola.",
    },
    {
      icon: <FlaskConical className="text-blue-600" size={32} />,
      title: "Coleta e Análise de Amostras",
      description:
        "Envio de amostras de bioinsumos para análise laboratorial no Cebio, garantindo a verificação da qualidade e segurança dos produtos.",
    },
    {
      icon: <FileText className="text-green-600" size={32} />,
      title: "Elaboração de Planos de Ação",
      description:
        "Desenvolvimento de soluções personalizadas para cada produtor, considerando as especificidades da propriedade e dos sistemas produtivos.",
    },
    {
      icon: <Settings className="text-blue-600" size={32} />,
      title: "Implementação e Monitoramento",
      description:
        "Acompanhamento das ações recomendadas e ajustes conforme necessário para garantir a eficácia das soluções adotadas.",
    },
    {
      icon: <GraduationCap className="text-green-600" size={32} />,
      title: "Treinamento e Capacitação",
      description:
        "Oferta de treinamentos para os produtores e suas equipes, assegurando a correta aplicação das técnicas recomendadas.",
    },
  ];

  return (
    <section id="methodology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-green-600">Metodologia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abordagem técnica e cientificamente embasada seguindo processo
            estruturado de consultoria para atender nossos clientes.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-blue-600 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center flex-col lg:flex-row"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-full lg:w-5/12 lg:pr-8 text-left">
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="mr-4">{step.icon}</div>
                          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-full lg:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full lg:w-5/12"></div>
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-full lg:w-5/12 lg:pl-8 text-right">
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-row-reverse items-center mb-4">
                          <div className="ml-4">{step.icon}</div>
                          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
