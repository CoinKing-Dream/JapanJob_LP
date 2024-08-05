import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Rating from '@mui/material/Rating';
import Favorite from "@mui/icons-material/Favorite";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

import logo from "./assets/img/logo.svg";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const sympathetic = {
    question: "こんなお悩みはありませんか？",
    answer: [
      "水防に必要な情報がバラバラ",
      "庁内のPCでしか情報が見られない",
      "雨量・水位の観測網が不足している",
    ],
  };
  const benefits = [
    {
      contents: "A",
      img: "",
    },
    {
      contents: "B",
      img: "",
    },
    {
      contents: "C",
      img: "",
    },
  ];

  const feeback = [
    {
      title: "A",
      content: "B",
      img: {
        src: "",
        alt: ""
      }
    }, {
      title: "A",
      content: "B",
      img: {
        src: "",
        alt: ""
      }
    }, {
      title: "A",
      content: "B",
      img: {
        src: "",
        alt: ""
      }
    }, 
  ]

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-[100px]">
        <div className="sky-background flex flex-col justify-center items-center gap-12 text-white pt-[100px] pb-[200px] relative">
          <div className="absolute bg-white w-[60%] h-[100px] bottom-0 rounded-t-full"></div>
          <div className="w-full text-left px-[200px] pb-[50px]">
            <a href="">
              <img width="200" src={logo} alt="Logo"></img>
            </a>
          </div>
          <div
            className="text-7xl text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="easing-in-out"
          >
            自治体防災担当者の方へ
          </div>
          <div
            className="text-2xl text-center"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="easing-in-out"
          >
            水災害リスクをまるごと監視！あらゆる情報をRisKmaに
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div
            className="text-5xl font-bold text-center underline decoration-wavy underline-offset-8 text-violet-800"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="easing-in-out"
          >
            {sympathetic.question}
          </div>
          <div className="w-[550px]">
            {sympathetic.answer.map((item) => (
              <div
                className="flex flex-row justify-left items-center gap-3 my-3 text-3xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-easing="easing-in-out"
              >
                <Favorite color="success" />
                <div className="text-blue-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-lime-500 font-bold py-[100px] text-white"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <div className="w-[60%] text-2xl leading-10">
            (株)建設技術研究所の水災害リスクマッピングシステム「RisKma」なら、気象
            庁の予測雨量、キキクル、注意報警報や、国・都道府県の河川水位、雨量計、
            監視カメラの情報をすべて同じ画面で確認できます。またすでに設置の観測機
            器の情報も取り込むことが可能です。
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <button className="px-[100px] py-[20px] rounded-full text-2xl font-bold text-white bg-sky-500 hover:bg-sky-700">
            <span>パンフレットのダウンロードはこちら！</span>
            <CloudDownloadOutlinedIcon />
          </button>
        </div>
        <div
          className="flex flex-row justify-center items-center gap-5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          {benefits.map((item) => {
            return (
              <div className="w-[30%] h-[200px] border-2">
                <div>
                  <img src={item.img} alt="" />
                </div>

                <div>{item.contents}</div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex flex-row justify-center items-center">
            {
              feeback.map(item => {
                reutnr (
                  <>
                    
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
