import React from "react";

import lazers from "../../assets/images/highrise-lazers.jpeg";
import PhotoGridHero from "../ui/PhotoGrids/PhotoGridHero";

import FAQScomp from "../../pages/FAQS/FAQScomp";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div className="page-wrapper">
      <div className="hero-wrapper">
        <PhotoGridHero
          photoGrid={props.pageData.photoGrid}
          heading={props.pageData.pageContent.heading}
        />
      </div>
      <div className="page-content py-6">
        <p className="px-24 py-12">
          Now, this is a story all about how My life got flipped-turned upside
          down And I'd like to take a minute Just sit right there I'll tell you
          how I became the prince of a town called Bel-Air.
          <br></br>
          <br></br>
          In West Philadelphia born and raised On the playground was where I
          spent most of my days Chillin' out, maxin', relaxin', all cool And all
          shootin' some b-ball outside of the school. When a couple of guys who
          were up to no good; Started making trouble in my neighborhood. I got
          in one little fight and my mom got scared. She said, "You're movin' in
          with your auntie and uncle in Bel-Air".
          <br></br>
          <br></br>I begged and pleaded with her day after day But she packed my
          suitcase and sent me on my way She gave me a kiss and then she gave me
          my ticket I put my Walkman on and said, "I might as well kick it".
          First class, yo this is bad Drinking orange juice out of a champagne
          glass Is this what the people of Bel-Air living like? Hmm, this might
          be alright But wait, I hear they're prissy, bourgeois, all that Is
          this the type of place that they just send this cool cat?
          <br></br>
          <br></br> I don't think so I'll see when I get there I hope they're
          prepared for the prince of Bel-Air Well, the plane landed and when I
          came out There was a dude who looked like a cop standing there with my
          name out I ain't trying to get arrested yet, I just got here I sprang
          with the quickness like lightning, disappeared I whistled for a cab
          and when it came near The license plate said, "Fresh" and it had dice
          in the mirror If anything I could say that this cab was rare But I
          thought "Nah, forget it, yo, holmes to Bel Air" I pulled up to the
          house about seven or eight And I yelled to the cabbie, "Yo holmes,
          smell ya later" I looked at my kingdom I was finally there To sit on
          my throne as the prince of Bel-Air
        </p>
      </div>
      <div className="page-faqs section">
        <FAQScomp faqData={props.pageData.faqData} />
      </div>
    </div>
  );
};

export default PageFormat;