import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti';

import Style from './SideBar.module.css';
import images from '../../../public/assets/index';
import { Button } from '../../Button/Button';
interface IProps {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * @author
 * @function @SideBar
 **/

export const SideBar: FC<IProps> = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const discoverMenu = [
    {
      name: 'Collection',
      link: 'collection'
    },
    {
      name: 'Search',
      link: 'search'
    },
    {
      name: 'Author Profile',
      link: 'author-profile'
    },
    {
      name: 'NFT Details',
      link: 'collection'
    },
    {
      name: 'Acount Settings',
      link: 'account-settings'
    },
    {
      name: 'Connect Wallet',
      link: 'connect-wallet'
    },
    {
      name: 'Blog',
      link: 'blog'
    }
  ];
  const helpCenter = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Contact Us',
      link: 'contact-us'
    },
    {
      name: 'Sign Up',
      link: 'sign-up'
    },
    {
      name: 'Sign In',
      link: 'sign-in'
    },
    {
      name: 'Subscription',
      link: 'subscription'
    }
  ];
  const openDiscoverMenu = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={(e) => closeSideBar(e)}
      />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" height={150} width={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT & write
          you own articles and share
        </p>
        <div className={Style.sideBar_social}>
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
        </div>
        <div className={Style.sideBar_menu}>
          <div
            className={Style.sideBar_menu_box}
            onClick={(e) => openDiscoverMenu(e)}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discoverMenu.map((item, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
          <div className={Style.sideBar_menu_box} onClick={openHelpMenu}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sideBar_help}>
              {helpCenter.map((item, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={Style.sideBar_btn}>
          <Button btnName="Create" handleClick={() => {}} />
          <Button btnName="Connect Wallet" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
