
function MeetingTypeList() {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      Meeting Type List
      <div
        className='bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer'
        onClick={() => console.log('Box 1')}
      >
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
          <img src={`${import.meta.env.BASE_URL}/icons/add-meeting.svg`} alt='add meeting' width={27} height={27} />
        </div>
      </div>
    </section>
  )
};

export default MeetingTypeList;
