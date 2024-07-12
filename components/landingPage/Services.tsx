import React from "react";
import Search from "@/public/static/svgs/search.svg";
import ContactLens from "@/public/static/svgs/contactlens.svg";
import EyeDrop from "@/public/static/svgs/eyedrop.svg";
import Lens from "@/public/static/svgs/lens.svg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const cardData = [
    {
      icon: <Search />,
      title: "Comprehensive Eye Exams",
      description:
        "We stick to a complete and full oculat examination process with every patient, every time.",
      link: "#",
    },
    {
      icon: <Lens />,
      title: "Complete Optical Services",
      description:
        "Provided is a huge spectr of services, including hand-picked designer frames and glasses.",
      link: "#",
    },
    {
      icon: <ContactLens />,
      title: "Contact Lens Examination",
      description:
        "Effective and immediate assistance with getting the perfect pair of high quality eye lens.",
      link: "#",
    },
    {
      icon: <EyeDrop />,
      title: "Urgent Eye Care Solution",
      description:
        "Itchy red eyes? Had an accident? Slept in your contacts last night? We will fix everything!",
      link: "#",
    },
  ];
  return (
    <section className="max-w-7xl flex mx-auto flex-col gap-10">
      <div className="flex flex-col gap-12 text-center">
        <h2 className="text-color-1 text-size-2 font-light leading-accent-1">
          Full Scope Optometric Services
        </h2>
        <p className="text-color-2 text-size-3 leading-accent-2">
          We treat our patients with the most careful and individual approach,
          stylish eye-wear and latest innovations in contact lenses in a relaxed
          and friendly environment.
        </p>
      </div>
      <div className="grid grid-cols-4">
        {cardData.map((item, index) => (
          <ServiceCard
            description={item.description}
            icon={item.icon}
            link={item.link}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
