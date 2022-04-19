import React, { useState, useEffect, useMemo } from "react";
import ReactPlayer from 'react-player'
import styled from 'styled-components';
import 'antd/dist/antd.css'
import { Row, Modal } from 'antd'
import Button from 'reactstrap-button-loader';
import 'video-react/dist/video-react.css';
import axios from 'axios';

import { useWeb3React } from "@web3-react/core";
import "./MysteryIndex.css";
import box from "../../../Assets/mystrey.png";
import currency from "../../../Assets/currency.png";
import letterA from "../../../Assets/Token/Elements-59.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connectNFTContract } from '../../../Helper/hooks';
import { chain_info } from '../../../Helper/chain';
//import Owner from "../../../Assets/Group 356.png";
//import star from "../../../Assets/star.svg";
import silverOpen1 from "../../../Assets/Slider/Open slider/SILVER/3.png";
import silverOpen2 from "../../../Assets/Slider/Open slider/SILVER/1.png";
import silverOpen3 from "../../../Assets/Slider/Open slider/SILVER/2.png";
import silverOpen4 from "../../../Assets/Slider/Open slider/SILVER/5.png";
import silverOpen5 from "../../../Assets/Slider/Open slider/SILVER/4.png";
import goldOpen1 from "../../../Assets/Slider/Open slider/GOLD/2.png";
import goldOpen2 from "../../../Assets/Slider/Open slider/GOLD/3.png";
import goldOpen3 from "../../../Assets/Slider/Open slider/GOLD/1.png";
import goldOpen4 from "../../../Assets/Slider/Open slider/GOLD/5.png";
import goldOpen5 from "../../../Assets/Slider/Open slider/GOLD/4.png";
// import diamondOpen1 from "../../../Assets/Slider/Open slider/DIAMOND/1.png";
// import diamondOpen2 from "../../../Assets/Slider/Open slider/DIAMOND/2.png";
// import diamondOpen3 from "../../../Assets/Slider/Open slider/DIAMOND/3.png";
import epicOpen1 from "../../../Assets/Slider/Open slider/EPIC/1.png";
import epicOpen2 from "../../../Assets/Slider/Open slider/EPIC/2.png";
import legendOpen1 from "../../../Assets/Slider/Open slider/LEGENDARY/1.png";
import legendOpen2 from "../../../Assets/Slider/Open slider/LEGENDARY/2.png";
// phone backgrounds ----------------------------------------------
import silverOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ACADEMY-ARC.png";
import silverOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/ARC.png";
import silverOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/NURSE-ARC.png";
import silverOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/OFFICER-ARC.png";
import silverOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/SILVER/PIZZA-DELIVERY-ARC.png";
import goldOpen4_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ARCADE-ARC.png";
import goldOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ASTRONAUT-ARC.png";
import goldOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/BASKET-PLAYER-ARC.png";
import goldOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/ELITE-ARC.png";
import goldOpen5_bgPhone from "../../../Assets/Slider/Open-phone-slider/GOLD/PAJAMA-ARC.png";
import legendOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/GOLDEN-ARC.png";
import legendOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/LEGENDARY/THE-LIGHT-KNIGHT-ARC.png";
// import diamondOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/ROYAL-STAR-ARC.png";
// import diamondOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/STARSHIP-ARC.png";
// import diamondOpen3_bgPhone from "../../../Assets/Slider/Open-phone-slider/DIAMOND/SAKURA-ARC.png";
import epicOpen1_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/JUSTICE-ARC.png";
import epicOpen2_bgPhone from "../../../Assets/Slider/Open-phone-slider/EPIC/MASKED-DEVIL-ARC.png";
//import butt from '../../../Assets/Slider/1--Before.png';

import video1 from '../../../Assets/Slider/Videos/video1.mp4';
import video2 from '../../../Assets/Slider/Videos/video2.mp4';
import video3 from '../../../Assets/Slider/Videos/video3.mp4';
import video4 from '../../../Assets/Slider/Videos/video4.mp4';
import video5 from '../../../Assets/Slider/Videos/video5.mp4';
import video6 from '../../../Assets/Slider/Videos/video6.mp4';
import video7 from '../../../Assets/Slider/Videos/video7.mp4';
import video8 from '../../../Assets/Slider/Videos/video8.mp4';
import video9 from '../../../Assets/Slider/Videos/video9.mp4';
import video10 from '../../../Assets/Slider/Videos/video10.mp4';
import video11 from '../../../Assets/Slider/Videos/video11.mp4';
import video12 from '../../../Assets/Slider/Videos/video12.mp4';
import video13 from '../../../Assets/Slider/Videos/video13.mp4';
import video14 from '../../../Assets/Slider/Videos/video14.mp4';

