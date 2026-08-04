'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#071228] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl font-bold mb-4">
        ✈️
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Flight Clearance Delayed</h2>
      <p className="text-slate-400 text-xs max-w-md mb-6">
        An error occurred while communicating with the global flight inventory server.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors uppercase tracking-wider"
      >
        Re-query Charter Network
      </button>
    </div>
  );
}
