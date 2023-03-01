import styled from "styled-components/macro";

const Wrap = styled("div")`
  background-color: gray;
  padding: 10px;
  text-align: left;
  &.current {
    background-color: darkblue;
  }
  a {
    color: black;
    text-decoration: none;
    text-align: left;
  }
  &.current a {
    color: pink;
  }
`;

const SecondLevelMenuItem = ({ item, className, current }) => {
  const active = current === item.name ? "current" : "";
  return (
    <Wrap className={className + " " + active}>
      <a href={`#${item.link}`}> {item.name}</a>
    </Wrap>
  );
};

export default SecondLevelMenuItem;
