import React, { FC } from 'react';
//Internal imports
import style from './Discover.module.css';
import Link from 'next/link';
interface IProps {}

/**
 * @author
 * @function @Discover
 **/

const Discover = () => {
  //---Discover navigation menu
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
  return (
    <div>
      {discoverMenu.map((el, i) => (
        <div key={i + 1} className={style.discoverMenu}>
          <Link href={{ pathname: `${el.link}` }}>{el.name} </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
