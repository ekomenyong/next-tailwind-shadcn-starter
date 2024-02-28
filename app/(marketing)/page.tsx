import Container from '~/components/container';
import { Heading, HeadingEyebrow } from '~/components/heading';
import ThemeToggle from '~/components/theme-toggle';

export default function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24">
      <Container className="mx-auto max-w-3xl text-center">
        <div className="mb-8">
          <HeadingEyebrow className="mx-auto" variant="gradient">
            KOMSTART
          </HeadingEyebrow>
          <Heading level={1} wrapBalance>
            This is the marketing site home page.
          </Heading>
        </div>
        <ThemeToggle />
      </Container>
    </section>
  );
}
