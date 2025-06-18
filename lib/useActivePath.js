import { useRouter } from 'next/router';

export default function useActivePath() {
  const router = useRouter();
  return router.asPath;
}
