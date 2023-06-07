import React, { FC } from 'react';
import Style from './Button.module.css';
interface IProps {
  btnName: string;
  handleClick: () => void;
}

/**
 * @author
 * @function @Button
 **/

export const Button: FC<IProps> = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.btn} onClick={handleClick}>
        {btnName}
      </button>
    </div>
  );
};
