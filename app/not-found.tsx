import Link from 'next/link';

import Container from '~/components/container';
import { Heading, HeadingEyebrow } from '~/components/heading';
import { Icons } from '~/components/icons';
import { Button } from '~/components/ui/button';

export default function NotFound() {
  return (
    <Container className="flex min-h-screen max-w-3xl flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Komstart</span>
          <Icons.logo className="text-primary h-10 w-auto" />
        </Link>
        <div className="mt-8 flex max-w-lg flex-col items-center text-center">
          <HeadingEyebrow>404 Error</HeadingEyebrow>
          <Heading level={1}>Uh oh, we can&apos;t find that page...</Heading>
          <p className="text-muted-foreground max-w-md text-base">
            We searched high and low, but couldn&apos;t find what you&apos;re
            looking for. Let&apos;s find a better place for you to go.
          </p>
          <div className="mt-8 flex flex-row items-center justify-center gap-x-4">
            <Button variant="outline" asChild>
              <Link href="/" className="mt-8">
                Go back
              </Link>
            </Button>
            <Button asChild>
              <Link href="/" className="mt-8">
                Take me home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
