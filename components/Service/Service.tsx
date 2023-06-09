'use client';
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Style from './Service.module.css';
import images from '../../public/assets/index';

interface IProps {}

export const Service: FC<IProps> = (props) => {
  return (
    <div className={Style.service}>
      <div className={Style.service_container}>
        <div className={Style.service_container_item}>
          <Image
            src={images.service1}
            className={Style.service_container_item_image}
            alt="Filer & Discover"
            height={100}
            width={100}
          />
          <p className={Style.service_container_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, sell NFTs, and more.</p>
        </div>
        <div className={Style.service_container_item}>
          <Image
            src={images.service2}
            className={Style.service_container_item_image}
            alt=" "
            height={100}
            width={100}
          />
          <p className={Style.service_container_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, sell NFTs, and more.</p>
        </div>
        <div className={Style.service_container_item}>
          <Image
            src={images.service3}
            className={Style.service_container_item_image}
            alt="Connect Wallet"
            height={100}
            width={100}
          />
          <p className={Style.service_container_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>Connect with wallet, discover, buy NFTs, sell NFTs, and more.</p>
        </div>
        <div className={Style.service_container_item}>
          <Image
            src={images.service4}
            className={Style.service_container_item_image}
            alt="Start Trading"
            height={100}
            width={100}
          />
          <p className={Style.service_container_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start Trading</h3>
          <p>Connect with wallet, discover, buy NFTs, sell NFT, and more.</p>
        </div>
      </div>
    </div>
  );
};
