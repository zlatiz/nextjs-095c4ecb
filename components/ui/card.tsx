import React from "react";

export interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export default function Card({ title, children }: CardProps): JSX.Element {
  return (
    <article className="tile" aria-labelledby={title}>
      <h3 style={{margin: 0, fontSize: 18}}>{title}</h3>
      <div style={{flex: 1}}>{children}</div>
    </article>
  );
}
