import Link from 'next/link';
import { MapPin, Phone, Mail, FileText, CreditCard, MessageCircle, Share2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-primary">Kontaktujte</span> Nás
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Máte dotaz ohledně přepravy nebo pronájmu techniky? Jsme vám plně k dispozici.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="bg-card border border-border p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold uppercase mb-8 border-b border-border pb-4">Firemní údaje</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Sídlo společnosti</h3>
                      <p className="text-muted-foreground">Elmiko trans s.r.o.</p>
                      <p className="text-muted-foreground">č.p. 229, 763 41 Ludkovice</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Fakturační údaje</h3>
                      <p className="text-muted-foreground"><span className="font-semibold text-white">IČ:</span> 07564899</p>
                      <p className="text-muted-foreground"><span className="font-semibold text-white">DIČ:</span> CZ07564899</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telefon</h3>
                      <a href="tel:+420604651357" className="text-muted-foreground hover:text-primary transition-colors">
                        +420 604 651 357
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">E-mail</h3>
                      <a href="mailto:elmiko.trans@email.cz" className="text-muted-foreground hover:text-primary transition-colors">
                        elmiko.trans@email.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CreditCard className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Bankovní spojení</h3>
                      <p className="text-muted-foreground">Č. ú. 977724002/5500 (CZK)</p>
                      <p className="text-muted-foreground">Č. ú. 261497123/0600 (EUR)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Map Placeholder */}
            <div className="flex flex-col gap-8">
              
              {/* Social Media Links */}
              <div className="bg-zinc-900 border border-border p-8 text-center">
                <h2 className="text-2xl font-bold uppercase mb-8">Sledujte nás</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.instagram.com/elmiko_trans/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-card border border-border p-4 hover:border-primary hover:bg-zinc-800 transition-all group"
                  >
                    <MessageCircle className="h-6 w-6 text-zinc-400 group-hover:text-primary transition-colors" />
                    <span className="font-bold uppercase tracking-wider group-hover:text-primary transition-colors">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/ElmikoTrans" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-card border border-border p-4 hover:border-primary hover:bg-zinc-800 transition-all group"
                  >
                    <Share2 className="h-6 w-6 text-zinc-400 group-hover:text-primary transition-colors" />
                    <span className="font-bold uppercase tracking-wider group-hover:text-primary transition-colors">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Inquiry CTA */}
              <div className="bg-primary/10 border border-primary p-8 text-center flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold uppercase mb-4 text-primary">Potřebujete přepravit náklad?</h2>
                <p className="text-muted-foreground mb-6">
                  Vyplňte náš nezávazný poptávkový formulář a my se vám ozveme zpět s řešením na míru.
                </p>
                <Link 
                  href="/poptavka" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(217,4,41,0.2)] hover:shadow-[0_0_25px_rgba(217,4,41,0.5)]"
                >
                  Přejít na poptávku
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
