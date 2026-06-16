const API_BASE = process.env.DOTNET_API_URL;
const API_KEY = process.env.DOTNET_API_KEY;

export async function POST(request: Request) {
  if (!API_BASE) {
    console.error("[ask] DOTNET_API_URL is not set");
    return Response.json({ error: "API not configured." }, { status: 503 });
  }

  const body = await request.text();

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (API_KEY) headers["x-api-key"] = API_KEY;

  const upstream = await fetch(`${API_BASE}/ask`, {
    method: "POST",
    headers,
    body,
  });

  const data = await upstream.json();
  return Response.json(data, { status: upstream.status });
}
