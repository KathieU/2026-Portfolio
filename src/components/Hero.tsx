import { ArrowDown } from 'lucide-react'
export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-4 md:px-8 pt-24 pb-12 relative overflow-hidden bg-light">
      {/* Background Grid Lines - Subtle */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-4 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-r border-dark"></div>
        ))}
      </div>


      <div className="max-w-480 mx-auto w-full relative z-10">
        <div className="flex flex-col port-hero">
          

          <h1 className="font-archivo text-[15vw] leading-[0.8] tracking-tighter text-dark uppercase wrap-break-word">
            Creative
            <br />
            <span className="relative inline-block">
              Dev
              <span className="absolute -bottom-2 md:-bottom-8 left-0 w-full h-[10%] bg-accent -z-10"></span>
            </span>
            <span className="text-stroke ml-4 md:ml-12">&</span>
            <br />
            Designer
          </h1>
        </div>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end border-t-8 border-dark pt-8">
          <p className="font-mono text-sm md:text-base max-w-md font-bold uppercase leading-relaxed">
            Building digital experiences with raw honesty and brutal precision.
            Based in Lagos, Nigeria.
          </p>

          <div className="mt-8 md:mt-0 animate-bounce">
            <ArrowDown className="w-12 h-12 md:w-16 md:h-16 stroke-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
