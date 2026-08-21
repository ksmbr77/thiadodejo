import type { SVGProps } from "react";

const icon = "h-5 w-5 sm:h-6 sm:w-6";

function TikTok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.4a2.6 2.6 0 1 1-1.86-2.5V9.7a5.72 5.72 0 1 0 4.96 5.66V8.9a7.3 7.3 0 0 0 4.06 1.23V7.03a4.3 4.3 0 0 1-3-1.21Z" />
    </svg>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function X(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.53 3H20l-5.5 6.29L20.8 21h-5.2l-3.68-5.1L7.4 21H4.9l5.86-6.7L3.5 3h5.3l3.45 4.8L17.53 3Zm-1.1 16h1.42L8.6 4.4H7.1l9.33 14.6Z" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.87.24-1.46 1.5-1.46h1.4V4.96c-.24-.03-1.07-.1-2.04-.1-2.02 0-3.46 1.23-3.46 3.5V11H8.5v3h2.4v7h2.6Z" />
    </svg>
  );
}

function Threads(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M12.2 21c-4.9 0-7.7-3-7.7-9s2.9-9 7.7-9c3.4 0 5.7 1.5 6.7 4" strokeLinecap="round" />
      <path
        d="M8.9 14.4c0 1.6 1.5 2.6 3.3 2.6 2.3 0 3.6-1.3 3.6-4.4-.8-.8-2-1.2-3.5-1.2-2 0-3.2.8-3.2 2 0 1 .9 1.7 2.2 1.7 1.7 0 2.6-1.1 2.7-3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const REDES = [
  { label: "TikTok", href: "https://tiktok.com", Icon: TikTok },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: YouTube },
  { label: "X", href: "https://x.com", Icon: X },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Threads", href: "https://threads.net", Icon: Threads },
];

export function SocialRow({ onActivate }: { onActivate?: () => void }) {
  return (
    <nav
      aria-label="Redes sociais da campanha"
      className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
    >
      {REDES.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          onPointerDown={onActivate}
          className="social-pill press grid h-11 w-11 place-items-center rounded-full sm:h-12 sm:w-12"
        >
          <Icon className={icon} />
        </a>
      ))}
    </nav>
  );
}
