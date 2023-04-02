import styled from "styled-components";

export const StyledSpotlightsContent = styled.div<{
  total: number;
  current: number;
}> `
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 100%);
  width: ${({ total }) => total * 100}%;
  height: 100%;
  transition: transform 1s ease-in-out;
  transform: translateX(-${({ current }) => current * 100}%);
`;

export const StyledCarouselItem = styled.div<{ imageUrl: string }> `
  position: relative;
  z-index: 0;
  flex: 1 0 100%;
  height: 100%;
  padding: 6rem 4rem;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::before  {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,#202125 0,rgba(32, 33, 37, 0.6) 10%,rgba(32, 33, 37, 0) 30%,rgba(32, 33, 37, 0) 80%,#202125 100%);
  content: "";

  > *  {
  background-position: center;
  color: black;
  float: left;
  }
  }

  &::after  {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg,#202125 0,rgba(32, 33, 37, 0) 50%,#202125 100%);
  content: "";
  }

  > *  {
  position: relative;
  z-index: 2;
  }
`;