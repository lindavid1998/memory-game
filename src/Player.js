import React from "react";

export default function Player(props) {
  const { imgSrc, name } = props;
  return (
    <div className='Player'>
      <img src={imgSrc} alt={'Image of ' + name}></img>
      <p>{name}</p>
    </div>
  );
}
