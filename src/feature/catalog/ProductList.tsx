import Grid from "@mui/material/Grid2";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";


interface Props {
    
    products: Product[]
}
export default function ProductList({products}:Props){
    return (
        <Grid container spacing={4}>
        {products?.map((product) => (
          <Grid size={{ xs: 6, md: 3 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
}