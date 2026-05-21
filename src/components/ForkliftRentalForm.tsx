'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ForkliftRentalForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    };

    try {
      const response = await fetch('/api/forklift-rental', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        alert('Došlo k chybě při odesílání. Zkuste to prosím znovu.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      alert('Došlo k chybě při odesílání. Zkuste to prosím znovu.');
    } finally {
      if (status !== 'success') {
        setStatus('idle');
      }
    }
  };

  return (
    <div className="bg-zinc-900 border border-border p-8 mt-12">
      <h3 className="text-2xl font-bold uppercase mb-6 text-white border-b border-border pb-4">
        Poptávka pronájmu vysokozdvižného vozíku
      </h3>
      <p className="text-muted-foreground mb-8">
        Máte zájem o pronájem vysokozdvižného vozíku? Vyplňte prosím níže uvedený formulář a my se vám co nejdříve ozveme s nabídkou.
      </p>

      {status === 'success' ? (
        <div className="bg-green-500/20 text-green-400 p-6 border border-green-500/30 text-center font-semibold">
          Vaše poptávka byla úspěšně odeslána. Děkujeme!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Jméno a příjmení</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required 
                className="w-full bg-background border border-border p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Jan Novák"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required 
                className="w-full bg-background border border-border p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="jan.novak@email.cz"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="phone" className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Telefonní číslo</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                required 
                className="w-full bg-background border border-border p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="+420 123 456 789"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="flex items-center justify-center w-full gap-2 bg-primary text-primary-foreground p-4 text-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(217,4,41,0.2)] hover:shadow-[0_0_25px_rgba(217,4,41,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Odesílám...' : 'Odeslat poptávku'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
}
