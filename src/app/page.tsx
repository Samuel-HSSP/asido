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
import { m, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import Milestones from "@/components/custom/landing/milestones";
import TopBar from "@/components/custom/landing/topbar";

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

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          title: "Programs",
          url: "",
        },
        {
          title: "Blog",
          url: "",
        },
        {
          title: "Thursday Tribune",
          url: "",
        },
        {
          title: "IMCE Sessions",
          url: "",
        },  
      ]
    },
    {
      title: "Support",
      links: [
        {
          title: "Donate",
          url: "",
        },
        {
          title: "Volunteer",
          url: "",
        },
        {
          title: "Book Campaign",
          url: "",
        },
        {
          title: "Unashamed Pledge",
          url: "",
        },  
      ]
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

        <Tabs defaultValue="milestones" className="lg:flex items-center bg-black justify-center py-3 hidden w-[90%]">
          <TabsList className="flex items-center bg-transparent justify-center w-full px-20 gap-20 pb-4 lg:border-b-2 lg:border-b-[#999999] rounded-none">
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

        <Carousel>
          <CarouselContent className="px-20 flex items-start justify-center">
            { carousel.map((value, index) => (
              <CarouselItem key={index} className="flex basis-1/3 flex-col gap-3 items-start max-w-[400px] justify-center">
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
            
          </CarouselContent>
        </Carousel>
      </main>

      <footer className="relative bg-[#0044B5] py-20 items-center mt-20 px-5 flex flex-col">
        <div className="lg:items-start items-center lg:flex-row flex-col w-fit justify-between gap-5 lg:border-b-[1px] lg:border-b-[#ABABAB] pt-20 flex">
          <div className="flex lg:w-[25%] gap-3 flex-col items-center lg:items-start justify-center">
            <Image
              className="dark:invert h-10 lg:h-10 w-fit"
              src="/logos/asido-white.png"
              alt="ASIDO Foundation logo"
              width={2000}
              height={1000}
              priority
              quality={100}
            />
            <p className="text-sm text-white lg:text-left text-center">Making mental health support accessible through advocacy and action</p>
          </div>
          <div className="flex lg:mt-0 mt-10 lg:w-[50%] items-start w-full justify-around">
            {
              footerLinks.map((value, index) => (
                <div key={index} className="flex flex-col lg:py-0 py-5 lg:border-none border-t-[1px] border-t-[#ABABAB] items-start gap-3 justify-center">
                  <p className="text-sm lg:text-lg font-bold text-white">{value.title}</p>
                  {
                    value.links.map((link, index) => (
                      <Link key={index} href={link.url} className="text-white text-sm lg:text-lg">{link.title}</Link>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div className="flex lg:py-0 py-5 pb-10 w-[85%] lg:border-none border-y-[1px] border-y-[#ABABAB] lg:w-[25%] flex-col items-start justify-center">
            <p className="text-sm lg:text-lg pb-5 font-bold text-white">Contact Us</p>
            <div className="flex items-center gap-2 justify-center">
              <MapPin strokeWidth={1} className="text-white" size={25} />
              <p className="text-sm lg:text-lg text-white">No 4, Awosika Street, Old Bodija, Ibadan.</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <Mail strokeWidth={1} className="text-white" size={25} />
              <Link href="mailto:asidofoundation@gmail.com"><Button variant="link" className="text-sm lg:text-lg text-white">asidofoundation@gmail.com</Button></Link>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Phone strokeWidth={1} className="text-white" size={25} />
              <div className="flex lg:flex-wrap items-start justify-start">
                <Link href="tel:+2348180777458"><Button variant="link" className="text-sm lg:text-lg text-white">+234 818 077 7458</Button></Link>
                <Link href="tel:+2349028080416"><Button variant="link" className="text-sm lg:text-lg text-white">+234 902 808 0416</Button></Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="items-start justify-start py-5 lg:pt-10 flex">
          <p className="text-sm lg:text-lg text-white w-full">© 2025 Asido Foundation. All Rights Reserved.</p>
        </div>

        <Image
            className="z-10 absolute right-0 top-0 h-full w-fit"
            src="/landing/footer-bg.png"
            alt="Hero image"
            width={1800}
            height={380}
            priority
          />

      </footer>

    </div>
  );
}
