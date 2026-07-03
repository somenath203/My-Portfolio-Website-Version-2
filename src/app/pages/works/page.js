"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaMobileAlt,
  FaPuzzlePiece,
  FaArrowRight,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

import PageHeading from "@/app/components/PageHeading";

const Page = () => {
  
  const allWorkLinks = [
    {
      id: 1,
      workName: "Frontend WebApp Projects",
      workDescription:
        "Click here to view all my work related to frontend web development.",
      linkToWork: "/pages/all_works/frontend_web_projects",
      icon: FaCode,
      accent: "#38bdf8",
      fileName: "frontend.tsx",
    },
    {
      id: 2,
      workName: "Backend Projects",
      workDescription:
        "Click here to view all my work related to backend development.",
      linkToWork: "/pages/all_works/backend_projects",
      icon: FaServer,
      accent: "#fb923c",
      fileName: "backend.ts",
    },
    {
      id: 3,
      workName: "Full Stack Projects",
      workDescription: "Click here to view all my work related to full stack.",
      linkToWork: "/pages/all_works/full_stack_projects",
      icon: FaLayerGroup,
      accent: "#a78bfa",
      fileName: "fullstack.tsx",
    },
    {
      id: 4,
      workName: "AI Projects",
      workDescription:
        "Click here to view all my work related to artificial intelligence.",
      linkToWork: "/pages/all_works/ai_projects",
      icon: BsStars,
      accent: "#34d399",
      fileName: "ai_models.py",
    },
    {
      id: 5,
      workName: "MobileApp Projects",
      workDescription:
        "Click here to view all my work related to mobile app development.",
      linkToWork: "/pages/all_works/mobile_app_projects",
      icon: FaMobileAlt,
      accent: "#f472b6",
      fileName: "mobile.tsx",
    },
    {
      id: 6,
      workName: "Chrome Extension Projects",
      workDescription:
        "Click here to view all my work related to chrome extensions.",
      linkToWork: "/pages/all_works/chrome_extension_projects",
      icon: FaPuzzlePiece,
      accent: "#fbbf24",
      fileName: "manifest.json",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center">
      <div className="mt-14 w-4/6 lg:w-1/6">
        <PageHeading heading="My Works" />
      </div>

      <div className="w-11/12 lg:w-4/5 mb-10">
        <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 font-poppins">
          {allWorkLinks.map((work) => {
            const Icon = work.icon;
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link href={work.linkToWork} className="block group">
                  <Card
                    style={{ "--accent": work.accent }}
                    className="overflow-hidden bg-slate-950 border border-slate-800 text-white rounded-xl
                               transition-colors duration-300
                               group-hover:border-[var(--accent)]"
                  >
                    <div
                      className="h-[3px] w-full"
                      style={{ backgroundColor: work.accent }}
                    />

                    <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800 bg-slate-900">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="ml-3 font-mono text-xs text-slate-500 truncate">
                        {work.fileName}
                      </span>
                    </div>

                    <CardHeader className="items-center text-center pb-2">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Icon size={22} />
                      </div>
                      <CardTitle className="tracking-wide text-center text-lg text-white">
                        {work.workName}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center gap-5 text-center pb-7">
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        {work.workDescription}
                      </p>

                      <Button
                        variant="outline"
                        className="w-52 border-slate-700 bg-transparent text-white uppercase tracking-wide
                                   transition-colors duration-200
                                   group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:bg-slate-800"
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Projects
                          <FaArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
