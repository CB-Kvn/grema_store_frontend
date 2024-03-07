// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 4,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   // More posts...
// ];

import { useEffect, useState } from "react";

// const testimonialsData = [
//   {
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
//     author: "John Doe",
//     company: "Company XYZ",
//   },
//   {
//     quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     author: "Jane Smith",
//     company: "ABC Corporation",
//   },
//   {
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
//     author: "John Doe",
//     company: "Company XYZ",
//   },
//   {
//     quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     author: "Jane Smith",
//     company: "ABC Corporation",
//   },
//   // Add more testimonials as needed
// ];

export const Comments = () => {
  const testimonialsData = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      author: "John Doe",
      company: "Company XYZ",
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Jane Smith",
      company: "ABC Corporation",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change testimonial index
      setCurrentTestimonialIndex((prevIndex:number) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonialsData.length]);

  return (
    <div className=" py-36 p-8" style={{backgroundColor:"#F6DAEF"}}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold mb-8" style={{fontFamily:'Dancing Script,cursive', color:'#393939'}}>Clientes satisfechos</h1>

        <div className="p-10 rounded-md shadow-md mb-4" style={{backgroundColor:"#C2A78D"}}>
          <p className="text-gray-600 mb-4">"{testimonialsData[currentTestimonialIndex].quote}"</p>
          <p className="text-gray-800 font-semibold">{testimonialsData[currentTestimonialIndex].author}</p>
          <p className="text-gray-500">{testimonialsData[currentTestimonialIndex].company}</p>
        </div>
      </div>
    </div>
  );
};
// };
  // return (
  //   <div className="bg-nav p-20 sm:py-30 items-center justify-center" id="comments" style={{backgroundColor:"#F6DAEF"}}>
  //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //       <div className="flex mb-20 items-center justify-center lg:mx-0">
  //         <h2
  //           className="text-4xl font-bold tracking-tight text-font-nav sm:text-6xl"
  //           style={{ fontFamily: "Dancing Script,cursive" }}
  //         >
  //           Experiencias del cliente
  //         </h2>
  //       </div>


  //     </div>
  //     <div className="grid justify-center w-100 mb-20">
  //       <div className="carousel rounded-box w-100">
  //         {posts.map((post) => (
  //           <div className="carousel-item justify-center w-1/2 mx-0.5 sm:w-1/3 ">
  //             <article key={post.id} className="flex max-w-xl px-5 mt-9 flex-col items-start justify-between">
  //             <div className="flex items-center gap-x-4 text-xs">
  //               <time dateTime={post.datetime} className="text-gray-500">
  //                 {post.date}
  //               </time>
              
  //             </div>
  //             <div className="group relative">
  //               <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
  //                 <a href={post.href}>
  //                   <span className="absolute inset-0" />
  //                   {post.title}
  //                 </a>
  //               </h3>
  //               <p className="mt-2 line-clamp-none text-sm leading-6">{post.description}</p>
  //             </div>
  //             <div className="relative mt-8 flex items-center gap-x-4">
  //               <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
  //               <div className="text-sm leading-6">
  //                 <p className="font-semibold text-gray-900">
  //                   <a href={post.author.href}>
  //                     <span className="absolute inset-0" />
  //                     {post.author.name}
  //                   </a>
  //                 </p>
                 
  //               </div>
  //             </div>
  //           </article>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
// };
