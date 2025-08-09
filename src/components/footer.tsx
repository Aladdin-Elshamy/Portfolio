import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React, TypeScript & ShadCN UI
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              © 2025 Aladdin Elshamy. All rights reserved.
            </p>
          </motion.div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4 absolute" />
          </Button>
        </div>
      </div>
    </footer>
  )
}