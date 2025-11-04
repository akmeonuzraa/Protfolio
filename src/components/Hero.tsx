import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Développeuse Full Stack Junior';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const current = fullText;

      setText(isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-orange-500 p-1 shadow-2xl animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-blue-600 dark:text-blue-400">
                KA
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Kenza Amoura
          </h1>

          <div className="h-8 md:h-10 mb-6">
            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Étudiante en Génie Informatique | École Polytechnique - Universiapolis
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Agadir, Maroc</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a href="mailto:Kenzaamoura20@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Kenzaamoura20@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a href="tel:+212689148167" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +212 689 148 167
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/akmeonuzraa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-900 dark:text-white" />
            </a>
            <a
              href="#contact"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:Kenzaamoura20@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-orange-600" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Me Contacter
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
}
