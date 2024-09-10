"use client";

import Input from "@/components/input";
import { useFormState } from "react-dom";
import { login } from "./actions";
import Label from "@/components/label";

export default function Login() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="mx-auto max-w-lg text-black flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6 bg-[#ECF8F5] px-20 py-16 w-full rounded-xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">로그인</h1>
          <h2 className="text-sm mb-4">아보카도에 오신 것을 환영합니다.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-2">
          <Label name="이메일" />
          <Input
            required
            name="email"
            type="email"
            placeholder="Email"
            errors={state?.fieldErrors.email}
          />
          <Label name="비밀번호" />
          <Input
            required
            name="password"
            type="password"
            placeholder="Password"
            errors={state?.fieldErrors.password}
          />
          <div className="flex justify-end mt-2 mb-8">
            <a className="text-xs text-[#818181] cursor-pointer underline">
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <button className="primary-btn h-14">로그인</button>
        </form>
        <button className="primary-reverse-btn h-14">회원가입</button>
      </div>
    </div>
  );
}