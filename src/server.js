import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { app } from "./main.ts";

const handler = async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const randId = Math.random().toString(36).substring(7);

  const reqHeaders = {};
  for (const [key, value] of req.headers) {
    reqHeaders[key] = value;
  }
  const tReq = {
    body: await req.json(),
    headers: reqHeaders,
    _request: req,
    randId,
  };

  const payload = await app.router.entry(tReq);
  const { status, headers, body } = payload.serialized;
  return new Response(JSON.stringify(body), {
    status,
    headers: (() => {
      const headersObj = {
        "content-type": "application/json",
      };
      for (const [key, value] of Object.entries(headers)) {
        if (typeof value === "string") {
          headersObj[key] = value;
        }
        if (Array.isArray(value)) {
          headersObj[key] = value.join(",");
        }
      }
      return headersObj;
    })(),
  });
};

serve(handler);
