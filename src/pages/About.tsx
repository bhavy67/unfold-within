import { PageContainer, Section } from '@/components/layout'
import { Card } from '@/components/ui'
import { FadeIn, StaggerChildren } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

// ============================================
// 1. HERO SECTION
// ============================================
function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-b from-[#FBFAFC] via-[#F7F3FA] to-[#F2EDF8]">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_30%_20%,_rgba(184,169,224,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_50%_50%_at_70%_100%,_rgba(232,200,208,0.12)_0%,_transparent_50%)]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_40%_40%_at_90%_30%,_rgba(200,220,240,0.1)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-6">
              Our story begins
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D2540] leading-tight">
              A softer space for minds
              <br />
              <span className="text-[#7D6BC0]">that never slow down.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#5C5675] max-w-2xl mx-auto leading-relaxed">
              We created Unfold Within for everyone who carries quiet battles —
              the overthinking, the late-night racing thoughts, the weight of
              feeling like you're not enough.
            </p>
            <p className="mt-4 text-lg md:text-xl text-[#5C5675] max-w-2xl mx-auto leading-relaxed">
              This is a digital sanctuary where healing doesn't require you to
              be perfect. It just asks you to show up — gently.
            </p>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  )
}

// ============================================
// 2. THE STORY SECTION
// ============================================
function Story() {
  return (
    <Section>
      <PageContainer>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
                How it began
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540] leading-tight">
                Born from our own
                <br />
                <span className="text-[#7D6BC0]">quiet struggles.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="space-y-6 text-lg text-[#5C5675] leading-relaxed">
                <p>
                  In early 2026, two women who had spent years navigating their
                  own emotional landscapes realized something painful: there
                  wasn't a digital space that felt truly safe for mental wellness.
                </p>
                <p>
                  Everything felt either too clinical — cold intake forms and
                  clinical language that made you feel like a case study — or too
                  performative. Wellness turned into content, healing reduced to
                  hashtags.
                </p>
                <p>
                  We wanted something different. A place that acknowledged that
                  healing isn't linear, that some days are harder than others,
                  and that showing up imperfectly is still showing up.
                </p>
                <p>
                  Unfold Within was built in the spaces between our own anxious
                  mornings, our overthinking nights, and our moments of finally
                  breathing. Every feature, every word, every soft color was
                  chosen because we needed it too.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}

