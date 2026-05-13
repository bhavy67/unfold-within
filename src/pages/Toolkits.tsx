import { PageContainer, Section, PageHeader } from '@/components/layout'
import { ToolkitCard, ToolkitGrid } from '@/components/toolkit'
import { FadeIn } from '@/components/ui/FadeIn'
import { toolkits } from '@/data/toolkits'

export function Toolkits() {
  return (
    <PageContainer>
      <Section>
        <FadeIn>
          <PageHeader
            title="Toolkits"
            subtitle="Practical tools for your wellness journey"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ToolkitGrid>
            {toolkits.map((toolkit) => (
              <ToolkitCard key={toolkit.id} toolkit={toolkit} />
            ))}
          </ToolkitGrid>
        </FadeIn>
      </Section>
    </PageContainer>
  )
}