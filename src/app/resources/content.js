import { InlineCode } from '@/once-ui/components'

const person = {
  firstName: 'Leo',
  lastName: 'Rubiano',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Digital Designer', // Especialista en creación de contenido de diseño y experiencias visuales
  avatar: '/images/avatar.jpg',
  location: 'Asia/Jakarta', // Se puede ajustar según preferencias, pero el enfoque es internacional
  languages: ['English', 'Spanish'], // Añadido español ya que el portafolio parece apuntar a un público diverso
}

const newsletter = {
  display: false,
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
    link: 'businessleorubiano@gmail.com', // Puedes cambiar este email si es necesario
  },
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning Ideas Into Eye-Catching Visuals</>,
  subline: (
    <>
      Crafting exceptional digital experiences through innovative design and development.
    </>
  )
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
    title: 'Traveling and Working',
    description: [
      'Hey there! I’m a passionate digital designer with over 4 years of hands-on experience in Photoshop and other design software, specializing in creating engaging and eye-catching social media designs.',
      'Throughout my career, I’ve had the privilege of collaborating with thousands of clients worldwide, transforming ideas into visual stories that captivate audiences. Whether it’s building a brand’s identity, crafting promotional content, or designing stunning thumbnails that boost engagement, I’m dedicated to bringing creativity and impact to every project.',
    ],
  },

  bilingual: {
    display: true,
    title: 'Bilingual Expertise',
    experiences: [
      {
        languages: 'English and Spanish',
        achievements: [
          <>
            Fluent in both English and Spanish, I effortlessly connect and
            collaborate with a diverse range of clients globally. Additionally,
            I can create and adapt visuals in other languages, ensuring that
            every design communicates effectively, regardless of the audience.
            Language is no barrier when it comes to delivering impactful and
            engaging content!
          </>,
        ],
        images: [
          {
            src: '',
            alt: '',
            width: 0,
            height: 0,
          },
        ],
      },
    ],
  },
  callToAction: {
    display: true,
    title: 'Let’s Work Together',
    description: (
      <>
        Let’s work together and make something extraordinary that leaves a
        lasting impression!
      </>
    ),
    button: {
      label: 'Contact Me',
      link: '/contact', // Actualiza con la ruta correcta a tu página de contacto
    },
  },
  // Elimina o no incluyas las siguientes secciones si no las necesitas:
  // technical: { ... },
  // studies: { ... },
  // work: { ... },
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
  Lifestyle: ['Lifestyle'],
}

const gallery = {
  label: 'Gallery',
  title: 'My works',
  description: `A curated photo collection by ${person.name}`,
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'Beautiful Landscape',
      title: '', // Nuevo campo título
      category: 'Nature', // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true, // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Finance',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'Urban Exploration',
      title: '', // Nuevo campo título
      category: 'Cityscape', // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true, // Nuevo campo para destacar las mejores imágenes
      offert_alert: true,
      niche: 'Podcast',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'Mountain Hiking',
      title: '', // Nuevo campo título
      category: 'Adventure', // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true, // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Real Estate',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'Beach Sunset',
      title: '', // Nuevo campo título
      category: 'Landscape', // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true, // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Health & Fitness',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'City Lights',
      title: '', // Nuevo campo título
      category: 'Cityscape', // Nuevo campo categoría
      orientation: 'vertical',
      is_best_seller: true, // Nuevo campo para destacar las mejores imágenes
      offert_alert: false,
      niche: 'Gaming',
    }
  ],
}

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  niche_in_category,
}
