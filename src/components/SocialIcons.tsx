import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

interface Props {
  className?: string;
  trackingContext: string;
}

const SocialIcons = (props: Props) => {
  return (
    <div
      className={clsxm(
        props.className,
        'flex',
        'items-center',
        'justify-between'
      )}
    >
      <div className='flex gap-x-4 md:gap-x-5'>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://discord.com/invite/dabdao'
          className='shadow-sm duration-500 hover:scale-125 focus:scale-125'
          onClick={() => trackClick('discord', props.trackingContext)}
        >
          <img src='/icons/discord.svg' className='h-11' alt='discord' />
        </a>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://twitter.com/Dabra'
          className='shadow-sm duration-500 hover:scale-125 focus:scale-125'
          onClick={() => trackClick('twitter', props.trackingContext)}
        >
          <img src='/icons/twitter.svg' className='h-11' alt='twitter' />
        </a>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/dabra-foundation/dabradao'
          className='shadow-sm duration-500 hover:scale-125 focus:scale-125'
          onClick={() => trackClick('github', props.trackingContext)}
        >
          <img src='/icons/github.svg' className='h-11' alt='github' />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
