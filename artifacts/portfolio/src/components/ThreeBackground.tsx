export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, hsl(190 100% 50% / 0.07) 0%, transparent 70%)",
          top: "5%",
          left: "55%",
          animation: "float 9s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, hsl(260 60% 60% / 0.06) 0%, transparent 70%)",
          top: "40%",
          left: "5%",
          animation: "float 11s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, hsl(150 80% 50% / 0.04) 0%, transparent 70%)",
          top: "65%",
          left: "65%",
          animation: "float 13s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />
      {/* Rotating wireframe decoration */}
      <svg
        className="absolute opacity-10"
        style={{
          top: "10%",
          right: "8%",
          width: 200,
          height: 200,
          animation: "spin 20s linear infinite",
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          stroke="hsl(190 100% 50%)"
          strokeWidth="0.8"
          fill="none"
        />
        <polygon
          points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5"
          stroke="hsl(190 100% 50%)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="50" cy="50" r="30" stroke="hsl(190 100% 50%)" strokeWidth="0.4" fill="none" opacity="0.4" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 30 * Math.cos(rad);
          const y = 50 + 30 * Math.sin(rad);
          return (
            <circle key={angle} cx={x} cy={y} r="2" fill="hsl(190 100% 50%)" opacity="0.7" />
          );
        })}
      </svg>
      <svg
        className="absolute opacity-8"
        style={{
          bottom: "15%",
          left: "5%",
          width: 160,
          height: 160,
          animation: "spin 25s linear infinite reverse",
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,10 90,30 90,70 50,90 10,70 10,30"
          stroke="hsl(260 60% 60%)"
          strokeWidth="0.8"
          fill="none"
        />
        <polygon
          points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"
          stroke="hsl(260 60% 60%)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 25 * Math.cos(rad);
          const y = 50 + 25 * Math.sin(rad);
          return (
            <circle key={angle} cx={x} cy={y} r="1.5" fill="hsl(260 60% 60%)" opacity="0.8" />
          );
        })}
      </svg>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
