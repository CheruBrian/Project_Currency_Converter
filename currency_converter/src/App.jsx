import { useEffect } from "react";
import { testAPI } from "./api/testAPI";

function App() {
  useEffect(() => {
    testAPI();
  }, []);

  return <div>API Test Running...</div>;
}

export default App;
