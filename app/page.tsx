import React, { FC } from 'react';
import Style from './page.module.css';
import { HeroSection } from '../components/componentIndex';
interface IProps {}

/**
 * @author
 * @function @Home
 **/

const Home: FC<IProps> = (props) => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  );
};

export default Home;
