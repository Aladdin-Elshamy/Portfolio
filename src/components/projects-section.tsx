import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProjectModal, type Project } from './project-modal'
import souqImage from '@/assets/souq.png'
import chatGptClonImage from '@/assets/chatgpt-clone.png'
import blogVerse from '@/assets/blog-verse.png'
import listfy from '@/assets/listfy.png'
import montgat from '@/assets/montgat.png'
import cera from '@/assets/cera.png'
import boostTodo from '@/assets/boost-todo.png'
import akhtbrat from '@/assets/akhtbrat.png'
import champions from '@/assets/champions.png'
const projects: Project[] = [
  {
    id: '1',
    title: 'Souq',
    description: 'A modern, full-stack platform for managing e-commerce products.',
    longDescription: 'Souq is a full-stack, responsive e-commerce product management platform that allows users to create, edit, and delete products seamlessly. The application features a modern, user-friendly interface with support for both dark and light themes. It is built with a robust tech stack to ensure scalability, performance, and an excellent user experience.',
    image: souqImage,
    technologies: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Chakra UI', 'Node.js', 'MongoDB', 'Express.js'],
    liveUrl: 'https://souq-84z1.onrender.com',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Souq',
    challenges: [
      'Designing a scalable architecture to manage product data efficiently',
  'Handling state across multiple components while keeping the UI responsive',
  'Ensuring consistent theming and accessibility across both light and dark modes'
    ],
    solutions: [
      'Built a structured backend with Node.js, Express, and MongoDB to handle CRUD operations and maintain scalability',
  'Used Zustand for lightweight, predictable state management, simplifying global state handling',
  "Implemented Chakra UI's theming system with Tailwind utilities to support responsive design and accessible light/dark theme toggling"
    ],
    features: [
      'Product Management: Create, edit, and delete products with ease.',
      'Responsive Design: Optimized for both desktop and mobile devices.',
      'Dark/Light Theme: Toggle between dark and light themes for a personalized user experience.',
      'State Management: Efficient state handling with Zustand for smooth front-end interactions.',
      'RESTful API: Backend powered by Node.js and Express for reliable and fast operations.',
      'Modern UI: Built with React and Chakra UI for a sleek, intuitive interface.'
    ],
    timeline: '3 months',
    team: 'Solo project with design consultation'
  },
  {
    id: '2',
    title: 'Chatgpt Clone',
    description: 'A frontend project mimicking the OpenAI ChatGPT interface and functionalities.',
    longDescription: "A frontend project that replicates the interface and basic functionalities of OpenAI's ChatGPT. This project allows users to interact with a simulated chatbot experience similar to ChatGPT, showcasing how you can implement dynamic conversational UIs using React.",
    image: chatGptClonImage,
    technologies: ['HTML','CSS','JavaScript','React', 'Firebase','Tailwind CSS'],
    liveUrl: 'https://www.dropbox.com/scl/fi/htzsjjk41dbzhntiej3oe/1009.mp4?rlkey=k81t8v0cgj6xz71lwy26p543x&st=34jhe1i7&dl=0',
    githubUrl: 'https://github.com/Aladdin-Elshamy/ChatGPT-Clone',
    challenges: [
      'Mimicking the ChatGPT UI and ensuring responsiveness across devices',
      'Creating a smooth and realistic typing simulation for chatbot responses',
      'Maintaining clean component structure while rendering dynamic chat messages'
    ],
    solutions: [
      'Used Tailwind CSS to build a responsive, pixel-perfect UI matching ChatGPT’s layout',
      'Implemented typing indicators and timed response delays to simulate real-time interactions',
      'Structured components effectively using React hooks and conditional rendering for maintainability'
    ],
    features: [
      'User-friendly chat interface.',
      'Simulated conversation flow with chatbot responses.',
      'Real-time message rendering and typing simulation.',
      'Responsive design, suitable for both desktop and mobile devices.',
      'React-based architecture.',
    ],
    timeline: '4 months',
    team: '3 developers, 1 designer'
  },
  {
    id: '3',
    title: 'Blog Verse',
    description: 'A full-stack blog platform for creating, editing, and discovering blogs.',
    longDescription: 'A full-stack blog application where users can sign up, sign in, create, edit, and delete blogs, as well as read and search for blogs by author name, tags, or title. Built with React, Tailwind CSS, Node.js, and Express.',
    image: blogVerse,
    technologies: ['React', 'Tailwind CSS', 'TypeScript','NodeJs','Express.js', 'MongoDB'],
    liveUrl: 'https://blog-verse-06tc.onrender.com/',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Blog-Verse',
    challenges: [
      'Implementing secure and efficient user authentication',
      'Designing a dynamic and user-friendly blog editor interface',
      'Building a robust search feature to filter blogs by title, author, or tags'
    ],
    solutions: [
      'Used JWT-based authentication with hashed passwords for secure login and user session handling',
      'Built a markdown-based editor with live preview to enhance the writing experience',
      'Implemented flexible search queries in the backend using MongoDB’s indexing and filtering capabilities'
    ],
    features: [
      'User Authentication: Sign up and sign in securely to access personalized features.',
      'Blog Management: Create, edit, and delete blog posts.',
      'Blog Search: Search blogs by author name, tags, or title.',
      'Responsive Design: Fully responsive UI built with Tailwind CSS for seamless use on all devices.',
      'RESTful API: Backend powered by Node.js and Express for efficient data handling.',
    ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '4',
    title: 'Listfy',
    description: 'A comprehensive to-do application for efficient task management.',
    longDescription: 'Listfy is a full-stack to-do application designed to help users manage their tasks efficiently. Users can register, log in, create, edit, delete, and sort their to-dos, with pagination for a seamless experience. The frontend is deployed on Vercel, while the backend is powered by Strapi, a headless CMS, ensuring a robust and scalable architecture.',
    image: listfy,
    technologies: ['React', 'Tailwind CSS', 'TypeScript','Strapi'],
    liveUrl: 'https://listfy-nine.vercel.app/',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Listfy-frontend',
    challenges: [
      'Integrating Strapi authentication with the frontend using JWT',
      'Designing a clean and intuitive UI for task creation and management',
      'Implementing efficient pagination and sorting for a large number of tasks'
    ],
    solutions: [
      'Configured Strapi’s authentication system and used JWT tokens to manage user sessions securely in the frontend',
      'Built a responsive and accessible interface using React, Tailwind, and conditional rendering for different task states',
      'Implemented server-side pagination and sorting with query parameters to ensure smooth performance and usability'
    ],
    features: [
      'User Authentication: Sign up and sign in securely to access personalized features.',
      'Todo Management: Create, edit, and delete todos with ease.',
      'Task Sorting: Sort to-dos based on creation date.',
      'Pagination: Navigate through large lists of to-dos with efficient pagination.',
      'Task Generation: Generate sample to-dos for testing or quick setup.',
      'Responsive Design: Fully responsive UI built with Tailwind CSS for seamless use on all devices.',
      'Backend with Strapi: A headless CMS for managing to-do data, user accounts, and API endpoints.',
      'Query-Based Filtering: Use query parameters to filter and retrieve specific to-dos.'
    ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '5',
    title: 'Montgat',
    description: 'A modern project management web application with minimalistic design and smooth animations.',
    longDescription: 'Montgat is a modern web application that combines minimalistic design and smooth animations to provide users with an engaging experience. The site is fully responsive, offering optimal performance across all devices, from mobile phones to large screens.',
    image: montgat,
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://montgat.vercel.app/',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Montgat',
    challenges: [
      'Ensuring smooth UI animations without affecting performance across different devices.',
      'Maintaining type safety while working with dynamic user and task data.',
      'Building reusable components that adapt to different product and task management views.'
    ],
    solutions: [
      'Leveraged Tailwind CSS transitions and React state optimizations to achieve smooth, non-blocking animations.',
      'Used TypeScript to enforce strict typing, reducing bugs when managing user inputs and API responses.',
      'Built modular, customizable components to support both task and product management, enhancing scalability and maintainability.'
    ],
    features: [
      'Product Management: Allows users to add new products by specifying details such as the product name, image, color options, price, and description.',
      'Edit and Delete Functionality: Provides the ability to update product details or remove products entirely.',
      'User-Friendly Interface: Simple and intuitive design with easy navigation.',
      'Responsive Design: Fully responsive, ensuring a seamless experience across devices (desktops, tablets, and mobile phones).',
      'Smooth Animations: Well-crafted animations enhance interactivity without overwhelming the user.',
      'Performance Optimized: Deployed on Vercel for fast and reliable access.',
      'Customizable Components: Easily adjustable to match your needs with reusable and modular components.',
      ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '6',
    title: 'Cera Store',
    description: 'A sophisticated online e-commerce platform dedicated to providing a wide range of high-quality bags and shoes.',
    longDescription: 'Cera Store is a sophisticated online platform dedicated to providing a wide range of high-quality bags and shoes. This README will guide you through the features, installation process, and how to contribute to the project.',
    image: cera,
    technologies: ['HTML', 'CSS','React', 'React Router', 'JavaScript'],
    liveUrl: 'https://aladdin-elshamy.github.io/Cera-Store',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Cera-Store',
   challenges: [
      'Creating a responsive layout that maintains design consistency across various devices and screen sizes.',
      'Implementing a dynamic routing system to handle individual product pages and navigation.',
      'Managing cart and wishlist functionality without external state management libraries.'
    ],
    solutions: [
      'Used CSS media queries and flexible layouts to ensure the UI remains consistent and accessible on all screen sizes.',
      'Leveraged React Router to build a dynamic and intuitive navigation experience for product listings and details.',
      'Implemented custom React hooks and localStorage to manage cart and wishlist states persistently and efficiently.'
    ],
    features: [
      'User-Friendly Interface: A clean and intuitive design that makes navigation and product search effortless.',
      'Product List: Browse through a wide selection of bags and shoes, including casual, formal, and athletic options.',
      'Product Details: Detailed information on each product, including images, descriptions, and prices.',
      'Responsive Design: Accessible on multiple devices, ensuring a seamless experience on desktops, tablets, and mobile phones.',
      'Shopping Cart: Add items to your cart for easy checkout.',
      'Wishlist: Manage your favorite products for future purchases.',
      ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '7',
    title: 'Boost Todo',
    description: 'A responsive and efficient task management web application.',
    longDescription: 'Boost Todo is a responsive and efficient task management web application built using React, Context API for state management, and Tailwind CSS. It allows users to easily add, manage, and track their tasks in a clean, modern interface.',
    image: boostTodo,
    technologies: [ 'HTML', 'CSS', 'JavaScript','React', 'React Context','Tailwind CSS'],
    liveUrl: 'https://boost-todo.vercel.app',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Boost-Todo',
    challenges: [
      'Managing global state efficiently without introducing unnecessary re-renders.',
      'Ensuring persistent task data across sessions without a backend.',
      'Designing a responsive and intuitive UI for managing tasks on different screen sizes.'
    ],
    solutions: [
      'Utilized React Context API to manage global task state while keeping component structure clean and efficient.',
      'Implemented localStorage to store and retrieve tasks, ensuring persistence across browser sessions.',
      'Built a fully responsive layout using Tailwind CSS to maintain usability on all device sizes.'
    ],
    features: [
      'Add new tasks with ease.',
      'Edit an existing task with ease.',
      'Persistent data storage using localStorage, so tasks remain saved even after refreshing the page.',
      'Mark tasks as completed or pending.',
      'Remove or delete tasks.',
      'Responsive and mobile-friendly design.',
      'State management powered by React Context API.',
      'Clean and minimalist user interface.',
      ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '8',
    title: 'Akhtbrat Quiz App',
    description: 'Akhtbrat Quiz App is a website that allows users to test their knowledge by taking quizzes on various topics.',
    longDescription: 'Akhtbrat Quiz App is a website that allows users to test their knowledge by taking quizzes on various topics. The app provides an interactive and engaging experience for users to challenge themselves and learn new things.',
    image: akhtbrat,
    technologies: [ 'HTML', 'CSS', 'JavaScript','React'],
    liveUrl: 'https://aladdin-elshamy.github.io/Akhtbrat_Quiz_App/',
    githubUrl: 'https://github.com/Aladdin-Elshamy/Akhtbrat_Quiz_App',
    challenges: [
      'Handling dynamic quiz data and ensuring questions are randomized for each attempt.',
      'Tracking and updating user scores in real-time during the quiz.',
      'Designing a responsive and engaging UI that works well on all devices.'
    ],
    solutions: [
      'Implemented a question bank system with randomization logic to ensure each quiz feels unique.',
      'Used React state management to update and display scores instantly as the user progresses.',
      'Built a responsive layout using CSS and React components to maintain accessibility and usability across devices.'
    ],
    features: [
      'Multiple quizzes: The app offers a variety of quizzes on different topics, allowing users to choose the ones they are interested in.',
      'Question bank: Each quiz consists of a set of questions randomly selected from a question bank, ensuring a unique experience every time.',
      'Score tracking: Users can see their score in real-time as they progress through the quiz, providing motivation and feedback.',
      ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
  {
    id: '9',
    title: 'The Champions',
    description: 'The Champions is a web-based platform designed to showcase and celebrate the achievements and stories of champions from various fields.',
    longDescription: 'The Champions is a web-based platform designed to showcase and celebrate the achievements and stories of champions from various fields. This website serves as a tribute to individuals who have made significant contributions and the writer.',
    image: champions,
    technologies: [ 'HTML', 'CSS', 'JavaScript','Firebase'],
    liveUrl: 'https://aladdin-elshamy.github.io/The-Champions/',
    githubUrl: 'https://github.com/Aladdin-Elshamy/The-Champions',
    challenges: [
      'Structuring and displaying diverse champion stories in an engaging and organized way.',
      'Implementing a system to collect and display visitor endorsements in real-time.',
      'Ensuring the platform remains visually appealing and fully responsive across all devices.'
    ],
    solutions: [
      'Designed a clean content layout that highlights each champion’s story with emphasis on readability and impact.',
      'Integrated Firebase to handle real-time storage and retrieval of visitor endorsements.',
      'Applied responsive design techniques using CSS to ensure optimal viewing on mobile, tablet, and desktop.'
    ],
    features: [
      'Inspiring biographies and stories of remarkable individuals from various fields.',
      'Interactive elements to engage and educate visitors about the featured champions.',
      'Utilization of Firebase to store endorsements from visitors and display them on the website.',
      'Responsiveness for seamless viewing across various devices'
      ],
    timeline: '6 months',
    team: '4 developers, 2 designers, 1 PM'
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-left px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents
            a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => openProjectModal(project)}
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GitHubLogoIcon className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}