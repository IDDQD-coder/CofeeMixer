import data from './input.json'
import { useState } from "react";

const ingredients = [
  {name: "Coffee"},
  {name: "Espresso"},
  {name: "Steamed Milk"},
  {name: "Hot Water"},
  {name: "1oz Espresso"},
  {name: "2oz Espresso"},
  {name: "Long pulled espresso"},
  {name: "1oz Steamed Milk"},
  {name: "Foamed Milk"},
  {name: "Traditional"},
  {name: "Chocolate"},
  {name: "Short pulled espresso"},
  {name: "Ice cream"},
  {name: "Sweet"},
  {name: "Sugar"},
  {name: "Whiskey"},
  {name: "Cream"},
  {name: "Panela"}
]
function compare(a1,a2)
{
  //console.log(JSON.stringify(a1))
  //console.log(JSON.stringify(a2)+"ERRRRR")
  return JSON.stringify(a1)==JSON.stringify(a2)
}
function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [resultCoffee, setResult]=useState('Нет такого кофе')
  const [resultDescription, setDescription]=useState('Нет кофе=> нет описания')
  const [resultImage, setImage]=useState('https://img.freepik.com/-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1669543071~exp=1669543671~hmac=16861b0164c905224dd207dc15b316abc3b320f9d08e8a61c809cd2c21359e6a')
  const handleOnChange=(position)=>{
    const updatedCheckedState = checkedState.map((item,index)=>
    index===position ? !item:item);
    setCheckedState(updatedCheckedState);
    const resultCoffee1 = ingredients.filter(
      (value,index)=>{
        if (updatedCheckedState[index]===true)
        {
          return true
        }
      }
    )
    
    
    
    let resultingredients=[]
    for (let i =0;i<resultCoffee1.length;i++)
    {
      resultingredients.push(resultCoffee1[i].name)
    }
    console.log(resultingredients)
    let resultIndex=0
    let mark=false
    resultingredients.sort();
    console.log(resultingredients)
    //resultingredients.sort();
    console.log(resultingredients)
    for (let i =0;i<data.length;i++)
    {
      let dataIngredients = data[i].ingredients
      dataIngredients.sort()
      if (compare(resultingredients,dataIngredients))
      {
        console.log(data[i].title)
        resultIndex=i
        console.log(resultIndex)
        mark=true
      }
    }
    if(mark){
      setResult(data[resultIndex].title);
      setImage(data[resultIndex].image)
      setDescription(data[resultIndex].description)
    }
    else{
      setResult("Нет такого кофе")
      setImage('https://img.freepik.com/-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1669543071~exp=1669543671~hmac=16861b0164c905224dd207dc15b316abc3b320f9d08e8a61c809cd2c21359e6a')
      setDescription("Нет кофе=> нет описания")
    }
  };
  return (
    <div className="App" class="container">
      <h2>
        <p>What's the coffee?</p>
        <p>We mix the ingredients and get a drink</p>
    </h2>
    <ul>
    {ingredients.map(({name},index)=>{
      return(
        <li key={index} class="ks-selected">
        <input type="checkbox" value={name}
        checked={checkedState[index]}
        onChange={()=>handleOnChange(index)}/>
        <label>{name}</label>
        </li>
      )
    })}
    <p>Ваш кофе={resultCoffee}</p>
    <p>Описание:{resultDescription}</p>
    <img src={resultImage} width="500" height="500"></img>
  
    </ul>
    </div>
  );
}
export default App;
