//import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
//import { Product } from "../../app/models/product";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";
import { useEffect} from "react";

export default function Catalog() {

    //const [products, setProducts] = useState<Product[]>([]);
    //const[loading,setLoading]=useState(true);

    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded,status}=useAppSelector(state=>state.catalog);
    const dispatch =useAppDispatch();
    

  // useEffect(()=>{
  //   agent.Catalog.list()
  //   .then(products=>setProducts(products))
  //   .catch(error=>console.log(error))
  //   .finally(()=>setLoading(false))
  // },[])

  useEffect(()=>{
    if(!productsLoaded) dispatch(fetchProductsAsync());
  },[dispatch,productsLoaded])

  if(status.includes('pending')) return <Loading/>

    return (
        <>
            <ProductList products={products}/>
        </>
    );
}