// ============================================
// 3. BRAND PHILOSOPHY SECTION
// ============================================
function Philosophy() {
  const principles = [
    {
      quote: "Healing isn't a straight line. It's okay to not be okay.",
      author: "Our belief",
    },
    {
      quote: "Softness isn't weakness. It's the courage to be tender with yourself.",
      author: "Our belief",
    },
    {
      quote: "Growth doesn't have to hurt. It can be gentle, slow, and kind.",
      author: "Our belief",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#F7F3FA] via-[#F2EDF8] to-[#FBFAFC]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(184,169,224,0.08)_0%,_transparent_60%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
              What we believe
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
              Philosophy for the journey
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1}>
                <div className="relative flex flex-col h-full bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-soft border border-[#F2EDF8] hover:shadow-glow-lavender transition-all duration-500 group">
                  {/* Soft glow on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lavender-100/50 to-rose-pink-100/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                  <div className="flex-1">
                    <div className="text-4xl text-[#D4CBF0] font-serif mb-4">"</div>
                    <blockquote className="text-lg md:text-xl text-[#2D2540] leading-relaxed italic">
                      {principle.quote}
                    </blockquote>
                  </div>
                  <cite className="mt-6 block text-sm text-[#8B8399] not-italic">
                    — {principle.author}
                  </cite>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerChildren>
      </PageContainer>
    </section>
  )
}

// ============================================
// 4. CO-FOUNDERS SECTION
// ============================================
function Founders() {
  const founders = [
    {
      name: 'Maya Chen',
      role: 'Co-Founder & Head of Wellness',
      bio: 'With a background in clinical psychology and years of creating mental wellness content, Maya brings deep empathy and clinical insight. She believes technology should feel like a warm hand on your shoulder, not a cold screen.',
      color: 'from-lavender-400 to-purple-400',
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & Creative Director',
      bio: 'A designer who spent a decade building digital experiences for communities. Priya brings the artistic vision that makes Unfold Within feel like coming home. She designs with her heart and her instincts.',
      color: 'from-rose-300 to-pink-400',
    },
  ]

  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium tracking-widest text-[#7D6BC0] uppercase mb-4">
              The hearts behind
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
              Meet the founders
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <FadeIn key={index} delay={0.15 + index * 0.1}>
              <div className="relative group">
                {/* Image placeholder with gradient */}
                <div className={`relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br ${founder.color} mb-8`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2540]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-3xl text-white/60 font-light">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  {/* Decorative blobs */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${founder.color} opacity-30 rounded-full blur-3xl`} />
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${founder.color} opacity-20 rounded-full blur-2xl`} />
                </div>

                {/* Founder info */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#2D2540] mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#7D6BC0] font-medium mb-4">{founder.role}</p>
                  <p className="text-[#5C5675] leading-relaxed max-w-md mx-auto">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-block p-8 md:p-10 bg-gradient-to-br from-[#F2EDF8] to-[#FBFAFC] rounded-2xl max-w-2xl">
              <p className="text-lg md:text-xl text-[#2D2540] leading-relaxed italic">
                "We don't have all the answers. But we know what it feels like to
                need a place like this — and we're building it for you, and for us."
              </p>
              <p className="mt-4 text-[#8B8399]">— Maya & Priya</p>
            </div>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  )
}

// ============================================
// 5. VALUES SECTION
// ============================================
function Values() {
  const values = [
    {
      title: 'Emotional Honesty',
      description: 'We name things as they are. Anxiety is hard. Overthinking is real. And its okay to not be okay.',
    },
    {
      title: 'Gentle Growth',
      description: 'No pressure, no extremes. Growth happens in small, quiet moments. We honor that pace.',
    },
    {
      title: 'Safe Spaces',
      description: 'Every interaction should feel emotionally safe. No judgment, only warmth.',
    },
    {
      title: 'Community Over Perfection',
      description: 'Healing is better together. We are all works in progress, and thats beautiful.',
    },
    {
      title: 'Softness Without Judgment',
      description: 'Being soft is not weak. It takes courage to be tender in a hard world.',
    },
    {
      title: 'Healing Without Pressure',
      description: 'No timelines, no milestones. You do not need to heal perfectly to begin healing.',
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
              What guides us
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2540]">
              Our values
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.05}>
              <Card variant="elevated" className="h-full p-6 md:p-8 group hover:border-lavender-200/50 transition-all duration-300">
                <div className="relative">
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-lavender-300/30 to-rose-pink-300/30 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300`} />
                  <h3 className="text-lg font-semibold text-[#2D2540] mb-3 group-hover:text-[#5C4CA8] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#5C5675] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

// ============================================
// 6. CLOSING SECTION
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
              You do not need to heal perfectly
              <br />
              <span className="text-white/90">to begin healing.</span>
            </blockquote>
            <span className="inline-block text-5xl text-white/40 font-serif leading-none rotate-180 mt-2">"</span>

            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
              Whether this is your first day here or your hundredth — you belong.
              There is no right way to feel. There is only the way that is yours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/toolkits"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7D6BC0] rounded-full font-medium shadow-soft hover:shadow-glow-lavender transition-all duration-300"
              >
                <span>Explore our tools</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/journal"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                <span>Read our journal</span>
              </Link>
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
export function About() {
  return (
    <main>
      <Hero />
      <Story />
      <Philosophy />
      <Founders />
      <Values />
      <Closing />
    </main>
  )
}