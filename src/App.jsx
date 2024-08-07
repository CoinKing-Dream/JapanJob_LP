import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import BrowserUpdatedTwoToneIcon from "@mui/icons-material/BrowserUpdatedTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BenefitCard from "./componenets/FeedbackCard";

import brochureImg from "./assets/img/brochure-btn-img.png";
import logo from "./assets/img/logo.svg";
import CTIlogo from "./assets/img/CTI_logo.png";
import riskmaPDF from "./assets/pdf/RisKma.pdf";

import benefitFirImg from "./assets/img/1_map.png";
import benefitSecImg from "./assets/img/2_service.png";
import benefitThiImg from "./assets/img/3_mirone.png";
import benefitFouImg from "./assets/img/1_map.png";
import benefitFifImg from "./assets/img/1_map.png";

function App() {
  const feebackPlace = [
    "北海道苫小牧市",
    "福島県伊達市",
    "福島県田村市",
    "群馬県",
    "千葉県柏市",
    "東京都八王子市",
    "長野県佐久穂町",
    "静岡県袋井市",
    "愛知県春日井市",
    "石川県宝達志水町",
    "山口県光市",
    "佐賀県白石町",
  ];

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
      title: "気象と洪水の一括監視",
      contents:
        "予測雨量などの気象情報、既設観測所の雨量、水位、カメラ情報と同時に閲覧が可能",
      img: benefitFirImg,
    },
    {
      title: "直感操作システム",
      contents: "マニュアルのいらない直感的操作が可能なシステム画面",
      img: benefitSecImg,
    },
    {
      title: "「みるわん」と簡単連携",
      contents:
        "水位計・雨量計・カメラ等のIoT監視観測パッケージ「みるわん」との連携が容易",
      img: benefitThiImg,
    },
    {
      title: "カスタマイズ対応",
      contents: "導入先毎のカスタマイズに対応",
      img: benefitFouImg,
    },
    {
      title: "専門サポート提供",
      contents:
        "河川コンサルタントが蓄積した専門的なデータやノウハウを基に、適切な導入方法について、ご提案・サポ",
      img: benefitFifImg,
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col">
        <div className="sky-background flex flex-col justify-center items-center gap-12 text-white pt-[100px] pb-[200px] relative rounded-b-lg">
          <div className="absolute bg-white w-[60%] h-[50px] bottom-0 rounded-t-full"></div>
          <div className="w-full px-[200px] pb-[50px] ">
            <div className="w-[200px] flex flex-col jusity-center items-center">
              <a href="" className="logo-animation">
                <img width="200" src={logo} alt="Logo"></img>
              </a>
              <div className="bg-gray-300 w-[100px] h-[30px] logo-shadow-animation"></div>
            </div>
          </div>
          <div
            className="text-center text-6xl lg:text-7xl"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="easing-in-out"
          >
            自治体防災担当者の方へ
          </div>
          <div
            className="text-center text-xl lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="easing-in-out"
          >
            水災害リスクをまるごと監視！ あらゆる情報をRisKmaに
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 my-[60px] lg:my-[100px]">
          <div
            className="text-4xl lg:text-5xl font-bold text-center underline decoration-wavy underline-offset-8 text-violet-800"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="easing-in-out"
          >
            {sympathetic.question}
          </div>
          <div className="w-[450px] lg:w-[550px]">
            {sympathetic.answer.map((item, index) => (
              <div
                className="flex flex-row justify-left items-center gap-3 my-3 text-2xl lg:text-3xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-easing="easing-in-out"
              >
                <DoneOutlineOutlinedIcon color="success" />
                <div className="text-blue-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-lime-500 font-bold text-white rounded-[20px] py-[50px] lg:py-[100px] mt-[10px] lg:mt-[50px]"
          data-aos="flip-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="easing-in-out"
        >
          <div className="w-[80%] md:w-[50%] text-xl md:text-2xl lg:text-3xl leading-10">
            (株)建設技術研究所の水災害リスクマッピングシステム「RisKma」なら、気象
            庁の予測雨量、キキクル、注意報警報や、国・都道府県の河川水位、雨量計、
            監視カメラの情報をすべて同じ画面で確認できます。またすでに設置の観測機
            器の情報も取り込むことが可能です。
          </div>
        </div>
        <div
          className="flex justify-center items-center h-[400px]"
          data-aos="slide-up"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="easing-in-out"
        >
          <div className="flex justify-center items-center min-w-[650px] max-w-[800px] w-[60%] h-[400px] relative">
            <img
              src={brochureImg}
              className="absolute top-[80px] left-[50px]"
              width={200}
            ></img>
            <a
              href={riskmaPDF}
              target="_blank"
              className="w-[100%] pl-[250px] md:pl-[270px] pr-[50px] py-[20px] rounded-full text-2xl md:text-3xl lg:text-4xl font-bold text-white duration-500 bg-emerald-500 hover:bg-emerald-900 hover:text-white"
            >
              <span>パンフレットのダウンロードはこちら！</span>
              <BrowserUpdatedTwoToneIcon
                fontSize="large"
                className="animate-bounce text-yellow-200"
              />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5 bg-gray-200 py-[50px] rounded-lg">
          {/* <div className="w-full relative flex flex-col justify-center items-center my-0 mb-[100px]">
            <div className="w-full h-[5px] bg-blue-500 absolute z-10"></div>
            <div className="z-20 rounded-full absoulte bg-blue-500 inline font-bold text-5xl text-white px-[150px] py-[20px]">
              ベネフィット領域
            </div>
          </div> */}
          <div className="w-[70%] flex flex-row flex-wrap justify-center items-center gap-8">
            {benefits.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                  data-aos-easing="easing-in-out"
                >
                  <BenefitCard item={item} />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center pb-[100px]">
            <div
              className="w-full relative flex flex-col justify-center items-center my-[50px] hover:opacity-90 duration-500"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-easing="easing-in-out"
            >
              <div className="w-full h-[5px] bg-lime-300 absolute z-10"></div>
              <div className="z-20 rounded-full absoulte bg-lime-500 inline font-bold text-3xl md:text-5xl text-white px-[100px] md:px-[150px] py-[20px]">
                導入実績領域
              </div>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap w-[90%] lg:w-[70%] gap-2 md:gap-5">
              {feebackPlace.map((place, index) => {
                return (
                  <>
                    <div
                      data-aos="fade-up"
                      data-aos-delay={50 * index}
                      data-aos-easing="easing-in-out"
                      className="min-w-[300px] font-bold text-3xl text-emerald-600"
                    >
                      <div className="flex flex-row justify-start items-center gap-3">
                        <AddLocationAltTwoToneIcon color="warning" />
                        <div>{place}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="w-full text-center bg-sky-500 text-white py-[50px] flex flex-col justify-center items-center relative hover:bg-sky-400"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <div className="absolute top-0 rounded-b-[40px] bg-white w-[60%] h-[30px]"></div>
          <div className="my-12">
            <a
              href="https://www.cti-rains.net/mailform/form_miruone.html"
              target="_blank"
              className="px-30px py-15px w-[100px] bg-red-500 inline"
            >
              <div className="flex flex-row justify-center items-center gap-3 text-white">
                <ForwardToInboxOutlinedIcon
                  fontSize="large"
                  className="email-animation"
                />
                <div>
                  <div>
                    <span className="text-2xl font-bold">
                      （株）建設技術研究所の
                    </span>
                    <span className="text-3xl">
                      IoT監視観測パッケージ「みるわん」{" "}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-4xl underline">
                      お問い合わせ・お見積り
                    </span>
                    <span className="text-xl font-bold">はこちら </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="absolute bottom-0 rounded-t-full bg-white w-[60%] h-[30px]"></div>
        </div>

        <div
          className="w-full flex flex-col jusify-center items-center py-[50px] gap-7 bg-gray-100"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <a
            href="http://www.ctie.co.jp/index.html"
            className="hover:opacity-60"
          >
            <img src={CTIlogo} width={400} height={20}></img>
          </a>
          <div className="flex flex-col justify-center items-center">
            <div>Copyright RisKma - All Rights Reserved. </div>
            <div>「RisKma」は株式会社建設技術研究所の登録商標です。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
