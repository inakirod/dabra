import Image from 'next/image';
import Link from 'next/link';

import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

export default function Introduction() {
  return (
    // The page gets sized by the overflowing hero image. To keep the page
    // width from being affected by the hero, we need to add an
    // 'overflow-hidden' to the container div
    <div className='relative overflow-hidden'>
      <div className='absolute -top-[275px] left-1/2 -z-10 h-[844px] w-[1800px] -translate-x-1/2'>
        <Image
          priority
          className='w-full'
          alt='hero image'
          src='/assets/backgrounds/landing-hero-desktop.png'
          layout='fill'
        />
      </div>
      <CenteredContent className='px-5'>
        <article className='pb-[50px] pt-[100px] sm:pb-[155px] sm:pt-[200px]'>
          <div className='max-w-screen-lg'>
            <Header as='h1'>
              Tooling to help your community thrive on Solana
            </Header>
          </div>
          <div className='mb-11 mt-4 w-full max-w-[679px] md:mb-14 md:text-left xl:w-2/3'>
            <Text as='p1' withOpacity>
              DAO creation, voting, and treasury management, all in one fully
              on-chain product. Whether managing a multisig or a billion dollar
              protocol, Dabra has the tools to enable your community to reach
              its full potential.
            </Text>
          </div>
          <div className='flex flex-col items-center gap-4 sm:flex-row'>
            <Anchor.Gradient
              className='w-full justify-center sm:w-auto'
              href='https://dao.dabra.app'
              onClick={() => trackClick('enter_app', 'index_introduction')}
            >
              Enter App{' '}
              <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
            </Anchor.Gradient>
            <Link passHref href='/create-dao'>
              <Anchor.Secondary
                className='w-full justify-center sm:w-auto'
                onClick={() => trackClick('create_dao', 'index_introduction')}
              >
                Create a DAO
              </Anchor.Secondary>
            </Link>
            <Anchor.Tertiary
              className='block w-full justify-center sm:hidden sm:w-auto'
              href='https://docs.dabra.app/'
              onClick={() => trackClick('read_docs', 'index_introduction')}
            >
              <Icon
                img='external-link-thin-white'
                className='mr-2'
                alt='External link icon'
              />{' '}
              Read the docs
            </Anchor.Tertiary>
          </div>
        </article>
      </CenteredContent>
    </div>
  );
}
