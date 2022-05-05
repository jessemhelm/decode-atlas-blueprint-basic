import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import { FaArrowRight } from 'react-icons/fa';
import {
  Posts,
  Header,
  Footer,
  EntryHeader,
  Main,
  Button,
  Heading,
  CTA,
  SEO,
  IMSection,
  IMSwiper
} from 'components';
import styles from 'styles/pages/_Home.module.scss';
import { pageTitle } from 'utils';

const postsPerPage = 3;

export default function Page() {
  const { useQuery, usePosts } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: postsPerPage,
    where: {
      categoryName: 'uncategorized',
    },
  });
  const mainBanner = {
    sourceUrl: '/static/banner.jpeg',
    mediaDetails: { width: 1200, height: 600 },
    altText: 'Blog Banner',
  };

  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />

      <Header />

      <Main className='w-full mx-auto block text-black'>
        <IMSection className=' py-24'>
            <h1 className=' col-span-12 text-5xl leading-snug font-light'>
                Innovatemap is a team of experts in digital product research, branding, marketing, and design.
            </h1>
        </IMSection>
        <IMSection className=' pb-32'>
            {/* SWIPER */}
            <div class='col-span-12'>
                <IMSwiper/>
            </div>
        </IMSection>
        <IMSection className='pb-32'>
            <h2 className=' col-span-12 text-4xl mb-10'>
                What We Do
            </h2>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    User & Market Research
                </h3>
                <p className=' text-xl mt-4'>
                    We seek to understand your market, your competition, and your users through in-depth research and analysis.
                </p>
            </div>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    Strategy
                </h3>
                <p className=' text-xl mt-4'>
                    We immerse ourselves in your business to help you map out a plan for success today, and as you continue to grow.
                </p>
            </div>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    Product Management
                </h3>
                <p className=' text-xl mt-4'>
                    From idea to launch, we ensure you're building the right solution for the right problem and the right user.
                </p>
            </div>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    Branding
                </h3>
                <p className=' text-xl mt-4'>
                    We give your business a visual identity to make positive and lasting brand impressions on your audience.
                </p>
            </div>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    Product Marketing
                </h3>
                <p className=' text-xl mt-4'>
                    We help you articulate your value internally and externally so that it’s clear why your business and your product matter.
                </p>
            </div>
            <div class='col-span-4'>
                <h3 className=' text-2xl'>
                    Design & User Experience
                </h3>
                <p className=' text-xl mt-4'>
                    We design beautiful, effective, and user-friendly experiences to attract, engage, and retain your customers.
                </p>
            </div>
        </IMSection>
        <IMSection className=' pb-32'>
            <h2 className=' col-span-12 text-4xl mb-10'>
                How We Do It
            </h2>
            <span class='col-span-3 text-xl'>
                Product Strategy
            </span>
            <span class='col-span-3 text-xl'>
                Company Branding
            </span>
            <span class='col-span-3 text-xl'>
                Website Design
            </span>
            <span class='col-span-3 text-xl'>
                Socialization Decks
            </span>
            <span class='col-span-3 text-xl'>
                Roadmapping
            </span>
            <span class='col-span-3 text-xl'>
                UX Design
            </span>
            <span class='col-span-3 text-xl'>
                Copywriting
            </span>
            <span class='col-span-3 text-xl'>
                Product Videos
            </span>
            <span class='col-span-3 text-xl'>
                MVP Definition
            </span>
            <span class='col-span-3 text-xl'>
                Interface Design
            </span>
            <span class='col-span-3 text-xl'>
                Product Positioning
            </span>
            <span class='col-span-3 text-xl'>
                App Prototypes
            </span>
            <span class='col-span-3 text-xl'>
                Market Research
            </span>
            <span class='col-span-3 text-xl'>
                Animation
            </span>
            <span class='col-span-3 text-xl'>
                Product Messaging
            </span>
            <span class='col-span-3 text-xl'>
                Sales Enablement
            </span>
            <span class='col-span-3 text-xl'>
                User Research
            </span>
            <span class='col-span-3 text-xl'>
                Product-Led Growth
            </span>
            <span class='col-span-3 text-xl'>
                Pitch Decks
            </span>
            <span class='col-span-3 text-xl'>
                Portal Design
            </span>
        </IMSection>
        <IMSection className=' pb-32'>
            <h2 className=' col-span-12 text-4xl mb-10'>
                Selected Work
            </h2>
            <figure className='col-span-4'>
                <img 
                className='w-full'
                src='https://innovatemap.com/wp-content/uploads/2020/07/groundwork-2048x1320.png' />
                <figcaption className='mt-6 mb-2 text-2xl'>
                    Groundwork
                </figcaption>
            </figure>
            <figure className='col-span-4'>
                <img 
                className='w-full'
                src='https://innovatemap.com/wp-content/uploads/2020/08/JLL-2048x1320.png' />
                <figcaption className='mt-6 mb-2 text-2xl'>
                    JLL Spaces
                </figcaption>
            </figure>
            <figure className='col-span-4'>
                <img 
                className='w-full'
                src='https://innovatemap.com/wp-content/uploads/2020/07/jobvite-632x407.png' />
                <figcaption className='mt-6 mb-2 text-2xl'>
                    Jobvite
                </figcaption>
            </figure>
        </IMSection>
        <IMSection>
            <h2 className=' col-span-12 text-4xl mb-10'>
                Select Clients
            </h2>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl underline underline-offset-4'>
                    Authenticx
                </h3>
                <span className=' text-sm text-gray-500'>
                    Customer voice analytics
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl underline underline-offset-4'>
                    Canvas
                </h3>
                <span className=' text-sm text-gray-500'>
                    Text-based job recruiting
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Costello
                </h3>
                <span className=' text-sm text-gray-500'>
                    Intelligent sales team software
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Delta Faucet
                </h3>
                <span className=' text-sm text-gray-500'>
                    Consumer faucet products
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Docket
                </h3>
                <span className=' text-sm text-gray-500'>
                    Digital meeting workspace
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Greenlight Guru
                </h3>
                <span className=' text-sm text-gray-500'>
                    Medical device management software
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl underline underline-offset-4'>
                    Jobvite
                </h3>
                <span className=' text-sm text-gray-500'>
                    Job recruiting platform
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl underline underline-offset-4'>
                    Olio
                </h3>
                <span className=' text-sm text-gray-500'>
                    Post-acute care communication
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Purdue Foundry
                </h3>
                <span className=' text-sm text-gray-500'>
                    Idea commercialization community
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl underline underline-offset-4'>
                    RICS Software
                </h3>
                <span className=' text-sm text-gray-500'>
                    Retail management software
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Stanley Security
                </h3>
                <span className=' text-sm text-gray-500'>
                    Consumer and business security
                </span>
            </div>
            <div className='col-span-3 mb-4'>
                <h3 className='text-xl'>
                    Zylo
                </h3>
                <span className=' text-sm text-gray-500'>
                    Enterprise SaaS management platform
                </span>
            </div>
            <div className='col-span-12 mt-10'>
                <span className='text-xl underline underline-offset-4'>
                    View complete list
                </span>
            </div>

        </IMSection>
      </Main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
