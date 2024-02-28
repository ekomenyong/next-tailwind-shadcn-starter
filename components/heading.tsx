import { ComponentProps } from 'react';

import { cn } from '~/lib/utils';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  wrapBalance?: boolean;
} & ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

function Heading({
  level,
  className,
  wrapBalance = true,
  ...props
}: HeadingProps) {
  const Element = `h${level}` as const;
  return (
    <Element
      className={cn(
        'text-foreground mb-2 font-semibold leading-10 tracking-[-1.28px]  [&:not(:first-child)]:mt-3',
        wrapBalance ? '[text-wrap:balance]' : '',
        Element === 'h1'
          ? 'text-4xl lg:text-5xl'
          : Element === 'h2'
            ? 'text-3xl lg:text-4xl'
            : Element === 'h3'
              ? 'text-2xl lg:text-3xl'
              : Element === 'h4'
                ? 'text-xl lg:text-2xl'
                : Element === 'h5'
                  ? 'text-lg lg:text-xl'
                  : Element === 'h6'
                    ? 'text-base lg:text-lg'
                    : '',
        className,
      )}
      {...props}
    />
  );
}

type HeadingEyebrowProps = {
  variant?: 'gradient' | 'brand' | 'default';
} & ComponentProps<'p'>;

/** Used for text above headings */
function HeadingEyebrow({
  className,
  variant = 'default',
  ...props
}: HeadingEyebrowProps) {
  return (
    <p
      className={cn(
        'w-[max-content] text-sm font-semibold uppercase tracking-[1px] [text-wrap:balance]',
        variant === 'gradient'
          ? 'bg-text-gradient dark:bg-text-dark-gradient bg-clip-text text-transparent'
          : variant === 'brand'
            ? 'text-hot-pink'
            : variant === 'default'
              ? 'text-foreground'
              : '',
        className,
      )}
      {...props}
    />
  );
}

export { Heading, HeadingEyebrow };
