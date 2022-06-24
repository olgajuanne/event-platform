
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/Router"
import { client } from "./lib/apollo"


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>      
    </ApolloProvider>
    
    //<h1 className="text-5xl font-bold text-violet-500"> Yo Sekai</h1>
  )
}

export default App
