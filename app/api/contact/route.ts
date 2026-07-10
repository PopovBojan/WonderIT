import { NextResponse } from "next/server";

const WP_API_URL =
  "https://wonderit-wp-wordpress.server.wonderit.io/wp-json/wonderit/v1/send-email";

export const dynamic = "force-dynamic";

function getContactApiKey() {
  // Bracket access avoids Next.js inlining this as undefined at Docker build time.
  return process.env["WONDERIT_CONTACT_API_KEY"]?.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = getContactApiKey();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (apiKey) {
      headers["X-WonderIT-API-Key"] = apiKey;
    } else {
      console.error(
        "WONDERIT_CONTACT_API_KEY is not set in the server environment."
      );
    }

    const wpResponse = await fetch(WP_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const wpData = await wpResponse.json().catch(() => null);

    if (!wpResponse.ok) {
      console.error("WordPress API Error:", wpData);

      if (wpResponse.status === 401) {
        return NextResponse.json(
          {
            error: !apiKey
              ? "Contact form is not configured on the server. Set WONDERIT_CONTACT_API_KEY in CapRover and redeploy."
              : "Contact form API key was rejected by WordPress. Ensure the CapRover value matches WONDERIT_CONTACT_API_KEY in your WordPress code.",
          },
          { status: 401 }
        );
      }

      return NextResponse.json(
        {
          error:
            wpData?.message ||
            wpData?.error ||
            "Failed to submit message to WordPress.",
        },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
