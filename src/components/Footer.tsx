import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Kenza Amoura</h3>
            <p className="text-gray-400 leading-relaxed">
              Développeuse Full Stack passionnée par la création de solutions web innovantes et l'impact social.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation Rapide</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Compétences
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Restons Connectés</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/akmeonuzraa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Kenzaamoura20@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Disponible pour un stage PFA<br />
              Juillet - Septembre 2025
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kenza Amoura. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> à Agadir
          </p>
        </div>
      </div>
    </footer>
  );
}
