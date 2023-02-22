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
  FImg,
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
      <div className="container4">
        <div className="container4-content">
          <div className="container4-content-left">
            <h1>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p>Request Early Access to Get Started</p>
          </div>
          <div className="container4-content-right">
            <DataColumn
              heading="Improving end distrusts instantly "
              data="From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded."
            />
            <DataColumn
              heading="Become the tended active "
              data="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
            />
            <DataColumn
              heading="Message or am nothing "
              data="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
            />
            <DataColumn
              heading="Really boy law county "
              data="From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded."
            />
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="container6-content">
          <div className="container6-content-left">
            <img src={FImg} alt="Feature-img" />
          </div>
          <div className="container6-content-right">
            <span>Request Early Acess to Get Started</span>
            <h1>The possibilities are beyond your imagination</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <h5>Request Early Acess to Get Started</h5>
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

const DataColumn = ({ heading, data }) => {
  return (
    <div className="dtacol">
      <div className="dtacol-p1">
        <img src={Line} alt="lineImg" />
        <h1> {heading} </h1>
      </div>
      <div className="dtacol-p2">
        <p>{data}</p>
      </div>
    </div>
  );
};
