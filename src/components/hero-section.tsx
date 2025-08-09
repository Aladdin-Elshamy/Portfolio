import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Aladdin Elshamy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed"
            id='home-description'
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            id='home-long-description'
          >
            I craft beautiful, responsive web applications with modern technologies.
            Passionate about creating seamless user experiences and clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            id='home-buttons'
          >
            <Button onClick={scrollToProjects} size="lg" className="px-8 py-6 text-lg">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="px-8 py-6 text-lg">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-12 h-12 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/50 transition-all duration-200"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-12 h-12 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/50 transition-all duration-200"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-12 h-12 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/50 transition-all duration-200"
              asChild
            >
              <a href="mailto:aladdinelshamy@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        id='home-scroll-down'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}