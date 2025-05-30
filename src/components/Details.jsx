import styled from "styled-components";
import Home from "./Home";
import { GiPlayButton } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./firebase";
import { getDoc, doc } from "firebase/firestore";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("no such document in firebase");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    getMovieDetails();
  }, [id, db]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img
          src={detailData.titleImg}
          alt="title"
        />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <PlayIcon>
              <GiPlayButton />
            </PlayIcon>
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <MdGroups />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle>
          {detailData.subTitle}
        </Subtitle>          
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 72px);
  height: calc(100vh - 72px);
  overflow-x: hidden;
  display: block;
  top: 80px;
  padding: 0 calc(3.5vw + 5px);
  margin: 0 auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
 padding-bottom: 24px;
  min-height: 170px;
 
  width: 100%;
  -webkit-box-pack: start;

  img {
 
    max-width: 600px;
    min-width: 200px;
    width: 32vw;

  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    padding: 0px 12px;
    margin: 0px 22px 10px 0px;
  }
`;
const Trailer = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    padding: 0px 12px;
    margin: 0px 22px 10px 0px;
  }
`;

const PlayIcon = styled.div`
  font-size: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0px 2px 0px 0px !important;
`;
const AddList = styled.div`
  margin-right: 16px;
  margin-bottom: 10px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  baclground: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;

    background: rgb(0, 0, 0);
    border-radius: 50%;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 8px;
    }
  }
`;

const Subtitle = styled.div`
  color: rbg(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;
