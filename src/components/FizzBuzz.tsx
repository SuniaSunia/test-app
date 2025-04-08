import React from "react";
import styles from "./TemperatureDisplay.module.scss";

type FizzBuzzProps = {
maxNumber: number;};

const FizzBuzz: React.FC<FizzBuzzProps> = ({ maxNumber }) => {
  const generateFizzBuzz = (num: number) => {
    if(num % 3 === 0 && num % 5 === 0){
      return 'FizzBuzz'
    }
    if(num % 3 === 0){
      return 'Fizz'
    }
    if(num % 5 === 0){
      return 'Buzz'
    }
    return num;
  }

  const fizzbuzzList = [];
  for(let num = 1; num <= maxNumber; num++){
    fizzbuzzList.push(
      <li key={num}>
        {generateFizzBuzz(num)}
      </li>
    )
  }
  

  return (
    <div className={styles.container}>
      <h1>FizzBuzz</h1>
      <ul>{fizzbuzzList}</ul>
    </div>
  );
};

export default FizzBuzz;
