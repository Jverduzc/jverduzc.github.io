/**
 * Portfolio component
 *
 * A mosaic-style layout to display your research publications, making it easy to
 * add more entries and consistent with the site's overall CSS styles.
 */

import React from "react";

/**
 * Mosaic Publications
 *
 * An array of objects that represent your publications, including the title,
 * author list, journal information, and a link to the publication.
 */
const publicationList = [
  {
    title: "Mapping microstructure to shock-induced temperature fields using deep learning",
    authors: "Chunyu Li, Juan Carlos Verduzco, Brian H. Lee, Robert J. Appleton, & Alejandro Strachan",
    journal: "npj Computational Materials, 9(178), 2023",
    url: "https://doi.org/10.1038/s41524-023-01134-0",
  },
  {
    title: "Active Discovery of Donor:Acceptor Combinations for Efficient Organic Solar Cells",
    authors: "Prateek Malhotra, Juan C. Verduzco, Subhayan Biswas, & Ganesh D. Sharma",
    journal: "ACS Applied Materials & Interfaces, 14(49), 54895–54906, 2022",
    url: "https://doi.org/10.1021/acsami.2c18540",
  },
  {
    title: "Atomistic Mechanisms Underlying the Maximum in Diffusivity in Doped Li7La3Zr2O12",
    authors: "Juan C. Verduzco, Ernesto E. Marinero, & Alejandro Strachan",
    journal: "The Journal of Physical Chemistry C, 127(22), 10806–10812, 2023",
    url: "https://doi.org/10.1021/acs.jpcc.3c01604",
  },
  {
    title: "A Review on Defect Engineering of Anode Materials for Solid-State Battery Applications",
    authors: "Juan C. Verduzco, Brian Bettes, Qixuan Hu, & Ernesto E. Marinero",
    journal: "Ionics, 29(439), 2023",
    url: "https://doi.org/10.1007/s11581-022-04747-5",
  },
  {
    title: "Hybrid Polymer-Garnet Materials for All-Solid-State Energy Storage Devices",
    authors: "Juan C. Verduzco, John N. Vergados, Alejandro Strachan, & Ernesto E. Marinero",
    journal: "ACS Omega, 6(24), 15551–15558, 2021",
    url: "https://doi.org/10.1021/acsomega.1c01368",
  },
  {
    title: "Ionic Conductivity Optimization of Composite Polymer Electrolytes through Filler Particle Chemical Modification",
    authors: "Andres Villa, Juan Carlos Verduzco, Joseph A. Libera, & Ernesto E. Marinero",
    journal: "Ionics, 27, 2483–2493, 2021",
    url: "https://doi.org/10.1007/s11581-021-04042-9",
  },
  {
    title: "Active Learning and Molecular Dynamics Simulations to Find High Melting Temperature Alloys",
    authors: "David E. Farache, Juan C. Verduzco, Zachary D. McClure, Saaketh Desai, & Alejandro Strachan",
    journal: "Computational Materials Science, 209, 111386, 2022",
    url: "https://doi.org/10.1016/j.commatsci.2022.111386",
  },
  {
    title: "An Active Learning Approach for the Design of Doped LLZO Ceramic Garnets for Battery Applications",
    authors: "Juan C. Verduzco, Ernesto E. Marinero, & Alejandro Strachan",
    journal: "Integrating Materials and Manufacturing Innovation, 10(299–310), 2021",
    url: "https://doi.org/10.1007/s40192-021-00214-7",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <h2 className="portfolio-title">Research Publications</h2>
      <div className="mosaic-grid">
        {publicationList.map((publication) => (
          <div className="mosaic-tile" key={publication.title}>
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              <h3 className="publication-title">{publication.title}</h3>
            </a>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-journal">{publication.journal}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
