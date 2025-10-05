import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const footerLinks = [
        {
        title: "Quick Links",
        links: [
            {
            title: "Programs",
            url: "#",
            },
            {
            title: "Blog",
            url: "#",
            },
            {
            title: "Thursday Tribune",
            url: "#",
            },
            {
            title: "IMCE Sessions",
            url: "#",
            },  
        ]
        },
        {
        title: "Support",
        links: [
            {
            title: "Donate",
            url: "#",
            },
            {
            title: "Volunteer",
            url: "#",
            },
            {
            title: "Book Campaign",
            url: "#",
            },
            {
            title: "Unashamed Pledge",
            url: "#",
            },  
        ]
        },
    ];

    const socials = [
        {
            name: "X",
            src: "/logos/socials/twitter.png",
            url: "#",
        },
        {
            name: "Facebook",
            src: "/logos/socials/facebook.png",
            url: "#",
        },
        {
            name: "LinkedIn",
            src: "/logos/socials/linkedin.png",
            url: "#",
        },
        {
            name: "Instagram",
            src: "/logos/socials/instagram.png",
            url: "#",
        },

    ];

    return (
      <footer className="relative bg-[#0044B5] py-5 pb-10 items-center mt-20 px-5 flex flex-col">
        <div className="lg:items-start items-center lg:flex-row flex-col w-fit justify-between gap-5 lg:border-b-[1px] lg:border-b-[#ABABAB] pt-10 flex">
          {/* ASIDO */}
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

          {/* Quick Links and Support */}
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

          {/* Contact Us */}
          <div className="flex lg:py-0 py-5 pb-10 w-[85%] lg:border-none border-y-[1px] border-y-[#ABABAB] lg:w-[25%] flex-col items-start justify-center">
            <p className="text-sm lg:text-lg pb-5 font-bold text-white">Contact Us</p>
            <div className="flex items-center gap-2 justify-center">
              <MapPin strokeWidth={1} className="text-white" size={20} />
              <p className="text-sm lg:text-lg text-white">No 4, Awosika Street, Old Bodija, Ibadan.</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Mail strokeWidth={1} className="text-white" size={20} />
              <Link href="mailto:asidofoundation@gmail.com"><Button variant="link" className="px-0 text-sm lg:text-lg text-white">asidofoundation@gmail.com</Button></Link>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Phone strokeWidth={1} className="text-white" size={20} />
              <div className="flex lg:flex-wrap items-start gap-1.5 justify-start">
                <Link href="tel:+2348180777458"><Button variant="link" className="px-0 text-sm lg:text-lg text-white">+234 818 077 7458</Button></Link>
                <Link href="tel:+2349028080416"><Button variant="link" className="px-0 text-sm lg:text-lg text-white">+234 902 808 0416</Button></Link>
              </div>
            </div>
            
          </div>
        </div>
        <div className="items-start justify-start py-5 lg:pt-10 flex">
          <p className="text-sm lg:text-lg text-white w-full">© 2025 Asido Foundation. All Rights Reserved.</p>
        </div>

        <div className="flex items-center justify-between w-full px-20 lg:hidden">
            {
                socials.map((value, index) => (
                    <Link href={value.url} key={index}>
                        <Image className="h-7 w-7" src={value.src} width={500} height={500} alt={value.name} />
                    </Link>
                ))
            }
        </div>

        <Image
          className="z-10 absolute lg:flex hidden right-0 top-0 h-full w-fit"
          src="/landing/footer-bg.png"
          alt="Hero image"
          width={1800}
          height={380}
          priority
        />

      </footer>
    );
}