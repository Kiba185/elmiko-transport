import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter">
            ELMIKO <span className="text-primary">TRANSPORT</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/o-nas" className="transition-colors hover:text-primary">O nás</Link>
          <Link href="/sluzby" className="transition-colors hover:text-primary">Služby</Link>
          <Link href="/vozovy-park" className="transition-colors hover:text-primary">Vozový park</Link>
          <Link href="/kontakt" className="transition-colors hover:text-primary">Kontakt</Link>
          <Link 
            href="/poptavka" 
            className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors uppercase font-bold text-xs tracking-wider"
          >
            Nezávazná poptávka
          </Link>
        </nav>

        <button className="md:hidden p-2 text-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
