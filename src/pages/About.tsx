import { PageContainer, Section, ContentWrapper, PageHeader } from '@/components/layout'

export function About() {
  return (
    <PageContainer>
      <Section>
        <ContentWrapper>
          <PageHeader title="About" subtitle="Learn more about our mission" />
          <p>About Page</p>
        </ContentWrapper>
      </Section>
    </PageContainer>
  )
}