import React from 'react';
import { Star, ShieldCheck, Award, Heart, Users, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000"
            alt="Майстерність"
            className="w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-ivory px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 tracking-wider uppercase leading-tight">
            Наша <span className="text-gold italic underline decoration-1 underline-offset-8">Спадщина</span>
          </h1>
          <p className="text-lg md:text-xl font-lato max-w-2xl mx-auto text-gray-200 tracking-[0.2em] font-light uppercase leading-relaxed">
            Визначаємо досконалість у дизайні меблів з 1998 року.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-[0.3em]">Наша Історія</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-deep-slate leading-tight uppercase tracking-wider">
              Від маленької майстерні до елітного салону
            </h3>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed tracking-wide text-lg">
              <p>
                Заснований в історичному серці Кам'янця-Подільського, "Вернісаж" починався як сімейна майстерня, присвячена реставрації антикваріату. Наша пристрасть до дерева, тканини та позачасового дизайну швидко переросла у щось набагато більше.
              </p>
              <p>
                Сьогодні ми є провідним меблевим салоном у регіоні, куруючи найкращі колекції від міжнародних дизайнерів, зберігаючи при цьому наше ремісниче коріння. Кожен виріб у нашому каталозі обраний з тією ж увагою до деталей, яка керувала нашою найпершою реставрацією.
              </p>
              <p>
                Наша місія проста: допомогти вам перетворити ваш будинок на шедевр. Ми віримо, що справжня розкіш полягає в ідеальному балансі комфорту, якості та художнього самовираження.
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-gold/10 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
              alt="Майстер за роботою" 
              className="w-full h-full object-cover shadow-2xl grayscale-[20%] transition-all duration-700"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-deep-slate py-24 text-ivory overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6">Наша Філософія</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 uppercase tracking-widest">Принципи Майстерності</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Star className="text-gold" size={40} />, title: "Ексклюзивність", desc: "Ми пропонуємо лімітовані серії та індивідуальні вироби, які ви не знайдете більше ніде у світі." },
              { icon: <ShieldCheck className="text-gold" size={40} />, title: "Цілісність", desc: "Чесність у матеріалах та прозорість нашого процесу. Якщо це не ідеально, це не Вернісаж." },
              { icon: <Compass className="text-gold" size={40} />, title: "Бачення", desc: "Завжди дивлячись у майбутнє на нові тренди, поважаючи позачасові традиції класичного дизайну." }
            ].map((value, i) => (
              <div
                key={i}
                className="space-y-6 text-center md:text-left group"
              >
                <div className="mx-auto md:mx-0 p-4 border border-gold/20 w-fit group-hover:bg-gold transition-colors duration-500 group-hover:text-deep-slate">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-widest font-playfair group-hover:text-gold transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-loose tracking-wide">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Users className="mx-auto text-gold mb-4" />, value: "25+", label: "Майстрів-червонодеревників" },
            { icon: <Award className="mx-auto text-gold mb-4" />, value: "15", label: "Нагород за дизайн" },
            { icon: <Heart className="mx-auto text-gold mb-4" />, value: "5000+", label: "Щасливих клієнтів" },
            { icon: <Compass className="mx-auto text-gold mb-4" />, value: "25", label: "Років досвіду" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-gold flex justify-center">{stat.icon}</div>
              <h5 className="text-4xl font-playfair font-bold text-deep-slate tracking-tighter">{stat.value}</h5>
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-ivory border border-gold p-12 md:p-20 text-center space-y-10 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-deep-slate uppercase tracking-wider leading-tight">
            Готові змінити <br /> <span className="text-gold italic">Свій Простір?</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm max-w-xl mx-auto font-light leading-relaxed">
            Наші дизайнери інтер'єру готові до приватних консультацій, щоб допомогти вам обрати ідеальні меблі для вашого дому.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link to="/contacts" className="px-10 py-5 bg-deep-slate text-ivory text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-lg">
              Записатися на консультацію
            </Link>
            <Link to="/catalog" className="px-10 py-5 border border-gold text-deep-slate text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-lg">
              Вивчити колекцію
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
