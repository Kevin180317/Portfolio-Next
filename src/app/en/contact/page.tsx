"use client";
import Form from "@/components/Form";
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  const { Lang } = useLanguage();
  return (
    <main className="relative z-10">
      <Form />
    </main>
  );
}

export default Page;
