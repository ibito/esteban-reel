import React from "react";
import EmblaCarousel from "../app/components/EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import fs from "fs";

// console.log(galleryImages.keys())
const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 13;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
console.log(SLIDES);

// En tu archivo de ruta o controlador del servidor
export async function getServerSideProps() {
  const folderPath = "./public/gallery"; // Ruta a la carpeta deseada
  const fileNames = fs.readdirSync(folderPath);
  console.log("fileNames: ", fileNames);

  const finalFileNames = fileNames.map((fileName) => {
    return `/gallery/${fileName}`;
  });
  return {
    props: {
      fileNames: finalFileNames,
    },
  };
}

const Home = ({ fileNames }) => {
  return (
    <>
      <EmblaCarousel slides={fileNames} options={OPTIONS} />
    </>
  );
};

export default Home;
