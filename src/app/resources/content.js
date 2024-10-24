import { InlineCode } from '@/once-ui/components'

const person = {
  firstName: 'Leo',
  lastName: 'Rubiano',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Design Content Creator', // Especialista en creación de contenido de diseño y experiencias visuales
  avatar: '/images/avatar.jpg',
  location: 'Asia/Jakarta', // Se puede ajustar según preferencias, pero el enfoque es internacional
  languages: ['English', 'Spanish'], // Añadido español ya que el portafolio parece apuntar a un público diverso
}

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share insights at the
      intersection of creativity and engineering.
    </>
  ),
}

const social = [
  // Links actualizados con la información de la tarjeta
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/itsleodesigner',
  },
  {
    name: 'Fiverr',
    icon: 'fiverr',
    link: 'https://www.fiverr.com/leorubiano',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:example@gmail.com', // Puedes cambiar este email si es necesario
  },
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design content creator and experience builder</>,
  subline: (
    <>
      I'm {person.firstName}, a <InlineCode>{person.role}</InlineCode> with over
      4 years of experience working with thousands of customers globally,
      specializing in YouTube thumbnails, Instagram posts, Facebook covers, and
      more.
    </>
  ),
}

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, a ${person.role} with over 4 years of experience and a diverse portfolio`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Leo is a Design Content Creator known for delivering creative visual
        solutions for platforms such as YouTube, Instagram, Facebook, and
        Twitch. With a focus on photo manipulation, skin retouching, and digital
        designs, Leo helps brands and individuals amplify their online presence
        through impactful design.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Freelance',
        timeframe: '2019 - Present',
        role: 'Design Content Creator',
        achievements: [
          <>
            Worked with thousands of clients globally, creating designs for
            YouTube, Instagram, Facebook, and Twitch.
          </>,
          <>
            Specialized in photo manipulation, skin retouching, and creating
            visual content that drives engagement.
          </>,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Studies',
    institutions: [
      {
        name: 'Self-taught',
        description: (
          <>
            Developed expertise in digital design, photo manipulation, and
            content creation.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical skills',
    skills: [
      {
        title: 'Photoshop',
        description: (
          <>
            Experienced in advanced photo manipulation, retouching, and content
            creation using Adobe Photoshop.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Digital Design',
        description: (
          <>
            Creating engaging designs for social media, advertisements, and
            online branding.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
}

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been working on lately`,
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and development projects by ${person.name}`,
}

const niche_in_category = {
  Nature: ['Travel', 'Lifestyle', 'Technology'],
  Cityscape: ['Travel', 'Lifestyle'],
  Adventure: ['Travel', 'Lifestyle'],
  Landscape: ['Travel', 'Lifestyle'],
  Technology: ['Technology'],
  Travel: ['Travel'],
  Food: ['Food'],
  Fashion: ['Fashion'],
  Lifestyle: ['Lifestyle']
}

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description:  `A curated photo collection by ${person.name}`,
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'Beautiful Landscape',
      title: '',     // Nuevo campo título
      category: 'Nature',              // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true,            // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Tecnología'
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'Urban Exploration',
      title: '',       // Nuevo campo título
      category: 'Cityscape',            // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true,            // Nuevo campo para destacar las mejores imágenes
      offert_alert: true,
      niche: 'Tecnología'

    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'Mountain Hiking',
      title: '',         // Nuevo campo título
      category: 'Adventure',            // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true,            // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Tecnología'

    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'Beach Sunset',
      title: '',            // Nuevo campo título
      category: 'Landscape',            // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true,             // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Tecnología'

    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'City Lights',
      title: '',             // Nuevo campo título
      category: 'Cityscape',            // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true,            // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Tecnología'
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, niche_in_category }
