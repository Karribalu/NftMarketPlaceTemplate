import React, { FC } from 'react';
import Image from 'next/image';

import Style from './Notification.module.css';
import images from '../../../public/assets/index';

interface IProps {}

/**
 * @author
 * @function @Notification
 **/

export const Notification: FC<IProps> = (props) => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>John Doe</h4>
          <p>Commented on your post</p>
          <small> 3 Minutes ago</small>
        </div>
        <span className={Style.notification_box_new}> </span>
      </div>
    </div>
  );
};
