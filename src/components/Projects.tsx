import { ArrowUpRight } from 'lucide-react'
type Project = {
  id: string
  title: string
  category: string
  description: string
  stack: string[]
  size: 'large' | 'small'
}
const projects: Project[] = [
  {
    id: '01',
    title: 'NEON FLUX',
    category: 'E-COMMERCE',
    description:
      'A high-performance headless commerce platform built for speed and conversion.',
    stack: ['NEXT.JS', 'SHOPIFY', 'WEBGL'],
    size: 'large',
  },
  {
    id: '02',
    title: 'RAW DATA',
    category: 'DASHBOARD',
    description: 'Analytics visualization for enterprise data streams.',
    stack: ['REACT', 'D3.JS', 'TAILWIND'],
    size: 'small',
  },
  {
    id: '03',
    title: 'VOID',
    category: 'IDENTITY',
    description: 'Brand identity and digital presence for a stealth startup.',
    stack: ['DESIGN', 'STRATEGY', 'GSAP'],
    size: 'small',
  },
  {
    id: '04',
    title: 'MONOLITH',
    category: 'ARCHITECTURE',
    description:
      'Portfolio site for an award-winning brutalist architecture firm.',
    stack: ['REACT', 'THREE.JS', 'CMS'],
    size: 'large',
  },
]
export function Projects() {
  return (
    <section
      id="work"
      className="w-full bg-dark py-24 px-4 md:px-8 border-t-8 border-accent"
    >
      <div className="max-w-480 mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b-4 border-light pb-4">
          <h2 className="font-archivo text-6xl md:text-9xl text-light tracking-tighter">
            SELECTED
            <br />
            WORK
          </h2>
          <span className="hidden md:block font-mono text-accent text-xl">
            (2023-2024)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-light border-4 border-light hover:bg-accent hover:border-accent transition-colors duration-0 cursor-pointer flex flex-col justify-between min-h-100 md:min-h-125 p-6 md:p-8 ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b-4 border-dark pb-6 mb-6">
                <span className="font-archivo text-4xl md:text-6xl text-dark">
                  {project.id}
                </span>
                <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 stroke-3 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-200" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <span className="inline-block bg-dark text-light px-3 py-1 font-mono text-sm font-bold uppercase">
                  {project.category}
                </span>
                <h3 className="font-archivo text-4xl md:text-5xl leading-none uppercase wrap-break-word">
                  {project.title}
                </h3>
                <p className="font-mono text-sm md:text-base font-bold leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t-4 border-dark flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-bold border-2 border-dark px-2 py-1 uppercase bg-transparent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
