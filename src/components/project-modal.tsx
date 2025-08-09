import { motion } from 'framer-motion'
import {  ExternalLink, Code } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  challenges: string[]
  solutions: string[]
  features: string[]
  timeline: string
  team: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold pr-8">{project.title}</DialogTitle>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Key Features
              </h4>
              <ul className=" grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timeline
                </h4>
                <p className="text-sm text-muted-foreground">{project.timeline}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Team
                </h4>
                <p className="text-sm text-muted-foreground">{project.team}</p>
              </div>
            </div> */}
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3">Challenges & Solutions</h4>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-medium mb-1">Challenge:</p>
                  <p className="text-sm text-muted-foreground mb-2">{challenge}</p>
                  <p className="text-sm font-medium mb-1">Solution:</p>
                  <p className="text-sm text-muted-foreground">{project.solutions[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}