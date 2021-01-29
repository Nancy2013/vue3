/*
 * @Author: your name
 * @Date: 2021-01-28 10:48:45
 * @LastEditTime: 2021-01-28 11:21:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\types\enum.ts
 */
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

declare enum Enum {
  A = 1,
  B,
  C = 2
}

const enum Enum2 {
  A = 1,
  B = A * 2
}

let arr=[Enum2.A,Enum2.B]