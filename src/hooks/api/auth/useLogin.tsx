"use client";

import { axiosInstance } from "@/lib/axios";
import { loginAction } from "@/redux/slices/userSlice";
import { User } from "@/types/user.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from 'sonner'

interface LoginResponses {
  message: string;
  data: User;
  token: string;
}

interface LoginArgs
  extends Omit<
    User,
    | "id"
    | "fullName"
    | "referral_code"
    | "point"
    | "pointExpiredDate"
    | "useReward"
  > {
  role: string;
  password: string;
  email: string;
}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const login = async (payload: LoginArgs) => {
    try {
      const { data } = await axiosInstance.post<LoginResponses>(
        "/auth/login",
        payload
      );

      dispatch(loginAction(data.data));
      localStorage.setItem("token", data.token);
      if (data.data.role === "user") {
        router.push("/");
      } else {
        router.push("/organizer");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'Login failed. Please try again.');
      }
    }
  };

  return { login };
};

export default useLogin;
