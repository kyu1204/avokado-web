export default function Login() {
  return (
    <div className="mx-auto max-w-lg bg-white text-black flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6 bg-[#ECF8F5] px-20 py-16 w-full rounded-xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">로그인</h1>
          <h2 className="text-sm mb-4">아보카도에 오신 것을 환영합니다.</h2>
        </div>
        <form className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-1">
            <div className="rounded-full size-1 bg-[#3BB197]" />
            <label className="font-semibold">이메일</label>
          </div>
          <input
            placeholder="이메일"
            type="email"
            className="h-14 w-full rounded-md border-none bg-white ring-1 ring-neutral-200 transition-shadow placeholder:text-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-[#3BB197] placeholder:text-sm"
          ></input>
          <div className="flex items-center gap-1">
            <div className="rounded-full size-1 bg-[#3BB197]" />
            <label className="font-semibold">비밀번호</label>
          </div>
          <input
            placeholder="비밀번호"
            type="password"
            className="h-14 w-full rounded-md border-none bg-white ring-1 ring-neutral-200 transition-shadow placeholder:text-neutral-400 px-4 focus:outline-none focus:ring-2 focus:ring-[#3BB197] placeholder:text-sm"
          ></input>
          <div className="flex justify-end mt-2 mb-8">
            <a className="text-xs text-[#818181] cursor-pointer underline">
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <button className="primary-btn h-14">로그인</button>
            <button className="primary-reverse-btn h-14">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}
