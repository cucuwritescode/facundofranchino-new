import React from "react";
import { List } from "@react95/core";
import { Awfxcg321303 } from "@react95/icons";
import * as S from "./layoutStyling";

function CV({ closeCV, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"CV.txt"}
      closeModal={closeCV}
      height="100%"
      icon={<Awfxcg321303 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeCV}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <h1>Curriculum Vitae</h1>
          <p>
            
          </p>
          <h2>Latest Work History</h2>
          <h3></h3>
          <p>
            
            

          </p>

 
        
         
          <h3></h3> 
          <p>
            
          </p>
          <h2>Education</h2>
          <h3>BEng Electronics Engineering with Music Technology Systems - University of York</h3>
          <p>
          </p>
          <h3></h3>
          <p>
            
          </p>
          <h3></h3>
          <p>
          
          </p>
          <h2>Languages in order of strength</h2>
          <ul>
            <li>Spanish</li>
            <li>English</li>
            
          </ul>
          <p>Elementary or basic knowledge in the following</p>
          <ul>
            <li>Italian</li>
            <li>French</li>
            <li>Finnish</li>
            <li>Russian</li>
          </ul>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default CV;
