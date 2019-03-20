/* @flow */
import { sum } from './module';

export default function myModule() {
    const number1: number = 10;
    const number2: number = 20;
    const result = sum(number1, number2);

    console.log('Result is ' + result);
}