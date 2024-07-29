import { ReactNode } from "react";

export default function Card({ children }: { children?: ReactNode }) {
  return (
    <div className="card card-bordered shadow-md">
      <div className="card-body">{children}</div>
    </div>
  );
}
