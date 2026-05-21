import ForkliftRentalForm from '@/components/ForkliftRentalForm';

export default function ForkliftRentalPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Poptávka <span className="text-primary">Vysokozdvižného vozíku</span>
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ForkliftRentalForm />
        </div>
      </section>
    </div>
  );
}
