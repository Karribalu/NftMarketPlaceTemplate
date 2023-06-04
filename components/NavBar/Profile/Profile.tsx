import React, { FC } from 'react';
import Image from 'next/image';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from 'react-icons/tb';
import Link from 'next/link';

//---Internal Imports
import Style from './Profile.module.css';
import images from '../../../public/assets/index';
interface IProps {}

/**
 * @author
 * @function @Profile
 **/

export const Profile: FC<IProps> = (props) => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="profile image"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>John Doe</p>
          <small> lorem ipsum</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/myprofile' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/myitems' }}>My Items</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/editprofile' }}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: '/help' }}>Help Center</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: '/disconnect' }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
