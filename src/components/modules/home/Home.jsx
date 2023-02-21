import React from "react";
import "./Home.scss";
import {
  Subheaderimg,
  Pf1,
  Pf2,
  Pf3,
  SI1,
  SI2,
  SI3,
  SI4,
  Line,
} from "../../../assets";

const Home = () => {
  return (
    <>
      <div className="subheader-container">
        <div className="subheader-container-content">
          <div className="subheader-container-content-left">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="subheader-container-content-left-infield">
              <input type="search" placeholder="Your Email Address" />
              <button>Get Started</button>
            </div>
            <div className="subheader-container-content-left-pffield">
              <div className="subheader-container-content-left-pffield-left">
                <div className="subheader-container-content-left-pffield-left-imgfield">
                  <img src={Pf1} alt="photo1" />
                  <img src={Pf3} alt="photo1" />
                  <img src={Pf2} alt="photo1" />
                  <img src={Pf3} alt="photo1" />
                  <img src={Pf2} alt="photo1" />
                  <img src={Pf1} alt="photo1" />
                </div>
                <span>1.6k+</span>
              </div>

              <div className="subheader-container-content-left-pffield-right">
                <p>1,600 people requested access a visit in last 24 hours</p>
              </div>
            </div>
          </div>
          <div className="subheader-container-content-right">
            <img src={Subheaderimg} alt="Picture" />
          </div>
        </div>
      </div>
      <div className="social-container">
        <div className="social-container-content">
          <img src={SI1} alt="Social-images" />
          <img src={SI4} alt="Social-images" />
          <img src={SI2} alt="Social-images" />
          <img src={SI3} alt="Social-images" />
          <img src={SI4} alt="Social-images" />
        </div>
      </div>
      <div className="aboutgpt-container">
        <div className="aboutgpt-container-content">
          <div className="aboutgpt-container-content-row1">
            <div className="aboutgpt-container-content-row1-left">
              <img src={Line} alt="LineImg" />
              <h1>What is GPT-3</h1>
            </div>
            <div className="aboutgpt-container-content-row1-right">
              <p>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          <div className="aboutgpt-container-content-row2">
            <h1>The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
          </div>
          <div className="aboutgpt-container-content-row3">
            <GPTdata
              Tittle="Chatbots"
              chatdata="We so opinion friends me message as delight. Whole front do of plate
          heard oh ought."
            />
            <GPTdata
              Tittle="Knowledgebase"
              chatdata="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
            <GPTdata
              Tittle="Education"
              chatdata="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const GPTdata = ({ Tittle, chatdata }) => {
  return (
    <div className="gptdata">
      <div className="gptdata-content">
        <img src={Line} alt="lineIng" />
        <h1> {Tittle} </h1>
        <p>{chatdata}</p>
      </div>
    </div>
  );
};
