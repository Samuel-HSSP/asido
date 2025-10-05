import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu, Search } from "lucide-react";
import Image from "next/image";


export default function TopBar() {
    const { toggleSidebar } = useSidebar();
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

    return (
        <div className="px-2">
            <div className="flex lg:px-5 py-4 w-full items-center justify-between">
                <Image
                    className="dark:invert h-7 lg:h-10 w-fit"
                    src="/logos/asido.png"
                    alt="ASIDO Foundation logo"
                    width={1800}
                    height={500}
                    priority
                    quality={100}
                />
                
                <div className="flex items-center">
                    {/* <Button className='lg:hidden bg-transparent hover:bg-transparent shadow-none px-5'> */}
                    <Search className="text-[#0044B5] lg:border-[#0044B5] rounded-full lg:border-[2px] h-10 w-10 p-2" size={25}/>
                    {/* </Button> */}

                    <Button className='lg:hidden bg-transparent hover:bg-transparent shadow-none px-5' onClick={toggleSidebar}>
                        <Menu className='text-[#0044B5] dark:text-white' />
                    </Button>
                </div>

            </div>
            {/* Top Nav */}
            <div className="lg:flex py-5 hidden items-center justify-between w-full">
            <div className="flex items-center justify-center">
                { menuButtons.slice(0, 5).map((value, index) => (
                <Button key={index} variant="ghost" className="font-bold text-[#0044B5] hover:bg-transparent hover:text-[#00B191]">
                    {value.title}
                </Button>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Button variant="ghost" className="font-bold text-[#0044B5] hover:bg-transparent hover:text-[#00B191]">
                TAKE THE PLEDGE
                </Button>
                <Button className="font-bold bg-[#00B191] hover:bg-transparent hover:border-[1.5px] hover:text-[#00B191] hover:border-[#00B191]">
                DONATE
                </Button>
            </div>
            </div>
        </div>
    )
}