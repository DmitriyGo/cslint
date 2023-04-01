import styled from "styled-components";
export const StyledSpotlightsCarousel = styled.div`
  z-index: 0;
  display: flex;
  width: 100%;
  height: calc(100vh - 4.5rem);
  overflow: hidden;
`;

export const StyledSpotlightsContent = styled.div<{
  total: number;
  current: number;
}>`
  z-index: 1;
  display: grid;
  width: ${({ total }) => total * 100}%;
  height: 100%;
  transition: transform 1s ease-in-out;
  grid-template-columns: repeat(${({ total }) => total}, 100%);
  transform: translateX(-${({ current }) => current * 100}%);
`;
