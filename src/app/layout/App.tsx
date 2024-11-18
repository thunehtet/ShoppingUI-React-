import { Container, createTheme, CssBaseline } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import Loading from "./Loading";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../feature/basket/basketSlice";


function App() {
  //const{setBasket}= useStoreContext();

  const dispatch= useAppDispatch();
  const[loading,setLoading]=useState(false);

  useEffect(()=>{
    const customerId=getCookie('buyerId');
    if(customerId){
      agent.Basket.get()
      .then(basket=>dispatch(setBasket(basket)))  
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
    }
    else{
      setLoading(false)
    }
  },[dispatch])


  const[darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode?'dark':'light'
  const theme= createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: paletteType==='light'?'#eaeaea':'#121212'
      }

    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  if(loading)return <Loading message="Initialising app..."/>

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
            <CssBaseline/>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Outlet/>
            </Container>
    </ThemeProvider>
    
  );
}

export default App
