
import "../nav-bar-styles.css";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];



export const InlineProducts = () => {
  
  return (
    <>
      
        <div className="py-48" id="store-pre">
          <div className="text-center">
            <h2
              className="text-4xl font-bold tracking-tight sm:text-7xl"
              style={{ fontFamily: "Dancing Script,cursive", color: "#C2A78D" }}
            >
              Productos Destacados
            </h2>
            <p className="mt-1 text-lg leading-8" style={{ color: "#393939" }}>
              Tenemos gran variedad de productos listos para ser entregados
            </p>
          </div>

          <div className="navbar justify-center">
            <div className="navbar-center flex">
              <ul
                className="menu menu-horizontal text-xs menux sm:text-2xl"
                style={{ color: "#393939" }}
              >
                <li className="">
                  <aside
                    className=""
                    style={{ paddingRight: "0.45rem" }}
                  >
                    Aretes
                  </aside>
                </li>
                <li className="">
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Pulseras
                  </aside>
                </li>
                <li className="">
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Collares
                  </aside>
                </li>
                <li className="">
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem"}}
                  >
                    Anillos
                  </aside>
                </li>
                <li className="">
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Sets
                  </aside>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center w-100">
            <div className="carousel rounded-box w-100">
              {products.map((product) => (
                <div className="carousel-item w-1/2 mx-0.5 sm:w-1/4">
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-30 sm:overflow-x-auto rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 px-3 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
     
    </>
  );
};
