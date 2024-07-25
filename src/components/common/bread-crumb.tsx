import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const BreadCrumb = ({ title, subtitle }: Props) => {
  return (
    <section className="flex items-center justify-center pt-28 pb-10 flex-col space-y-4">
      <h4 className="text-paragraph text-base">{subtitle}</h4>
      <h1 className="text-5xl font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
        {title}
      </h1>
    </section>
  );
};

export default BreadCrumb;
