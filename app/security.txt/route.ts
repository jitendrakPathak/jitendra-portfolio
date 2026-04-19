export const dynamic = "force-static";

export async function GET() {
  return new Response(
    [
      "Contact: https://github.com/jitendrakPathak",
      "Preferred-Languages: en",
      "Policy: /SECURITY.md",
      "Canonical: /security.txt",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
