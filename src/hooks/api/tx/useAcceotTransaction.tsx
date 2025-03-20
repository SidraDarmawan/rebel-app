'use client';

import { toast } from 'sonner'; // Import dari Sonner
import { axiosInstance } from '@/lib/axios';
import { AxiosError } from 'axios';

interface AcceptTransactionArgs {
  id: number;
}

const useAcceptTransaction = () => {
  const accepting = async (payload: AcceptTransactionArgs) => {
    try {
      await axiosInstance.post('/transaction/accepting', payload);

      toast.success('Transaction accepted successfully!'); // Notifikasi sukses
      location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data || 'Failed to accept transaction'); // Notifikasi error
      }
    }
  };
  return { accepting };
};

export default useAcceptTransaction;
