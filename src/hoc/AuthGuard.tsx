'use client';

import { useAppSelector } from '@/redux/hooks';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard(Component: any) {
  return function IsAuth(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    const { id, role } = useAppSelector((state) => state.user);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    useEffect(() => {
      if (!id && !isLoading) {
        redirect('/login');
      }
    }, [id, isLoading]);

    useEffect(() => {
      if (role == 'user' && !isLoading) {
        alert('you must login as an event organizer');
        redirect('/');
      }
    }, [role, isLoading]);

    if (isLoading || !id) {
      return (
        <h1 className="container flex h-screen justify-center px-4 pt-24 text-4xl font-extrabold">
          Loading...
        </h1>
      );
    }

    return <Component {...props} />;
  };
}