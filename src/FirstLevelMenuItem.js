import styled from "styled-components/macro";
import SecondLevelMenuItem from "./SecondLevelMenuItem.js";

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
  div:first-child {
    padding-left: 10px;
  }
  &:has(.current) {
    max-height: 300px;
  }
`;
const Kids = styled.div`
  padding-left: 10px;
`;

const FirstLevelMenuItem = ({ item, className, current }) => {
  return (
    <Wrap className={className}>
      <span>{item.name}</span>
      <Kids className="children">
        {item.menuItems?.map((item) => (
          <SecondLevelMenuItem key={item.name} item={item} current={current} />
        ))}
      </Kids>
    </Wrap>
  );
};

export default FirstLevelMenuItem;
