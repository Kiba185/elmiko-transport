import Link from 'next/link';
import { Truck, Package, Forklift, Map } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Placeholder for truck image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            Mezinárodní doprava <br className="hidden md:block" />
            <span className="text-primary">a logistika</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Jsme spolehlivá spediční společnost. Spojujeme zákazníky s ověřenými dopravci a navíc přímo pronajímáme vysokozdvižné vozíky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/poptavka" 
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors border border-primary"
            >
              Nezávazná poptávka
            </Link>
            <Link 
              href="/sluzby" 
              className="bg-transparent text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white/10 transition-colors border border-white"
            >
              Naše služby
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Co nabízíme</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 border border-border group hover:border-primary transition-colors">
              <Truck className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Kamionová doprava</h3>
              <p className="text-muted-foreground">Kompletní zajištění vnitrostátní a mezinárodní přepravy zboží.</p>
            </div>
            
            <div className="bg-card p-8 border border-border group hover:border-primary transition-colors">
              <Package className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-muted-foreground">Spolehlivé dodávky pro menší náklady a expresní doručení.</p>
              <h3 className="text-xl font-bold mb-3 mt-4">Pronájem dodávek</h3>
            </div>
            
            <div className="bg-card p-8 border border-border group hover:border-primary transition-colors">
              <Forklift className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">VZV technika</h3>
              <p className="text-muted-foreground">Pronájem a manipulace s vysokozdvižnými vozíky pro sklady.</p>
            </div>
            
            <div className="bg-card p-8 border border-border group hover:border-primary transition-colors">
              <Map className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Logistika</h3>
              <p className="text-muted-foreground">Optimalizace tras a skladovací kapacity na míru vašemu byznysu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Kde všude <span className="text-primary">dovážíme</span></h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Potřebujete převézt náklad?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Jsme připraveni reagovat okamžitě. Vyplňte náš poptávkový formulář a my se vám ozveme s cenovou nabídkou do 24 hodin.
          </p>
          <Link 
            href="/poptavka" 
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:shadow-[0_0_30px_rgba(217,4,41,0.5)]"
          >
            Spočítat cenu přepravy
          </Link>
        </div>
      </section>
    </div>
  );
}
