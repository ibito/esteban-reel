export async function getServerSideProps() {
    // Obtén los nombres de archivo (simulado aquí como un array)
    const fileNames = ['archivo1.txt', 'archivo2.txt'];
  
    return {
      props: {
        fileNames,
      },
    };
  }

  function Home({ fileNames }) {
    // Usa los nombres de archivo en tu componente
    return (
      <div>
        <h1>Archivos disponibles:</h1>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Home;