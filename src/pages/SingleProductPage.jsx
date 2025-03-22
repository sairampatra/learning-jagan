import { SideBySideMagnifier } from "react-image-magnifiers";
import productImage from "/vite.svg"; // Adjust path if needed

function UMayAlsoBuy() {
    const [singeProducttData, recomendationData] = useQueries({
        queries: [
          { queryKey: ["singleProduct"], queryFn: ()=>{axiosinstance.get(`/${}`)} },
          { queryKey: ["recomendation"], queryFn: fetchPosts },
        ],
      })

    }
function SingleProductPage() {
  return (
   <div></div>
  );
}

export default SingleProductPage;
