export function Skills() {
  const skills = [
    {
      name: 'FRONTEND DEV',
      level: 'EXPERT',
    },
    {
      name: 'UI/UX DESIGN',
      level: 'ADVANCED',
    },
    {
      name: 'REACT / NEXT.JS',
      level: 'EXPERT',
    },
    {
      name: 'TYPESCRIPT',
      level: 'ADVANCED',
    },
    {
      name: 'MOTION',
      level: 'INTERMEDIATE',
    },
    {
      name: 'BACKEND',
      level: 'COMPETENT',
    },
    {
      name: 'ACCESSIBILITY',
      level: 'ADVANCED',
    },
    {
      name: 'PERFORMANCE',
      level: 'EXPERT',
    },
  ]
  return (
    <section
      id="skills"
      className="w-full bg-light py-24 px-4 md:px-8 border-b-8 border-dark"
    >
      <div className="max-w-480 mx-auto">
        <h2 className="font-archivo text-6xl md:text-9xl text-dark tracking-tighter mb-16 uppercase">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t-8 border-dark">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex items-center justify-between py-8 border-b-4 border-dark hover:bg-accent transition-colors duration-0 px-4 -mx-4"
            >
              <div className="flex items-baseline gap-6 md:gap-8">
                <span className="font-archivo text-4xl md:text-6xl text-accent text-stroke group-hover:text-dark group-hover:text-stroke-none transition-all duration-0">
                  {`0${index + 1}`}
                </span>
                <h3 className="font-archivo text-2xl md:text-4xl text-dark uppercase">
                  {skill.name}
                </h3>
              </div>
              <span className="hidden md:block font-mono font-bold text-sm border-2 border-dark px-2 py-1 uppercase">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
