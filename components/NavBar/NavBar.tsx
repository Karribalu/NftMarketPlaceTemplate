'use client';
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//---Import ICONs
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

//---Internal Imports
import Style from './Navbar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from '../componentIndex';
import images from '../../public/assets/index';

interface IProps {}

/**
 * @author
 * @function @ NavBar
 **/

export const NavBar: FC<IProps> = (props) => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const btnText = e.currentTarget.innerText;
    console.log(btnText);
    if (btnText == 'Discover') {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.navbar_container_left_logo}>
            <Image src={images.logo} alt="logo" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search for NFT" />
              <BsSearch className={Style.searchIcon} onClick={() => {}} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          {/* DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>

            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={openMenu}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION MENU */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications
              onClick={openNotification}
              className="Style.notify"
            />
            {notification && <Notification />}
          </div>

          {/* PROFILE MENU */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                onClick={openProfile}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>
      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};
