import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/slices/movieSlice";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  


  useEffect(() => {
    const moviesCollection = collection(db, "movies");
    const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];

      
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data()}]
            break
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data()}]; 
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data()}];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data()}];
            break;
          default:
            break;
        }
       
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          originals: originals,
          trending: trending,
        }));
      });
      console.log("Movies data updated:", {
        recommend: recommends,
        newDisney: newDisney,
        originals: originals,
        trending: trending,
      });
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 72px;
  overflow-x: hidden;
  min-height: calc(100vh - 72px);
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    z-index: -1;
    opacity: 1;
  }
`;

export default Home;
