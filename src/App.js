import Header from "./Components/Header/Header";
import RouterComp from "./Components/route/RouterComp";
import { lazy, Suspense } from "react";
import "./App.css";
const LazyLoad = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Components/route/RouterComp")), 2000)
    )
);
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="lazyConatiner">
            <div class="spinner-box">
              <div class="circle-border">
                <div class="circle-core"></div>
              </div>
              <p className="para">
                M
               
              </p>
              
            </div>
            
          </div>
        }
      >
        <LazyLoad />
      </Suspense>
    </div>
  );
}

export default App;
