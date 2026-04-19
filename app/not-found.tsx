import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <h1>Page not found</h1>
      <p>The case you requested does not exist in this portfolio.</p>
      <Link href="/">Return to home</Link>
    </main>
  );
}
