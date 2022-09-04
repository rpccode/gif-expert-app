
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifsItem,Spinner} from "./index";


export const GifGrid = ({ categoria }) => {
  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
        {!isLoading ? (
          <div className="card-grid">
          
                {images.map((image) => (

                      <GifsItem key={image.id} {...image} />
                
                ))}
          </div>
        ) : (
          <Spinner/>
        )}
    </>
  );
};


