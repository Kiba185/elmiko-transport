import Link from 'next/link';
import { Target, Shield, Clock, Globe } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">O společnosti <span className="text-primary">Elmiko</span></h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Spolehlivý partner v logistice od roku 2010</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Elmiko Transport vzniklo s jasnou vizí: poskytovat bezkompromisní kvalitu a spolehlivost v mezinárodní i vnitrostátní dopravě. Fungujeme jako stabilní a dynamická spediční společnost. Dokážeme propojit zákazníky s rozsáhlou sítí prověřených dopravců, se kterými dlouhodobě spolupracujeme.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Naším cílem není jen převézt náklad z bodu A do bodu B. Jsme strategickým partnerem pro naše klienty, kterým pomáháme optimalizovat logistické procesy. Pro zajištění hladkého provozu našich klientů přímo pronajímáme vysokozdvižné vozíky. Zakládáme si na transparentnosti, férovém jednání a individuálním přístupu.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-4xl font-black text-white mb-1">15+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Let na trhu</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-4xl font-black text-white mb-1">10k+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Úspěšných přeprav</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] bg-zinc-800 border border-border">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight">Naše <span className="text-primary">Hodnoty</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
              <Shield className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Spolehlivost</h3>
              <p className="text-muted-foreground">Dodržujeme termíny a garantujeme bezpečnost vašeho nákladu za všech okolností.</p>
            </div>
            
            <div className="bg-background p-8 border border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
              <Clock className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Rychlost</h3>
              <p className="text-muted-foreground">Optimalizujeme trasy a procesy pro maximální efektivitu a včasné doručení.</p>
            </div>
            
            <div className="bg-background p-8 border border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
              <Target className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Přesnost</h3>
              <p className="text-muted-foreground">Moderní telematika nám umožňuje sledovat náklad s přesností na metry.</p>
            </div>
            
            <div className="bg-background p-8 border border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
              <Globe className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Dosah</h3>
              <p className="text-muted-foreground">Zajišťujeme přepravu po celé Evropě díky silné síti partnerů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-6 uppercase tracking-tight">Odkud <span className="text-primary">Dovážíme</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Specializujeme se na import z celé Evropy. Klikněte na vybranou zemi na mapě nebo v seznamu pro zobrazení detailů a odeslání nezávazné poptávky.
          </p>
          
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
}
