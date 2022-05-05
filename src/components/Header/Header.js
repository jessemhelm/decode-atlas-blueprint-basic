import * as MENUS from 'constants/menus';
import { classNames as cn } from 'utils';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu, SkipNavigationLink } from 'components';
// import Logo from ''

import styles from './Header.module.scss';
/**
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className }) {
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cn([styles.header, className]);
  const navClasses = cn([
    styles['primary-navigation'],
    isNavShown ? styles['show'] : undefined,
  ]);

  return (
    <header>
        <SkipNavigationLink />
        <div className='container py-8 px-4'>
            <div className='flex flex-row justify-between'>
                <div className='w-{200} h-auto relative'>
                    <Link href="/">
                        <a title="Home">
                            <Image
                            src="/logo.svg"
                            width={180}
                            height={20}
                            alt="Innovatemap logo"
                            // layout="responsive"
                            />
                        </a>
                    </Link>
                </div>
                <button
                type="button"
                className={styles['nav-toggle']}
                onClick={() => setIsNavShown(!isNavShown)}
                aria-label="Toggle navigation"
                aria-controls={styles['primary-navigation']}
                aria-expanded={isNavShown}
                >
                    <FaBars className='text-black'/>
                </button>
                <NavigationMenu
                id={styles['primary-navigation']}
                className={navClasses}
                menuLocation={MENUS.PRIMARY_LOCATION}
                >
                </NavigationMenu>
            </div>
        </div>
    </header>
  );
}
