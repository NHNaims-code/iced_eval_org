import bonaventure from "../assets/images/publications/bonaventure.webp";
import carter from "../assets/images/publications/michael-r-carter.webp";
import goldman from "../assets/images/publications/goldman.webp";
import dede from "../assets/images/publications/dede.webp";

const PUB_DATA = [
  {
    image: bonaventure,
    title:
      "The Potential and Challenges of Evaluations to Positively Inform Reforms",
    date: "12 Jul, 2019",
    text: "The case of Benin Agriculture Sector",
    link: "/publications/Benin-Presentation-ICED.pptx",
    author: "Bonaventure Gb. KOUAKANOU",
  },
  {
    image: carter,
    title: "The Paradox of Social Protection and Its Implications for Poverty Reduction Policy",
    date: "2019",
    text: "ICED Evidence to Action Conference 2019",
    link: "/publications/carter_keynote.pdf",
    author: "Michael R Carter",
  },
  {
    image: goldman,
    title: "Reflections on use of evidence by governments in Africa – building a conceptual framework",
    date: "11 Jul, 2019",
    text: "Building a conceptual framework",
    link: "/publications/Ian-Goldman-ICED.pptx",
    author: "Dr Ian Goldman",
  },
  {
    image: dede,
    title: "The Contribution of Civil Society-generated Evidence to the Improvement of Sanitation Services in Ghana",
    date: "12 Jul, 2019",
    text: "ICED Evidence to Action 2019 Conference Panel on Evidence Use ISSER, Accra, July 12, 2019",
    link: "/publications/Ghana-Presentation-ICED.pptx",
    author: "Dede Bedu-Addo,",
  },
];

export function getLatestProject() {
  // const latestProject = []
  // latestProject.push(PUB_DATA[0]);
  // return latestProject;

  return PUB_DATA[0];
}


export default PUB_DATA;