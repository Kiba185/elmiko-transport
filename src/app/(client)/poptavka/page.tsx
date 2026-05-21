'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function InquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      loading: (form.elements.namedItem('loading') as HTMLInputElement).value,
      unloading: (form.elements.namedItem('unloading') as HTMLInputElement).value,
      cargoType: (form.elements.namedItem('cargoType') as HTMLInputElement).value,
      weight: (form.elements.namedItem('weight') as HTMLInputElement).value,
      trailerType: (form.elements.namedItem('trailerType') as HTMLSelectElement).value,
      isWaste: (form.elements.namedItem('isWaste') as HTMLInputElement).checked,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement)?.value || '',
    };

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Došlo k chybě při odesílání poptávky. Zkuste to prosím znovu.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Došlo k chybě při odesílání poptávky. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Nezávazná <span className="text-primary">Poptávka</span></h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Vyplňte prosím níže uvedený formulář. Naši dispečeři se vám ozvou s cenovou nabídkou v co nejkratším možném čase.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12">
            
            {isSuccess && (
              <div className="mb-8 p-4 bg-green-900/30 border border-green-500 text-green-400 font-bold uppercase tracking-wider text-center">
                Poptávka byla úspěšně odeslána. Brzy se vám ozveme.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Section 1: Kontaktní údaje */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border text-primary uppercase tracking-wider">Kontaktní údaje</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase">Jméno a příjmení *</label>
                    <input required type="text" id="name" name="name" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-muted-foreground uppercase">Firma</label>
                    <input type="text" id="company" name="company" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase">E-mail *</label>
                    <input required type="email" id="email" name="email" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground uppercase">Telefon *</label>
                    <input required type="tel" id="phone" name="phone" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>

              {/* Section 2: Detaily přepravy */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border text-primary uppercase tracking-wider">Detaily přepravy</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="loading" className="text-sm font-medium text-muted-foreground uppercase">Místo nakládky *</label>
                    <input required type="text" id="loading" name="loading" placeholder="Město, PSČ, Země" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="unloading" className="text-sm font-medium text-muted-foreground uppercase">Místo vykládky *</label>
                    <input required type="text" id="unloading" name="unloading" placeholder="Město, PSČ, Země" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cargoType" className="text-sm font-medium text-muted-foreground uppercase">Typ zboží *</label>
                    <input required type="text" id="cargoType" name="cargoType" placeholder="Např. palety, stavební materiál" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="weight" className="text-sm font-medium text-muted-foreground uppercase">Hmotnost (v tunách) *</label>
                    <input required type="number" step="0.1" id="weight" name="weight" placeholder="Např. 24" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="trailerType" className="text-sm font-medium text-muted-foreground uppercase">Typ návěsu *</label>
                    <select required id="trailerType" name="trailerType" className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Vyberte typ návěsu</option>
                      <option value="plachta">Plachta</option>
                      <option value="posuvny">Posuvný návěs (Walking floor)</option>
                      <option value="bocni">Boční nakládání</option>
                      <option value="jiny">Jiný / Nevím</option>
                    </select>
                  </div>
                </div>

                {/* Waste Checkbox */}
                <div className="flex items-center gap-3 mt-6 p-4 border border-border bg-zinc-900">
                  <input 
                    type="checkbox" 
                    id="isWaste" 
                    name="isWaste"
                    className="w-5 h-5 accent-primary bg-zinc-800 border-border focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="isWaste" className="text-sm font-bold text-white uppercase tracking-wider cursor-pointer">
                    Jedná se o odpad k vyvezení
                  </label>
                </div>

                <div className="space-y-2 mt-6">
                  <label htmlFor="description" className="text-sm font-medium text-muted-foreground uppercase">Doplňující informace</label>
                  <textarea id="description" name="description" rows={4} placeholder="Jakékoliv další detaily o nákladu..." className="w-full bg-zinc-900 border border-border p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-border">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 text-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílám...' : (
                    <>
                      Odeslat poptávku
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
