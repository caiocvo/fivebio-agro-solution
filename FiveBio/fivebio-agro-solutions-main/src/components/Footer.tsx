import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="text-green-500 mr-2" size={28} />
              <h3 className="text-2xl font-bold">FiveBio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em bioinsumos e consultoria agropecuária,
              comprometidos com a sustentabilidade e excelência técnica.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Consultoria em Bioinsumos</li>
              <li>Controle de Contaminação</li>
              <li>Análises Laboratoriais</li>
              <li>Produtos Biológicos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(38) 99140-5407</li>
              <li>Atendimento Nacional</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FiveBio. Todos os direitos reservados. | Soluções
            sustentáveis para o agronegócio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
