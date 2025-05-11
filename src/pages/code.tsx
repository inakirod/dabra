import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Code() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://app.dabra.app/code');
  }, [router]);

  return null;
}
