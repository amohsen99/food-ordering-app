"use client";

import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import { Pages } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { IFormField } from "@/types/app";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

function Form({ translations }: { translations: any }) {
  const formRef = useRef<HTMLFormElement>(null);

  const { getFormFields } = useFormFields({
    slug: Pages.LOGIN,
    translations,
  });

  return (
    <form ref={formRef}>
      {getFormFields().map((field: IFormField) => (
        <div key={field.name} className="mb-3">
          <FormFields {...field} error={{}} />
        </div>
      ))}
      <Button type="submit" disabled={false} className="w-full">
        { translations.auth.login.submit}
      </Button>
    </form>
  );
}

export default Form;
