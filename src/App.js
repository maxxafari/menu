import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components/macro";
import { text } from "./text.js";
import FirstLevelMenuItem from "./FirstLevelMenuItem.js";
// list of menu items
const menuItems = [
  {
    name: "First level menu item",
    //link: '#first',
    menuItems: [
      {
        name: "Second level menu item 1",
        link: "second1",
      },
      {
        name: "Second level menu item 2",
        link: "second2",
      },
    ],
  },
  {
    name: "first level menu item 2",
    link: "Second",
    menuItems: [
      {
        name: "Second level menu item 21",
        link: "second21",
      },
      {
        name: "Second level menu item 22",
        link: "second22",
      },
    ],
  },
];
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;

const Menu = styled.div`
  width: 300px;
  min-width: 250px;
`;
const MenuFiexd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250;
  min-width: 250px;
  height: 100%;
  border: 1px solid black;
  overflow: auto;
`;

function App() {
  const [current, setCurrent] = useState("");
  console.log(current);

  const onClick = (name) => {
    setCurrent(name);
  };

  const setCurrentFromId = (id) => {
    menuItems.map((parent) =>
      parent.menuItems.map((item) => {
        if (item.link === id) {
          setCurrent(item.name);
        }
      })
    );
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const linkFromUrl = hash.replace("#", "");
      setCurrentFromId(linkFromUrl);
    }
  }, []);

  // event listener for scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll("article");
      let current = "";
      elements.forEach((element) => {
        if (element.offsetTop - 100 <= scrollPosition) {
          current = element.getAttribute("id");
          console.log(current);
        } else {
          return;
        }
      });
      setCurrentFromId(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Wrap>
        <Menu>
          <MenuFiexd>
            {menuItems.map((item) => (
              <FirstLevelMenuItem
                key={item.name}
                item={item}
                current={current}
              ></FirstLevelMenuItem>
            ))}
          </MenuFiexd>
        </Menu>
        <div>
          <h1>Content</h1>
          {menuItems.map((parent) =>
            parent.menuItems.map((item) => (
              <article key={item.name} id={item.link}>
                <h2>
                  <a onClick={() => onClick(item.name)} href={`#${item.link}`}>
                    {item.name}
                  </a>
                </h2>
                <div>
                  <p key={item.name}>{text}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </Wrap>
    </div>
  );
}

export default App;
