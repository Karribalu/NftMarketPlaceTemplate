'use client';
import React, { FC } from 'react';
import Style from './HeroSection.module.css';
import Image from 'next/image';

import { Button } from '../Button/Button';
import images from '../../public/assets/index';
interface IProps {}

/**
 * @author
 * @function @HeroSection
 **/

const HeroSection: FC<IProps> = (props) => {
  return (
    <div className={Style.heroContainer}>
      <div className={Style.heroContainer_box}>
        <div className={Style.heroContainer_box_left}>
          <h1 className={Style.heroContainer_box_left_title}>
            Discover, Collect, and Sell NFTs
          </h1>
          <p>
            Discover the worlds most outstanding NFTs, collect them all and sell
            them for a profit.
          </p>

          <Button btnName="Search for any NFT" handleClick={() => {}} />
        </div>
        <div className={Style.heroContainer_box_right}>
          <Image src={images.hero} alt="hero" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
