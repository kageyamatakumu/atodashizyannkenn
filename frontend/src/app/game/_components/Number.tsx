import React from 'react'

type NumberProps = {
  remainingTime: number;
};

export const Number = ({ remainingTime }: NumberProps) => {
  return (
    <div>{ remainingTime }</div>
  )
}
