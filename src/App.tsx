import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import photo from './assets/image.png'
import { contact, content, type Lang } from './content'

const STORAGE_KEY = 'portfolio-lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // storage unavailable, fall back to browser language
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>

      <header className="nav">
        <div className="container nav__inner">
          <a href="#top" className="nav__brand">
            Bruno de Assis
          </a>
          <nav aria-label={lang === 'pt' ? 'Seções' : 'Sections'}>
            <ul className="nav__links">
              <li><a href="#destaques">{t.nav.work}</a></li>
              <li><a href="#experiencia">{t.nav.experience}</a></li>
              <li><a href="#stack">{t.nav.stack}</a></li>
              <li><a href="#contato">{t.nav.contact}</a></li>
            </ul>
          </nav>
          <div className="lang" role="group" aria-label={t.langLabel}>
            {(['pt', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                className="lang__btn"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero container" id="top">
          <div className="hero__text">
            <p className="hero__role">{t.hero.role}</p>
            <h1 className="hero__name" aria-label="Bruno de Assis">
              <span aria-hidden="true">Bruno de</span>
              <span aria-hidden="true">Assis</span>
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={`mailto:${contact.email}`}>
                <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
                {t.hero.email}
              </a>
              <a className="btn btn--ghost" href={contact.github} target="_blank" rel="noreferrer">
                <GithubLogo size={20} weight="bold" aria-hidden="true" />
                {t.hero.github}
              </a>
            </div>
            <p className="hero__location">{t.hero.location}</p>
          </div>
          <figure className="hero__photo">
            <img src={photo} alt={t.hero.photoAlt} width={960} height={960} fetchPriority="high" />
          </figure>
        </section>

        <section className="about container" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title">{t.about.title}</h2>
          <div className="about__body">
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="work container" id="destaques" aria-labelledby="work-title">
          <h2 id="work-title" className="section-title">{t.work.title}</h2>
          <div className="work__grid">
            {t.work.items.map((item, i) => (
              <article key={item.title} className={`case case--${i + 1}`}>
                <h3 className="case__title">{item.title}</h3>
                <p className="case__body">{item.body}</p>
                <p className="case__fact">{item.fact}</p>
                <ul className="tags" aria-label="Stack">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience container" id="experiencia" aria-labelledby="exp-title">
          <h2 id="exp-title" className="section-title">{t.experience.title}</h2>
          <ol className="timeline">
            {t.experience.roles.map((role) => (
              <li key={role.company} className="timeline__item">
                <p className="timeline__period">{role.period}</p>
                <div className="timeline__content">
                  <h3 className="timeline__title">{role.title}</h3>
                  <p className="timeline__company">
                    {role.company}
                    <span className="timeline__place">{role.place}</span>
                  </p>
                  <ul className="timeline__points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="stack container" id="stack" aria-labelledby="stack-title">
          <h2 id="stack-title" className="section-title">{t.stack.title}</h2>
          <div className="stack__groups">
            {t.stack.groups.map((group) => (
              <div key={group.name} className="stack__group">
                <h3 className="stack__name">{group.name}</h3>
                <ul className="tags tags--lg">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="education container" aria-labelledby="edu-title">
          <div>
            <h2 id="edu-title" className="section-title">{t.education.title}</h2>
            <ul className="edu__list">
              {t.education.items.map((item) => (
                <li key={item.course}>
                  <p className="edu__course">{item.course}</p>
                  <p className="edu__meta">
                    {item.school}, {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">{t.education.languagesTitle}</h2>
            <dl className="langs">
              {t.education.languages.map((l) => (
                <div key={l.name} className="langs__row">
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="container contact__inner">
            <h2 id="contact-title" className="contact__title">{t.contact.title}</h2>
            <p className="contact__body">{t.contact.body}</p>
            <a className="contact__email" href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowUpRight size={28} weight="bold" aria-hidden="true" />
            </a>
            <ul className="contact__links">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={20} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <GithubLogo size={20} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsappLogo size={20} aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} {t.footer}</p>
      </footer>
    </>
  )
}

export default App
