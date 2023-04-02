import styled from "styled-components";

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

export const StyledCarouselItem = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 100%;
  flex: 1 0 100%;

  padding: 6rem 4rem;
  z-index: 0;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    > * {
      color: black;
      background-position: center;
      float: left;
    }

    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 10%,
      rgba(32, 33, 37, 0) 30%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      #202125 0,
      rgba(32, 33, 37, 0) 50%,
      #202125 100%
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
