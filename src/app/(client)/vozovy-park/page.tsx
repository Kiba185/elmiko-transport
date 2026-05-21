'use client';

import { Truck, ChevronDown, Forklift } from 'lucide-react';
import Link from 'next/link';

export default function FleetPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Dostupný <span className="text-primary">Vozový park</span></h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jako stabilní spediční partner disponujeme rozsáhlou sítí prověřených dopravců. 
            Dokážeme pro vás zajistit přesně ten typ návěsu, který váš náklad vyžaduje. 
            Sami navíc provozujeme a pronajímáme vysokozdvižné vozíky.
          </p>
        </div>
      </section>

      {/* Categories / Navigation */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link 
              href="#plachtove"
              className="group bg-zinc-900 border border-border p-6 flex flex-col items-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <Truck className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-center">Plachtové návěsy</h3>
              <ChevronDown className="h-5 w-5 text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
            </Link>
            
            <Link 
              href="#posuvne"
              className="group bg-zinc-900 border border-border p-6 flex flex-col items-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <Truck className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-center">Posuvné podlahy</h3>
              <ChevronDown className="h-5 w-5 text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
            </Link>

            <Link 
              href="#dodavky"
              className="group bg-zinc-900 border border-border p-6 flex flex-col items-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <Truck className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-center">Plachtové dodávky</h3>
              <ChevronDown className="h-5 w-5 text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
            </Link>

            <Link 
              href="#vzv"
              className="group bg-zinc-900 border border-border p-6 flex flex-col items-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <Forklift className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-center">Pronájem VZV</h3>
              <ChevronDown className="h-5 w-5 text-muted-foreground mt-4 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Examples Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-32">
          
          {/* Plachtové návěsy */}
          <div id="plachtove" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-zinc-800 border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase tracking-wider px-3 py-1">Zajišťujeme</div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Plachtové <span className="text-primary">návěsy</span></h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Standardní a nejpoužívanější typ návěsu pro běžné paletové zboží. Nabízíme zajištění klasických i mega návěsů přes naše spolehlivé dopravce.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Kapacita</span>
                    <span className="font-bold">Až 34 palet</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Nosnost</span>
                    <span className="font-bold">24 - 25 tun</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Ideální pro</span>
                    <span className="font-bold text-right">Zboží na paletách, stavebniny,<br/> spotřební zboží</span>
                  </li>
                </ul>
                <Link href="/poptavka?trailerType=plachta" className="text-primary font-bold uppercase tracking-wider hover:underline">
                  Poptat plachtový návěs &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Posuvné návěsy (Walking floor) */}
          <div id="posuvne" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-zinc-800 border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold text-xs uppercase tracking-wider px-3 py-1">Zajišťujeme</div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Posuvné návěsy <span className="text-primary">(Walking floor)</span></h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Speciální návěsy s pohyblivou podlahou, které umožňují automatickou nakládku a vykládku bez nutnosti vysokozdvižného vozíku. Perfektní pro sypké materiály i palety.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Objem</span>
                    <span className="font-bold">Až 90 m³</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Nosnost</span>
                    <span className="font-bold">24 tun</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Ideální pro</span>
                    <span className="font-bold text-right">Zemědělské komodity, biomasu,<br/>odpad, papír</span>
                  </li>
                </ul>
                <Link href="/poptavka?trailerType=posuvny" className="text-primary font-bold uppercase tracking-wider hover:underline">
                  Poptat posuvný návěs &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Plachtové dodávky */}
          <div id="dodavky" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-zinc-800 border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590496793907-471a8ea714f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase tracking-wider px-3 py-1">Zajišťujeme</div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Plachtové <span className="text-primary">dodávky</span></h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Rychlá a flexibilní přeprava menších objemů zboží. Ideální pro expresní doručení na kratší a střední vzdálenosti s garantovaným časem dodání.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Kapacita</span>
                    <span className="font-bold">Až 10 EP</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Ideální pro</span>
                    <span className="font-bold text-right">Expresní zásilky,<br/>menší objemy</span>
                  </li>
                </ul>
                <Link href="/poptavka?trailerType=dodavka" className="text-primary font-bold uppercase tracking-wider hover:underline">
                  Poptat plachtovou dodávku &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* VZV */}
          <div id="vzv" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-zinc-800 border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute top-4 left-4 bg-zinc-900 border border-border text-white font-bold text-xs uppercase tracking-wider px-3 py-1">Vlastní technika</div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Vysokozdvižné <span className="text-primary">vozíky</span></h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Přímo disponujeme flotilou vysokozdvižných vozíků, které nabízíme ke krátkodobému i dlouhodobému pronájmu. Zajišťujeme i manipulaci se zbožím.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Pohon</span>
                    <span className="font-bold">Elektrický / Dieselový</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground uppercase text-sm font-bold">Služby</span>
                    <span className="font-bold text-right">Pronájem, Servis,<br/>Nakládka/Vykládka</span>
                  </li>
                </ul>
                <Link href="/poptavka/vzv" className="text-primary font-bold uppercase tracking-wider hover:underline">
                  Poptat pronájem VZV &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
