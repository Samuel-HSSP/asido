"use client";

import { ArrowRight, ChartPie, ChevronRight, FlaskConical, Home, PersonStanding, Stethoscope, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const items = [
  {
    title: "ABOUT US",
    url: "/about",
  },
  {
    title: "IMPACT",
    url: "/impact",
  },
  {
    title: "GET INVOLVED",
    url: "/get-involved",
  },
  {
    title: "STAY INFORMED",
    url: "/stay-informed",
  },
  {
    title: "TAKE THE PLEDGE",
    url: "/pledge",
  },
  {
    title: "DONATE",
    url: "/donate",
  },
];

export default function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) return null;

  return (
  <Sidebar className="lg:hidden">
    <SidebarContent className="bg-white text-dbackground">
      <Link href="/">
        <Image
          className="z-10 mx-8 w-fit my-5 h-[30px]"
          src="/logos/asido.png"
          alt="ASIDO Foundation logo"
          width={150}
          height={20}
          priority
        />
      </Link>
      <SidebarGroup>
        
      <SidebarGroupContent>
        <SidebarMenu>          
          { items.filter(item => item.url !== "/pledge" && item.url !== "/donate").map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="p-2 h-[45px] text-lg font-medium">
                <a href={item.url}>
                  {
                    item.title === 'ABOUT US' && (
                      <ArrowRight className="text-sm w-24 text-[#0044B5]" />
                    )
                  }
                  <span className={`text-sm ${item.title === 'ABOUT US' ? 'text-[#0044B5]' : ''}`}>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            ))
          }
        </SidebarMenu>
      </SidebarGroupContent>
      </SidebarGroup>

    </SidebarContent>

    <SidebarFooter className="p-4 gap-3 pb-10">
      {items.filter(item => item.url === "/pledge")
        .map((item) => (
          <Link href={item.url} key={item.title} className="w-full hover:bg-muted-foreground flex justify-center">
            <Button key={item.title} className="w-full" variant="ghost">
              {item.title}
            </Button>
          </Link>
          )
        )
      }

      {items.filter(item => item.url === "/donate")
        .map((item) => (
          <Link href={item.url} key={item.title} className="w-full flex justify-center">
            <Button className="w-full bg-[#00B191]">
              {item.title}
            </Button>
          </Link>
          )
        )
      }
    </SidebarFooter>
  </Sidebar>
  )
}
