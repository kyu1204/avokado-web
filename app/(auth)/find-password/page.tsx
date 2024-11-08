"use client";

import Input from "@/components/input";
import Label from "@/components/label";
import { findPassword } from "./actions";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import EmailConfirm from "@/components/email-confirm";

export default function FindPassword() {
  const [state, dispatch] = useFormState(findPassword, null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (state && typeof state === "boolean") {
      setIsDone(true);
    }
  }, [state]);

  return !isDone ? (
    <div className="mx-auto max-w-lg text-black flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6 bg-[#ECF8F5] sm:px-20 px-10 py-16 w-full rounded-xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">비밀번호를 잊으셨나요?</h1>
          <h2 className="text-sm mb-4">가입하신 이메일을 입력해 주세요.</h2>
        </div>
        <form className="flex flex-col gap-2" action={dispatch}>
          <Label name="이메일" />
          <Input
            required
            name="email"
            type="email"
            placeholder="Email"
            errors={[]}
          />
          <button className="primary-btn h-14 mt-8">비밀번호 재설정</button>
        </form>
      </div>
    </div>
  ) : (
    <EmailConfirm />
  );
}
