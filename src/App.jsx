import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Checkbox from "@mui/material/Checkbox";

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] min-w-[220px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-3">
          <div className="text-3xl text-center" data-aos="fade-up">自治体防災担当者の方へ</div>
          <div className="text-xl text-center">
            水災害リスクをまるごと監視！あらゆる情報をRisKmaに
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-2xl text-center">{sympathetic.question}</div>
          <div className="w-[40%]">
            {sympathetic.answer.map((item) => (
              <div className="flex flex-row justify-left items-center gap-3">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[80%]">
            (株)建設技術研究所の水災害リスクマッピングシステム「RisKma」なら、気象
            庁の予測雨量、キキクル、注意報警報や、国・都道府県の河川水位、雨量計、
            監視カメラの情報をすべて同じ画面で確認できます。またすでに設置の観測機
            器の情報も取り込むことが可能です。
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-[80%] bg-sky-500 hover:bg-sky-700">
            <span>パンフレットのダウンロードはこちら！</span>
            <CloudDownloadOutlinedIcon />
          </button>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
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
      </div>
    </div>
  );
}

export default App;
