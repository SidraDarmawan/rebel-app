import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const { id, role, fullName} = useAppSelector((state) => state.user)

    

    return (
        <>
            <nav className="container flex justify-between px-4 py-4 xl:px-0">
                <div className="cursor-pointer place-content-center text-[24px] font-bold"
                    // onClick={() => router.push('/')}
                >
                    Rebel<span className="text-main_yellow">Fun</span>
                </div>

                {}
            </nav>
        </>
    )
}