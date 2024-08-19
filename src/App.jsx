import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";

import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import BrowserUpdatedTwoToneIcon from "@mui/icons-material/BrowserUpdatedTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";

import BenefitCard from "./componenets/FeedbackCard";

import riskmaImg from "./assets/img/riskma.png";
import phoneImg from "./assets/img/iphone.png";
import pcImg from "./assets/img/laptop.png";
import logo from "./assets/img/logo.svg";
import footer from "./assets/img/footer.png";
import CTIlogo from "./assets/img/CTI_logo.png";
import riskmaPDF from "./assets/pdf/RisKma.pdf";
import expManImg from "./assets/img/explanation_man.svg";
import expWomanImg from "./assets/img/explanation_woman.svg";

import riskmaLogo from "./assets/img/logo-riskma.png";

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
    },
    {
      title: "直感操作システム",
      contents: "マニュアルのいらない直感的操作が可能なシステム画面",
    },
    {
      title: "「みるわん」と簡単連携",
      contents:
        "水位計・雨量計・カメラ等のIoT監視観測パッケージ「みるわん」との連携が容易",
    },
    {
      title: "カスタマイズ対応",
      contents: "導入先毎のカスタマイズに対応",
    },
    {
      title: "専門サポート提供",
      contents:
        "河川コンサルタントが蓄積した専門的なデータやノウハウを基に、適切な導入方法について、ご提案・サポ",
    },
  ];

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="overflow-hidden w-full">
        <div className="relative flex flex-col justify-center items-center w-full sky-background h-[780px] pt-[50px] sm:pt-[100px] pb-[50px] md:pb-[100px] rounded-b-lg">
          <div className="absolute z-1 text-white opacity-30 md:text-[170px] lg:text-[250px] font-bold pt-[200px]">
            リスクマ
          </div>

          <div className="absolute bg-white w-[45%] h-[25px] bottom-[-5px] rounded-t-full"></div>
          <div className="z-10 w-full px-[0px] sm:px-[30px] md:px-[30px] lg:px-[100px] absolute top-[80px] left-0">
            <div className="w-[200px] flex flex-col jusity-center items-center">
              <a href="" className="logo-animation">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[100px] md:w-[150px] lg:w-[200px]"
                ></img>
              </a>
              <div className="bg-gray-300 w-[100px] h-[30px] logo-shadow-animation"></div>
            </div>
          </div>

          <div className="z-10 font-bold text-white md:text-2xl lg:text-4xl mt-[50px] mb-5">
            水災害リスクマッピングシステム
          </div>
          <div className="z-10 flex flex-row justify-center items-end">
            <img src={riskmaImg} className="w-[500px] lg:w-[600px]"></img>
            <img src={riskmaLogo} className="w-[130px] lg:w-[170px] pb-[35px]"></img>
          </div>
          <div className="z-20 flex flex-row justify-center items-center">
            <img src={pcImg} className="w-[380px] lg:w-[450px]"></img>
            <img src={phoneImg} className="w-[200px] lg:w-[250px]"></img>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 my-[50px]">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center underline decoration-wavy underline-offset-8 text-[--thunder-cloud-color]">
            {sympathetic.question}
          </div>
          <div className="flex flex-row justify-center items-center gap-8 mt-10">
            {sympathetic.answer.map((item, index) => (
              <div
                className="w-[30vw] h-[200px] relative max-w-[400px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-easing="easing-in-out"
              >
                <div className="z-10 text-3xl w-full h-full border-2 border-cyan-400 shadow-2xl shadow-blue-500/50 rounded-full px-[50px] flex justify-center items-center text-[--thunder-cloud-color] font-bold">
                  {item}
                </div>
                <img
                  src={index == 1 ? expWomanImg : expManImg}
                  className="z-100 absolute bottom-[-10px] right-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="shadow-lg shadow-gray-500/100 overflow-hidden flex justify-center items-center bg-[--waterfall-color] font-bold text-[white] rounded-[20px] py-[50px] lg:py-[100px] mt-[10px] lg:mt-[50px]"
          data-aos="flip-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="easing-in-out"
          data-aos-anchor-placement="left-top"
        >
          <div className="w-[80%] md:w-[50%] text-sm sm:text-xl md:text-2xl lg:text-3xl leading-5 sm:leading-10 overflow-hidden">
            (株)建設技術研究所の水災害リスクマッピングシステム「RisKma」なら、気象
            庁の予測雨量、キキクル、注意報警報や、国・都道府県の河川水位、雨量計、
            監視カメラの情報をすべて同じ画面で確認できます。またすでに設置の観測機
            器の情報も取り込むことが可能です。
          </div>
        </div>
        <div
          className="flex justify-center items-center h-[200px] sm:h-[300px] lg:h-[400px]"
          data-aos="slide-up"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="easing-in-out"
        >
          <div className="flex justify-center items-center sm:min-w-[600px] md:min-w-[650px] max-w-[1000px] w-[90%] sm:w-[60%] h-[250px] sm:h-[400px]">
            <a
              href={riskmaPDF}
              target="_blank"
              className="shadow-lg shadow-slate-500/100 w-[100%] px-[80px] py-[20px] rounded-full text-center  text-3xl md:text-4xl lg:text-5xl font-bold text-white duration-500 bg-[--meadow-color] hover:bg-emerald-900 hover:text-white"
            >
              <span className="leading-snug">
                パンフレットのダウンロードは
                <br />
                こちら！
              </span>
              <BrowserUpdatedTwoToneIcon
                fontSize="large"
                className="animate-bounce text-yellow-200"
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="easing-in-out"
          className="flex flex-col justify-center items-center min-w-[350px] w-full flex justify-center items-center bg-gray-200 rounded-lg relative mt-[20px] pb-[50px] rounded-lg"
        >
          <div
            className="w-full relative flex flex-col justify-center items-center my-0 absolute top-[-50px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <div className="text-4xl font-bold">
              「リスクマ」導入の
              <br />
              <span className="text-8xl text-blue-500">5</span>つの
              <span className="text-5xl">メリット</span>
            </div>
          </div>
          <div className="w-[70%] flex flex-row flex-wrap justify-center items-center gap-[30px] sm:gap-8">
            {benefits.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                  data-aos-easing="easing-in-out"
                >
                  <BenefitCard item={item} index={index} />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center pb-[50px] sm:pb-[100px] overflow-hidden">
            <div
              className="w-full relative flex flex-col justify-center items-center my-[20px] sm:my-[50px] hover:opacity-90 duration-500"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-easing="easing-in-out"
            >
              <div className="w-full h-[5px] bg-[--meadow-color] absolute z-10"></div>
              <div className="z-20 rounded-full absoulte bg-[--meadow-color] inline font-bold text-xl sm:text-3xl md:text-5xl text-white px-[50px] sm:px-[100px] md:px-[150px] py-[20px]">
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
                      className="min-w-[300px] font-bold text-2xl sm:text-3xl text-emerald-600"
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
          className="w-full text-center bg-[--meadow-color] text-white py-[30px] sm:py-[50px] flex flex-col justify-center items-center relative"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <div className="absolute top-[-3px] rounded-b-[40px] bg-white w-[60%] h-[30px]"></div>
          <div className="my-12">
            <a
              href="https://www.cti-rains.net/mailform/form_miruone.html"
              target="_blank"
              className="px-30px py-15px w-[100px] bg-red-500 inline"
            >
              <div className="flex flex-row justify-center items-center gap-3 text-zinc-200">
                <ForwardToInboxOutlinedIcon
                  fontSize="large"
                  className="email-animation invisible sm:visible text-white"
                />
                <div>
                  <div>
                    <span className="text-base sm:text-base md:text-xl lg:text-2xl font-bold">
                      （株）建設技術研究所の
                    </span>
                    <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      IoT監視観測パッケージ「リスクマ」{" "}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-2xl md:text-4xl underline text-white">
                      お問い合わせ・お見積り
                    </span>
                    <span className="text-lg sm:text-base md:text-xl font-bold">
                      はこちらから！{" "}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="absolute bottom-[-3px] rounded-t-full bg-white w-[60%] h-[30px]"></div>
        </div>

        <div
          className="w-full flex flex-col jusify-center items-center py-[50px] gap-7 bg-gray-100"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="easing-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-6">
            <a
              href="https://www.ctie.co.jp/index.html"
              className="hover:opacity-60 duration-200"
            >
              <img src={CTIlogo} className="w-[200px]"></img>
            </a>
            <a
              href="https://riskma.net"
              className="hover:opacity-60 duration-200"
            >
              <img src={footer} className="w-[120px]"></img>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center text-sm sm:text-base">
            <div>Copyright RisKma - All Rights Reserved. </div>
            <div>「RisKma」は株式会社建設技術研究所の登録商標です。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
