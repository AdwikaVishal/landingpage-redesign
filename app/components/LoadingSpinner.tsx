'use client';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-400/30 rounded-full animate-spin border-t-cyan-400"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-pink-400/30 rounded-full animate-spin border-t-pink-400" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        <div className="mt-4 text-center font-['Orbitron'] text-cyan-400 glow-text">
          LOADING...
        </div>
      </div>
    </div>
  );
}