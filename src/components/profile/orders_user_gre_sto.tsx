import { LazyLoadImage } from "react-lazy-load-image-component";
import "./../../styles/tabs_styles.css";

export const Orders = () => {
  return (
    <>
      <div className="grid grid-cols-12 pt-3 pb-3 sm:grid-cols-10">
        <div className="col-span-12 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">

        <div className="amx-auto my-10 overflow-hidden rounded-lg border bg-white">
            <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">
              Billing History
            </p>
            <table className="w-full">
              <thead>
                <td className="text-center font-semibold">Date</td>
                <td className="text-center font-semibold">Invoice #</td>
                <td className="text-center font-semibold">Amount</td>
                <td className="text-center font-semibold"></td>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </>
  );
};


// <div className="overflow-y-scroll h-96  ">
//         <table className="table" style={{ color: "#95806b" }}>
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th style={{ color: "#95806b", fontSize: "1rem" }}>Imagen</th>
//               <th style={{ color: "#95806b", fontSize: "1rem" }}>
//                 Descripcion
//               </th>
//               <th style={{ color: "#95806b", fontSize: "1rem" }}>Fecha</th>
//               <th style={{ color: "#95806b", fontSize: "1rem" }}>Estado</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr style={{ borderBottomColor: "#F6DAEF" }}>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox custom-checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 2 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 3 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//             {/* row 4 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <LazyLoadImage
//                         src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">Nombre Item</div>
//                   </div>
//                 </div>
//               </td>
//               <td>Descripcion</td>
//               <td>Fecha</td>
//               <th>
//                 <button className="btn btn-ghost btn-xs">Estado</button>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
