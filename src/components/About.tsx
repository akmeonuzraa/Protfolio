import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Passionnée par l'Innovation Technologique
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Étudiante passionnée en 4ème année de génie informatique, spécialisée dans le développement web full-stack.
                Animée par la curiosité et l'esprit d'initiative, j'ai contribué à des projets de monitoring réseau et de
                développement web, combinant compétences techniques solides et approche collaborative.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Membre active d'ENACTUS, je m'engage dans des projets à impact social tout en développant mes compétences
                en gestion de projet et travail d'équipe.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Objectif 2025
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Rejoindre une entreprise innovante pour un stage PFA (juillet-septembre 2025) afin de mettre en
                  pratique mes connaissances en développement web et contribuer à des projets concrets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Empathie</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Écoute active et intelligence émotionnelle
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Collaboration</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Travail d'équipe et communication
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Résolution créative de problèmes
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Adaptabilité</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Apprentissage continu et flexibilité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
