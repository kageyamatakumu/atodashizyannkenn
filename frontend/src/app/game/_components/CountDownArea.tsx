"use client"; // クライアントコンポーネントとして明示的に指定

import React, { useEffect, useState } from 'react'
import { Number } from './Number';

type CountDownAreaProps = {
  timeInSeconds: number; // カウントダウンする秒数
  displayType: 'number' | 'hourglass'; // 表示形式を選択
};

export const CountDownArea = ({ timeInSeconds, displayType }: CountDownAreaProps) => {
  const [remainingTime, setRemainingTime] = useState(timeInSeconds)

  console.log(displayType)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval); // カウントダウン終了
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // コンポーネントのアンマウント時にクリーンアップ
  }, [])

  return (
    <>
      <Number remainingTime={remainingTime} />
    </>
  )
}
