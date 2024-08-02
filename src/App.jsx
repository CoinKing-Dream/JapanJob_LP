import "./App.css";

function App() {
  const sympathetic = {
    question: "こんなお悩みはありませんか？",
    answer: [
      "水防に必要な情報がバラバラ",
      "庁内のPCでしか情報が見られない",
      "雨量・水位の観測網が不足している",
    ],
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] min-w-[220px] flex flex-col gap-[100px]">
        <div className="flex flex-col gap-3">
          <div className="text-3xl text-center">自治体防災担当者の方へ</div>
          <div className="text-xl text-center">水災害リスクをまるごと監視！あらゆる情報をRisKmaに</div>
        </div>
        <div>
          <div className="text-2xl text-center">{sympathetic.question}</div>
          {sympathetic.answer.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <div>
          <div>
            (株)建設技術研究所の水災害リスクマッピングシステム「RisKma」なら、気象
            庁の予測雨量、キキクル、注意報警報や、国・都道府県の河川水位、雨量計、
            監視カメラの情報をすべて同じ画面で確認できます。またすでに設置の観測機
            器の情報も取り込むことが可能です。
          </div>
        </div>
        <div>
          <button>パンフレットのダウンロードはこちら！</button>
        </div>
      </div>
    </div>
  );
}

export default App;
