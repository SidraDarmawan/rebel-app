'use client';

import { toast } from 'sonner';
import { axiosInstance } from '@/lib/axios';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface RegisterResponse {
  message: string;
  data: User;
}

interface RegisterArgs
  extends Omit<User, 'id' | 'pointExpiredDate' | 'userReward' | 'point'> {
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      await axiosInstance.post<RegisterResponse>('/auth/register', payload);
      router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('There was a problem with your request.', {
          description: error.response?.data,
          action: {
            label: 'Try again',
            onClick: () => register(payload),
          },
        });
      }
    }
  };
  return { register };
};

export default useRegister;
