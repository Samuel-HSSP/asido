import { ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";
import { Timeline } from "../timeline";
import { motion } from "framer-motion";

export default function Milestones() {
    const data = [
    {
      title: "2019",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
          {/* 1 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#00B191]">
              Asido Campus Network Launched
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Pioneering student-led mental health advocacy at the University of Ibadan.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2019/2019_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
          {/* 2 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-1.5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Optimal Mental Health Debut
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Introducing a platform dedicated to promoting mental well-being and awareness in Ibadan, Lagos and Abuja.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2019/2019_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
          {/* 3 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-3 items-start">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#FD372C]">
              Community Engagement Series Begins
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg font-bold text-black md:text-sm">
              First interactive monthly series fostering dialogue and education on mental health.
            </motion.p>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
        </motion.div>  
      )
    },
    {
      title: "2020",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
          {/* 1 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-3 items-start">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              Unashamed Campaign Launched
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Challenging stigma and empowering open conversations about mental health.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2020/2020_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
          {/* 2 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-1.5 items-start">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#00B191]">
              LIMI Africa Storytelling Series Kicks Off
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Sharing real stories to amplify voices and lived experiences in mental health.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2020/2020_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
          {/* 3 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-3 items-start">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Emergency Helpline Inaugurated
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg font-bold text-black md:text-sm">
              Launching a lifesaving support line for psychosocial emergencies.
            </motion.p>
            <Button variant="ghost" className="mb-10 text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
        </motion.div>  
      )
    },
    {
      title: "2021",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
          {/* 1 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="items-start flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#FD372C]">
              Project Hope Commences
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-3 font-bold text-black md:text-sm">
              Providing targeted support and hope to those facing mental health challenges.
            </motion.p>
            <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
          {/* 2 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-1.5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              First Suicide Prevention Walk
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Uniting the community to raise awareness and advocate for prevention.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2021/2021_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
          {/* 3 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-1.5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#00B191]">
              Inaugural JAME Competition
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Empowering youth through mental health-themed creativity and advocacy.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2021/2021_b.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
          {/* 4 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="mb-10 flex flex-col gap-1.5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Donate-a-Book Drive Launched
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Promoting knowledge-sharing and mental health education through books.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2021/2021_c.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
        </motion.div>  
      )
    },
    {
      title: "2022",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
          {/* 1 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex mb-10 flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#FD372C]">
              Mindset Radio Show Goes Live
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Weekly conversations on mental health reaching a broader audience.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2022/2022_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
          </motion.div>
        </motion.div>  
      )
    },
    {
      title: "2023",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
          {/* 1 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#4ABDCD]">
              Mental Health Bill Passed
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-3 font-bold text-black md:text-sm">
              Successfully advocating for the historic passing of Nigeria&apos;s Mental Health Bill.
            </motion.p>
          </motion.div>
          {/* 2 */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex items-start flex-col gap-1.5">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
              Lagos State Recognition
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
              Honored for outstanding contributions to community mental health and advocacy.
            </motion.p>
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
              <Image
                src="/programs/2023/2023_a.png"
                alt="startup template"
                width={500}
                height={500}
                quality={100}
                objectFit="contain"
                className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
              />
            </motion.div>
            <Button variant="ghost" className="mb-10 items-center ml-0 flex justify-start text-[#0044B5] hover:text-[#0044B5] font-bold">
              LEARN MORE
              <ChevronRight color="#0044B5" />
            </Button>
          </motion.div>
        </motion.div>  
      )
    },
    {
    title: "2024",
    content: (
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex flex-col gap-20">
        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="items-start flex flex-col gap-3">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
            ACAMH LMICs Innovation Award
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-3 font-bold text-black md:text-sm">
            Recognized internationally for innovation in mental health research and practice.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
            <Image
              src="/programs/2024/2024_a.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </motion.div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex items-start flex-col gap-1.5">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#FD372C]">
            Most Outstanding Student Association
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
            Asido Campus Network honored for exceptional impact on Nigerian campuses.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
            <Image
              src="/programs/2024/2024_b.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </motion.div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </motion.div>
        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex items-start flex-col gap-1.5">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#4ABDCD]">
            National Suicide Prevention Conference
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
            Bringing stakeholders together in Abuja to advance prevention efforts nationwide.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
            <Image
              src="/programs/2024/2024_c.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </motion.div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </motion.div>
        {/* 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="mb-10 flex flex-col gap-1.5">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#00B191]">
            Advocacy Visit to Attorney General
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
            Campaigning for the decriminalization of attempted suicide in Nigeria.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
            <Image
              src="/programs/2024/2024_d.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </motion.div>
        </motion.div>
        {/* 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex items-start flex-col gap-1.5">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#F9AE0B]">
            Public Hearing Mobilization
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
            Engaging the public and submitting a formal memorandum to influence policy.
          </motion.p>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </motion.div>
        {/* 6 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="flex items-start flex-col gap-1.5">
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-sm font-bold md:text-sm text-[#4ABDCD]">
            Partnership With Lifeline International
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }} className="text-lg mb-6 font-bold text-black md:text-sm">
            Forging global collaboration to strengthen crisis intervention and support.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="h-fit">
            <Image
              src="/programs/2024/2024_e.png"
              alt="startup template"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              className="shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-full w-fit"
            />
          </motion.div>
          <Button variant="ghost" className="text-[#0044B5] hover:text-[#0044B5] font-bold">
            LEARN MORE
            <ChevronRight color="#0044B5" />
          </Button>
        </motion.div>
      </motion.div>  
    )
    },
  ];
  
    return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }} className="relative w-full overflow-clip bg-blue-700">
            <Timeline data={data} />
        </motion.div>
    )
}