import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialLinkedin
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

export const SideBar: FC<IProps> = (setOpenSideMenu) => {
  return <div>SideBar</div>;
};
