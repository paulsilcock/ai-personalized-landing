import { useStudioBookmarklet } from "@/hooks/use-bookmarklet";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useEffect, useRef } from "react";
import { Bookmark } from "lucide-react";

export function Bookmarklet() {
  const bookmarklet = useStudioBookmarklet();

  const linkRef = useRef<HTMLAnchorElement>(null);

  // React blocks bookmarklets when injected directly, so we patch the link this way
  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.setAttribute("href", bookmarklet);
    }
  }, [bookmarklet]);

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a
          ref={linkRef}
          className="text-sm px-3 py-2 rounded-md border-2 border-dashed hover:border-gray-300 hover:bg-gray-50 transition-all flex justify-center items-center gap-2 font-medium cursor-grab text-foreground w-fit"
          onClick={(e) => e.preventDefault()}
        >
          <Bookmark className="size-4" /> Personalise this page
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Drag me into your bookmark bar</p>
      </TooltipContent>
    </Tooltip>
  );
}
