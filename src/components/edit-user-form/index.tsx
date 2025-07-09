"use client";
import { InputTypes, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { Session } from "next-auth";
import Image from "next/image";
import FormFields from "../form-fields/form-fields";
import { Button } from "../ui/button";
import { UserRole } from "@prisma/client";
import Checkbox from "../form-fields/checkbox";
import { useActionState, useEffect, useState } from "react";
import { ValidationErrors } from "@/validations/auth";
import Loader from "../ui/loader";
import { CameraIcon } from "lucide-react";
import { useSession } from "next-auth/react";

function EditUserForm({
  translations,
  user,
}: {
  translations: Translations;
  user: Session["user"];
}) {

  const { getFormFields } = useFormFields({
    slug: Routes.PROFILE,
    translations,
  });

  return (
    <form className="flex flex-col md:flex-row gap-10">
      <div className="group relative w-[200px] h-[200px] overflow-hidden rounded-full mx-auto">
        
          <Image
            src={user.image as string}
            alt={user.name}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        

   
      </div>
      <div className="flex-1">
        {getFormFields().map((field: IFormField) => {
          
          return (
            <div key={field.name} className="mb-3">
              <FormFields
                {...field}
                // defaultValue={fieldValue as string}
                error={{}}
                readOnly={field.type === InputTypes.EMAIL}
              />
            </div>
          );
        })}
      
       
      </div>
    </form>
  );
}

export default EditUserForm;


