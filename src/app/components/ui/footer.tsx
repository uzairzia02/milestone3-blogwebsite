import { Copyright, Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full px-4 sm:px-5 py-6 sm:py-8 mt-auto space-y-3">
            <div className="max-w-7xl mx-auto">
                {/* Social Media and Navigation Section */}
                <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 border-t-2 border-blue-600 pt-5">
                    {/* Social Media */}
                    <div className="flex flex-wrap gap-3 items-center">
                        <p className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Follow us</p>
                        {[
                            { Icon: Facebook, url: "/" },
                            { Icon: Youtube, url: "/" },
                            { Icon: Linkedin, url: "/" },
                            { Icon: Twitter, url: "/" },
                            { Icon: Github, url: "/" }
                        ].map(({ Icon, url }) => (
                            <Link key={url} href={url}>
                                <Icon className="w-8 h-8 sm:w-9 sm:h-9 p-1.5 border border-black rounded-full hover:bg-gray-200 cursor-pointer hover:opacity-75 duration-200" />
                            </Link>
                        ))}
                    </div>

                    {/* Navigation Links */}
                    <div className="order-first sm:order-none">
                        <ul className="flex flex-wrap gap-3 sm:gap-5">
                            {['Home', 'Blogs', 'Platform', 'Help'].map((item) => (
                                <li key={item}>
                                    <Link href="/" className="text-sm sm:text-base hover:text-blue-500 hover:underline cursor-pointer">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <p className="text-lg sm:text-[20px] font-extrabold italic tracking-widest">
                                Blog
                                <span className="text-blue-600">Website</span>
                            </p>
                        </Link>
                    </div>

                    {/* Copyright and Legal */}
                    <div className="flex flex-wrap gap-3 sm:gap-5 text-gray-500 items-center text-sm sm:text-base">
                        <p className="flex gap-2 items-center">
                            <Copyright className="w-4 h-4 sm:w-5 sm:h-5" />
                            Blog Website
                        </p>
                        <Link href="/" className="hover:underline">Legal</Link>
                        <Link href="/" className="hover:underline">Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}