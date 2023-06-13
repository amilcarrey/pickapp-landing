import { log } from 'console'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
   const { email } = await request.json()

   // const transporter = nodemailer.createTransport({
   //    host: process.env.SMTP_HOST,
   //    port: Number(process.env.SMTP_PORT),
   //    secure: false,
   //    tls: {
   //       ciphers: "SSLv3",
   //       rejectUnauthorized: false,
   //    },
   //    auth: {
   //       user: process.env.SMTP_USER,
   //       pass: process.env.SMTP_PASSWORD,
   //    },
   //    debug: true,
   //    logger: true,
   // })

   // using gmail
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: "amilcarrey.ar@gmail.com",
         pass: process.env.GMAIL_ACCESS_TOKEN,
      },
   })

   const emailObject = {
      from: '"Nuevo cliente interesado!" no-reply@pick-app.com.ar',
      to: "nicolas@pick-app.com.ar",
      subject: "Nuevo cliente interesado!",
      text: `Hay un nuevo cliente interesado en saber mas sobre Pick App! \n\n Email: ${email}`,
   }

   // send email asynchronously
   log('Sending email...')
   log(process.env.GMAIL_ACCESS_TOKEN)
   const result: Response = await new Promise((resolve, reject) => {
      transporter.sendMail(emailObject, (err) => {
         if (err) {
            reject(new Response('Error sending email', { status: 500, statusText: err.message }))
         } else {
            resolve(new Response('Successfully sent email', { status: 250 }))
         }
      })
   })

   transporter.verify(function (error, success) {
      if (error) {
         console.log(error)
      } else {
         console.log(success)
      }
   })

   return result
}