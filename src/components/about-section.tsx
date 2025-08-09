import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link1Icon } from '@radix-ui/react-icons'

const skills = [
  'HTML','CSS','JavaScript','TypeScript','React', 'Next.js', 'Angular','Tailwind CSS', 'Bootstrap', 'SASS/SCSS', 'LESS','Node.js', 'Express.js','MongoDB','Firebase', 'Stripe','SonarQube'
]

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Ceptems',
    location:'United States',
    url: 'https://ceptems.com',
    period: '02/2025 - Present',
    description: 'Worked on the development of an AI-focused chatbot project using React and TypeScript, collaborating closely with backend and machine learning teams to deliver a seamless user experience.',
    icon: Award
  },
  {
    title: 'Frontend Developer',
    company: 'Homains',
    location:'Harjumaa',
    url: 'https://www.homains.eu',
    period: '12/2024 - 03/2025',
    description: 'Contributed to the development of real-world web applications using React and Angular, collaborating within an Agile team to deliver intuitive features while ensuring clean, maintainable code.',
    icon: Users
  },
  {
    title: 'Frontend Developer',
    company: 'Mindset Training',
    location:'Egypt',
    url: 'https://mindset-training.tech',
    period: '08/2024 - 09/2024',
    description: 'Completed an intensive frontend training program where I built advanced React projects from scratch, refined my UI/UX implementation skills, and delivered clean, responsive designs with real-world functionality.',
    icon: MapPin
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          As a dedicated software engineer, I thrive on transforming complex challenges into elegant, user-friendly solutions. My passion lies in crafting seamless digital experiences that blend functionality with thoughtful design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                 Started my journey in web development during college, where I discovered my passion for creating intuitive user interfaces. Since then, I've worked with startups and established companies, always focusing on delivering exceptional user experiences.
                </p>
                <p className="text-muted-foreground">
                  What drives me most is the ability to turn ideas into interactive, user-friendly interfaces that make people’s lives easier. I enjoy digging into the details, whether it's optimizing performance, refining responsiveness, or bringing a design to life with smooth animations.
                </p>
                
                <p className="text-muted-foreground">
                  When I’m not coding, I’m usually challenging myself with a good book, experimenting with new tech tools, or staying active through boxing — a great way to keep both mind and body sharp. I believe that growth happens both inside and outside the code editor, and I’m always looking for opportunities to learn, build, and share.
                </p>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Experience
                </CardTitle>
                <CardDescription>
                  My professional journey so far
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <a href={exp.url} className="text-primary flex items-center gap-2">{exp.company} <Link1Icon className="w-4 h-4" /></a>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}