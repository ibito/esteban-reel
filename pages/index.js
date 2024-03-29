import React from "react";
import EmblaCarousel from "../app/components/EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import fs from "fs";

const OPTIONS = { align: "start", loop: true };

// En tu archivo de ruta o controlador del servidor
export async function getServerSideProps() {
  const folderPath = "./public/gallery"; // Ruta a la carpeta deseada
  const fileNames = fs.readdirSync(folderPath);

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
