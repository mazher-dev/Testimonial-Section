import React from 'react';

const Testimonial3 = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821..." />
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      I love the fitness apparel and gear I purchased from this
                      site. The quality is exceptional and the prices are
                      unbeatable.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Sheryl Berge
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Sheryl Berge"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/men/15.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821..." />
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      As a professional athlete, I rely on high-performance gear
                      for my training. This site offers a great selection of
                      top-notch products.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Leland Kiehn
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Leland Kiehn"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/women/15.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821..." />
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      The fitness apparel I bought here fits perfectly and feels
                      amazing. I highly recommend this store to anyone looking
                      for quality gear.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        Peter Renolds
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt="Peter Renolds"
                        className="h-14 w-14 object-cover"
                        src="https://randomuser.me/api/portraits/men/20.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial3;
