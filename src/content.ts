export type Lang = 'pt' | 'en'

export const contact = {
  email: 'brunodassis30@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bruno-de-assis-ferreira',
  github: 'https://github.com/brunodassisf',
  whatsapp: 'https://wa.me/5521982947600',
  phone: '(21) 98294-7600',
}

type Role = {
  period: string
  title: string
  company: string
  place: string
  points: string[]
}

type Highlight = {
  title: string
  body: string
  fact: string
  tags: string[]
}

type Content = {
  nav: { work: string; experience: string; stack: string; contact: string }
  langLabel: string
  hero: {
    role: string
    lead: string
    email: string
    github: string
    location: string
    photoAlt: string
  }
  about: { title: string; body: string[] }
  work: { title: string; items: Highlight[] }
  experience: { title: string; roles: Role[] }
  stack: { title: string; groups: { name: string; items: string[] }[] }
  education: {
    title: string
    items: { course: string; school: string; period: string }[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: { title: string; body: string; email: string }
  footer: string
}

const stackItems = {
  languages: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Java', 'SQL'],
  frontend: ['React', 'Next.js', 'Vite', 'Chakra UI', 'Tailwind CSS', 'Styled Components', 'SASS/LESS', 'Vue.js', 'Angular'],
  backend: ['Node.js', 'Express', 'NestJS', 'REST', 'GraphQL', '.NET Core', 'ASP.NET'],
  data: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  devops: ['AWS', 'Docker', 'GitHub Actions', 'Git'],
  practice: ['DDD', 'Monorepo', 'Clean Code', 'Jest', 'TDD', 'Cypress', 'Figma'],
}

export const content: Record<Lang, Content> = {
  pt: {
    nav: { work: 'Destaques', experience: 'Experiência', stack: 'Stack', contact: 'Contato' },
    langLabel: 'Idioma',
    hero: {
      role: 'Desenvolvedor Full Stack Sênior',
      lead: 'Construo aplicações web de ponta a ponta com React, Node.js e TypeScript, do banco de dados à interface.',
      email: 'Enviar e-mail',
      github: 'Ver GitHub',
      location: 'Rio de Janeiro, RJ. Disponível para trabalho remoto.',
      photoAlt: 'Foto de Bruno de Assis sorrindo, de camisa clara e fones de ouvido',
    },
    about: {
      title: 'Sobre',
      body: [
        'São mais de 5 anos entregando produtos web completos: APIs REST em Node.js com MongoDB, PostgreSQL e Redis, interfaces em React com TypeScript e ambientes com Docker e AWS.',
        'Gosto de modernizar sistemas legados, de modelar domínios complexos com DDD e de cuidar da experiência de quem usa o sistema. Trabalho com Clean Code, testes com Jest e Cypress e CI/CD no GitHub Actions. Hoje faço pós-graduação em Desenvolvimento Full Stack na FIAP.',
      ],
    },
    work: {
      title: 'O que já construí',
      items: [
        {
          title: 'Monitoramento de ancoragem offshore',
          body: 'Dashboards em tempo real que mostram a integridade das linhas de ancoragem de plataformas de petróleo, com indicadores visuais de risco e análise estrutural.',
          fact: 'Usados por equipes de 10 a 20 pessoas em cada plataforma.',
          tags: ['React', 'TypeScript', 'REST', 'Figma'],
        },
        {
          title: 'Do desktop em C# para a web',
          body: 'Liderei tecnicamente a migração de um sistema desktop em C# para uma plataforma web em React e TypeScript.',
          fact: 'Cerca de 20 telas e modais migrados ou criados.',
          tags: ['React', 'TypeScript', 'C#'],
        },
        {
          title: 'Cache e filas com Redis',
          body: 'Cache em Redis para uma API Node.js e processos disparados em segundo plano, para que a tela não fique travada esperando outros serviços.',
          fact: 'O tempo de resposta da API caiu de 2 a 5 segundos.',
          tags: ['Node.js', 'Redis', 'MongoDB', 'PostgreSQL'],
        },
      ],
    },
    experience: {
      title: 'Experiência',
      roles: [
        {
          period: '03/2026 - 10/2026',
          title: 'Desenvolvedor Full Stack',
          company: 'Codgo.X',
          place: 'Remoto, tempo integral',
          points: [
            'APIs REST em Node.js (Express) com MongoDB e PostgreSQL, com cache em Redis que reduziu o tempo de resposta em 2 a 5 segundos.',
            'Processamento assíncrono com Redis para liberar o front-end sem bloquear a tela.',
            'Ecossistemas em Monorepo com modelagem de dados aplicando DDD.',
            'Interfaces modulares e acessíveis em React com Chakra UI, e ambientes de desenvolvimento e produção com Docker.',
          ],
        },
        {
          period: '08/2023 - 01/2026',
          title: 'Desenvolvedor Front-end Pleno',
          company: 'Morning Star Consultoria Administrativa',
          place: 'Rio de Janeiro, RJ',
          points: [
            'Liderança técnica na migração de um sistema desktop em C# para React e TypeScript, com cerca de 20 telas e modais.',
            'Dashboards de integridade de linhas de ancoragem em tempo real para plataformas de petróleo.',
            'Interfaces fiéis a protótipos de alta fidelidade no Figma, pensadas para Engenheiros de Campo.',
            'Apoio em serviços Python e Java, dados em PostgreSQL e ambientes com Docker e AWS.',
          ],
        },
        {
          period: '11/2018 - 07/2022',
          title: 'Analista de Suporte / Desenvolvedor Front-end',
          company: 'ARC Soluções',
          place: 'Rio de Janeiro, RJ',
          points: [
            'Sistemas em C#, .NET Core e ASP.NET Web Forms com regras de negócio avançadas.',
            'Interfaces dinâmicas com HTML5, CSS3 e JavaScript, com foco na experiência do usuário.',
            'Levantamento de requisitos direto com clientes, traduzindo necessidades em soluções técnicas.',
          ],
        },
      ],
    },
    stack: {
      title: 'Ferramentas do dia a dia',
      groups: [
        { name: 'Linguagens', items: stackItems.languages },
        { name: 'Front-end', items: stackItems.frontend },
        { name: 'Back-end', items: stackItems.backend },
        { name: 'Bancos de dados', items: stackItems.data },
        { name: 'Cloud e DevOps', items: stackItems.devops },
        { name: 'Arquitetura, testes e design', items: stackItems.practice },
      ],
    },
    education: {
      title: 'Formação',
      items: [
        { course: 'Pós-graduação em Desenvolvimento Full Stack', school: 'FIAP', period: '2026 - 2027, em andamento' },
        { course: 'Tecnólogo em Sistemas para Internet', school: 'Faculdade Estácio de Sá', period: '2016 - 2018' },
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Intermediário alto' },
        { name: 'Espanhol', level: 'Intermediário' },
      ],
    },
    contact: {
      title: 'Tem uma vaga ou um projeto em mente?',
      body: 'Respondo e-mails em até um dia útil. Também estou no LinkedIn e no WhatsApp.',
      email: 'Enviar e-mail',
    },
    footer: 'Bruno de Assis Ferreira',
  },
  en: {
    nav: { work: 'Highlights', experience: 'Experience', stack: 'Stack', contact: 'Contact' },
    langLabel: 'Language',
    hero: {
      role: 'Senior Full Stack Developer',
      lead: 'I build web applications end to end with React, Node.js and TypeScript, from the database to the interface.',
      email: 'Send an email',
      github: 'View GitHub',
      location: 'Rio de Janeiro, Brazil. Open to remote work.',
      photoAlt: 'Photo of Bruno de Assis smiling, wearing a light shirt and headphones',
    },
    about: {
      title: 'About',
      body: [
        'For over 5 years I have shipped complete web products: REST APIs in Node.js with MongoDB, PostgreSQL and Redis, React interfaces in TypeScript, and environments on Docker and AWS.',
        'I enjoy modernizing legacy systems, modeling complex domains with DDD and caring about the experience of the people using the product. I work with Clean Code, Jest and Cypress tests, and CI/CD on GitHub Actions. I am currently doing a postgraduate degree in Full Stack Development at FIAP.',
      ],
    },
    work: {
      title: 'Things I have built',
      items: [
        {
          title: 'Offshore mooring monitoring',
          body: 'Real-time dashboards showing the integrity of mooring lines on oil platforms, with visual risk indicators and structural analysis.',
          fact: 'Used by teams of 10 to 20 people on each platform.',
          tags: ['React', 'TypeScript', 'REST', 'Figma'],
        },
        {
          title: 'From a C# desktop app to the web',
          body: 'I was the technical lead on migrating a C# desktop system to a web platform built with React and TypeScript.',
          fact: 'Around 20 screens and modals migrated or built.',
          tags: ['React', 'TypeScript', 'C#'],
        },
        {
          title: 'Caching and queues with Redis',
          body: 'Redis caching for a Node.js API and background jobs, so the screen never hangs while waiting on other services.',
          fact: 'API response time dropped by 2 to 5 seconds.',
          tags: ['Node.js', 'Redis', 'MongoDB', 'PostgreSQL'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      roles: [
        {
          period: '03/2026 - 10/2026',
          title: 'Full Stack Developer',
          company: 'Codgo.X',
          place: 'Remote, full time',
          points: [
            'REST APIs in Node.js (Express) with MongoDB and PostgreSQL, plus Redis caching that cut response time by 2 to 5 seconds.',
            'Asynchronous processing with Redis so the front end never blocks the screen.',
            'Monorepo ecosystems with data modeling based on DDD.',
            'Modular, accessible React interfaces with Chakra UI, and development and production environments on Docker.',
          ],
        },
        {
          period: '08/2023 - 01/2026',
          title: 'Front-end Developer',
          company: 'Morning Star Consultoria Administrativa',
          place: 'Rio de Janeiro, Brazil',
          points: [
            'Technical lead on migrating a C# desktop system to React and TypeScript, with around 20 screens and modals.',
            'Real-time mooring line integrity dashboards for oil platforms.',
            'Interfaces faithful to high-fidelity Figma prototypes, designed for field engineers.',
            'Support on Python and Java services, PostgreSQL data and Docker and AWS environments.',
          ],
        },
        {
          period: '11/2018 - 07/2022',
          title: 'Support Analyst / Front-end Developer',
          company: 'ARC Soluções',
          place: 'Rio de Janeiro, Brazil',
          points: [
            'Systems in C#, .NET Core and ASP.NET Web Forms with advanced business rules.',
            'Dynamic interfaces with HTML5, CSS3 and JavaScript, focused on user experience.',
            'Requirements gathering directly with clients, turning their needs into technical solutions.',
          ],
        },
      ],
    },
    stack: {
      title: 'Tools I use every day',
      groups: [
        { name: 'Languages', items: stackItems.languages },
        { name: 'Front end', items: stackItems.frontend },
        { name: 'Back end', items: stackItems.backend },
        { name: 'Databases', items: stackItems.data },
        { name: 'Cloud and DevOps', items: stackItems.devops },
        { name: 'Architecture, testing and design', items: stackItems.practice },
      ],
    },
    education: {
      title: 'Education',
      items: [
        { course: 'Postgraduate degree in Full Stack Development', school: 'FIAP', period: '2026 - 2027, in progress' },
        { course: 'Associate degree in Internet Systems', school: 'Faculdade Estácio de Sá', period: '2016 - 2018' },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Upper intermediate' },
        { name: 'Spanish', level: 'Intermediate' },
      ],
    },
    contact: {
      title: 'Have a role or a project in mind?',
      body: 'I reply to emails within one business day. You can also find me on LinkedIn and WhatsApp.',
      email: 'Send an email',
    },
    footer: 'Bruno de Assis Ferreira',
  },
}
