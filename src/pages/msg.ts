export const prerender = false;

import { type APIRoute } from "astro";
export const POST: APIRoute = async ({ request }) => {
    try {
        if (request.headers.get("Content-Type") !== "application/json") {
            return new Response("Invalid request", { status: 400 });
        }

        const msg = (await request.json()) as {
            title?: string;
            text?: string;
            contact?: string;
        };
        if (!msg || !msg.text) {
            return new Response("Invalid request body", { status: 400 });
        }

        const res = await fetch(import.meta.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: msg.title,
                        description: msg.text,
                        footer: msg.contact
                            ? {
                                  text: "👤 " + msg.contact,
                              }
                            : undefined,
                    },
                ],
            }),
        });

        if (res && res.ok) {
            return new Response("Sent!", { status: 200 });
        } else {
            return new Response("Message not sent", { status: 500 });
        }
    } catch (err) {
        console.error(err);
        return new Response("Internal server error", { status: 500 });
    }
};
