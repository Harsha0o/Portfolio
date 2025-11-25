import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    console.log('API Route hit');
    console.log('Resend Key present:', !!process.env.RESEND_API_KEY);
    console.log('Recipient:', process.env.RECIPIENT_EMAIL || 'harshavardhanyempally302@gmail.com');

    try {
        const { name, email, message } = await request.json();
        console.log('Form data received:', { name, email, messageLength: message?.length });

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact the administrator.' },
                { status: 500 }
            );
        }

        // Initialize Resend with API key
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend's verified sender
            to: 'hv7958045@gmail.com', // MUST match your Resend account email in free tier
            replyTo: email, // User's email for easy reply
            subject: `New Portfolio Contact from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> ${email}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #555;">Message:</h3>
                        <p style="background-color: #fff; padding: 15px; border-left: 4px solid #f59e0b; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br>')}
                        </p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
                        <p>This email was sent from your portfolio contact form.</p>
                        <p>You can reply directly to this email to respond to ${name}.</p>
                    </div>
                </div>
            `,
        });

        console.log('Resend response:', data);

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}
