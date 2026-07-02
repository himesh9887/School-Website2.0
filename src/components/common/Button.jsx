import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  icon = true,
  ...props
}) {
  const base =
    'group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-button px-5 py-3 text-sm font-extrabold transition duration-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-secondary/25';
  const variants = {
    primary: 'bg-royal text-white shadow-glow hover:-translate-y-1 hover:shadow-premium',
    secondary: 'border border-primary/20 bg-white text-primary shadow-soft hover:-translate-y-1 hover:border-primary/40 hover:bg-alternate',
    light: 'border border-white/25 bg-white/15 text-white backdrop-blur-xl hover:-translate-y-1 hover:bg-white/25',
  };
  const content = (
    <>
      <span className="absolute left-1/2 top-1/2 -z-0 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 transition-all duration-500 group-hover:h-56 group-hover:w-56 group-hover:opacity-0" />
      <span className="relative z-10">{children}</span>
      {icon && <ArrowRight className="relative z-10 transition group-hover:translate-x-1" size={18} />}
    </>
  );

  if (to) {
    return (
      <Link className={`${base} ${variants[variant]} ${className}`} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} type={type} {...props}>
      {content}
    </button>
  );
}
