import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import avatar from "../../images/profile.png";
function Game() {
  const [playAgain, setPlayAgain] = useState(false);
  useEffect(() => {
    var char = document.getElementById("char");
    var block = document.getElementById("block");
    var points = document.getElementById("points");
    var btn = document.getElementById("btn");
    let count = 0;
    points.innerHTML = count;
    btn.addEventListener("click", () => {
      count++;
      points.innerHTML = count;
      if (char.classList != "animate") {
        char.classList.add("animate");
      }

      setTimeout(function () {
        char.classList.remove("animate");
      }, 500);

      var checkDead = setInterval(function () {
        var charTop = parseInt(
          window.getComputedStyle(char).getPropertyValue("top")
        );

        var blockLeft = parseInt(
          window.getComputedStyle(block).getPropertyValue("left")
        );

        if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
          block.style.animation = "none";
          block.style.display = "none";
          char.style.display = "none";
          alert("Score: " + count);
          setPlayAgain(true);
        }
      }, 10);
    });
  }, []);
  return (
    <div className="mb-5 container text-center">
      <div className="col-12 col-sm-6 half">
        <h3 className="text-center">Got Bored Play Game 🎮</h3>
        <p className="text-center">
          Points:<span id="points"></span>
        </p>
        <div id="game">
          <div id="char">
            <img src={avatar} style={{ height: "50px" }} />
          </div>
          <div id="block"></div>
        </div>
        <button
          id="btn"
          className="contact-btn mt-4"
          style={{ border: "none", margin: "auto" }}
          onClick={() => {
            if (playAgain) {
              setPlayAgain(!playAgain);
              window.location.reload(true);
            }
          }}
        >
          {playAgain ? "Play Again" : "Jump"}
        </button>
      </div>
    </div>
  );
}

export default Game;
