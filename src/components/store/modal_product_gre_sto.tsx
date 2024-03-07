import { ShoppingBagIcon } from "@heroicons/react/20/solid";

const productsStoreFilters = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 9,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 10,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 11,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 12,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
export const Modal_Product = () => {
 
  return (
    <>
      <input type="checkbox" id="my_modal_10" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="grid justify-center w-100">
            <div className="carousel rounded-box w-100">
              {productsStoreFilters.map((product) => (
                <div className="carousel-item w-1/2 mx-0.5 sm:w-1/2">
                  <div key={product.id} className="group relative">
                    <div className=" aspect-h-1 aspect-w-1 w-30 sm:overflow-x-auto rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                     
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                     
                      
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 px-3 flex justify-between"></div>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-4">Nombre del articulo</h3>
          <div className="flex justify-between">
            <p className="py-4">Precio: $300</p>
            <div className="inline-flex">


            <button className="btn btn-circle btn-ghost m-1">
            
            <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-300 group-hover:text-gray-600"
                      aria-hidden="true"
                      style={{ color: "#9b5176" }}
                    />
            </button>
            <button className="btn btn-circle btn-ghost m-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
               fill="white"
                viewBox="0 0 24 24"
                stroke="#9b5176"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            {/* <button className="btn btn-circle btn-ghost m-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
               fill="#9b5176"
                viewBox="0 0 24 24"
                stroke="#9b5176"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button> */}
            
          
            </div>
            
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_10">
          Close
        </label>
      </div>
    </>
  );
};
