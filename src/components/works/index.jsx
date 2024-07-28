import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WorksCard from "./WorksCard";

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
        img: "/work/sites/crm.png",
        site: "https://kinolog76.github.io/websites-template/games-shop/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/CRM-Dashboard",
      },
      {
        name: "Game Shop",
        img: "/work/sites/games.png",
        site: "https://kinolog76.github.io/websites-template/games-shop/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/games-shop",
      },

      {
        name: "NLT Crypto",
        img: "/work/sites/nlt.png",
        site: "https://kinolog76.github.io/websites-template/NLT-Crypto/index.html",

        github: "https://github.com/Kinolog76/websites-template/tree/main/NLT-Crypto",
      },

      {
        name: "Excellent",
        img: "/work/sites/excellent.png",

        site: "https://kinolog76.github.io/websites-template/Excellent/index.html",

        github: "https://github.com/Kinolog76/websites-template/tree/main/Excellent",
      },

      {
        name: "Go-To",

        img: "/work/sites/go-to.png",

        site: "https://kinolog76.github.io/websites-template/Go-To/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/Go-To",
      },
      {
        name: "Wallpaper Shop",

        img: "/work/sites/wallpaper.png",
        site: "https://kinolog76.github.io/websites-template/Wallpaper/index.html",
        github: "https://github.com/Kinolog76/websites-template/tree/main/Wallpaper",
      },
    ],

    "React / JS": [
      {
        name: "React Random Color Generator",

        img: "/work/sites/random_color_generator.png",

        site: "https://kinolog76.github.io/React-rangom-color-generator/",

        github: "https://github.com/Kinolog76/React-rangom-color-generator",
      },
      {
        name: "React Github Profile Finder",

        img: "/work/sites/github_profile_finder.png",

        site: "https://kinolog76.github.io/React-github-profile-finder/",
        github: "https://github.com/Kinolog76/React-github-profile-finder",
      },
      {
        name: "React todo list",

        img: "/work/sites/todo_list.png",

        site: "https://kinolog76.github.io/React-todo-list/",

        github: "https://github.com/Kinolog76/React-todo-list",
      },
      {
        name: "React pizza app",

        img: "/work/sites/pizza_app.png",

        github: "https://github.com/Kinolog76/React-pizza-app",
      },

      {
        name: "JS Hangman game",

        img: "/work/sites/hangman_game.png",

        site: "https://kinolog76.github.io/hangman-game-js/",

        github: "https://github.com/Kinolog76/hangman-game-js",
      },
    ],
    Python: [
      {
        name: "Parsing and sending results to Google Sheets",

        img: "/work/sites/py.png",

        github: "https://github.com/Kinolog76/data-to-google-sheets",
      },

      {
        name: "SQL translater",

        img: "/work/sites/py.png",
        github: "https://github.com/Kinolog76/Python-scripts/tree/main/sql-translater",
      },

      {
        name: "Find broken images in .md files",

        img: "/work/sites/py.png",

        github: "https://github.com/Kinolog76/Python-scripts/tree/main/find-broken-image-links",
      },

      {
        name: "Transfer files on keyword",

        img: "/work/sites/py.png",

        github: "https://github.com/Kinolog76/Python-scripts/tree/main/transfer-files-on-keyword",
      },

      {
        name: "File name to folder",

        img: "/work/sites/py.png",

        github: "https://github.com/Kinolog76/Python-scripts/tree/main/file-name-to-folder",
      },

      {
        name: "Rename and add to exel",

        img: "/work/sites/py.png",

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
