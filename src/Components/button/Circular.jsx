import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button  cursor-none">
        <p className="button__text  cursor-none">
          <span style={{"--index": 0}}>S</span>
          <span style={{"--index": 1}}>U</span>
          <span style={{"--index": 2}}>B </span>
          <span style={{"--index": 3}}>M</span>
          <span style={{"--index": 4}}>I</span>
          <span style={{"--index": 5}}>T</span>
          <span style={{"--index": 6}}>-</span>
          <span style={{"--index": 7}}> S</span>
          <span style={{"--index": 8}}>U</span>
          <span style={{"--index": 9}}>B</span>
          <span style={{"--index": 10}}>M</span>
          <span style={{"--index": 11}}> I</span>
          <span style={{"--index": 12}}>T</span>
          <span style={{"--index": 13}}>-</span>
          <span style={{"--index": 14}}>S</span>
          <span style={{"--index": 15}}>U</span>
          <span style={{"--index": 16}}>B</span>
          <span style={{"--index": 17}}>M</span>
          <span style={{"--index": 18}}>I</span>
          <span style={{"--index": 19}}>T</span>
        </p>
        <div className="button__circle  cursor-none">
         50 kg
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
     background: #7afc16;
    color: #232b2b;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition:
      background 300ms,
      transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(19deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #232b2b;
    color: #7afc16;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }`;

export default Button;
