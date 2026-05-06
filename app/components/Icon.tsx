import * as React from "react";

const paths: Record<string, string> = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z",
  send: "m22 2-7 20-4-9-9-4zM22 2 11 13",
  swap: "M4 8h14 M15 5l3 3-3 3 M20 16H6 M9 19l-3-3 3-3",
  "trending-up": "M22 7 13.5 15.5 8.5 10.5 2 17 M16 7h6v6",
  tag: "M12.5 2.5A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z",
  bag: "M6 2 3 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5zM3 7h18 M16 11a4 4 0 0 1-8 0",
  menu: "M3 6h18 M3 12h18 M3 18h18",
  qr: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M21 14v3 M14 18v3 M21 21h-3",
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  chevron: "m9 18 6-6-6-6",
  "chevron-left": "m15 18-6-6 6-6",
  "chevron-down": "m6 9 6 6 6-6",
  plus: "M12 5v14 M5 12h14",
  search: "M11 11m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0 M21 21l-4.3-4.3",
  arrowDown: "M12 5v14 M19 12l-7 7-7-7",
  arrowUp: "M12 19V5 M5 12l7-7 7 7",
  arrowRight: "M5 12h14 M13 5l7 7-7 7",
  settings:
    "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2 M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
  sliders: "M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6",
  user:
    "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0",
  card: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z M2 10h20",
  pig: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.7 3.3 2 4.5V19h4v-2h3v2h4v-4c.5-.5 1.1-1.1 1.4-2H21v-4h-2c0-1-.5-2-1-2.5 M2 9v1c0 1.1.9 2 2 2h1 M16 11h.01",
  coffee:
    "M17 8h1a4 4 0 1 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z M6 2v3 M10 2v3 M14 2v3",
  cart: "M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5 M7 13l-1.7 5h13.4 M9 21m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0 M19 21m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
  house: "M3 12 12 3l9 9 M5 10v10h14V10",
  "face-id":
    "M3 7V5a2 2 0 0 1 2-2h2 M17 3h2a2 2 0 0 1 2 2v2 M21 17v2a2 2 0 0 1-2 2h-2 M7 21H5a2 2 0 0 1-2-2v-2 M9 9v1 M15 9v1 M12 9v3 M9 15s1 1.5 3 1.5 3-1.5 3-1.5",
  eye: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  shield:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
  umbrella:
    "M12 2v2 M2 12a10 10 0 0 1 20 0H2z M12 12v8a2 2 0 0 1-4 0",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20",
  calendar:
    "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M3 9h18 M8 3v4 M16 3v4",
  cloud: "M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 0 0 4.5 13a3.5 3.5 0 0 0 0 7z",
  msg: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
  pie:
    "M21 15a9 9 0 1 1-12-8.45 M22 12A10 10 0 0 0 12 2v10z",
};

export type IconName = keyof typeof paths;

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  stroke?: number;
}

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  stroke = 1.6,
}: IconProps) {
  const d = paths[name] ?? "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "0 0 auto" }}
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + seg} />
      ))}
    </svg>
  );
}
