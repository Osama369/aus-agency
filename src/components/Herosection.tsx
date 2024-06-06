import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Empower your business with the best software solutions
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Boost your business with our innovative software solutions. Whether you&apos;re a startup or an enterprise, our expert team is here to bring your vision to life. Join us to harness technology and drive your success.
        </p>
        <div className="mt-4">
          <Link href="/about">
            <Button>Explore Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
