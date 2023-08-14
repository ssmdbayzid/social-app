import Routers from "./Router/Routers";
import Footer from "./component/Footer";
import Header from "./component/Header";



function App() {
  return (
    <div className="pb-48" >
      <Header />
      <div className="">
      <Routers className="h-full"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
