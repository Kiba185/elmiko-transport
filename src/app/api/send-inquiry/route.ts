import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      name, 
      company, 
      email, 
      phone, 
      loading, 
      unloading, 
      cargoType, 
      weight, 
      trailerType, 
      isWaste, 
      description 
    } = data;

    if (!name || !email || !phone || !loading || !unloading || !cargoType || !weight || !trailerType) {
      return NextResponse.json({ error: 'Chybí povinná pole' }, { status: 400 });
    }

    const subject = `Nová poptávka přepravy od: ${name}`;
    
    const text = `
Nová poptávka přepravy:

KONTAKTNÍ ÚDAJE:
Jméno: ${name}
Firma: ${company || 'Nevyplněno'}
E-mail: ${email}
Telefon: ${phone}

DETAILY PŘEPRAVY:
Místo nakládky: ${loading}
Místo vykládky: ${unloading}
Typ zboží: ${cargoType}
Hmotnost (t): ${weight}
Typ návěsu: ${trailerType}
Odpad k vyvezení: ${isWaste ? 'Ano' : 'Ne'}

Doplňující informace:
${description || 'Nevyplněno'}
    `;

    const html = `
<h2>Nová poptávka přepravy</h2>

<h3>Kontaktní údaje:</h3>
<ul>
  <li><strong>Jméno:</strong> ${name}</li>
  <li><strong>Firma:</strong> ${company || 'Nevyplněno'}</li>
  <li><strong>E-mail:</strong> ${email}</li>
  <li><strong>Telefon:</strong> ${phone}</li>
</ul>

<h3>Detaily přepravy:</h3>
<ul>
  <li><strong>Místo nakládky:</strong> ${loading}</li>
  <li><strong>Místo vykládky:</strong> ${unloading}</li>
  <li><strong>Typ zboží:</strong> ${cargoType}</li>
  <li><strong>Hmotnost (t):</strong> ${weight}</li>
  <li><strong>Typ návěsu:</strong> ${trailerType}</li>
  <li><strong>Odpad k vyvezení:</strong> ${isWaste ? 'Ano' : 'Ne'}</li>
</ul>

<h3>Doplňující informace:</h3>
<p>${description ? description.replace(/\\n/g, '<br>') : 'Nevyplněno'}</p>
    `;

    const result = await sendEmail({ subject, text, html });

    if (result.success) {
      return NextResponse.json({ message: 'Poptávka úspěšně odeslána' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Chyba při odesílání e-mailu' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Chyba serveru' }, { status: 500 });
  }
}
