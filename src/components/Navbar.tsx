"use client";

import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import { Button } from "./ui/button";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { id, role, fullName } = useAppSelector((state) => state.user);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
    router.push("/");
  };

  return (
    <>
      <nav className="container flex justify-between px-4 py-4 xl:px-0">
        <div
          className="cursor-pointer place-content-center text-[24px] font-bold"
          onClick={() => router.push("/")}
        >
          Rebel<span className="text-main_yellow">Fun</span>
        </div>

        {Boolean(id) ? (
          <div className="flex items-center gap-8">
            {role === "organizer" ? (
              <div className="flex items-center gap-8">
                <Button
                  className="hidden sm:block"
                  variant="link"
                  onClick={() => router.push("/create")}
                >
                  Create Event
                </Button>
                <Button
                  variant="link"
                  className="hidden sm:block"
                  onClick={() => router.push("/organizer")}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <Button
                variant="link"
                className="hidden sm:block"
                onClick={() => router.push("/profile")}
              >
                {fullName}
              </Button>
            )}

            <Button
              variant="link"
              className="hidden text-red-500 md:block"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <Button
              className="hidden sm:block"
              variant="link"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              className="hidden sm:block"
              variant="default"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </div>
        )}
      </nav>
      <hr className="border-b-0" />
    </>
  );
};
