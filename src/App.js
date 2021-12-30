import Header from "./Components/Header/Header";
import RouterComp from "./Components/route/RouterComp";
import { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import "./App.css";
const LazyLoad = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Components/route/RouterComp")), 2000)
    )
);
function App() {
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    loadingContent();
  }, []);
  let txt = "Welcome";
  let i = 0;
  let str = "";
  const loadingContent = () => {
    if (i < txt.length) {
      str += txt[i];
      setLoadingText(str);
      i++;
      setTimeout(loadingContent, 100);
    }
    else{
      i=0;
      str = "";
      setTimeout(loadingContent, 100);
    }
  };

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="lazyConatiner">
            <div className="spinner-box">
              <div className="circle-border">
                <div className="circle-core"></div>
              </div>
              <p className="para">M</p>
            </div>
            <h1 className="loadingContent">{loadingText}</h1>
          </div>
        }
      >
        <LazyLoad />
      </Suspense>
    </div>
  );
}

export default App;
