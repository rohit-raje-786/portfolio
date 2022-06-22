import React from "react";

const HeaderButton = () => {
  return (
    <>
      <div className="mx-auto">
        <center
          style={{
            color: "#383838",
            maxWidth: "900px",
            width: "70%",

            position: "absolute",
            top: "60%",
            left: "18%",
          }}
        >
          <blockquote>
            <i>
              <br />
              <br />
              <font size="3">“</font> Do your duty without focusing on results.
              Thinking about result of action builds expectations and
              expectations only yield sorrow and sadness.<font size="3">”</font>
            </i>
          </blockquote>

          <cite style={{ color: "#383838" }}>~ Sri Krishna, Bhagvad Gita</cite>
          <br />
        </center>
        <a href="#about">
          <button className="see" style={{ marginTop: "10%" }}>
            Checkout Portfolio<i className="fas fa-eye"></i>
          </button>
        </a>
      </div>
    </>
  );
};

export default HeaderButton;
