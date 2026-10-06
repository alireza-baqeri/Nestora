import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 50;
    `}
    line-height:1.4;

  /* font-style: italic; */
  color: #e7b511;
  text-shadow: 1px 1px 2px;
  letter-spacing: 2px;
  background-color: #1a549b;
`;
export default Heading;
