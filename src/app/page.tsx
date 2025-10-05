"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Menu, Phone, Search } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import Milestones from "@/components/custom/landing/milestones";
import TopBar from "@/components/custom/landing/topbar";
import Footer from "@/components/custom/landing/footer";

export default function Home() {
  const menuButtons = [
    {
      title: "ABOUT US",
      href: "/",
    },
    {
      title: "IMPACT",
      href: "/",
    },
        {
      title: "GET INVOLVED",
      href: "/",
    },
        {
      title: "STAY INFORMED",
      href: "/",
    },
  ];

  const tabs = [
    {
      title: "WHO WE ARE",
      value: "who",
    },
    {
      title: "LEADERSHIP",
      value: "leadership",
    },
    {
      title: "OUR VOLUNTEER TEAM",
      value: "team",
    },
    {
      title: "MILESTONES",
      value: "milestones",
    },
  ];
  const [currentMenu, setCurrentMenu] = useState("MILESTONES");

  const carousel = [
    {
      title: "Naija Spirit: Unique Powers of Resilience or Learned Helplessness?",
      src: "/programs/misc/1.png",
      url: "",
    },
    {
      title: "Ignorance Around Mental Health Challenges is Expensive",
      src: "/programs/misc/2.png",
      url: "",
    },
    {
      title: "Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia",
      src: "/programs/misc/3.png",
      url: "",
    },

  ];

  return (
    <div className="grid overflow-y-auto mx-auto min-h-screen w-full">
      <main className="flex h-fit mx-auto w-full grid flex-col items-center justify-center">
        <TopBar />
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }} className="">
          <Image
            className="dark:invert h-fit w-full"
            src="/landing/hero.png"
            alt="Hero image"
            width={1800}
            height={380}
            priority
          />
        </motion.div>

        <Tabs defaultValue="milestones" className="lg:flex items-center justify-center py-3 flex w-[90%]">
          <TabsList className="flex lg:flex-row flex-col items-center bg-transparent justify-center w-full px-20 gap-20 pb-4 lg:border-b-2 lg:border-b-[#999999] rounded-none">
            {
              tabs.map((value, index) => (
                <TabsTrigger key={index} className="rounded-none w-fit data-[state=active]:shadow-none data-[state=active]:text-green-600 font-bold bg-none text-[#0044B5] hover:bg-transparent" value={value.value}>{value.title}</TabsTrigger>
              ))
            }
          </TabsList>
          <TabsContent value="milestones" className="bg-blue-700">
            <Milestones />
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 5 * 0.2 }}
          viewport={{ once: true }}>
          <div className="flex items-start px-4 flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#00B191]">
              Stay Informed
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Through advocacy, education, and support, we&apos;re building a stigma-free future for mental health in Nigeria
            </p>
          </div>
        </motion.div>

        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="w-full flex items-start justify-start gap-4 ml-0 snap-x snap-mandatory scroll-pl-4">
            { carousel.map((value, index) => (
              <CarouselItem key={index} className="basis-1/3 flex flex-col gap-3 items-start justify-center min-w-[250px] max-w-[400px]">
                <div className="h-fit">
                  <Image
                    src={value.src}
                    alt="Guy"
                    width={500}
                    height={500}
                    quality={100}
                    objectFit="contain"
                    className="h-full w-fit"
                  />
                </div>
                <p className="font-bold text-lg whitespace-wrap">{value.title}</p>
                <Link href={value.url} className="text-[] font-bold">
                  READ MORE
                </Link>
              </CarouselItem>
            ))}
            <CarouselItem className="w-[250px]"></CarouselItem>
            
          </CarouselContent>
        </Carousel>
      </main>

      <Footer />

    </div>
  );
}
