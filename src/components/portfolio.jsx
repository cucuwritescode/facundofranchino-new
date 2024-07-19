import React from "react";
import { List } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as S from "./layoutStyling";

function Portfolio({ closePortfolio, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Portfolio.txt"}
      closeModal={closePortfolio}
      height="100%"
      icon={<Explorer103 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closePortfolio}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <h1>Short Portfolio</h1>
          <p>
            This is a shortened, non-visual version of my portfolio without
            detailed information on the projects I have been working on. If you
            are interested in seeing any of the work I have done in more detail,
            please contact me for a call and I'll present the learnings in more
            detail.
          </p>
          <hr />
          <h2>Pan-adero</h2>
          <h3>Auto-pan audio effect plugin</h3>
          <span>
            Role: 
          </span>
          <p>
            <h4>Background:</h4>
            






          </p>
          <hr />
          <h2>The Audio Player95</h2>
          <h3>Rust and Typescript/React audio player</h3>
          <span>Role: </span>
          <p>
            <h4>Background:</h4>
            







            <h4>Solution:</h4>
            






          </p>
          <hr />
          <h2>Algorithmic Reverb</h2>
          <h3>algorithmic reverb plugin</h3>
          <span>Role:</span>
          <p>
            <h4>Background:</h4>
            




            <h4>Solution:</h4>
            





          </p>
          <hr />
          <h2>Website design and development</h2>
          <h3>facundofranchino.com</h3>
          <span>Role: Designer/Developer</span>
          <p>
            <h4>Background</h4>
            



            <h4>Solution</h4>
            




          </p>
          <hr />
          <h2>Instagram Unfollowers tool</h2>
          <h3>instagram-unfollowers-analyzer</h3>
          <span>Role:</span>
          <p>
            <h4>Background</h4>
          



            <h4>Solution</h4>
           



          </p>
          <hr />
          <h2>Maintenance website</h2>
          <h3>
            


          </h3>
          <span>Role: </span>
          <p>
            <h4>Background</h4>
       




          </p>

        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default Portfolio;
