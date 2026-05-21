import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone } = data;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Chybí povinná pole' }, { status: 400 });
    }

    const subject = `Nová poptávka pronájmu VZV od: ${name}`;
    
    const text = `
Nová poptávka pronájmu vysokozdvižného vozíku:

Jméno: ${name}
E-mail: ${email}
Telefon: ${phone}
    `;

    const html = `
<h2>Nová poptávka pronájmu VZV</h2>

<ul>
  <li><strong>Jméno:</strong> ${name}</li>
  <li><strong>E-mail:</strong> ${email}</li>
  <li><strong>Telefon:</strong> ${phone}</li>
</ul>
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
