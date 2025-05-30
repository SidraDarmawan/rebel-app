import { axiosInstance } from "@/lib/axios";
import { IFormTransaction, Transaction } from "@/types/transaction.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileWithPath } from "react-dropzone";

const useConfirmTransaction = (id: number) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const confirmTransaction = async (payload: Partial<IFormTransaction>) => {
    setIsLoading(true);
    try {
      const { paymentProof } = payload;
      const confirmTransactionForm = new FormData();

      if (paymentProof) {
        paymentProof.forEach((file: FileWithPath) => {
          confirmTransactionForm.append("paymentProof", file);
        });
      }

      // Log FormData Content
      for (let pair of confirmTransactionForm.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      await axiosInstance.post<Transaction>(
        `/transaction/${id}`,
        confirmTransactionForm
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { confirmTransaction, isLoading };
};

export default useConfirmTransaction;
