// src/app/api/contact/route.ts

import { person } from '@/app/resources';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Configurar el transportador de Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true', // true para 465, false para otros puertos
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Configurar los detalles del correo
        const mailOptions = {
            from: `"${name}" <${email}>`, // Remitente
            to: person.email, // Destinatario
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        };

        console.log(mailOptions);

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Correo enviado exitosamente' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
    }
}
