import type { ReactNode } from "react";

export function EngineeringIcon({ kind }: { kind: string }) {
  const paths: Record<string, ReactNode> = {
    Build: <path d="m17 14-10 10 10 10m14-20 10 10-10 10M27 8l-6 32" />,
    AI: <><rect x="12" y="12" width="24" height="24" rx="3" /><path d="M18 5v7m12-7v7M18 36v7m12-7v7M5 18h7m-7 12h7m24-12h7m-7 12h7M18 29l4-10 4 10m-7-3h6m5-7v10" /></>,
    Scale: <path d="m5 16 19-10 19 10-19 10L5 16Zm0 10 19 10 19-10M5 36l19 10 19-10" />,
    Improve: <><path d="M9 36V26m10 10V20m10 16V14m10 22V6" strokeWidth="5" /></>,
    Architecture: <><path d="M19 29c-6-10 3-20 22-22-2 19-12 28-22 22Zm0 0-5 5m0-15-7 2-3 10 12-2m13 3-2 9-10 3 2-12M8 37l-3 6 7-3" /><circle cx="31" cy="17" r="3" /></>,
    Performance: <path d="M3 25h10l5-15 9 29 6-19 4 5h8" />,
  };
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

// Low-resolution geographic outlines projected onto a sphere, rather than a flat dot grid.
const land = [
  [[-168,70],[-130,72],[-110,60],[-80,55],[-56,48],[-80,25],[-98,18],[-118,32],[-145,58]],
  [[-81,12],[-63,10],[-35,-5],[-48,-28],[-69,-56],[-76,-30]],
  [[-54,60],[-28,70],[-32,83],[-58,82]],
  [[-18,36],[9,38],[35,31],[51,11],[39,-12],[20,-35],[9,-27],[-3,4],[-17,14]],
  [[-10,36],[-10,59],[20,72],[50,70],[80,77],[135,65],[178,60],[146,37],[120,20],[105,0],[80,9],[62,26],[40,35],[28,42],[8,43]],
  [[112,-11],[139,-10],[154,-25],[146,-39],[116,-34]],
  [[46,-13],[51,-15],[49,-26],[44,-24]],
];
function onLand(x: number, y: number) {
  return land.some((polygon) => {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [a, b] = polygon[i]; const [c, d] = polygon[j];
      if ((b > y) !== (d > y) && x < (c - a) * (y - b) / (d - b) + a) inside = !inside;
    }
    return inside;
  });
}
export function HeroArt() {
  const points: ReactNode[] = [];
  for (let lat = -78; lat < 84; lat += 2.4) {
    for (let lon = -180; lon < 180; lon += 2.4 / Math.cos(lat * Math.PI / 180)) {
      const phi = lat * Math.PI / 180; const theta = (lon - 12) * Math.PI / 180;
      const depth = Math.cos(phi) * Math.cos(theta);
      if (depth <= 0 || !onLand(lon, lat)) continue;
      const x = 338 + 227 * Math.cos(phi) * Math.sin(theta);
      const y = 250 - 227 * Math.sin(phi);
      points.push(<circle key={`${lat}-${lon}`} cx={x} cy={y} r={.65 + depth * .45} opacity={.15 + depth * .65} />);
    }
  }
  return <svg viewBox="0 0 680 540" className="hero-art" role="img" aria-label="A luminous dotted globe with glass cards representing Build, AI, Scale and Improve">
    <defs>
      <radialGradient id="globe-shade" cx="25%" cy="15%"><stop stopColor="#a8ce70" stopOpacity=".2" /><stop offset=".55" stopColor="#123b2b" stopOpacity=".13" /><stop offset="1" stopColor="#031a13" stopOpacity=".3" /></radialGradient>
      <linearGradient id="globe-rim" x2="1" y2="1"><stop stopColor="#e9f7a8" /><stop offset=".38" stopColor="#67965c" stopOpacity=".25" /><stop offset="1" stopColor="#67965c" stopOpacity="0" /></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a4c97a" stopOpacity=".55" /><stop offset=".3" stopColor="#395e36" stopOpacity=".83" /><stop offset=".75" stopColor="#133c25" stopOpacity=".88" /><stop offset="1" stopColor="#e0f694" /></linearGradient>
      <linearGradient id="glass-edge" x2="1" y2="1"><stop stopColor="#f3ffd0" stopOpacity=".9" /><stop offset=".5" stopColor="#8cae69" stopOpacity=".3" /><stop offset="1" stopColor="#e9ffa9" /></linearGradient>
      <filter id="bloom"><feGaussianBlur stdDeviation="7" /></filter>
      <filter id="card-shadow" x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="-8" dy="15" stdDeviation="13" floodColor="#020e09" floodOpacity=".5" /></filter>
    </defs>
    <circle cx="338" cy="250" r="227" fill="url(#globe-shade)" stroke="url(#globe-rim)" />
    <g fill="#b9db87" transform="rotate(-14 338 250)">{points}</g>
    <path d="M67 379C-18 285 559 24 644 130c32 40-58 116-152 164" fill="none" stroke="#cce79b" strokeOpacity=".35" />
    {[{ x: 443, y: 122, label: "Improve" }, { x: 321, y: 148, label: "Scale" }, { x: 198, y: 181, label: "AI" }, { x: 88, y: 241, label: "Build" }].map(({ x, y, label }) => <g key={label} transform={`translate(${x} ${y}) skewY(9)`}>
      <rect width="147" height="191" rx="17" fill="url(#glass)" stroke="url(#glass-edge)" strokeWidth="1.4" filter="url(#card-shadow)" />
      <svg x="48" y="52" width="52" height="52" color="#d4e89b"><EngineeringIcon kind={label} /></svg>
      <text x="74" y="132" textAnchor="middle" fill="#e3edc3" fontFamily="Arial, sans-serif" fontSize="16">{label}</text>
    </g>)}
    <path d="M644 130C742 259 56 535 25 402c-4-18 12-41 42-64" fill="none" stroke="#d7eca4" strokeWidth="1.2" />
    {[{ x: 46, y: 428 }, { x: 615, y: 232 }].map(({ x, y }) => <g key={x}><circle cx={x} cy={y} r="12" fill="#e7ffa4" filter="url(#bloom)" /><circle cx={x} cy={y} r="3" fill="#f5ffd4" /></g>)}
  </svg>;
}
