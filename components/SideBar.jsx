import React from 'react'
import Link from "next/link";
import {CalendarClock, LayoutDashboard, Settings, Tag, UserCircle2} from "lucide-react";

const SideBar = () => {

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            color: "text-sky-500"
        },
        {
            label: "Transactions",
            icon: Tag,
            href: "/conversation",
            color: "text-violet-500"
        },
        {
            label: "Schedules",
            icon: CalendarClock,
            href: "/image",
            color: "text-pink-700"
        },
        {
            label: "Users",
            icon: UserCircle2,
            href: "/video",
            color: "text-orange-700"
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },

    ]
    return (
        <div className="bg-login_primary rounded-xl h-full">
            <p className="text-white text-4xl font-bold px-10 pt-12 pb-6">Board.</p>
            <div className="space-y-2.5 mt-4">
                {routes.map((route) => (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={"text-md group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white hover:bg-white/10 rounded-lg text-white"}
                    >
                        <div className="grid grid-cols-[1fr_4fr] px-7 gap-2">
                            <route.icon className="h-5 w-5 mr-3"/>
                            <span className="">{route.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-white text-sm px-8 fixed bottom-20">
                <div className="flex items-end cursor-pointer hover:text-gray-300">
                    Help
                </div>
                <div className="mt-4 cursor-pointer hover:text-gray-300">
                    Contact Us
                </div>
            </div>
        </div>
    )
}
export default SideBar