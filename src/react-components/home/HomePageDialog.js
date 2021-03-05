import React, { useEffect, useState } from "react";
import create from "../../assets/user/create.jpg";
import play from "../../assets/user/play.jpg";
import work from "../../assets/user/work.jpg";
import learn from "../../assets/user/learn.jpg";
import basics from "../../assets/user/basics.jpg";
import "./HomePageDialog.scss";
import "./HomePageFrame.scss";

const chooseOptions = [
  { img: create, name: "Create", desc: "Great for editing photos or videos and have a digital pen." },
  { img: play, name: "Play", desc: "Can handle gaming and video streaming." },
  { img: work, name: "Work", desc: "Built for work with longer battery life and biometric login." },
  {
    img: learn,
    name: "Learn",
    desc: "With a touchscreen and long battery life that help students learn at home or in the classroom."
  },
  {
    img: basics,
    name: "Basics",
    desc: "Primarily used for everyday tasks like browsing the internet and checking email."
  }
];

const frameUrl = "https://www.baidu.com";
const buyUrl = "https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/X1-Titanium-G1/p/22TP2X1X1T1";

export function HomePageDialog() {
  const [showDialog, setShowDialog] = useState(false);
  const [showFrame, setShowFrame] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  const openFrame = () => {
    setShowFrame(true);
  };
  const closeFrame = () => {
    setShowFrame(false);
  };

  useEffect(() => {
    document.onkeydown = function(e) {
      const keyCode = e.keyCode || e.which || e.charCode;
      // const altKey = e.altKey;
      if (keyCode == 80) {
        // i 73
        openDialog();
      } else if (keyCode == 73) {
        openFrame();
      } else if (keyCode == 89) {
        window.open(frameUrl, "_blank");
      } else if (keyCode == 66) {
        window.open(buyUrl, "_blank");
      }
      e.preventDefault();
      return false;
    };
  }, []);

  return (
    <>
      {showDialog && (
        <div className="home-page-dialog">
          <div className="home-page-dialog-content">
            <h3 className="title">Welcome to Lenovo Virtual Store</h3>
            <div className="sub-title">
              How do you plan to use the virtual store? Select one or two of the below options.
            </div>
            <div className="card-box">
              {chooseOptions.map((option, index) => {
                return (
                  <div className="card-item" key={"option" + index}>
                    <div className="input-box">
                      <input
                        id={"color-input-red-" + index}
                        className="color-input-red"
                        type="checkbox"
                        name={"color-input-red-" + index}
                        value="#f0544d"
                      />
                      <label htmlFor={"color-input-red-" + index} />
                    </div>
                    <img src={option.img} />
                    <div className="name">{option.name}</div>
                    <div className="desc">{option.desc}</div>
                  </div>
                );
              })}
            </div>
            <div className="next-box">
              <button onClick={closeDialog}>Next</button>
            </div>
          </div>
        </div>
      )}
      {showFrame && (
        <div className="home-frame-dialog">
          <div className="top">
            <div className="name">Remote computer</div>
            <div className="close" onClick={closeFrame}>
              X
            </div>
          </div>
          <iframe className="home-iframe" frameBorder="0" src={frameUrl} />
        </div>
      )}
      {/* <div className="show-home-page-btn" onClick={openDialog}>
        L
      </div> */}
    </>
  );
}
