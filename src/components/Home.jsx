import React, { useState } from "react";
import cross from "./assets/img/img-home/Cross.png";
import healer from "./assets/img/img-home/Healer.png";
import sanctifier from "./assets/img/img-home/Sanctifier.png";
import king from "./assets/img/img-home/King.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import useSize from "@react-hook/size";

const Home = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const target = React.useRef(null);
  const [width, height] = useSize(target);

  // const reactRoot = document.getElementById("four-fold-tittle-wrapper");
  // const restUrl = reactRoot.getAttribute("data-value");

  return (
    <div>
      <div className="mission-vission">
        <div className="mission-column">
          <AnimationOnScroll
            animateIn="animate__fadeInDown "
            animateOnce={true}
          >
            <h2>mission</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft "
            animateOnce={true}
          >
            <p>
              "We exist to transform communities and to aggressively disciple{" "}
              <br />
              the nations by engaging in holistic development ministries and by
              <br />
              planting churches that proclaim Jesus Christ as Savior,
              <br />
              Sanctifier, Healer and Coming King."
            </p>
          </AnimationOnScroll>
        </div>
        <div className="mission-column">
          <AnimationOnScroll
            animateIn="animate__fadeInDown animate__delay-.5s"
            animateOnce={true}
          >
            <h2>vission</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight animate__delay-.5s"
            animateOnce={true}
          >
            <p>
              "That we envision transformed communities with mission-driven
              <br />
              Christian congregations here and abroad for the glory of God."
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div id="four-fold-wrapper">
        <AnimationOnScroll animateIn="animate__fadeInUp " animateOnce={true}>
          <h2>fourfold gospel</h2>
        </AnimationOnScroll>
        <div className="four-fold-container">
          <div className="cols">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft "
              animateOnce={true}
            >
              <button
                className={title == "savior" ? title : true}
                onClick={() => {
                  setTitle((x) => (x = "savior"));
                  setText(
                    (y) =>
                      (y =
                        "The Name of Jesus has impacted lives around the world for more than 2,000 years. He is a universal Savior, promising that: “whoever believes in him shall not perish but have eternal life.” Jesus is an exclusive Savior. “Salvation is found in no one else, for there is no other name in heaven given to men by which we must be saved” Acts 4:12. Contrary to what contemporary culture tells us, there are not multiple paths to God. There is only one—Jesus Christ")
                  );
                }}
              >
                <img src={cross} alt="savior" />
              </button>
            </AnimationOnScroll>
          </div>

          <div className="cols">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft "
              animateOnce={true}
            >
              <button
                className={title == "sanctifier" ? title : true}
                onClick={() => {
                  setTitle((x) => (x = "sanctifier"));
                  setText(
                    (y) =>
                      (y =
                        "Many Christians understand God’s promise of salvation but do not experience the ongoing sanctifying work of Jesus Christ in their lives. For those who neither understand nor allow the Holy Spirit's control in their lives, the results have a profound effect. Unsuccessful struggle against sin and a lack of power in life and ministry frustrate those who have asked Jesus to be their Savior but not their Sanctifier, resulting in a lack of joy in their walk with Christ. At the point when we are born again, we become members of God’s family. We believe He paid the price for our sin and that his followers are—set apart from those who are not born again—and are seen as holy because of what Christ has done.")
                  );
                }}
              >
                <img src={sanctifier} alt="sanctifier" />
              </button>
            </AnimationOnScroll>
          </div>

          <div className="cols">
            <AnimationOnScroll
              animateIn="animate__fadeInRight "
              animateOnce={true}
            >
              <button
                className={title == "healer" ? title : true}
                onClick={() => {
                  setTitle((x) => (x = "healer"));
                  setText(
                    (y) =>
                      (y =
                        "A great portion of Christ’s time was dedicated to healing the sick. He healed all kinds of people: the blind, the paralyzed, the lame, the deaf, lepers, those who had fevers, and many with chronic illnesses. We find no record in the gospels of Jesus turning away anyone who came to him for healing, nor do we find that any disease was too difficult for him to heal. He even raised the dead. Miraculous healings still occur today—evidence that Christ is still our Healer.")
                  );
                }}
              >
                <img src={healer} alt="healer" />
              </button>
            </AnimationOnScroll>
          </div>

          <div className="cols">
            <AnimationOnScroll
              animateIn="animate__fadeInRight "
              animateOnce={true}
            >
              <button
                className={title == "coming king" ? title : true}
                onClick={() => {
                  setTitle((x) => (x = "coming king"));
                  setText(
                    (y) =>
                      (y =
                        "The physical return of Jesus has been the subject of speculation and controversy since His ascension into the clouds, which is recorded in the New Testament Book of Acts. Knowing that countless millions still have not heard the gospel, The Alliance is committed to doing its part to complete Christ’s Great Commission before His imminent return.")
                  );
                }}
              >
                <img src={king} alt="comming-king" />
              </button>
            </AnimationOnScroll>
          </div>
        </div>
        <div
          id="four-fold-tittle-wrapper"
          ref={target}
          style={console.log()}
          data-value={height}
        >
          <h3 className={title ? title : ""}>{title ? title : ""}</h3>
          <p>{text ? text : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
