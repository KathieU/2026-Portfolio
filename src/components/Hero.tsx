import { ArrowDown, Mail } from 'lucide-react'
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
          

          <h1 className="font-archivo text-[12vw] leading-[0.8] tracking-tighter text-dark uppercase wrap-break-word">
            Frontend
            <br />
            
            <span className="relative inline-block">
                <span className="absolute w-1/3 h-[10%] bottom-[3%] bg-accent -z-10"></span>
              Developer
              
            </span>
            {/* <span className="text-stroke ml-4 md:ml-12">&</span>
            <br />
            Designer */}
            
          </h1>
           
          <p className="font-mono mt-8 text-sm md:text-lg max-w-lg font-bold uppercase leading-relaxed ml-[1%]">
           
          I help fast-growing startups build scalable websites that turn visitors <span className="text-accent italic">into customers</span>.
          
          </p>
        </div>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end border-t-8 border-dark pt-8">
         
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
    
            <a 
                 href="mailto:udoh.cath@gmail.com" 
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-bold text-lg tracking-wide hover:bg-dark hover:text-accent transition-all flex items-center justify-center gap-2"
            >
                 Work with me
                 <Mail size={20} />
             </a>

            <a 
                href="#work" 
                className="w-full sm:w-auto px-8 py-4 border border-gray-600 text-dark font-bold text-lg tracking-wide hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2"
            >
                View projects
                <ArrowDown size={20} />
            
            </a>
        </div>

          <div className="mt-8 md:mt-0 animate-bounce">
            <ArrowDown className="w-12 h-12 md:w-16 md:h-16 stroke-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
