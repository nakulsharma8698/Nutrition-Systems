import React from "react";
import styled from "styled-components";

function AspectRatioBackground({ url, ratio = "1:1", className, children }) {
  const [widthRatio, heightRatio] = ratio.split(":");
  return (
    <Background className={className} url={url} w={widthRatio} h={heightRatio}>
      {children}
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  background: url("${props => props.url}") center center no-repeat;
  background-size: contain;
  width: 100%;
  padding-bottom: ${props => {
    return (props.h / props.w) * 100;
  }}%;
`;

export default AspectRatioBackground;
