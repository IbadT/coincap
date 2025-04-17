"use client"
import {LoginForm} from "@/widgets/LoginForm";
import {Header} from "@/widgets/Header";

export default function LoginPage() {
    return (
        <div className={'bg-[#000000] text-white h-screen w-full'}
             style={{
                 backgroundImage: "url('/main_img.svg')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
             }}
        >

            <Header/>

            <LoginForm />
        </div>
    )
}