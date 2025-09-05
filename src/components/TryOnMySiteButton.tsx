import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { CtaAnchor } from "./cta/CtaAnchor";
import { Bookmarklet } from "./Bookmarklet";
import { VideoPlayer } from "./VideoPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

export function TryOnMySiteButton() {
  const [tab, setTab] = useState<"chrome" | "firefox" | "safari">("chrome");
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="h-[50px] text-lg w-full justify-center bg-gradient-to-br from-indigo-500 to-purple-500 border-0 text-white">
          Try on Your Website
        </Button>
      </DialogTrigger>

      {isMobile ? (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Desktop browser required</DialogTitle>
            <DialogDescription className="!mt-3">
              Landing Page Generator is a desktop experience. Please use a
              desktop browser to try it.
            </DialogDescription>
            <DialogFooter className="!mt-3">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      ) : (
        <DialogContent
          className="!max-w-[880px] !p-0 !overflow-clip !bg-transparent"
          showCloseButton={false}
        >
          <div className="grid grid-cols-2 bg-background">
            <div className="p-8 space-y-9 bg-background">
              <DialogHeader className="space-y-2 h-full">
                <DialogTitle className="mb-3.5">
                  Try Landing Page Generator on your website!
                </DialogTitle>
                <div className="text-sm flex flex-col items-start gap-1 h-full text-gray-600">
                  <p className="text-sm mb-2">
                    It's easy. Just follow these steps:
                  </p>
                  <ol className="list-decimal ml-4 space-y-4 text-sm">
                    <li>
                      Show the bookmark bar in your browser (if you haven't
                      already)
                    </li>
                    <li>
                      Drag the bookmarklet into your bookmarks bar:
                      <div className="mt-2">
                        <Bookmarklet />
                      </div>
                    </li>
                    <li>
                      Navigate to your website and click the bookmark to start
                      the Studio!
                    </li>
                  </ol>

                  <div className="flex-1 flex flex-col justify-end mt-3">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                      Close
                    </Button>
                  </div>
                </div>
              </DialogHeader>
            </div>

            <div className="border border-gray-300 bg-zinc-900 m-px flex flex-col items-center justify-center gap-4 relative overflow-hidden aspect-square rounded-lg">
              <Tabs
                value={tab}
                onValueChange={(value) => {
                  setTab(value as "chrome" | "firefox" | "safari");
                }}
                className="absolute bottom-3.5 translate-y-0 left-1/2 -translate-x-1/2 z-30 shadow rounded-md"
              >
                <TabsList>
                  <TabsTrigger value="chrome">Chrome</TabsTrigger>
                  <TabsTrigger value="firefox">Firefox</TabsTrigger>
                  <TabsTrigger value="safari">Safari</TabsTrigger>
                </TabsList>
              </Tabs>

              {tab === "chrome" && (
                <VideoPlayer
                  title="Chrome Bookmarklet Guide"
                  src="https://s3.eu-west-2.amazonaws.com/newmode.ai-public/chrome.mp4"
                  className="w-full h-full"
                />
              )}
              {tab === "firefox" && (
                <VideoPlayer
                  title="Firefox Bookmarklet Guide"
                  src="https://s3.eu-west-2.amazonaws.com/newmode.ai-public/firefox.mp4"
                  className="w-full h-full"
                />
              )}
              {tab === "safari" && (
                <VideoPlayer
                  title="Safari Bookmarklet Guide"
                  src="https://s3.eu-west-2.amazonaws.com/newmode.ai-public/safari.mp4"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
