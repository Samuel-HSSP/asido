"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Timeline } from "@/components/custom/timeline";
import { ChevronRight, Menu, Search } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> recovery

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
  const { toggleSidebar } = useSidebar();
  const dropdown = [
    {
      title: "WHO WE ARE",
    },
    {
      title: "LEADERSHIP",
    },
    {
      title: "OUR VOLUNTEER TEAM",
    },
    {
      title: "MILESTONES",
    },
  ];
<<<<<<< HEAD
  const [currentMenu, setCurrentMenu] = useState("MILESTONES");
=======
>>>>>>> recovery

  const data = [
    {
      title: "2019",
      content: (
        <div className="flex flex-col gap-20">
          {/* 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold md:text-sm text-[#00B191]">
              Asido Campus Network Launched
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Pioneering student-led mental health advocacy at the University of Ibadan.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2019/2019_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Optimal Mental Health Debut
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Introducing a platform dedicated to promoting mental well-being and awareness in Ibadan, Lagos and Abuja.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2019/2019_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-3 items-start">
            <p className="text-sm font-bold md:text-sm text-[#FD372C]">
              Community Engagement Series Begins
            </p>
            <p className="text-lg font-bold text-black md:text-sm">
              First interactive monthly series fostering dialogue and education on mental health.
            </p>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
        </div>  
      )
  },
    {
      title: "2020",
      content: (
        <div className="flex flex-col gap-20">
          {/* 1 */}
          <div className="flex flex-col gap-3 items-start">
            <p className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              Unashamed Campaign Launched
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Challenging stigma and empowering open conversations about mental health.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2020/2020_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-1.5 items-start">
            <p className="text-sm font-bold md:text-sm text-[#00B191]">
              LIMI Africa Storytelling Series Kicks Off
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Sharing real stories to amplify voices and lived experiences in mental health.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2020/2020_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-3 items-start">
            <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Emergency Helpline Inaugurated
            </p>
            <p className="text-lg font-bold text-black md:text-sm">
              Launching a lifesaving support line for psychosocial emergencies.
            </p>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
        </div>  
      )
  },
  {
      title: "2021",
      content: (
        <div className="flex flex-col gap-20">
          {/* 1 */}
          <div className="items-start flex flex-col gap-3">
            <p className="text-sm font-bold md:text-sm text-[#FD372C]">
              Project Hope Commences
            </p>
            <p className="text-lg mb-3 font-bold text-black md:text-sm">
              Providing targeted support and hope to those facing mental health challenges.
            </p>
            <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              First Suicide Prevention Walk
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Uniting the community to raise awareness and advocate for prevention.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2021/2021_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#00B191]">
              Inaugural JAME Competition
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Empowering youth through mental health-themed creativity and advocacy.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2021/2021_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
          {/* 4 */}
          <div className="mb-10 flex flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Donate-a-Book Drive Launched
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Promoting knowledge-sharing and mental health education through books.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2021/2021_c.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
        </div>  
      )
  },
  {
      title: "2022",
      content: (
        <div className="flex flex-col gap-20">
          {/* 1 */}
          <div className="flex mb-10 flex-col gap-3">
            <p className="text-sm font-bold md:text-sm text-[#FD372C]">
              Mindset Radio Show Goes Live
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Weekly conversations on mental health reaching a broader audience.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2022/2022_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
          </div>
        </div>  
      )
  },
  {
      title: "2023",
      content: (
        <div className="flex flex-col gap-20">
          {/* 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              Mental Health Bill Passed
            </p>
            <p className="text-lg mb-3 font-bold text-black md:text-sm">
              Successfully advocating for the historic passing of Nigeria&apos;s Mental Health Bill.
            </p>
          </div>
          {/* 2 */}
          <div className="flex items-start flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Lagos State Recognition
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Honored for outstanding contributions to community mental health and advocacy.
            </p>
            <div className="h-fit">
              <Image
                src="/programs/2023/2023_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </div>
            <Button variant="ghost" className="mb-10 items-center ml-0 flex justify-start text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </div>
        </div>  
      )
  },
  {
    title: "2024",
    content: (
      <div className="flex flex-col gap-20">
        {/* 1 */}
        <div className="items-start flex flex-col gap-3">
          <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
            ACAMH LMICs Innovation Award
          </p>
          <p className="text-lg mb-3 font-bold text-black md:text-sm">
            Recognized internationally for innovation in mental health research and practice.
          </p>
          <div className="h-fit">
            <Image
              src="/programs/2024/2024_a.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </div>
        {/* 2 */}
        <div className="flex items-start flex-col gap-1.5">
          <p className="text-sm font-bold md:text-sm text-[#FD372C]">
            Most Outstanding Student Association
          </p>
          <p className="text-lg mb-6 font-bold text-black md:text-sm">
            Asido Campus Network honored for exceptional impact on Nigerian campuses.
          </p>
          <div className="h-fit">
            <Image
              src="/programs/2024/2024_b.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </div>
        {/* 3 */}
        <div className="flex items-start flex-col gap-1.5">
          <p className="text-sm font-bold md:text-sm text-[#4ABDCD]">
            National Suicide Prevention Conference
          </p>
          <p className="text-lg mb-6 font-bold text-black md:text-sm">
            Bringing stakeholders together in Abuja to advance prevention efforts nationwide.
          </p>
          <div className="h-fit">
            <Image
              src="/programs/2024/2024_c.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </div>
        {/* 4 */}
        <div className="mb-10 flex flex-col gap-1.5">
          <p className="text-sm font-bold md:text-sm text-[#00B191]">
            Advocacy Visit to Attorney General
          </p>
          <p className="text-lg mb-6 font-bold text-black md:text-sm">
            Campaigning for the decriminalization of attempted suicide in Nigeria.
          </p>
          <div className="h-fit">
            <Image
              src="/programs/2024/2024_d.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </div>
        </div>
        {/* 5 */}
        <div className="flex items-start flex-col gap-1.5">
          <p className="text-sm font-bold md:text-sm text-[#F9AE0B]">
            Public Hearing Mobilization
          </p>
          <p className="text-lg mb-6 font-bold text-black md:text-sm">
            Engaging the public and submitting a formal memorandum to influence policy.
          </p>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </div>
        {/* 6 */}
        <div className="flex items-start flex-col gap-1.5">
          <p className="text-sm font-bold md:text-sm text-[#4ABDCD]">
            Partnership With Lifeline International
          </p>
          <p className="text-lg mb-6 font-bold text-black md:text-sm">
            Forging global collaboration to strengthen crisis intervention and support.
          </p>
          <div className="h-fit">
            <Image
              src="/programs/2024/2024_e.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </div>
      </div>  
    )
  },

  ];

  return (
    <div className="grid overflow-y-auto min-h-screen w-full pb-20">
      <main className="flex h-fit w-full grid overflow-y-auto flex-col items-start sm:items-start">
        <div className="flex px-5 py-3 w-full bg-black lg:mx-auto items-center justify-between">
          <Image
            className="dark:invert h-7 lg:h-20 w-fit"
            src="/logos/asido.png"
            alt="ASIDO Foundation logo"
            width={1800}
            height={500}
            priority
            quality={100}
          />
          <Search className="rounded-full border-[2px] h-12 w-12 p-2 border-black" size={25}/>
          <Button className='lg:hidden bg-transparent hover:bg-transparent shadow-none px-5' onClick={toggleSidebar}>
            <Menu className='text-dbackground dark:text-white' />
          </Button>
        </div>
        {/* Top Nav */}
        <div className="lg:flex hidden items-center justify-between w-full">
          <div className="flex items-center justify-center">
            { menuButtons.slice(0, 5).map((value, index) => (
              <Button key={index} variant="ghost">
                {value.title}
              </Button>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button variant="ghost">
              TAKE THE PLEDGE
            </Button>
            <Button className="bg-green-700">
              DONATE
            </Button>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="">
          <Image
            className="dark:invert h-fit w-full"
            src="/landing/hero.png"
            alt="Hero image"
            width={1800}
            height={380}
            priority
          />
        </div>

        <div className="p-4 py-4 flex bg-[#d1d1d1] items-center justify-between">
          <p className="text-[#0044B5] font-bold">MILESTONES</p>
          <Button className='lg:hidden bg-transparent hover:bg-transparent shadow-none px-5' onClick={toggleSidebar}>
            <Menu className='text-[#0044B5] dark:text-white' />
          </Button>
        </div>

        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>

        <div>
          <div className="flex items-start px-4 flex-col gap-1.5">
            <p className="text-sm font-bold md:text-sm text-[#00B191]">
              Stay Informed
            </p>
            <p className="text-lg mb-6 font-bold text-black md:text-sm">
              Through advocacy, education, and support, we&apos;re building a stigma-free future for mental health in Nigeria
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}