const closeBtn = 'images/buttons/X-Before.png';
const closeBtnOn = 'images/buttons/X-After.png';
const openBtn = 'images/buttons/1--Before.png';
const openBtnOn = 'images/buttons/1--After.png';
const openNextBtn = 'images/buttons/2-Before.png';
const openNextBtnOn = 'images/buttons/2-After.png';
const openMuteBtn = 'images/buttons/ON-Before.png';
const openMuteBtnOn = 'images/buttons/ON-After.png';
const openAlLViewBtn = 'images/buttons/Vall-Before.png';
const openAlLViewBtnOn = 'images/buttons/Vall-After.png';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Olddata = [
  {
    num: 0,
    img: silverOpen3,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Silver",
    star: [1],
    name: "ARC",
    phonebg: silverOpen3_bgPhone,
    video: video1
  },
  {
    num: 1,
    img: silverOpen2,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Silver",
    star: [1],
    name: "ACADEMY ARC",
    phonebg: silverOpen2_bgPhone,
    video: video2
  },
  {
    num: 2,
    img: silverOpen1,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Silver",
    star: [1],
    name: "PIZZA DELIVERY ARC",
    phonebg: silverOpen1_bgPhone,
    video: video3
  },
  {
    num: 3,
    img: silverOpen4,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Silver",
    star: [1],
    name: "NURSE ARC",
    phonebg: silverOpen4_bgPhone,
    video: video4
  },
  {
    num: 4,
    img: silverOpen5,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Silver",
    star: [1],
    name: "OFFICER ARC",
    class: "officer",
    phonebg: silverOpen5_bgPhone,
    video: video5
  },
  {
    num: 5,
    img: goldOpen1,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Gold",
    star: [1, 2],
    name: "ASTRONAUT ARC",
    phonebg: goldOpen1_bgPhone,
    video: video6
  },
  {
    num: 6,
    img: goldOpen2,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Gold",
    star: [1, 2],
    name: "BASKET PLAYER ARC",
    phonebg: goldOpen2_bgPhone,
    video: video7
  },
  {
    num: 7,
    img: goldOpen3,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Gold",
    star: [1, 2],
    name: "ELITE ARC",
    phonebg: goldOpen3_bgPhone,
    video: video8
  },
  {
    num: 8,
    img: goldOpen4,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Gold",
    star: [1, 2],
    name: "ARCADE ARC",
    phonebg: goldOpen4_bgPhone,
    video: video9
  },
  {
    num: 9,
    img: goldOpen5,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Gold",
    star: [1, 2],
    name: "PAJAMA ARC",
    phonebg: goldOpen5_bgPhone,
    video: video10
  },
  // {
  //   num: 10,
  //   img: diamondOpen2,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen2_bgPhone,
  //   name: "STARSHIP ARC",
  // },
  // {
  //   num: 11,
  //   img: diamondOpen1,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen1_bgPhone,
  //   name: "ROYAL STAR ARC",
  // },
  // {
  //   num: 12,
  //   img: diamondOpen3,
  //   desc: ` Mae has always been a good kitty, getting straight A's, while even
  //         running her highschool bookclub on the side. She always pushes
  //           herself to do the best she can in everything that she does. She
  //           may have not decided what to do outside of highschool yet, but she
  //           does know that she'll achieve whatever she puts her mind to, no
  //           matter what!"`,
  //   color: "Diamond",
  //   star: [1, 2, 3],
  //   phonebg: diamondOpen3_bgPhone,
  //   name: "SAKURA ARC",
  // },
  {
    num: 13,
    img: epicOpen1,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Epic",
    star: [1, 2, 3, 4],
    phonebg: epicOpen1_bgPhone,
    name: "JUSTICE ARC",
    video: video11
  },
  {
    num: 14,
    img: epicOpen2,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Epic",
    star: [1, 2, 3, 4],
    phonebg: epicOpen2_bgPhone,
    name: "MASKED DEVIL ARC",
    video: video12
  },
  {
    num: 15,
    img: legendOpen1,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Legendary",
    phonebg: legendOpen1_bgPhone,
    star: [1, 2, 3, 4, 5],
    name: "THE LIGHT KNIGHT ARC",
    video: video13
  },
  {
    num: 16,
    img: legendOpen2,
    desc: ` Mae has always been a good kitty, getting straight A's, while even
          running her highschool bookclub on the side. She always pushes
            herself to do the best she can in everything that she does. She
            may have not decided what to do outside of highschool yet, but she
            does know that she'll achieve whatever she puts her mind to, no
            matter what!"`,
    color: "Legendary",
    phonebg: legendOpen2_bgPhone,
    star: [1, 2, 3, 4, 5],
    name: "GOLDEN ARC",
    video: video14
  },
];

const data = [
  {
    num: 1,
    desktop: "desktop/Academy(MB).mp4",
    mobile: "mobile/Academy ARC.mp4"
  } , 
  {
    num: 2,
    desktop: "desktop/ARC(MB).mp4",
    mobile: "mobile/ARC.mp4"
  }, 
  {
    num: 3,
    desktop: "desktop/Nurse(MB).mp4",
    mobile: "mobile/Nurse ARC.mp4"
  }, 
  {
    num: 4,
    desktop: "desktop/Officer(MB).mp4",
    mobile: "mobile/Officer ARC.mp4"
  },
  {
    num: 5,
    desktop: "desktop/PizzaDelivery(MB).mp4",
    mobile: "mobile/Pizza Delivery ARC.mp4"
  }, 
  {
    num: 6,
    desktop: "desktop/Arcade(MB).mp4",
    mobile: "mobile/Arcade ARC.mp4"
  }, 
  {
    num: 7,
    desktop: "desktop/Astronaut(MB).mp4",
    mobile: "mobile/Astronaut ARC.mp4"
  }, 
  {
    num: 8,
    desktop: "desktop/Basket Player(MB).mp4",
    mobile: "mobile/Basket Player ARC.mp4"
  }, 
  {
    num: 9,
    desktop: "desktop/Elite(MB).mp4",
    mobile: "mobile/Elite ARC.mp4"
  }, 
  {
    num: 10,
    desktop: "desktop/Pajama(MB).mp4",
    mobile: "mobile/Pajama ARC.mp4"
  }, 
  {
    num: 11,
    desktop: "desktop/Golden(MB).mp4",
    mobile: "mobile/Golden ARC.mp4"
  }, 
  {
  num: 12,
  desktop: "desktop/TheLightKnight(MB).mp4",
  mobile: "mobile/The Light Knight ARC.mp4"
},
  {
    num: 13,
    desktop: "desktop/Justice(MB).mp4",
    mobile: "mobile/Justice ARC.mp4"
  },
  {
    num: 14,
    desktop: "desktop/Masked Devil(MB).mp4",
    mobile: "mobile/Masked Devil ARC.mp4"
  }, 
  {
    num: 15,
    desktop: "desktop/Royal Star(MB).mp4",
    mobile: "mobile/Royal Star ARC.mp4"
  }, 
  {
    num: 16,
    desktop: "desktop/Sakura(MB).mp4",
    mobile: "mobile/Sakura ARC.mp4"
  }, 
  {
    num: 17,
    desktop: "desktop/Starship(MB).mp4",
    mobile: "mobile/Starship ARC.mp4"

  }, 
];

var qs = require('qs');

const api_url = "https://arctoken.net/nft/";

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

function MysteryIndex({ dark }) {
  const context = useWeb3React();
  const { library, account, chainId } = context;
  const [open, setOpen] = useState(false);
  const [videoopen, setVideoopen] = useState(false)
 // const [name, setName] = useState("GOLDEN ARC");
  //const [class2, setClass] = useState("officer");
  //const [starA, setStar] = useState([1, 2]);
  const [value, setValue] = useState(1);
  //const [phoneImg, setPhoneImg] = useState(goldOpen1_bgPhone);
 // const [img, setImg] = useState(silverOpen1);
 // const [color, setColor] = useState("Legendary");
  //const [desc, setDesc] = useState(``);
  const [nftmintdata, setNftmintdata] = useState([]);
  const [nfttotalcount, setNfttotalcount] = useState(0);
  const [nftopencount, setNftopencount] = useState(0);
  const [video, setVideo] = useState('');
  const [btnloading, setBtnloading] = useState(false);
  //const [ownercount, setOwnercount] = useState(0);
  //const [totalownercount, setTotalownercount] = useState([]);
  const [buyList, setBuyList] = useState([]);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [openBox, setOpenBox] = useState(false);
  const [allStop, setAllStop] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleClose = () => {
    setAllStop(true);
    setVideoopen(false);
  }

  const handleVideoEnded = () => {
    setOpenBox(false);
  }
  const handleClickMuted = () => {
    setMuted(!muted);
  }
  const handleClickOpen = () => {
    if(openBox === false && currentIndex + 1 < buyList.length)
    {
      setOpenBox(true);
      setCurrentIndex(currentIndex + 1);  
    }
  }
  useEffect(() => {
      setCurrentIndex(-1);
      setOpenBox(false);
      setAllStop(false);
  }, [buyList]);

  useEffect(() => {
    function handleResize() {
      setHeight(getWindowDimensions().height);
      setWidth(getWindowDimensions().width);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const increment = (e) => {
    if (value < 10 && value >= 1) {
      setValue((prev) => {
        return prev + 1;
      });
    }
  };

  const decrement = (e) => {
    if (value <= 10 && value > 1) {
      setValue((prev) => {
        return prev - 1;
      });
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue((prev) => {
      prev += val;
    });
    if (val > 10) {
      setValue(10);
    } else if (val < 1) {
      setValue(1);
    }
  };

  const handleNextModalButton = (e) => {
    e.preventDefault();
    try {
      if (nfttotalcount > nftopencount) {

        setVideo(nftmintdata[nftopencount]['video']);
        setVideoopen(true)
        setTimeout(() => {
          setVideoopen(true)
         // setDesc(nftmintdata[nftopencount]['desc']);
         // setColor(nftmintdata[nftopencount]['color']);
         // setImg(nftmintdata[nftopencount]['img']);
         // setStar(nftmintdata[nftopencount]['star']);
         // setName(nftmintdata[nftopencount]['name']);
         // setPhoneImg(nftmintdata[nftopencount]['phonebg']);
         // setOwnercount(totalownercount[nftopencount]);
        //  if (nftmintdata[nftopencount]['class'] != null) {
         //   setClass(nftmintdata[nftopencount]['class']);
         // }
          setNftopencount((prevNftopencount) => prevNftopencount + 1)
          setOpen(true);
        },6000 );

      }
      else {
        setOpen(false);
        setVideoopen(false)
        toast.success('Success ! Your NFT Add In My Item ');
      }
    }
    catch (err) {
      toast.error(err.meassge);
      setOpen(false);
      setVideoopen(false)
    }
  }  

  const handleBuy = async (e) => {
    e.preventDefault();

   // let newArr = [...data];
   // let resultArr = [];
   // for(var i = 0 ; i < value ; i++)
   // {
    //  let rdVal = Math.floor(Math.random() * newArr.length);
    //  resultArr = [...resultArr, newArr[rdVal]];
    //  newArr.slice(rdVal, 1);
   // }
    //resultArr = [...resultArr, "Officer ARC2.mp4"];

    //Officer ARC2.mp4
   // setBuyList(resultArr);
     try {
       if (account) {
         setBtnloading(true);
         let provider = library.getSigner();
         let nft_contract = await connectNFTContract(chain_info[chainId]['nft_address'], provider);
         let price = await nft_contract.price();
         let total_price = parseFloat(price) * parseFloat(value)
         const tx = await nft_contract.mint(value, 0, { "value": total_price });
         toast.success("Successfully Transaction! Don'\t Close Website !");

         toast.success('Waiting for confirmation...', { autoClose: 15000 });
         const receipt = await tx.wait();

         if (receipt && typeof receipt.status !== 'undefined') {
           if (receipt.status === 1) {
             receipt.count = value;

             let saveTx = await axios.post(`${api_url}api-mint-insert`, qs.stringify(receipt), headers);
             if (saveTx.data !== 'undefined') {
               if (saveTx.data.error === 'OK') {
                 toast.success('Last Transaction is successfully!');
                 if (typeof saveTx.data.nft_data !== 'undefined' && typeof saveTx.data.total_insert !== 'undefined') {
                   let response = saveTx.data.nft_data;
                   let count = saveTx.data.total_insert;
                   let nftMint = [];
                   let owner_data = [];
                   await Promise.all(response.map(async (row) => {
                     nftMint.push(data[row['airdrop_id'] - 1]);
                     owner_data.push(row['owner_count']);
                   }));

                //  // setTotalownercount(owner_data);
                   setNftmintdata(nftMint);
                   setNfttotalcount(count);
                   setBuyList(nftMint);
                //let count = 3;
                  if (count > nftopencount) {
                    setVideo(nftMint[nftopencount]['video']);
                    setVideoopen(true)
                     setTimeout(() => {
                       setVideoopen(true)
                  //    // setDesc(nftMint[nftopencount]['desc']);
                  //    // setColor(nftMint[nftopencount]['color']);
                  //    // setImg(nftMint[nftopencount]['img']);
                  //    // setStar(nftMint[nftopencount]['star']);
                  //    // setName(nftMint[nftopencount]['name']);
                  //     //setPhoneImg(nftMint[nftopencount]['phonebg']);
                  //    // setOwnercount(owner_data[nftopencount]);
                  //   //  if (nftMint[nftopencount]['class'] != null) {
                  //    //   setClass(nftMint[nftopencount]['class']);
                  //    // }
                       setNftopencount((prevNftopencount) => prevNftopencount + 1);
                       setBtnloading(false);
                       setOpen(true);
                    }, 6000)

                  }
                  else {
                    setOpen(false);
                    setBtnloading(false);
                  }

                 }
                 else {
                   toast.error('something went wrong!');
                   setBtnloading(false);
                 }
               }
               else {
                 toast.error(saveTx.data.error);
                 setBtnloading(false);
               }
             }
             else {
               toast.error('something went wrong!');
               setBtnloading(false);
             }
           }
           else if (receipt.status === 0) {
             toast.error('Oops ! Last Transaction is failed');
             setBtnloading(false);
           }
           else {
             toast.error('No Transaction Data Found!');
             setBtnloading(false);
           }
         }
         else {
           toast.error('something went wrong!')
           setBtnloading(false);
         }
       }
       else {
         toast.error('Please Connect Wallet!');
         setBtnloading(false);
       }
     }
     catch (err) {
       toast.error(err.meassge);
       setBtnloading(false);
     }

  }


  return (
    <>
      <ToastContainer />
      <div className="mystery-index">
        <img src={letterA} alt="" className="letter-abs" />
        <div className="left-mystery-index">
          <img src={box} alt="" />
        </div>
        <div className="right-mystery-index">
          <h1 className={`${dark ? "white" : ""}`}>COMMON MYSTERY BOX</h1>
          <h1 className={`sup ${dark ? "white" : ""}`}>
            10.00 BUSD <sup>per box</sup> <span className="grey">-$10 USD</span>
          </h1>
          <div className="mid-index">
            <div className="quantity-index num1">
              <p className={`${dark ? "white" : ""}`}>Quantity</p>
              <div className="input-div-index">
                <input
                  maxLength="2"
                  value={value}
                  min="1"
                  max="10"
                  type="tel"
                  onChange={handleChange}
                  className="input-quan"
                />
                <p onClick={increment} className="increment">
                  {"<"}
                </p>
                <p onClick={decrement} className="decrement">
                  {">"}
                </p>
              </div>
            </div>
            <div className="quantity-index">
              <p className={`${dark ? "white" : ""}`}>Buy with</p>
              <img src={currency} alt="" className="currency" />
              <Button loading={btnloading} className="index-btn" onClick={(e) => handleBuy(e)}>Buy with BUSD</Button>
            </div>
          </div>
          <div className="bottom-right-index">
            <h1 className={`${dark ? "white" : ""}`}>
              WHAT RARITIES INSIDE/DROP RATE
            </h1>
            <div className="index-rarity-div">
              <p className="index-rarity silver-rarity">Silver Arcane</p>
              <p className="index-rarity gold-rarity">Gold Arcane</p>
              <p className="index-rarity epic-rarity">Epic Arcane</p>
              <p className="index-rarity diamond-rarity">Diamond Arcane</p>
              <p className="index-rarity challenger-rarity">Challenger Arcane</p>
            </div>
          </div>
        </div>
        <S.Modal title={null} footer={null} closable={false} maskClosable={true} mask={true} visible={videoopen} mobile={width < height ? true : false}>
          <S.OpeningContainer>
            <div style={{width:'100%', height: width > height ? '100%': 'calc(100vw * 4 / 3)'}} className="player-wrapper">
              <ReactPlayer 
                url= {`videos/${width > height ? 'desktop' : 'mobile'}/MysteryBox Closed.mp4`}
                playing	={!openBox && !allStop}
                loop={!openBox}
                muted={true}
                width='100%'
                height='100%'
              />
            </div>
            <div style={{width:'100%', height: width > height ?'100%' :  'calc(100vw * 4 / 3)'}}  className="player-wrapper">
            {
              useMemo(() =>
              (<>
                {buyList.length > 0 && openBox && 
                    <ReactPlayer 
                      url= {`videos/${width > height ? buyList[currentIndex].desktop : buyList[currentIndex].mobile}`}
                      playing	={openBox && !allStop}
                      loop={true}
                      muted={muted}
                      onEnded={handleVideoEnded}
                      width='100%'
                      height='100%'
                  />
                }
              </>)         
              ,[currentIndex, allStop, muted])
            }
            
            </div>
            <div style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: width > height ?'100%' :  'calc(100vw * 4 / 3)'}}>
              <div>
                <Row justify="end">
                  <S.ImageBtn 
                    onClick={handleClose}
                    translate="translate(20px, -10px)" 
                    image_on={closeBtnOn} 
                    image={closeBtn}
                    width={50}
                    height={50}
                    className="exitBtn"
                  >
                  </S.ImageBtn>
                </Row>
                <Row>
                  <S.OpenNumberContainer>
                    Opening {currentIndex + 1}/{buyList.toString()}/{buyList.toString()}...
                  </S.OpenNumberContainer>
                </Row>
              </div>            
              <div>
                <Row justify="center">
                  {!openBox && 
                  <S.ImageBtn 
                    width={300}
                    height={120}
                    image_on={currentIndex >= 0 ? (currentIndex + 1=== buyList.length ? openAlLViewBtnOn : openNextBtnOn) : openBtnOn} image={currentIndex >= 0 ?  (currentIndex + 1 === buyList.length ? openAlLViewBtn : openNextBtn)  : openBtn}
                    onClick={handleClickOpen}
                  ></S.ImageBtn>
                  } 
                </Row>
                <Row justify="end" align="bottom" style={{marginBottom: '10px'}}>
                  <S.ImageBtn 
                    width={60}
                    height={60}
                    image_on={openMuteBtnOn} image={openMuteBtn}
                    onClick={handleClickMuted}
                  ></S.ImageBtn>
                </Row>
              </div>
            </div>
          </S.OpeningContainer>
        </S.Modal>
        {/* <Modal show={open} size="ms"
                          <PlayToggle />

          aria-labelledby="contained-modal-title-vcenter"
          centered style={{ "color": "#000" }}>
          <Modal.Body> */}
        {/* <div className={`overlay-2-2 ${open ? "down" : ""} `}></div> 
        {open &&
          <>
           <div className={`open-box-slider2 ${open ? `down-box ${dark}` : ""}`}>
              <div className="mobile-img-slider mobile-top">

               
              
              </div>
              <div className="left-slider-box">
  
              <div className="right-slider-box">
               
                </div>
              
                 
                  <button className="connect-wallet desktop-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>
                  <button className="connect-wallet mobile-connect" onClick={(e) => { handleNextModalButton(e); setOpen(false); }}>Open Next</button>

              </div>

        </div>
            <div
              style={{ marginBottom: "6rem" }}
              className={`find-top ${dark ? "top-dark" : ""}`}
            >
              <h1 className="big">COLLECT THEM</h1>
              <h1 className="small">ARCANE NFTS IN THIS BOX</h1>
            </div>
          </>
        }*/}
        {/* </Modal.Body>
        </Modal> */}
      </div>
    </>
  );
}

export default MysteryIndex;

const S = {
  Modal: styled(Modal)`
    width: ${props => props.mobile === true ? ' 100% !important' : '60% !important'} ;
    height: ${props => props.mobile === true ? 'calc(100vw * 5 / 3)' : ' 88%'} ;
    background: none;
    color: white;
    .ant-modal-content {
      background: none;
    }
    .ant-modal-body {
      padding: 0;
      background: none;
    }
    @media (max-width: 544px) {
      top: 40px;
    }
  `,

  OpenNumberContainer: styled.div`
    margin-top: 40px;
    background-image: linear-gradient(to right, rgba(45,88,229,0.7), rgba(0,0,0,0));
    padding: 10px;
    font-size: 20px;
    font-weight: 400px;
  `,
  
  OpeningContainer: styled.div`
    border-radius: 20px;
    position: relative;
    width: 100% !important;
    height: 80vh;
    @media (max-width: 544px) {
      width: 100% !important;
      height: calc(100vw * 4 / 3)
    }
    video {
      height: 98% !important;
    }
  `,
  
  ImageBtn: styled.div`
    background-image: url(${props=>props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    transform: ${props=>props.translate};
    cursor: pointer !important;
    &:hover,
    &:active,
    &:focus {
      background-image: url(${props=>props.image_on});
    }
  `,
}
