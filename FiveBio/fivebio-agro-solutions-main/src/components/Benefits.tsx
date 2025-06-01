
import { Award, TrendingUp, Leaf, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="text-green-600" size={48} />,
      title: 'Melhoria na Qualidade dos Bioinsumos',
      description: 'Redução da contaminação microbiológica, garantindo maior eficácia dos insumos utilizados nas lavouras.'
    },
    {
      icon: <TrendingUp className="text-blue-600" size={48} />,
      title: 'Aumento da Produtividade',
      description: 'Otimização do manejo agrícola e redução de perdas causadas por pragas, doenças e deficiências nutricionais.'
    },
    {
      icon: <Leaf className="text-green-600" size={48} />,
      title: 'Sustentabilidade',
      description: 'Uso de produtos biológicos como alternativa aos insumos químicos, reduzindo impactos ambientais e promovendo a saúde do solo.'
    },
    {
      icon: <DollarSign className="text-blue-600" size={48} />,
      title: 'Redução de Custos',
      description: 'Diminuição do uso de agroquímicos e otimização de processos produtivos, resultando em maior rentabilidade para o produtor.'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefícios e <span className="text-green-600">Impactos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A implementação das soluções da FiveBio traz diversos benefícios 
            para os produtores rurais e suas propriedades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Solução Inovadora no Agronegócio</h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            A FiveBio surge como uma solução inovadora no setor agropecuário, oferecendo 
            suporte técnico qualificado e parcerias estratégicas para a melhoria da qualidade 
            dos bioinsumos e da produtividade das propriedades rurais.
          </p>
          <p className="text-base opacity-90">
            Com enfoque na segurança, eficiência e sustentabilidade, nos posicionamos como 
            aliados essenciais para produtores que buscam otimizar seus processos produtivos 
            e adotar práticas agrícolas mais sustentáveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
