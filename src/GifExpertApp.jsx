import { useState } from "react";
import { AddCategoria ,GifGrid} from "./components";


const GifExpertApp = () => {
  const [categoria, setCategoria] = useState(["One Punch"]);
  const onAddCatergoria = (newCategoria) => {
    if (categoria.includes(newCategoria)) return;
    setCategoria([newCategoria, ...categoria]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategoria
        //   categoria={categoria} setCategoria={setCategoria}
        onNewCategoria={(event) => onAddCatergoria(event)}
      />

      {categoria.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;
