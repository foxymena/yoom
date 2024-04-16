import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link to="/" className='flex items-center gap-1'>
        <img src={`${import.meta.env.BASE_URL}/icons/ph--video-camera-duotone.svg`} alt="Yoom" width={32} height={32} className='max-sm:size-10' />
        <p className='text=[1.625rem] font-extrabold text-white max-sm:hidden'>Yoom</p>
      </Link>

      <div className='flex-between gap-5 text-white'>
        <SignedOut>
          {/* <SignInButton /> */}
          <Link to="/sign-in">Sign In</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
};

export default Navbar;
