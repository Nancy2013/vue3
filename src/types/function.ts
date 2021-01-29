/*
 * @Author: your name
 * @Date: 2021-01-28 14:39:01
 * @LastEditTime: 2021-01-28 14:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\types\function.ts
 */
let myAdd: (x:number, y:number) => number =
  function (x: number, y: number): number { return x + y; };
    
  let myAdd2: (baseValue: number, increment: number) => number =
  function(x, y) { return x + y; };