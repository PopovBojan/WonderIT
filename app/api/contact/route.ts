import { NextResponse } from "next/server";

const WP_API_URL = "https://wonderit-wp-wordpress.server.wonderit.io/wp-json/wonderit/v1/send-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // 2. Resolve API Key
    const apiKey = process.env.WONDERIT_CONTACT_API_KEY;
    if (!apiKey) {
      console.error("Error: WONDERIT_CONTACT_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Internal server configuration error." },
        { status: 500 }
      );
    }

    // 3. Forward request to WordPress Custom REST Endpoint
    const wpResponse = await fetch(WP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WonderIT-API-Key": apiKey,
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const wpData = await wpResponse.json();

    if (!wpResponse.ok) {
      console.error("WordPress API Error:", wpData);
      return NextResponse.json(
        { error: wpData.message || "Failed to submit message to WordPress." },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message. Please try again later." },
      { status: 500 }
    );
  }
}
