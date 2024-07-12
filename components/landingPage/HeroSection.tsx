"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const slides = [
    { url: "/static/images/heroImage1.jpg", title: "Immediate Medical Advice" },
    {
      url: "/static/images/heroImage2.jpg",
      title: "Professional Optometric Help",
    },
    {
      url: "/static/images/heroImage3.jpg",
      title: "Impeccable Medicinal Services",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[90%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="h-[90vh] bg-white">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.10 }}
                transition={{ duration: 2 }}
                className="relative w-full h-full"
              >
                <Image alt={`carousel image ${i + 1}`} src={slide.url} fill />
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </motion.div>
              <div className="absolute top-0 left-20 right-0 bottom-0 w-full h-full flex flex-col justify-center items-start gap-10">
                <motion.div
                  initial={{ opacity: 0, x: 400 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="font-extralight max-w-sm flex flex-col gap-3"
                >
                  <h1 className="text-size-1 leading-tight">{slide.title}</h1>
                  <p className="text-lg">Complete Optical Services</p>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button className="font-semibold px-20 py-8 bg-color-1 rounded-accent-1 text-xl">
                    Make an Appointment
                  </Button>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroSection;