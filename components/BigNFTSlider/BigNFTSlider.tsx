'use client';
import React, { FC, useState, useEffect, useCallback } from 'react';

import Image from 'next/image';
import Style from './BigNFTSlider.module.css';

import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';

import { Button } from '../Button/Button';
import images from '../../public/assets/index';
interface BigNFTSliderProps {}

export const BigNftSlider: FC<BigNFTSliderProps> = () => {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: 'Hello NFT',
      id: 1,
      name: 'Bala Subramanyam',
      collection: 'My-nft',
      price: '0.00000646 ETH',
      likes: 143,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 23,
        hours: 12,
        minutes: 11,
        seconds: 35
      }
    },
    {
      title: 'Monkey NFT',
      id: 1,
      name: 'Shiva Prasad',
      collection: 'My-nft-2',
      price: '0.0000756 ETH',
      likes: 198,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 27,
        hours: 9,
        minutes: 43,
        seconds: 54
      }
    },
    {
      title: 'Pewdiepie NFT',
      id: 1,
      name: 'Murali Krishna',
      collection: 'My-nft-3',
      price: '0.0000965 ETH',
      likes: 288,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 11,
        hours: 18,
        minutes: 24,
        seconds: 42
      }
    },
    {
      title: 'GYM NFT',
      id: 1,
      name: 'Nikhil Manchukonda',
      collection: 'My-nft-4',
      price: '0.00959 ETH',
      likes: 976,
      image: images.user4,
      nftImage: images.nft_image_2,
      time: {
        days: 23,
        hours: 12,
        minutes: 11,
        seconds: 35
      }
    }
  ];
  const inc = useCallback(() => {
    if (idNumber < sliderData.length - 1) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.big_nft_slider}>
      <div className={Style.big_nft_slider_box}>
        <div className={Style.big_nft_slider_box_left}>
          <h2 className={Style.h3}>{sliderData[idNumber].title}</h2>
          <div className={Style.big_nft_slider_box_left_creator}>
            <div className={Style.big_nft_slider_box_left_creator_profile}>
              <Image
                src={sliderData[idNumber].image}
                alt="profile image"
                className={Style.big_nft_slider_box_left_creator_profile_img}
                width={50}
                height={50}
              />
              <div
                className={Style.big_nft_slider_box_left_creator_profile_image}
              >
                <p> Creator</p>
                <h4 className={Style.h4}>
                  {sliderData[idNumber].name}{' '}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.big_nft_slider_box_left_creator_collection}>
              <AiFillFire
                className={
                  Style.big_nft_slider_box_left_creator_collection_icon
                }
              />
              <div
                className={
                  Style.big_nft_slider_box_left_creator_collection_info
                }
              >
                <p>Collection</p>
                <h4 className={Style.h4}>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.big_nft_slider_box_left_bidding}>
            <div className={Style.big_nft_slider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,220</span>
              </p>
            </div>
            <p className={Style.big_nft_slider_box_left_bidding_box_auction}>
              <MdTimer
                className={
                  Style.big_nft_slider_box_left_bidding_box_auction_icon
                }
              />
              <span>Auction ending in</span>
            </p>
            <div className={Style.big_nft_slider_box_left_bidding_box_timer}>
              <div
                className={Style.big_nft_slider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div
                className={Style.big_nft_slider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div
                className={Style.big_nft_slider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>
              <div
                className={Style.big_nft_slider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>
            <div className={Style.big_nft_slider_box_left_bidding_box_btn}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.big_nft_slider_box_left_slider_button}>
            <TbArrowBigLeftLine
              className={Style.big_nft_slider_box_left_slider_button_icon}
              onClick={dec}
            />
            <TbArrowBigRightLine
              className={Style.big_nft_slider_box_left_slider_button_icon}
              onClick={inc}
            />
          </div>
        </div>
        <div className={Style.big_nft_slider_box_right}>
          <div className={Style.big_nft_slider_box_right_box}>
            <Image src={sliderData[idNumber].nftImage} alt="nft image" />
            <div className={Style.big_nft_slider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
