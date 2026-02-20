import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PenTool, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/db';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000"
            alt="Розкішний інтер'єр"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center text-ivory px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 tracking-wider uppercase leading-tight">
            Мистецтво <span className="text-gold italic">Життя</span>
          </h1>
          <p className="text-lg md:text-xl font-lato max-w-2xl mx-auto mb-10 text-gray-200 tracking-[0.15em] font-light leading-relaxed uppercase">
            Вишукана колекція меблів, створена вручну для вашого ідеального дому.
          </p>
          <div>
            <Link
              to="/catalog"
              className="inline-flex items-center px-10 py-5 bg-gold text-deep-slate font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 transform hover:scale-105 shadow-xl group"
            >
              Відкрити Колекцію
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories Preview */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-[0.3em] mb-4">Категорії</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-deep-slate leading-tight">
              Вибір <br /> Наших Найкращих Просторів
            </h3>
          </div>
          <Link to="/catalog" className="text-deep-slate hover:text-gold font-bold tracking-widest uppercase text-sm inline-flex items-center group border-b-2 border-gold pb-1 transition-all duration-300">
            Переглянути Всі Категорії
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="relative group overflow-hidden h-[500px] cursor-pointer"
              variants={itemVariants}
            >
              <img
                src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1556228453-efd6c1ff04f6' : '1493663284031-b7e3aefcae8e'}?auto=format&fit=crop&q=80&w=800`}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h4 className="text-2xl font-playfair font-bold text-white mb-2 uppercase tracking-widest group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </h4>
                <Link to={`/catalog?category=${cat.name}`} className="text-gold text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 inline-flex items-center">
                  Купити Зараз <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="bg-deep-slate py-24 text-ivory"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-white/80 uppercase tracking-[0.3em] font-semibold text-sm mb-6">Наша Експертиза</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">Створюємо Досконалість з 1998 року</h3>
            <p className="text-white/70 font-light leading-relaxed tracking-wide">
              Ми віримо, що меблі — це більше, ніж просто предмети в кімнаті. Це вираження вашої особистості, свідок моментів вашого життя та спадщина для поколінь.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
            variants={containerVariants}
          >
            {[
              { icon: <Star className="mx-auto text-white mb-6" size={40} />, title: "Преміальна Якість", desc: "Використовуємо найкращі матеріали з усього світу." },
              { icon: <PenTool className="mx-auto text-white mb-6" size={40} />, title: "Індивідуальний Дизайн", desc: "Вироби на замовлення, адаптовані до вашого бачення." },
              { icon: <ShieldCheck className="mx-auto text-white mb-6" size={40} />, title: "Довічна Гарантія", desc: "Впевненість у майстерності, що триває все життя." },
              { icon: <Clock className="mx-auto text-white mb-6" size={40} />, title: "Швидка Доставка", desc: "Преміальний сервіс прямо до ваших дверей." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <div className="text-gold">{feature.icon}</div>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4 font-playfair text-white">{feature.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
