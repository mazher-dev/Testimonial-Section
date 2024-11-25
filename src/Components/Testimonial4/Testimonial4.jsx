import React from "react";

const Testimonial4 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center dark:bg-gray-700">
      <section className="bg-gray-50 dark:bg-gray-800 w-full">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              {
                text: `"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`,
                name: "Micheal Gough",
                role: "CEO at Google",
                img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
              },
              {
                text: `"The design and flexibility of Landwind are excellent. Highly recommend for all developers looking for ready-to-use templates."`,
                name: "Anna Brown",
                role: "CTO at Amazon",
                img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/anna-brown.png",
              },
              {
                text: `"The ease of use and detailed documentation made our SaaS project faster and more efficient. Landwind is a game changer!"`,
                name: "John Doe",
                role: "Lead Engineer at Microsoft",
                img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-doe.png",
              },
            ].map((testimonial, index) => (
              <figure
                key={index}
                className="rounded-[20px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-lg"
              >
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <blockquote>
                  <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial4;
