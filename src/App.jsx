import Footer from "./Components/Footer"
import Hero from "./Components/hero"
import { useEffect, useState } from "react";

import Loader from "./Components/Loader";



function App() {
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);


  return isLoading ? (
    <Loader />
  ) : (<>
   <Hero />
   <Footer />
   </>
  );
}

export default App;
