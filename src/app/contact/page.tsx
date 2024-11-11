// src/app/contact/page.tsx

"use client";

import { useState } from 'react';
import { Button, Flex, Text, Icon, Input } from '@/once-ui/components';
import styles from './contact.module.scss';
import { Textarea } from '@/once-ui/components/TextArea';
import { contact, person } from '../resources';

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Limpiar errores al cambiar el valor
        setErrors({
            ...errors,
            [e.target.name]: undefined,
        });
    };

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'El asunto es requerido.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido.';
        }
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                throw new Error('Error en el envío del formulario');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={styles.contactContainer}
        >
            <h1 className={styles.heading}> {contact.title} </h1>
            <p className={styles.subheading}>
                {contact.description}
            </p>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <Input
                    id="name"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    hasPrefix={<Icon name="user" size="s" />}
                />

                <Input
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    hasPrefix={<Icon name="email" size="s" />}
                />

                <Input
                    id="subject"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    hasPrefix={<Icon name="subject" size="s" />}
                />

                <Textarea
                    id="message"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    lines={5}
                    hasPrefix={<Icon name="subject" size="s" />}
                />

                <Button
                    type="submit"
                    variant="primary"
                    size="m"
                    className={styles.submitButton}
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                    <p className={styles.successMessage}>Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'error' && (
                    <p className={styles.errorMessage}>Oops! Something went wrong. Please try again later.</p>
                )}
            </form>

            <div className={styles.contactInfo}>
                <Icon
                    name="email"
                    size="m"
                    className={styles.contactIcon}
                    aria-hidden="true"
                />
                <a href="mailto:businessleorubiano@gmail.com" className={styles.contactLink}>
                    {person.email}
                </a>
            </div>
        </Flex>
    );
};

export default ContactMe;
