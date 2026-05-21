import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tighter">
            ELMIKO <span className="text-primary">TRANSPORT</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Spolehlivý partner pro mezinárodní kamionovou dopravu a logistická řešení.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Služby</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/sluzby" className="hover:text-primary transition-colors">Kamionová doprava</Link></li>
            <li><Link href="/sluzby" className="hover:text-primary transition-colors">Pronájem dodávek</Link></li>
            <li><Link href="/sluzby" className="hover:text-primary transition-colors">Vysokozdvižné vozíky</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Rychlé odkazy</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/o-nas" className="hover:text-primary transition-colors">O nás</Link></li>
            <li><Link href="/vozovy-park" className="hover:text-primary transition-colors">Vozový park</Link></li>
            <li><Link href="/poptavka" className="hover:text-primary transition-colors">Poptávka</Link></li>
            <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Kontakt</h4>
          <address className="not-italic text-sm text-muted-foreground space-y-2">
            <p>Elmiko trans s.r.o.</p>
            <p>č.p. 229, 763 41 Ludkovice</p>
            <p>Email: <a href="mailto:elmiko.trans@email.cz" className="hover:text-primary transition-colors">elmiko.trans@email.cz</a></p>
            <p>Tel: <a href="tel:+420604651357" className="hover:text-primary transition-colors">+420 604 651 357</a></p>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Elmiko Transport. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
