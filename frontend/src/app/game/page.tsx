"use client";
import { useState } from "react";

import { CountDownArea } from "./_components/CountDownArea";
import ZyannkenBtn, { JankenProps } from "./_components/JankenButton";

const choices: JankenProps["handType"][] = [0, 1, 2];

const getResult = (
  playerHand: JankenProps["handType"],
  computerHand: JankenProps["handType"]
): number => {
  let result = -1;
  if (playerHand != undefined && computerHand != undefined) {
    //じゃんけんアルゴリズム
    // 0:あいこ 1:負け 2:勝利
    result = (playerHand - computerHand + 3) % 3;
  }
  return result;
};

export default function Home() {
  //プレイヤーの手
  const [playerHand, setPlayerHand] = useState<JankenProps["handType"]>(0);
  const [counter ,setCounter]= useState<number>(0);
  //じゃんけんの結果
  const [result, setResult] = useState<string>("");

  //手の種類
  const handTypes = ["グー", "チョキ", "パー"];
  //結果の種類
  const handJudges = ["あいこ", "敗北", "勝利"];

  //コンピュータの手
  const computerHand = choices[Math.floor(Math.random() * choices.length)];

  /**
   *じゃんけんプレイ処理
   * @param handType -プレイヤーの手の種類
   */
  const playJanken = (playerHandType: JankenProps["handType"]) => {
    setPlayerHand(playerHandType);
    const res = getResult(playerHandType, computerHand);
    setResult(handJudges[res]);
    if(res ==1)
    {
      setCounter(counter+1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>じゃんけんゲーム</h1>
      <CountDownArea timeInSeconds={10} displayType={"number"} />
      <p>
        コンピュータの手: <strong>{handTypes[computerHand]}</strong>
      </p>
      <p>
        敗北数: <strong>{counter}</strong>
      </p>
      <div>
        {choices.map((choice) => (
          <ZyannkenBtn
            key={choice}
            handType={choice}
            size={50}
            onClick={() => playJanken(choice)}
          />
        ))}
      </div>
      {playerHand !== null &&
        playerHand !== undefined &&
        computerHand !== null &&
        computerHand !== undefined && (
          <div style={{ marginTop: "20px" }}>
            <p>
              あなたの手: <strong>{handTypes[playerHand]}</strong>
            </p>
            <p>
              コンピュータの手: <strong>{handTypes[computerHand]}</strong>
            </p>
            <h2>{result}</h2>
          </div>
        )}
    </div>
  );
}
