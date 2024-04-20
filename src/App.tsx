import { useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
// import { Button } from "@/components/ui/button"

function App() {
  const [ttime, setTTime] = useState('');

  setInterval(() => {
    setTTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  }, 1000);

  return (
    <section className='size-full flex flex-col gap-10 text-white'>
      <div className='w-full h-[300px] rounded-[20px] bg-hero bg-cover'>
        <div className='h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl lg:text-7xl font-extrabold'>{ttime}</h1>
            <p className='text-lg lg:text-2xl font-medium text-sky-1'>{(new Intl.DateTimeFormat('en-US', { dateStyle: 'full'})).format(new Date())}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />



    </section>
  )
}

export default App
