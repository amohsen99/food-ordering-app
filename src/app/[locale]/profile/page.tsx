import { Pages, Routes } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import getTrans from "@/lib/translation";
import { authOptions } from "@/server/auth";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const session = await getServerSession(authOptions);
  const { locale } = await params;
  const translations = await getTrans(locale);

  if (!session) {
    redirect(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);
  }
  if (session && session.user.role === UserRole.ADMIN) {
    redirect(`/${locale}/${Routes.ADMIN}`);
  }
  return (
    <main>
   <div>profile page</div>
    </main>
  );
}

export default ProfilePage;
