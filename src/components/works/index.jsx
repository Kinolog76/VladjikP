import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WorksCard from "./WorksCard";

import crmImg from "/public/work/sites/crm.png";
import gamesImg from "/public/work/sites/games.png";
import nltImg from "/public/work/sites/NLT.png";
import excellentImg from "/public/work/sites/Excellent.png";
import gotoImg from "/public/work/sites/Go-To.png";
import wallpaperImg from "/public/work/sites/Wallpaper.png";
import randomColorGeneratorImg from "/public/work/sites/random_color_generator.png";
import githubProfileFinderImg from "/public/work/sites/github_profile_finder.png";
import todoListImg from "/public/work/sites/todo_list.png";
import pizzaAppImg from "/public/work/sites/pizza_app.png";
import hangmanGameImg from "/public/work/sites/hangman_game.png";
import pyImg from "/public/work/sites/py.png";
import reactImg from "/public/work/sites/react.png";

const ItemType = "CARD";

function DraggableCard({ id, index, moveCard, ...props }) {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop(item) {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <WorksCard {...props} />
    </div>
  );
}

function Works() {
  const [activeTab, setActiveTab] = useState("Sites");
  const [cards, setCards] = useState({
    Sites: [
      {
        name: "CRM Dashboard",
        img: crmImg,
        site: "https://kinolog76.github.io/websites-template/games-shop/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/CRM-Dashboard",
      },
      {
        name: "Game Shop",
        img: gamesImg,
        site: "https://kinolog76.github.io/websites-template/games-shop/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/games-shop",
      },
      {
        name: "NLT Crypto",
        img: nltImg,
        site: "https://kinolog76.github.io/websites-template/NLT-Crypto/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/NLT-Crypto",
      },
      {
        name: "Excellent",
        img: excellentImg,
        site: "https://kinolog76.github.io/websites-template/Excellent/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/Excellent",
      },
      {
        name: "Go-To",
        img: gotoImg,
        site: "https://kinolog76.github.io/websites-template/Go-To/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/Go-To",
      },
      {
        name: "Wallpaper Shop",
        img: wallpaperImg,
        site: "https://kinolog76.github.io/websites-template/Wallpaper/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/Wallpaper",
      },
    ],

    "React / JS": [
      {
        name: "React Udemy projects",
        img: reactImg,
        github: "https://github.com/Kinolog76/react-course-udemy",
      },
      {
        name: "JS Hangman game",
        img: hangmanGameImg,
        site: "https://kinolog76.github.io/hangman-game-js/",
        github: "https://github.com/Kinolog76/hangman-game-js",
      },
      {
        name: "React pizza app",
        img: pizzaAppImg,
        site: "https://kinolog76.github.io/React-pizza-app/",
        github: "https://github.com/Kinolog76/React-pizza-app",
      },
      {
        name: "React Random Color Generator",
        img: randomColorGeneratorImg,
        site: "https://kinolog76.github.io/React-rangom-color-generator/",
        github: "https://github.com/Kinolog76/React-rangom-color-generator",
      },
      {
        name: "React Github Profile Finder",
        img: githubProfileFinderImg,
        site: "https://kinolog76.github.io/React-github-profile-finder/",
        github: "https://github.com/Kinolog76/React-github-profile-finder",
      },
      {
        name: "React todo list",
        img: todoListImg,
        site: "https://kinolog76.github.io/React-todo-list/",
        github: "https://github.com/Kinolog76/React-todo-list",
      },
    ],
    Python: [
      {
        name: "Parsing data from site to Google Sheets",
        img: pyImg,
        github: "https://github.com/Kinolog76/data-to-google-sheets",
      },
      {
        name: "SQL translater",
        img: pyImg,
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/sql-translater",
      },
      {
        name: "Find broken images in .md files",
        img: pyImg,
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/find-broken-image-links",
      },
      {
        name: "Transfer files on keyword",
        img: pyImg,
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/transfer-files-on-keyword",
      },
      {
        name: "File name to folder",
        img: pyImg,
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/file-name-to-folder",
      },
      {
        name: "Rename and add to exel",
        img: pyImg,
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/rename-and-add-to-exel",
      },
    ],
  });

  const moveCard = (tab, fromIndex, toIndex) => {
    const updatedCards = [...cards[tab]];
    const [movedCard] = updatedCards.splice(fromIndex, 1);

    updatedCards.splice(toIndex, 0, movedCard);

    setCards({ ...cards, [tab]: updatedCards });
  };

  const tabs = ["Sites", "React / JS", "Python"];

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="portfolio" className="works container">
        <h2 className="title">Portfolio</h2>

        <div className="works-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="works-wrapper">
          {tabs.map((tab) => (
            <div key={tab} className={`${activeTab === tab ? "active" : ""} works-tabs-items`}>
              {cards[tab].map((card, index) => (
                <DraggableCard
                  key={card.name}
                  id={card.name}
                  index={index}
                  moveCard={(fromIndex, toIndex) => moveCard(tab, fromIndex, toIndex)}
                  {...card}
                />
              ))}

              {tab === "Sites" && (
                <div className="works-more">
                  <a target="_blank" href="https://kinolog76.github.io/websites-template/">
                    More sites
                  </a>
                </div>
              )}

              {tab === "Python" && (
                <div className="works-more">
                  <a target="_blank" href="https://github.com/Kinolog76/Python-scripts">
                    More scripts
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default Works;
