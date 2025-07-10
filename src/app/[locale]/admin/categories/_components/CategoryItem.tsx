import { Category } from "@prisma/client";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

async function CategoryItem({ category }: { category: Category }) {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <li className="bg-gray-300 p-4 rounded-md flex justify-between">
      <h3 className="text-black font-medium text-lg flex-1">{ .name}</h3>
      <div className="flex items-center gap-2">
      </div>
    </li>
  );
}

export default CategoryItem;
