'use strict';
import React, { FC } from 'react';
import Style from './page.module.css';
import {
  HeroSection,
  Service,
  BigNftSlider
} from '../components/componentIndex';

interface IProps {}

/**
 * @author
 * @function @Home
 **/

const Home: FC<IProps> = (props) => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNftSlider />
    </div>
  );
};

export default Home;
