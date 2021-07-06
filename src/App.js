import "./App.css";
import Foreign from "./components/Foreign";
import Second from "./components/Second";
import Third from "./components/Third";
import "./components/style.css";
function App() {
  return (
    <div className="App">
       <div className="Header"  style={{maxWidth: "100vw" }}>
          <img
          src="https://www.mercedes-benz.fr/passengercars/_jcr_content/logo.noscale.cloudsvg.imageLogo.20180312094632.svg"
          alt=""
        />
        <img
          src="https://www.mercedes-benz.fr/passengercars/_jcr_content/logo.noscale.cloudsvg.imageClaim.20180312094632.svg"
          alt=""
        />
        </div>
      <div style={{ border: "solid 5px ", maxWidth: "45vw" }}>
        <h1 className="title red">mercedes classe E : </h1>
       
      </div>

      <Foreign />
      <div style={{ border: "solid 5px ", maxWidth: "45vw" }}>
         <h2 className="title red">mercedes classe A : </h2>
      </div>
      <Second />
      <div style={{ border: "solid 5px ", maxWidth: "45vw" }}>
         <h3 className="title red "> Mercedes-Benz :  : </h3>
      </div>
      <Third />
    </div>
  );
}

export default App;
