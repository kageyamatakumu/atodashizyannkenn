"use client";
import { useState } from "react";

import { CountDownArea } from "./_components/CountDownArea";
import ZyannkenBtn, { JankenProps } from "./_components/zyannkenBtn";



const choices: JankenProps["handType"][] = [0, 1, 2];

const getResult = (playerHand: JankenProps["handType"], computerHand: JankenProps["handType"]):number => {
  let result=-1;
  if(playerHand!=undefined && computerHand!=undefined)
  {
    //じゃんけんアルゴリズム
    // 0:あいこ 1:負け 2:勝利
    result = (playerHand -computerHand +3)%3;
  }
  return result;
};

export default function Home() {
  const [playerHand, setPlayerHand] = useState<JankenProps["handType"]>(0);
  const [computerHand, setComputerHand] = useState<JankenProps["handType"]>(0);
  const [result, setResult] = useState<string>("");

  const handTypes =["グー", "チョキ", "パー"];
  const handJudges =["あいこ","敗北","勝利"];
  const playJanken = (handType: JankenProps["handType"]) => {
    const randomHand = choices[Math.floor(Math.random() * choices.length)];
    setPlayerHand(handType);
    setComputerHand(randomHand);
    const res = getResult(handType, randomHand);
    
    setResult(handJudges[res]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>じゃんけんゲーム</h1>
      <CountDownArea timeInSeconds={10} displayType={'number'} />
      <div>
        {choices.map((choice) => (
          <ZyannkenBtn
            key={choice}
            handType={choice}
            size={30}
            onClick={() => playJanken(choice)}
          />
        ))}
      </div>
      {playerHand !== null &&playerHand !== undefined && computerHand !== null &&computerHand !== undefined && (
        <div style={{ marginTop: "20px" }}>
          <p>あなたの手: <strong>{handTypes[playerHand]}</strong></p>
          <p>コンピュータの手: <strong>{handTypes[computerHand]}</strong></p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

      

