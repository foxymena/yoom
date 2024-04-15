import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks } from "@/constants";
import { cn } from '@/lib/utils';

function Sidebar() {
  const location = useLocation();
  return (
    // <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 max-sm:hidden lg:w-[264px] ">
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[16.5rem] ">
      <div className="flex flex-1 flex-col gap-6">
        {
          sidebarLinks.map(link => {
            const isActive = link.route === location.pathname; // || location.pathname.startsWith(link.route);
            return (
              <Link key={link.label} to={link.route} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", { 'bg-blue-1': isActive })}>
                <div className="flex flex-row items-center text-white">
                  <img src={`${import.meta.env.BASE_URL}${link.imgUrl}`} alt={link.label} width={24} height={24} />
                  <p className="pl-2">
                    {link.label}
                  </p>
                </div>
              </Link>
            );
          }
          )
        }
      </div>
    </section>
  )
};

export default Sidebar;
