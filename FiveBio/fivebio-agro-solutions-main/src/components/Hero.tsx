import { ArrowRight, Leaf, Shield, TrendingUp } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bioinsumos <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">On Farm</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Consultoria especializada em produção de bioinsumos e manejo sustentável. 
              Transformamos propriedades rurais com soluções técnicas seguras e eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Solicitar Consultoria
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#services" className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                Nossos Serviços
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Leaf className="mx-auto mb-3 text-green-600" size={32} />
                <p className="text-sm font-medium text-gray-700">Sustentabilidade</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-3 text-blue-600" size={32} />
                <p className="text-sm font-medium text-gray-700">Qualidade</p>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-3 text-green-600" size={32} />
                <p className="text-sm font-medium text-gray-700">Produtividade</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8 animate-fade-in">
            <div className="relative">
              <img alt="Agronegócio sustentável" className="rounded-2xl shadow-2xl w-full h-96 object-cover" src="/lovable-uploads/4a2ca2f5-66c4-4a49-9d60-1deec7b9e869.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;