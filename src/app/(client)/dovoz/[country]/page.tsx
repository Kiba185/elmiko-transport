import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';

// Simplified mapping of country slugs to their display names
const countries: Record<string, string> = {
  nemecko: 'Německo',
  rakousko: 'Rakousko',
  polsko: 'Polsko',
  slovensko: 'Slovensko',
  italie: 'Itálie',
  francie: 'Francie',
  spanelsko: 'Španělsko',
  madarsko: 'Maďarsko',
  rumunsko: 'Rumunsko',
  nizozemsko: 'Nizozemsko',
  belgie: 'Belgie',
};

// Next.js 15 requires params to be awaited
export default async function CountryTransportPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const resolvedParams = await params;
  const countrySlug = resolvedParams.country.toLowerCase();
  const countryName = countries[countrySlug];

  if (!countryName) {
    notFound();
  }

  // Pre-fill the form loading place via query param (optional improvement, we will just link there for now)
  const inquiryUrl = `/poptavka?loadingCountry=${countryName}`;

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Dovoz z destinace: <span className="text-primary">{countryName}</span>
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Spolehlivý import a export: {countryName}</h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Zajišťujeme pravidelné a expresní přepravy na trase <strong>{countryName} &harr; Česká republika</strong>. 
              Díky našemu modernímu vozovému parku a zkušeným řidičům garantujeme včasné a bezpečné dodání vašeho zboží.
              Specializujeme se na celovozové zásilky (FTL), dokládky (LTL), expresní přepravy i převoz nebezpečného nákladu (ADR) a odpadu.
            </p>

            <div className="bg-zinc-900 border border-border p-6 mb-10 text-left">
              <h3 className="text-xl font-bold mb-4 uppercase text-primary border-b border-border pb-2">Proč s námi dovážet z {countryName}?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><ArrowRight className="h-5 w-5 text-primary shrink-0"/> Pravidelné linky a flexibilní plánování</li>
                <li className="flex items-center gap-3"><ArrowRight className="h-5 w-5 text-primary shrink-0"/> Vozidla vybavená GPS pro sledování nákladu</li>
                <li className="flex items-center gap-3"><ArrowRight className="h-5 w-5 text-primary shrink-0"/> Široký výběr návěsů (plachta, posuvná podlaha, boční nakládání)</li>
                <li className="flex items-center gap-3"><ArrowRight className="h-5 w-5 text-primary shrink-0"/> Vyřízení veškerých povolení včetně převozu odpadů</li>
              </ul>
            </div>

            <Link 
              href={inquiryUrl} 
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:shadow-[0_0_30px_rgba(217,4,41,0.5)]"
            >
              Nezávazná poptávka přepravy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
