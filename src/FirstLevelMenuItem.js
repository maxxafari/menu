import styled from "styled-components/macro";

const Wrap = styled("div")`
  text-align: left;
  background: lightgray;
  border: 2px solid white;

  overflow: hidden;
  transition: max-height 0.5s ease-in;
  max-height: 40px;
  span {
    display: block;
    font-weight: bold;
    padding: 10px 10px 10px 0;
  }
  &:has(.current) {
    max-height: 300px;
  }
`;

const FirstLevelMenuItem = ({ children, className }) => {
  return <Wrap className={className}>{children}</Wrap>;
};

export default FirstLevelMenuItem;
