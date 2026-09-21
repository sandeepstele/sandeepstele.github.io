import { ReactNode } from 'react';
import clsx from 'clsx';

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={clsx('site-section', className)}>{children}</section>;
}
