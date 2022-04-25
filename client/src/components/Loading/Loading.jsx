import CircleLoader from "react-spinners/CircleLoader";
import { useState } from "react";
import { css } from "@emotion/css";
import "./Loading.css";

const Loading = ({loading}) => {
  let [color, setColor] = useState("#DBA279");
  

  return (
    <div className="loading_container">
      <CircleLoader
        color={color}
        size={150}
        loading={loading}
        css={css`
          top: 50%;
          left: 50%;
        `}
      />
    </div>
  );
};

export default Loading;
