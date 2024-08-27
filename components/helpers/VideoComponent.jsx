const VideoComponent = () => {
  return (
    <section className='relative overflow-hidden w-full sm:w-[80%] lg:w-[70%] rounded-lg flex flex-col self-center'>
      <video
        src='https://res.cloudinary.com/dc0nkgrxz/video/upload/v1708701381/Work/Video/invideo-ai-1080_Web_Magic__Crafting_Digital_Realities_2024-02-21_aota15.mp4'
        controls
        width='100%'
      />
    </section>
  )
}

export default VideoComponent
