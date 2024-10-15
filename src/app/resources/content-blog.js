import { InlineCode } from "@/once-ui/components";
import Link from 'next/link';

const person = {
    firstName: 'Leo',
    lastName:  'Rubiano',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Content Creator',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta', // Enfocado internacionalmente según la tarjeta
    languages: ['English', 'Spanish']  // Añadido español ya que tiene presencia global
};

const newsletter = {
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
};

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
        link: 'mailto:example@gmail.com', // Actualiza el email si es necesario
    },
];

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Design content creator and experience builder</>,
    subline: <>I'm {person.firstName}, a <InlineCode>{person.role}</InlineCode> with over 4 years of experience working with thousands of clients globally. Specializing in YouTube thumbnails, Instagram posts, Facebook covers, and more.</>
};

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} with a global portfolio.`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: 
        <>
            <p>Leo Rubiano is a Design Content Creator with over 4 years of experience working with clients worldwide. His work spans across creating YouTube thumbnails, Instagram posts, Facebook covers, Twitch designs, photo manipulation, and more.</p>
            <p>From crafting engaging <Link href="/work">visual content</Link> to building impactful digital experiences, Leo specializes in the intersection of creativity and design to deliver work that amplifies online presence and boosts engagement.</p>
        </>
    },
    work: {
        display: true, // Set to true to display this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance',
                timeframe: '2019 - Present',
                role: 'Design Content Creator',
                achievements: [
                    <>Collaborated with thousands of clients globally to create content for YouTube, Instagram, and Facebook.</>,
                    <>Specialized in photo manipulation, skin retouching, and other visual enhancements to drive user engagement.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Self-taught',
                description: <>Developed expertise in digital design, content creation, and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // Set to true to display this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Photoshop',
                description: <>Advanced skills in photo manipulation, skin retouching, and digital design using Adobe Photoshop.</>,
                images: [ ]
            },
            {
                title: 'Digital Design',
                description: <>Specializes in creating visually engaging content for social media, ads, and branding projects.</>,
                images: [ ]
            }
        ]
    }
};

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and development projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A curated photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        // Puedes añadir más imágenes relevantes si es necesario
    ]
};

export { person, social, newsletter, home, about, blog, work, gallery };
