import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Camera, Music, Film, Bot } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Me Contacter
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Restons en Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Je suis actuellement à la recherche d'un stage PFA de 2-3 mois à partir de juillet 2025.
                N'hésitez pas à me contacter pour discuter d'opportunités ou simplement pour échanger.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:Kenzaamoura20@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">Kenzaamoura20@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+212689148167"
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Téléphone</p>
                    <p className="text-gray-600 dark:text-gray-300">+212 689 148 167</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Localisation</p>
                    <p className="text-gray-600 dark:text-gray-300">Agadir, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/akmeonuzraa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 dark:bg-gray-700 rounded-xl hover:scale-110 transition-transform"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#contact"
                  className="p-4 bg-blue-600 rounded-xl hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Centres d'Intérêt</h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 rounded-xl">
                    <Camera className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-300">Photo</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl">
                    <Music className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-300">Musique</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-xl">
                    <Film className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-300">Cinéma</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-xl">
                    <Bot className="w-8 h-8 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-300">Robot</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200 text-center">
                    Message envoyé avec succès!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg text-red-800 dark:text-red-200 text-center">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
