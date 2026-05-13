import { useState } from 'react'
import { PageContainer, Section } from '@/components/layout'
import { Card, Button, Input, Textarea } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================
// 1. HERO SECTION
// ============================================
function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-b from-[#FBFAFC] via-[#F7F3FA] to-[#F2EDF8]">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,_rgba(184,169,224,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_50%_50%_at_30%_100%,_rgba(232,200,208,0.12)_0%,_transparent_50%)]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_40%_40%_at_10%_40%,_rgba(200,220,240,0.1)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-6">
              Get in touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D2540] leading-tight">
              You don't have to
              <br />
              <span className="text-[#7D6BC0]">navigate it alone.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#5C5675] max-w-xl mx-auto leading-relaxed">
              Whether you have a question, want to collaborate, or simply need
              someone to hear you — we're here. No pressure, no judgment.
            </p>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  )
}

// ============================================
// 2. CONTACT OPTIONS SECTION
// ============================================
function ContactOptions() {
  const options = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
        </svg>
      ),
      title: 'Instagram',
      description: 'A gentle corner of the internet for daily reminders and mindful moments.',
      link: '@_unfold.within',
      color: 'from-rose-300 to-pink-400',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email',
      description: 'For questions, collaborations, or simply reaching out. Your words are always welcome here.',
      link: 'hello@unfoldwithin.com',
      color: 'from-lavender-400 to-purple-400',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
      ),
      title: 'Phone',
      description: 'For supportive conversations and care inquiries. We are here to listen.',
      link: '+1 (555) 000-0000',
      color: 'from-periwinkle-400 to-blue-400',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Where creativity, wellness, and community meet. Let us connect.',
      link: 'unfoldwithin',
      color: 'from-rose-pink-300 to-rose-400',
    },
  ]

  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
              Many ways to connect
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
              Find us wherever feels right
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((option, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1}>
                <Card variant="elevated" interactive className="h-full group flex flex-col">
                  {/* Gradient blob */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${option.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />

                  <div className="relative flex flex-col flex-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white mb-4 shadow-soft`}>
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#2D2540] mb-2 group-hover:text-[#5C4CA8] transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-[#5C5675] leading-relaxed mb-4 flex-1">
                      {option.description}
                    </p>
                    <span className="text-sm font-medium text-[#7D6BC0] group-hover:text-[#5C4CA8] transition-colors mt-auto">
                      {option.link}
                    </span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </StaggerChildren>
      </PageContainer>
    </Section>
  )
}

// ============================================
// 3. SEND A MESSAGE SECTION
// ============================================
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#F7F3FA] via-[#F2EDF8] to-[#FBFAFC]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(184,169,224,0.08)_0%,_transparent_60%)]" />
      </div>

      <PageContainer>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
                Send a message
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
                Your words are always welcome here
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card variant="elevated" className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#5C5675] mb-2">
                    Your name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="What should we call you?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#5C5675] mb-2">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Where can we reach you?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5C5675] mb-2">
                    Your message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share whatever is on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#9B8AD0] to-[#B8A9E0] hover:shadow-glow-lavender transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </div>

                <p className="text-center text-sm text-[#8B8399]">
                  We typically respond within 24-48 hours.
                </p>
              </form>
            </Card>
          </FadeIn>
        </div>
      </PageContainer>
    </section>
  )
}

// ============================================
// 4. COMMUNITY / SUPPORT SECTION
// ============================================
function Community() {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-6">
              You belong here
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540] leading-tight">
              Healing happens in
              <br />
              <span className="text-[#7D6BC0]">connection.</span>
            </h2>
            <p className="mt-6 text-lg text-[#5C5675] leading-relaxed">
              You're never too much here. Your emotions are valid, your story
              matters, and your presence makes this space more meaningful.
            </p>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}

// ============================================
// 5. FAQ SECTION
// ============================================
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="border border-[#E6DFF0] bg-white rounded-2xl overflow-hidden cursor-pointer"
      onClick={onToggle}
      layout
    >
      <div className="p-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium text-[#2D2540]">
          {question}
        </h3>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-[#F2EDF8] flex items-center justify-center text-[#7D6BC0] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="px-6 pb-6 text-[#5C5675] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How quickly do you reply?',
      answer: 'We aim to respond to all messages within 24-48 hours. Sometimes life gets busy, but we always make sure to connect with everyone who reaches out.',
    },
    {
      question: 'Can I collaborate with Unfold Within?',
      answer: 'We love collaborating with creators, therapists, and brands that align with our mission. Send us a message telling us about your idea and we will get back to you.',
    },
    {
      question: 'Do you accept community stories?',
      answer: 'Absolutely. We believe every voice matters. If you have a story of healing or a mindful moment you would like to share, we would be honored to hear it.',
    },
    {
      question: 'Where can I follow new wellness content?',
      answer: 'Follow us on Instagram @_unfold.within for daily reminders, or sign up for our newsletter to receive tools and insights directly in your inbox.',
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#F2EDF8]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,_rgba(184,169,224,0.1)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-[radial-gradient(ellipse_40%_40%_at_20%_100%,_rgba(232,200,208,0.1)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
              Things you might wonder
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

// ============================================
// 6. CLOSING CTA SECTION
// ============================================
function Closing() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#B8A9E0] via-[#9B8AD0] to-[#8878A0]">
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#B8A9E0]/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_50%_50%_at_80%_100%,_rgba(232,200,208,0.15)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-5xl text-white/40 font-serif leading-none mb-2">"</span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed italic">
              Some conversations
              <br />
              <span className="text-white/90">can change everything.</span>
            </blockquote>
            <span className="inline-block text-5xl text-white/40 font-serif leading-none rotate-180 mt-2">"</span>

            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
              Your healing deserves softness. We are glad you found your way
              here — and we hope to hear from you soon.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@unfoldwithin.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7D6BC0] rounded-full font-medium shadow-soft hover:shadow-glow-lavender transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send us an email</span>
              </a>
              <a
                href="https://instagram.com/_unfold.within"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
                <span>Follow us</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  )
}

// ============================================
// MAIN EXPORT
// ============================================
export function Contact() {
  return (
    <main>
      <Hero />
      <ContactOptions />
      <ContactForm />
      <Community />
      <FAQ />
      <Closing />
    </main>
  )
}