import { React, useState, StyleSheet, Text, View, Button } from "react";
import { useAlert } from 'react-alert';
import "./Usestate.css";
import awal from "../Assets/jj.jfif";
import { render } from "@testing-library/react";


export default function Usestate() {
      
    const [showImage, setShowImage] = useState(true);
    const hideImage = () => {
      setShowImage(!showImage);
    };
    const words = [{
        text: 'Wesmbuh',
        key: 1
      },
      {
        text: 'Gatau',
        key: 2
      },
      {
        text: 'GW stuck,',
        key: 3
      },
      {
        text: 'Edi ngerjain sendiri, and stuck. jadinya ya gini',
        key: 4
      }
    ];
     const [textValue, setTextValue] = useState('change me'); // we call use state hook with initial value
    const len = words.length;
    const changeTextValue = () => {
        setTextValue(words[Math.floor(Math.random() * len)].text); // we use setTextValue function that the hook returned for us
    }
    render();
        return (
            <div className="Main">
            <p className="Text">GATAU INI APAAN! YANG PENTING JADI</p>
            <p>PAKE USESTATE!</p><br/>
            <p>Kelompok 9</p><br/>
  
            <div className="ViewImage">
                <div className="ViewImage1">
                <img
                    className="App-logo"
                    style={{ display: showImage === true ? "flex" : "none" }}
                    src={awal}
                    alt="log"
                />
            </div><br/>
            <button className="Button" onClick={hideImage}>
                {showImage !== true ? "show" : "hide"}
            </button>
            <div><br/>
            <button className="Button" onClick = {() => {alert(`${changeTextValue}`);}} title = "Press here">
                Press
            </button>
          </div><br/>
        </div>
      </div>
    );
  }
