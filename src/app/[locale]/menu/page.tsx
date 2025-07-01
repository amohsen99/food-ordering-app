import Menu from "@/components/menu";
import { db } from "@/lib/prisma";
import { getProductsByCategory } from "@/server/db/products";

async function MenuPage({  }: {  }) {
  const categorites=await getProductsByCategory();  

  return (
     <main>
      {categorites.length > 0 ? (
        categorites.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="container text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-6">
                {category.name}
              </h1>
              <Menu items={category.products} />
            </div>
          </section>
        ))  
      ) : (
        <p className="text-accent text-center py-20">
          {"No products found in this category."}
        </p>
      )}
    </main>
  );
}

export default MenuPage;
