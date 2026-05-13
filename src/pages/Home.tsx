import {
  Hero,
  BrandIntro,
  FeaturedToolkits,
  Quote,
  JournalPreview,
  Newsletter,
} from '@/components/sections'

export function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedToolkits />
      <Quote />
      <JournalPreview />
      <Newsletter />
    </>
  )
}