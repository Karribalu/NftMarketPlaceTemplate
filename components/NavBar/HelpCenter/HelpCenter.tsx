import React, { FC } from 'react';
import Link from 'next/link';
import Style from './HelpCenter.module.css';
interface IProps {}

/**
 * @author
 * @function @HelpCenter
 **/

export const HelpCenter: FC<IProps> = (props) => {
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
  return (
    <div className={Style.box}>
      {helpCenter.map((item, index) => (
        <div className={Style.helpCenter}>
          <Link href={{ pathname: `${item.link}` }}> {item.name} </Link>
        </div>
      ))}
    </div>
  );
};
