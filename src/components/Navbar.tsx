import React from "react";
import { Anchor, Button } from "@/components/ui/button";
import VideoDialog from "./VideoDialog";
import { Bookmarklet } from "./Bookmarklet";
import { useSearchParams, Link } from "react-router-dom";
import { useDashLink } from "../hooks/use-dash-link";
import { GetStartedButton } from "./cta/GetStartedButton";
import { PlaygroundButton } from "./cta/PlaygroundButton";
import { useIsMobile } from "../hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const dashLink = useDashLink();
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100 sticky top-0 left-0 z-30 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="/lovable-uploads/d7797353-d7c2-4886-a480-0e9a6a32501f.png"
            alt="newmode Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-craftera-dark">
            newmode<span className="gradient-text">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Case Studies
          </a>
          <a
            href="/#howitworks"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#benefits"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Benefits
          </a>
          <Link
            to="/generator"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Landing Page Generator
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {isMobile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a href="/#features" className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    Case Studies
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/#howitworks" className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    How It Works
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/#benefits" className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    Benefits
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/generator" className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    Landing Page Generator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <GetStartedButton
            size="sm"
            variant="ghost"
            className="hidden lg:block"
          />
          <PlaygroundButton size="sm" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
