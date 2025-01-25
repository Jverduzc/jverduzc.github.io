import React from "react";
import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";
import "swiper/swiper.css";
import "swiper/modules/pagination.min.css";
import "swiper/modules/navigation.min.css";
import { Pagination, Navigation } from "swiper/modules";

import MISTNET from "../images/publications/MISTNET.png";
import AL_ORGANIC from "../images/publications/AL_ORGANIC.gif"
import LLZO_MD from "../images/publications/LLZO_MD.jpeg"
import ANODE_REVIEW from "../images/publications/ANODE_REVIEW.png"
import CPE_REVIEW from "../images/publications/CPE_REVIEW.jpeg"
import CPE_LLZO from "../images/publications/CPE_LLZO.png"
import AL_HEAS from "../images/publications/AL_HEAS.jpg"
import AL_LLZO from "../images/publications/AL_LLZO.png"

const publicationList = [
  {
    title: "Mapping microstructure to shock-induced temperature fields using deep learning",
    authors: "Chunyu Li, Juan Carlos Verduzco, Brian H. Lee, Robert J. Appleton, & Alejandro Strachan",
    journal: "npj Computational Materials, 9(178), 2023",
    url: "https://doi.org/10.1038/s41524-023-01134-0",
    image: MISTNET,
  },
  {
    title: "Active Discovery of Donor:Acceptor Combinations for Efficient Organic Solar Cells",
    authors: "Prateek Malhotra, Juan C. Verduzco, Subhayan Biswas, & Ganesh D. Sharma",
    journal: "ACS Applied Materials & Interfaces, 14(49), 54895–54906, 2022",
    url: "https://doi.org/10.1021/acsami.2c18540",
    image: AL_ORGANIC,
  },
  {
    title: "Atomistic Mechanisms Underlying the Maximum in Diffusivity in Doped Li7La3Zr2O12",
    authors: "Juan C. Verduzco, Ernesto E. Marinero, & Alejandro Strachan",
    journal: "The Journal of Physical Chemistry C, 127(22), 10806–10812, 2023",
    url: "https://doi.org/10.1021/acs.jpcc.3c01604",
    image: LLZO_MD,
  },
  {
    title: "A Review on Defect Engineering of Anode Materials for Solid-State Battery Applications",
    authors: "Juan C. Verduzco, Brian Bettes, Qixuan Hu, & Ernesto E. Marinero",
    journal: "Ionics, 29(439), 2023",
    url: "https://doi.org/10.1007/s11581-022-04747-5",
    image: ANODE_REVIEW,
  },
  {
    title: "Hybrid Polymer-Garnet Materials for All-Solid-State Energy Storage Devices",
    authors: "Juan C. Verduzco, John N. Vergados, Alejandro Strachan, & Ernesto E. Marinero",
    journal: "ACS Omega, 6(24), 15551–15558, 2021",
    url: "https://doi.org/10.1021/acsomega.1c01368",
    image: CPE_REVIEW,
  },
  {
    title: "Ionic Conductivity Optimization of Composite Polymer Electrolytes through Filler Particle Chemical Modification",
    authors: "Andres Villa, Juan Carlos Verduzco, Joseph A. Libera, & Ernesto E. Marinero",
    journal: "Ionics, 27, 2483–2493, 2021",
    url: "https://doi.org/10.1007/s11581-021-04042-9",
    image: CPE_LLZO,
  },
  {
    title: "Active Learning and Molecular Dynamics Simulations to Find High Melting Temperature Alloys",
    authors: "David E. Farache, Juan C. Verduzco, Zachary D. McClure, Saaketh Desai, & Alejandro Strachan",
    journal: "Computational Materials Science, 209, 111386, 2022",
    url: "https://doi.org/10.1016/j.commatsci.2022.111386",
    image: AL_HEAS,
  },
  {
    title: "An Active Learning Approach for the Design of Doped LLZO Ceramic Garnets for Battery Applications",
    authors: "Juan C. Verduzco, Ernesto E. Marinero, & Alejandro Strachan",
    journal: "Integrating Materials and Manufacturing Innovation, 10(299–310), 2021",
    url: "https://doi.org/10.1007/s40192-021-00214-7",
    image: AL_LLZO,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <h2 className="portfolio-title">Research Publications</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="publication-swiper solutions-slider-wrapper"
      >
        {publicationList.map((publication) => (
          <SwiperSlide key={publication.title} className="solutions-slide">
            <div className="swiper-slide-content card align-items-center text-center">
              <div className="card-image-container">
                <img src={publication.image} alt={publication.title} className="publication-image" />
              </div>
              <div className="card-content">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  <h3 className="publication-title heading h5">{publication.title}</h3>
                </a>
                <p className="publication-authors body">{publication.authors}</p>
                <p className="publication-journal body limit-text lines--4">{publication.journal}</p>
              </div>
              <div className="card-button">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta cta-link"
                >
                  <span>Learn more</span>
                  <span className="arrow-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16.627 12.75H4.5v-1.5h12.127L10.93 5.554 12 4.5l7.5 7.5-7.5 7.5-1.07-1.054 5.697-5.696Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;