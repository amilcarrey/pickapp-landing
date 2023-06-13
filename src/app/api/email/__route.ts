import { NewClientTemplate } from '@/components/emails/new-client';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
   try {
      console.log(resend)
      const data = await resend.sendEmail({
         from: 'no-reply@amilcarrey.ar',
         to: 'amilcarrey.ar@gmail.com',
         subject: "Nuevo interesado!",
         react: NewClientTemplate({ email: "test@test.com" }),
      });
      console.log(data);

      return NextResponse.json(data);
   }
   catch (error) {
      return NextResponse.json({ error });
   }
}
