'use client';
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-inherit">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-current border-t-transparent rounded-full animate-spin opacity-40" />
        <p className="text-xs opacity-40 tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  );
}

