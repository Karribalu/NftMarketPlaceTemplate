import React, { FC } from 'react';
import Image from 'next/image';

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';
import Style from './Footer.module.css';
import images from '../../public/assets/index';
import { Discover, HelpCenter } from '../NavBar/index';
interface IProps {}

/**
 * @author
 * @function @ Footer
 **/

export const Footer: FC<IProps> = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="logo" height={100} width={100} />
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs), including ERC721 and
            ERC1155 assets. Buy, sell, and discover exclusive digital assets
            like Gods Unchained Cards, ENS names, CryptoKitties, Decentraland
            land, and much, much more.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3 className={Style.heading}>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3 className={Style.heading}>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={Style.subscriber}>
          <h3 className={Style.heading}> Subscribe</h3>
          <div className={Style.subscriber_box}>
            <input type="email" placeholder="Enter your email address" />
            <RiSendPlaneFill className={Style.subscriber_box_send} />
          </div>
          <div className={Style.subscriber_box_info}>
            <p>
              By subscribing, you agree to receive emails from NFT Marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
