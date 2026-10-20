import type { ReactNode } from "react";

export default function PageMotion({ children }: { children: ReactNode }) {
  return <div className="app-motion-root">{children}</div>;
}
