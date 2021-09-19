import React,  {useState, useEffect } from "react";
import './Useeffect.css'

export default function Useeffect() {
    const [count, setCount] = useState(5000);
    const [data, setData] = useState([]);


useEffect(() => {
    if (count > 5000){
        alert(`Mau beli pulsa ${count}?, Sipp gan!`);
    }
    else if (count < 5000){
        alert(`Mau beli pulsa ${count}?, Terlalu dikit gan`);
    }
    else if (count == 5000){
        alert(`Mau beli pulsa ${count}?, Terlalu dikit gan`);
    }
}, [count]);

//dijalankan terus menerus
useEffect(() => {
    console.log('spam console kuy');
});

const countUp = () => {
    setCount(count + 5000);
};
const countDown = () => {
    setCount(count - 5000);
};

return (
    <div className="Main">
        <p className="Text">JUAL PULSA!, MONGGO INPUT</p>
        <p>Kelompok 9 (PakeUseEffect)</p>
        <p> ..... </p>
         <p>Silahkan isi!</p>

        <p className="Text">{count}</p>
        <div className="ViewButton">
            <div className="ViewButton2">
                <button className="Button" onClick={countUp}>
                    Tambah!
                </button>
            </div>
            <div className="ViewButton1">
                <button className="Button" onClick={countDown}>
                    Kurang :(
                </button>
            </div>
        </div>
    </div>
);

}
