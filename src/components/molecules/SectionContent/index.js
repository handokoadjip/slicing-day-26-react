import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
} from "assets/source/image";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
      name: "image-1",
      title: "Nature",
      description: "Lorem ipsum dolor sit amet.",
      childImages: [
        {
          image: Img2,
          name: "image-2",
        },
        {
          image: Img3,
          name: "image-3",
        },
        {
          image: Img4,
          name: "image-4",
        },
        {
          image: Img5,
          name: "image-5",
        },
      ],
    },
    {
      image: Img6,
      name: "image-6",
      title: "Tatami",
      description: "Lorem ipsum dolor sit amet.",
      childImages: [
        {
          image: Img7,
          name: "image-7",
        },
        {
          image: Img8,
          name: "image-8",
        },
        {
          image: Img9,
          name: "image-9",
        },
        {
          image: Img10,
          name: "image-10",
        },
      ],
    },
    {
      image: Img11,
      name: "image-11",
      title: "Quil",
      description: "Lorem ipsum dolor sit amet.",
      childImages: [
        {
          image: Img12,
          name: "image-12",
        },
        {
          image: Img13,
          name: "image-13",
        },
        {
          image: Img14,
          name: "image-14",
        },
        {
          image: Img15,
          name: "image-15",
        },
      ],
    },
  ];

  return (
    <section class="mt-0 mt-lg-5">
      <div class="container-fluid p-0">
        {lists ? (
          lists.map((list, index) => {
            return (
              <div class="row" key={`group-${index}`}>
                <div
                  class={`col-lg-6 p-0 ${
                    index % 2 === 0 ? "" : "order-0 order-lg-1"
                  }`}
                >
                  <div class="wrapper position-relative image-overlay">
                    <figure className="m-0">
                      <img
                        class="img-fluid w-100 h-image-100vh"
                        src={list.image}
                        alt={list.name}
                      />
                    </figure>
                    <div class="position-absolute top-50 start-50 translate-middle p-4 text-white z-999 text-center w-100">
                      <h2 class="display-2 mp-0 fw-bolder">{list.title}</h2>
                      <p class="mp-0">{list.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  class={`col-lg-6 p-0 ${
                    index % 2 === 0 ? "" : "order-1 order-lg-0"
                  }`}
                >
                  <div class="row">
                    {list.childImages ? (
                      list.childImages.map((child, index) => {
                        return (
                          <div class="col-6 p-0" key={`child-${index}`}>
                            <img
                              class="img-fluid w-100 h-image-50vh"
                              src={child.image}
                              alt={child.name}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <h2 className="text-center">No List in this group</h2>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center">No List in this section</h2>
        )}
      </div>
    </section>
  );
};

export default index;
