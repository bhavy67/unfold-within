import { PageContainer, Section, ContentWrapper, PageHeader } from '@/components/layout'

export function Journal() {
  return (
    <PageContainer>
      <Section>
        <ContentWrapper>
          <PageHeader title="Journal" subtitle="Your personal reflection space" />
          <p>Journal Page</p>
        </ContentWrapper>
      </Section>
    </PageContainer>
  )
}