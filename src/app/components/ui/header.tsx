import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 sm:px-5 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-b-2 border-blue-600 py-3">
          <Link href="/">
            <p className="text-2xl sm:text-3xl md:text-[35px] font-extrabold italic tracking-widest">
              Blog
              <span className="text-blue-600">Website</span>
            </p>
          </Link>
          <div className="flex gap-3 sm:gap-5 items-center">
            <Link href="https://github.com/uzairzia02?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/uzair-zia-67730790/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}