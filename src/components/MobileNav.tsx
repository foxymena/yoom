import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

function MobileNav() {
  const location = useLocation();
  return (
    <section className="w-full max-w-[16.5rem]">
      <Sheet>
        <SheetTrigger asChild>
          <img src={`${import.meta.env.BASE_URL}/icons/ph--list-bold.svg`} width={36} height={36} alt="hamburger" className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side='left' className="border-none bg-dark-1">
          <Link to="/" className='flex items-center gap-1'>
            <img src={`${import.meta.env.BASE_URL}/icons/ph--video-camera-duotone.svg`} alt="Yoom" width={32} height={32} className='max-sm:size-10' />
            <p className='text=[1.625rem] font-extrabold text-white'>Yoom</p>
          </Link>
          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {
                  sidebarLinks.map(link => {
                    const isActive = link.route === location.pathname; // || location.pathname.startsWith(link.route);
                    return (
                      <SheetClose asChild key={link.label}>
                        <Link key={link.label} to={link.route} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", { 'bg-blue-1': isActive })}>
                          {/* <div className="flex flex-row items-center text-white"> */}
                            <img src={`${import.meta.env.BASE_URL}${link.imgUrl}`} alt={link.label} width={20} height={20} />
                            <p className="pl-1 font-semibold">
                              {link.label}
                            </p>
                          {/* </div> */}
                        </Link>
                      </SheetClose>
                    );
                  })
                }
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

    </section>
  )
};

export default MobileNav;
