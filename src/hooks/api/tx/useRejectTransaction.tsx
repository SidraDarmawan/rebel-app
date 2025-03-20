"use client";

import { toast } from "sonner";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface RejectTransactionArgs {
  id: number;
}

const useRejectTransaction = () => {
  const router = useRouter();
  
  const rejecting = async (payload: RejectTransactionArgs) => {
    try {
      await axiosInstance.post("/transaction/rejecting", payload);
      location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data || "An error occurred");
      }
    }
  };

  return { rejecting };
};

export default useRejectTransaction;
