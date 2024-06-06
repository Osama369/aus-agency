'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip"

const instructors = [
    {
      id: 1,
      name: 'Usama Qureshi',
      designation: 'Founder & CEO',
      image: '/services/usama.jpg'
    },
    {
      id: 2,
      name: 'Jawad Soomro',
      designation: 'MobileApp developer',
      image: '/services/Jawad.png'
     
    },
    {
      id: 3,
      name: 'Zahoor Ahmed',
      designation: 'UIUX designer',
      image: '/services/zahoor.jpg'
      
    },
    {
      id: 4,
      name: 'Musawar',
      designation: 'SEO Expert',
      
    },
    {
        id: 5,
        name: 'Arayan',
        designation: 'Web application developer',
        image:'/services/arayan.jpg'
    }
  ];
const Team = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        
        
       <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            
       <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Team</h2>
       <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide and help your business</p>
       <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
        
        </div>
  )
}

export default Team