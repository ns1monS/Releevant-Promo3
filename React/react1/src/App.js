import "./App.css";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";

const products = [
  {
    url: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    title: "God of war",
    description: "peras",
  },
  {
    url: "https://media.vandal.net/i/640x360/11-2022/202211218263381_1.jpg",
    title: "God of war Ragnarok",
    description: "manzanas",
  },
  {
    url: "https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304",
    title: "Outer Wilds",
    description: "melocotones",
  },
];

function App() {
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <Wrapper>
        {products.length > 0 ? (
          products.map(({ url, title, description }) => (
            <Card url={url} title={title} description={description} />
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </Wrapper>
    </div>
  );
}

export default App;
