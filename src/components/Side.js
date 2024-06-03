import React from "react";

function Side({ sides }) {
  console.log(sides);
  return <div>{sides.join(", ")}</div>;
}

export default Side;
