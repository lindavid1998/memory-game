import React from "react";

export default function Player(props) {
  const { imgSrc, name, onClick } = props;
  return (
    <div className='Player' onClick={onClick}>
      <img src={imgSrc} alt={'Image of ' + name}></img>
      <p>{name}</p>
    </div>
  );
}
