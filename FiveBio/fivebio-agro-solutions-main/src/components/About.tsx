import { Users, Target, Award } from "lucide-react";

const About = () => {
  const partners = [
    {
      image: "/images/socios/carlos.jpg",
    },
    {
      image: "/images/socios/guillherme.jpg",
    },
    {
      image: "/images/socios/edson.jpg",
    },
    {
      image: "/images/socios/joao.jpg",
    },
    {
      image: "/images/socios/phillipi.jpg",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-green-600">FiveBio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa composta por cinco profissionais especializados na área de
            bioinsumos e consultoria agropecuária, focada em soluções técnicas
            inovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fornecer soluções técnicas e orientar produtores rurais na
              produção de bioinsumos on farm, visando melhorar a qualidade e
              segurança desses produtos. Atuamos na venda de produtos
              biológicos, manejo de lavouras e pastagens, promovendo práticas
              sustentáveis para otimização da produção agrícola.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Target className="text-green-600" size={24} />
              <span className="font-semibold text-gray-900">
                Objetivos Claros
              </span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Award className="text-blue-600" size={24} />
              <span className="font-semibold text-gray-900">
                Excelência Técnica
              </span>
            </div>
          </div>
          <div>
            <img
              src="/images/socios/solo-beneficios.png"
              alt="Campo sustentável"
              className="rounded-xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Users className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossos Sócios
            </h3>
            <p className="text-gray-600">
              Profissionais especializados comprometidos com a excelência
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.image}
                  alt={`Foto do sócio ${index + 1}`}
                  className="w-[500px] h-[450px] rounded-[10px] mx-auto mb-4 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
