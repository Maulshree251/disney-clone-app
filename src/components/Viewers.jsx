import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers-disney" />
        <video 
        autoPlay={true} 
        loop={true} 
        playsInline={true} 
        muted={true}>
          <source
            src="\videos\1564674844-disney.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers-pixar" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        >
          <source src='/videos/1564676714-pixar.mp4' type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers-marvel" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        >
          <source src='/videos/1564676115-marvel.mp4' type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers-starwars" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        >
          <source src='/videos/1608229455-star-wars.mp4' type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers-national" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        >
          <source src='/videos/1564676296-national-geographic.mp4' type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
 margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));

`
const Wrap = styled.div`
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      cursor: pointer;
      padding: 10px;
      position: relative;
      overflow: hidden;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      margin: 0 5px;
      padding-top: 56.25%;

  
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        inset: 0px;
        opacity: 1;
        z-index: 1;
        position: absolute;
        transition: opacity 0.2s ease 0s;
        
        &:hover {
          opacity: 0.8;
        }
      }

      video{
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: 0;

      }

      &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        video{
          opacity: 1;
          transition: opacity 0.2s ease 0s;
          transition-delay: 0.2s;
          
        } 
      }
`


export default Viewers
