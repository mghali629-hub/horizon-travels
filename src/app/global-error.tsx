'use client';
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-black text-white text-center p-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Critical Application Error</h2>
          <p className="text-sm opacity-60 mb-6">A fatal layout-level error occurred. Please try again.</p>
          <button onClick={() => reset()} className="px-6 py-2 bg-white text-black font-bold rounded-lg text-sm">Reload App</button>
        </div>
      </body>
    </html>
  );
}

