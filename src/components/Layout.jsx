import React from "react";

function Layout(props) {
  return (
    <div
      style={{
        // height: "700px",
        // width: "500px",
        width: "50%",
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        // flexWrap: "wrap",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridRowGap: "30px",
        gridColumnGap: "10px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Layout;
