import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded-lg">
      {children}
    </button>
  );
}
