export const metadata = {
  title: "Vibe Template Repo",
  description: "A portable starter for AI-assisted web apps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", margin: 0 }}>
        <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
