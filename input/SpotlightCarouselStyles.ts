import styled from "styled-components";

export const StyledSpotlightsCarousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 4.5rem);
  z-index: 0;
`;

export const StyledSpotlightsContent = styled.div<{
  total: number;
  current: number;
}>`
  z-index: 1;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 100%);
  width: ${({ total }) => total * 100}%;
  transform: translateX(-${({ current }) => current * 100}%);
  transition: transform 1s ease-in-out;
`;
