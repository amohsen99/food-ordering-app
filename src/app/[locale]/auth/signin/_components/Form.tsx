"use client";

import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

function Form({ translations }: { translations: Translations }) {
  const router = useRouter();
  const { locale } = useParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { getFormFields } = useFormFields({
    slug: Pages.LOGIN,
    translations,
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        const validationError = JSON.parse(res?.error).validationError;
        setError(validationError);
        const responseError = JSON.parse(res?.error).responseError;
        if (responseError) {
          console.log(responseError);
          toast("" + responseError, {
            className: "text-red-400",
          }); 
        }
      }
      if (res?.ok) {
        toast(translations.messages.loginSuccessful, {
          className: "text-green-400",
        });
        router.replace(`/${locale}/${Routes.PROFILE}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {getFormFields().map((field: IFormField) => (
        <div key={field.name} className="mb-3">
          <FormFields {...field} error={error} />
        </div>
      ))}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader /> : translations.auth.login.submit}
      </Button>
    </form>
  );
}

export default Form;
