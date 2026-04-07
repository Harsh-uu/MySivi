import type { ReactNode } from "react";

type SectionHeaderProps = {
  tag: string;
  title: ReactNode;
  description: string;
};

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  );
}