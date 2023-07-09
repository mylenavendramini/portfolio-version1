import styled, { keyframes } from "styled-components";

import {
  slideInLeft,
  slideInRight,
  slideInUp,
  pulse,
  fadeInUp,
  tada,
  rubberBand,
  zoomInUp,
  fadeIn,
  flash,
} from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const pulseAnimation = keyframes`${pulse}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const tadaAnimation = keyframes`${tada}`;
const rubberBandAnimation = keyframes`${rubberBand}`;
const zoomInUpAnimation = keyframes`${zoomInUp}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const flashAnimation = keyframes`${flash}`;

export const SlideInLeftDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;

export const SlideInRightDiv = styled.div`
  animation: 1s ${slideInRightAnimation};
`;

export const SlideInUpDiv = styled.div`
  animation: 2s ${slideInUpAnimation};
`;

export const PulseDiv = styled.div`
  animation: 5s ${pulseAnimation};
`;

export const FadeInUpDiv = styled.div`
  animation: 5s ${fadeInUpAnimation};
  animation-delay: 1s;
`;

export const FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;

export const FadeIn5Div = styled.div`
  animation: 5s ${fadeInAnimation};
`;

export const FadeIn8Div = styled.div`
  animation: 8s ${fadeInAnimation};
`;

export const FadeIn10Div = styled.div`
  animation: 10s ${fadeInAnimation};
`;

export const FadeIn25Div = styled.div`
  animation: 25s ${fadeInAnimation};
`;

export const FadeIn30Div = styled.div`
  animation: 30s ${fadeInAnimation};
`;

export const TadaDiv = styled.div`
  animation: 2s ${tadaAnimation};
`;

export const RubberBandDiv = styled.div`
  animation: 1.1s ${rubberBandAnimation};
  animation-delay: 0s;
`;

export const ZoomInDiv = styled.div`
  animation: 2s ${zoomInUpAnimation};
  animation-delay: 0s;
`;

export const FlashDiv = styled.div`
  animation: 10s ${flashAnimation};
`;
