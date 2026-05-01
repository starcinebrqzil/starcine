import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Tv, 
  Play, 
  Smartphone, 
  Laptop, 
  Gamepad2,
  CreditCard,
  Zap
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5516999494821?text=Olá, quero o teste grátis de 6 horas";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

const IconButton = ({ icon: Icon, colorClass = "text-gold" }: { icon: any; colorClass?: string }) => (
  <div className={`${colorClass} opacity-50`}>
    <Icon size={24} />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black">
      {/* WhatsApp Floating */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-[999] bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(34,197,94,0.5)] cursor-pointer"
      >
        <MessageCircle fill="white" className="text-green-500" size={32} />
      </motion.a>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black italic uppercase tracking-tighter">
            STAR<span className="text-gold">CINE</span>
          </div>
          <a
            href={WHATSAPP_URL}
            className="bg-gold-gradient text-black font-bold px-6 py-2 rounded-full text-xs uppercase hover:opacity-90 transition-opacity"
          >
            Teste Grátis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-[1.1] tracking-tight">
                Sua TV sem <br />
                <span className="text-gold italic">Limites!</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl mb-10 uppercase tracking-[0.2em] font-light max-w-xl mx-auto lg:mx-0">
                Canais, Filmes e Séries. <br />
                <span className="text-white font-bold block mt-2 text-2xl">
                  2 Telas por R$ 29,99/mês.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href={WHATSAPP_URL}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-gradient text-black font-black py-5 px-10 rounded-2xl text-xl uppercase shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  Assinar Agora
                </motion.a>
                <motion.a
                  href={WHATSAPP_URL}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 text-white font-bold py-5 px-8 rounded-2xl text-lg uppercase border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Teste Grátis 6H
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Video Container / Image Frame */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mx-auto w-full max-w-[320px] aspect-[9/16] p-4 bg-zinc-900 border-[8px] border-gold rounded-[48px] shadow-[0_0_50px_rgba(245,158,11,0.4)] overflow-hidden"
            >
              {/* Inner screen content */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-black relative group shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                <iframe
                  className="w-[100%] h-[100%] border-0 scale-[1.3] origin-center"
                  src="https://www.youtube.com/embed/D2poyo-xTLg?autoplay=1&mute=0&loop=1&playlist=D2poyo-xTLg&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&origin=http://localhost:3000"
                  title="StarCine Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Branding overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-center pointer-events-none">
                   <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Experiência Premium</p>
                      <p className="text-sm font-bold uppercase italic text-gold">TV Digital 4K</p>
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Animated decor particles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-gold/10 blur-[120px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">O Melhor <span className="text-gold">Plano</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto" />
          </div>

          <motion.div
            whileHover={{ y: -10 }}
            className="max-w-md mx-auto bg-black border-2 border-gold p-10 rounded-[40px] text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-black px-4 py-1 uppercase rounded-bl-xl">
              Mais Vendido
            </div>
            
            <p className="text-gold font-bold uppercase text-sm mb-4">Assinatura Premium</p>
            <div className="flex items-start justify-center mb-6">
              <span className="text-2xl font-bold mt-2">R$</span>
              <span className="text-7xl font-black italic">29</span>
              <span className="text-2xl font-bold mt-2">,99</span>
              <span className="text-zinc-500 text-sm mt-10 ml-1">/mês</span>
            </div>

            <ul className="text-left space-y-5 mb-10 text-zinc-300">
              {[
                { text: "02 Telas Simultâneas", bold: true },
                { text: "Qualidade 4K e Full HD", bold: false },
                { text: "+60 Mil Filmes e Séries", bold: false },
                { text: "Suporte 24h via WhatsApp", bold: false },
                { text: "Teste Grátis de 6 Horas", bold: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <span className={item.bold ? "font-bold text-white" : ""}>{item.text}</span>
                </li>
              ))}
            </ul>

            <a 
              href={WHATSAPP_URL}
              className="block bg-gold-gradient text-black font-black py-5 rounded-2xl text-xl uppercase shadow-[0_10px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.4)] transition-all"
            >
              Quero Assinar
            </a>
          </motion.div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-20 px-4 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-500 mb-12">Dispositivos Compatíveis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale">
            <div className="flex flex-col items-center gap-3">
              <Tv size={32} />
              <span className="text-xs uppercase font-medium">Smart TV</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Smartphone size={32} />
              <span className="text-xs uppercase font-medium">Celular</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Laptop size={32} />
              <span className="text-xs uppercase font-medium">PC/Laptop</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap size={32} />
              <span className="text-xs uppercase font-medium">TV Box</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Gamepad2 size={32} />
              <span className="text-xs uppercase font-medium">Console</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Play size={32} />
              <span className="text-xs uppercase font-medium">Tablet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black mb-12 uppercase italic text-gold">Depoimentos dos Clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Ricardo S.", text: "Roda liso demais. O plano de 2 telas é ótimo para usar com minha esposa." },
              { name: "Mariana F.", text: "O teste de 6h me convenceu. Recomendo, atendimento nota 10." },
              { name: "André L.", text: "Melhor custo benefício que já assinei. Muito estável e muitos canais." }
            ].map((d, i) => (
              <div key={i}>
                <Card className="hover:border-gold/50 transition-colors h-full">
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-400 text-sm italic mb-4 leading-relaxed">"{d.text}"</p>
                  <p className="text-xs font-bold uppercase text-white">{d.name}</p>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <motion.a 
              href={WHATSAPP_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black font-black px-12 py-5 rounded-full text-lg uppercase border-4 border-gold shadow-2xl"
            >
              Solicitar Teste Grátis
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-4 text-center border-t border-white/10">
        <div className="text-4xl font-black italic uppercase text-white mb-8 tracking-tighter">
          STAR<span className="text-gold">CINE</span>
        </div>
        <div className="flex justify-center gap-8 mb-10">
          <IconButton icon={CreditCard} /> {/* Visa/Master simulation */}
          <IconButton icon={Play} /> {/* Pix simulation */}
          <IconButton icon={Zap} /> {/* Instant */}
        </div>
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em]">&copy; 2024 StarCine - Entretenimento Digital Premium</p>
      </footer>
    </div>
  );
}
