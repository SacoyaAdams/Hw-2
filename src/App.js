import{ QueryClient, QueryClientProvider } from "react-query";

import{ ReactQueryDevTools } from "react-query-devtools";

import Repositories from "./Repositories"

// import logo from './logo.svg';

import './App.css';


const queryClient = new QueryClient({});


const App = () =>{

return(

<QueryClientProvider client={queryClient}>

<Repositories/>

{/* //<ReactQueryDevTools initialIsOpen={true}/> */}


</QueryClientProvider>

);

};
export default App;