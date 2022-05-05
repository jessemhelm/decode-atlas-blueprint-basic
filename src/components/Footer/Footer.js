import * as MENUS from 'constants/menus';

import appConfig from 'app.config';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { NavigationMenu } from 'components';

import styles from './Footer.module.scss';
import IMSection from 'components/IMSection';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  return (
    <footer className=' my-32'>
      <IMSection className=' pt-32 border-t'>
        <div className=' footer-menu-container col-span-6 text-4xl'>
            <NavigationMenu
            className={styles.nav}
            menuLocation={MENUS.FOOTER_LOCATION}
            />
        </div>
        <div className='col-span-6 text-2xl'>
            <p>We take your big ideas and challenge them, research them, draw them, design them, write them, present them, and launch them. Together, with you.</p>
        </div>
        <div className='col-span-6 text-2xl'>
          &copy; Innovatemap {new Date().getFullYear()}, All rights reserved
        </div>
        <div className='col-span-6 text-2xl flex flex-row'>
            <a className='mr-4'>
                Email
            </a>
            <a className='mx-4'>
                Dribbble
            </a>
            <a className='mx-4'>
                LinkedIn
            </a>
            <a className='mx-4'>
                Twitter
            </a>
            <a className='ml-4'>
                Instagram
            </a>
        </div>
      </IMSection>
    </footer>
  );
}
