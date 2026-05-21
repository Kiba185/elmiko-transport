import { Truck, Package, Forklift, Map, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Naše <span className="text-primary">Služby</span></h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-zinc-800 border border-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 bg-primary p-3">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 uppercase">Mezinárodní a vnitrostátní kamionová doprava</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Zajišťujeme kompletní spediční služby pro vozové zásilky (FTL) i dokládky (LTL) po celé Evropě. Spolupracujeme s prověřenými dopravci, jejichž flotila splňuje nejpřísnější normy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Plachtové návěsy, mrazírenské a chladírenské vozy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Přeprava nebezpečných věcí (ADR)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Walking floor návěsy pro sypké materiály</span>
                </li>
              </ul>
              <Link href="/poptavka" className="text-primary font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Poptat přepravu &rarr;
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-zinc-800 border border-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-primary p-3">
                  <Package className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 uppercase">Expresní dodávky a Solo vozidla</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Pro urgentní zásilky nebo menší objemy zboží nabízíme rychlou a flexibilní přepravu pomocí našich dodávek a "solo" vozidel. Ideální pro just-in-time dodávky.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Dodání do 24 hodin ve vybraných destinacích</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Plachtové i skříňové dodávky (až 10 palet)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Vozidla s hydraulickým čelem</span>
                </li>
              </ul>
              <Link href="/poptavka" className="text-primary font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Poptat expresní doručení &rarr;
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-zinc-800 border border-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 bg-primary p-3">
                  <Forklift className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 uppercase">Pronájem a manipulace VZV</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Poskytujeme krátkodobý i dlouhodobý pronájem vysokozdvižných vozíků. Zajišťujeme také profesionální manipulaci s vaším zbožím našimi zkušenými operátory.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Elektrické i dieselové VZV</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Servis a údržba v ceně pronájmu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Nakládka a vykládka na stavbách či v areálech</span>
                </li>
              </ul>
              <Link href="/poptavka" className="text-primary font-bold uppercase tracking-wider hover:underline flex items-center gap-2">
                Poptat techniku &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
