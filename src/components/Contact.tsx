
import { SiGithub, SiTiktok, SiX } from "react-icons/si";
export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-dark py-32 px-4 md:px-8 min-h-screen flex flex-col justify-between"
    >
      <div className="max-w-480 mx-auto w-full">
        <div className="mb-24">
          <h2 className="font-archivo text-[12vw] leading-[0.8] text-light tracking-tighter uppercase mb-8">
            Let's
            <br />
            <span className="text-accent">Work</span>
            <br />
            Together
          </h2>
          <p className="text-light font-mono text-lg md:text-xl max-w-xl leading-relaxed">
            Available for freelance projects and open to full-time
            opportunities. If you have a project that needs a bold approach, get
            in touch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <a
            href="mailto:udoh.cath@gmail.com"
            className="group relative inline-block"
          >
            <span className="font-archivo text-4xl md:text-6xl text-light group-hover:text-accent transition-colors duration-200">
              udoh.cath@gmail.com
            </span>
            <div className="w-full h-2 bg-light group-hover:bg-accent mt-2 transition-colors duration-200"></div>
          </a>

          <div className="flex gap-4 md:gap-6">
            {[
              {
                icon: SiGithub,
                label: 'Github',
                link: 'https://github.com/KathieU',
              },
              {
                icon: SiTiktok,
                label: 'TikTok',
                link: 'https://www.tiktok.com/@gutenberg_girl',
              },
              {
                icon: SiX,
                label: 'X (Twitter)',
                link: 'https://x.com/Gutenberg_Girl',
              },
            ].map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                className="w-16 h-16 md:w-20 md:h-20 border-4 border-light flex items-center justify-center hover:bg-accent hover:border-accent hover:text-dark text-light transition-all duration-200 group"
                aria-label={label}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 border-t-4 border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#666] font-mono text-sm uppercase font-bold">
        <span>© 2026 Brutalist Portfolio</span>
        <span>Designed & Built with React</span>
      </div>
    </section>
  )
}
