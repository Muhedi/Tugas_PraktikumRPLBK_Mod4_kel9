import "./Main.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Usestate from "./Usestate/Usestate";
import Useeffect from "./Useeffect/Useeffect";
import Usecontext from "./Usecontext/Usecontext";




export default function Main(){
    return(
        <BrowserRouter>
        <header>
          <div className="title">
            <p>INI TUGAS MODUL 4 DARI KELOMPOK 9 (MUHAMMAD EDI ILFA)</p>
          </div>
          <nav>
            <Link className="text" to="/">
              Pake useState
            </Link>
            <Link className="text navtext2" to="/Useeffect">
              Jual Pulsa
            </Link>
            <Link className="text" to="/Usecontext">
              Pembayaran
            </Link>
           
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Usestate} />
          <Route path="/Useeffect" component={Useeffect} />
          <Route path="/Usecontext" component={Usecontext} />
  \
        </Switch>
      </BrowserRouter>
    );
}