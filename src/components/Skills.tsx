import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolioData';
import { Code2, Database, Wrench, Layout } from 'lucide-react';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'backend':
        return <Code2 className="w-6 h-6" />;
      case 'frontend':
        return <Layout className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'tools':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'backend':
        return 'Backend';
      case 'frontend':
        return 'Frontend';
      case 'database':
        return 'Base de Données';
      case 'tools':
        return 'Outils & Méthodes';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'backend':
        return 'from-blue-500 to-blue-600';
      case 'frontend':
        return 'from-orange-500 to-orange-600';
      case 'database':
        return 'from-green-500 to-green-600';
      case 'tools':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const categories = ['backend', 'frontend', 'database', 'tools'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              return (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg text-white`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {getCategoryTitle(category)}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-500 delay-${index * 100}`}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">Projets</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Années d'Études</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Personnes Impactées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
