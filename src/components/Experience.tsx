import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experiences } from '../data/portfolioData';
import { Briefcase, Heart, GraduationCap } from 'lucide-react';

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6" />;
      case 'volunteer':
        return <Heart className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-blue-600';
      case 'volunteer':
        return 'from-orange-500 to-orange-600';
      case 'education':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Parcours
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-12"></div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-green-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`p-3 bg-gradient-to-r ${getColor(exp.type)} rounded-lg text-white`}>
                          {getIcon(exp.type)}
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-semibold">
                        {exp.period}
                      </p>

                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className={`text-blue-600 dark:text-blue-400 mt-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                              •
                            </span>
                            <span className="flex-1">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getColor(exp.type)} border-4 border-white dark:border-gray-800`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
