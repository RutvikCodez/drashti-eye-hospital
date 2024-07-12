import Link from "next/link";
import React from "react";

type cardDataProps = {
  title: string;
  description: string;
  icon: React.JSX.Element;
  link: string;
};

const ServiceCard = ({
  description,
  icon,
  link,
  title,
  ...props
}: cardDataProps) => {
  return (
    <div {...props} className="p-10 flex flex-col gap-10 border-r border-color-2 justify-center items-center">
      {icon}
      <div className="flex flex-col gap-5">
      <h4 className="text-size-4 leading-accent-3 text-color-1 font-semibold text-center">
        {title}
      </h4>
      <p className="text-color-2 text-size-3 leading-accent-2">{description}</p>
      </div>
      <Link href={link} className="underline font-semibold">
        Details
      </Link>
    </div>
  );
};

export default ServiceCard;
