import React, { useContext } from 'react';
import ReactDOM from "react-dom";

const BayarAContext = React.createContext();
const BayarBContext = React.createContext();
const { Provider, Consumer } = React.createContext();


export default function Usecontext(){
    return(
        <div className="Main">
            <p className="Text">PILIH VIA PEMBAYARAN!</p>
               <p>PILIH SALAH SATU!</p><br/>
            <p>Kelompok 9</p><br/>
            <BayarAContext.Provider value = {5000}>
                <div>
                    <BayarA />
                </div><br/>
            </BayarAContext.Provider>
            <BayarBContext.Provider value = {10000}>
                <div>
                    <BayarB />
                </div>
            </BayarBContext.Provider>
        </div>
    );
}

function BayarA(){
    const value = useContext(BayarAContext);
    return <div>
        <button className="Button" onClick = {() => {alert(`Pembaran Via ShopeePay Sebesar Rp. ${value}`);}} title = "Via ShopeePay">
            ShopeePay
        </button>
    </div>;
}

function BayarB(){
    const value = useContext(BayarBContext);
    return <div>
        <button className="Button" onClick = {() => {alert(`Pembaran Via Tokopaedi Sebesar Rp. ${value}`);}} title = "Via Tokopaedi">
            Tokopaedi
        </button>
    </div>;
}