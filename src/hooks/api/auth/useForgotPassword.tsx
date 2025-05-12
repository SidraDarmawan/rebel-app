import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// Interface IForgotPassArgs extends Pick <User, 'email'> {}
interface IForgotPassresponse {
  message: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post<IForgotPassresponse>(
        "/auth/forgot-password",
        { email }
      );

      toast(data.message);

      router.replace("/login");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { forgotPassword, isLoading };
};

export default useForgotPassword;
