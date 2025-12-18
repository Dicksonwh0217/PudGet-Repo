import { LoginForm } from "@/components/LoginForm"
import LoginPagePicture from "@/assets/LoginPagePicture.webp"
import { useState } from "react"
import PudGetIcon from "@/assets/PudGetIcon.webp"
import { NavLink } from "react-router";

export function Authentication() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <NavLink to="/" className="flex items-center gap-2 font-bold">
                        <div className="flex size-14 items-center justify-center">
                            <img src={PudGetIcon} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm showPassword={showPassword} setShowPassword={setShowPassword} />
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <img
                    src={LoginPagePicture}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}