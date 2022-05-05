import { classNames as cn } from 'utils';

import styles from './IMSection.module.scss';
/**
 * A basic Container Wrapper component
 * @param {Props} props The props object.
 * @param {string} props.content The content as string.
 * @param {string} props.className An optional className to be added to the container.
 * @param {React.ReactElement} props.children The children to be rendered.
 * @return {React.ReactElement} The ContentWrapper component.
 */
export default function IMSection({ className, children }) {
  return (
    <section className={cn([styles.container, className])}>
      <div className='container px-4'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-10'>
            {children}
          </div>
      </div>
    </section>
  );
}
