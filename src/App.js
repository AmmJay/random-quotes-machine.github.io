import React, {useEffect} from "react";
import "./App.css"
import Button from "./components/Button"

function App() {
  

  const handleClick= async()=>{
      let x = Math.floor(Math.random()*256);
      let y = Math.floor(Math.random()*256);
      let z = Math.floor(Math.random()*256);

      let bgColor = `rgb(${x}, ${y}, ${z})`
    //let app = document.getElementsByClassName("app");

    await fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
        let num = Math.floor(Math.random()*data.length);
        document.getElementById("text").innerText = data[num].text;
        document.getElementById("author").innerText = `-${data[num].author}`;

    });

    document.getElementsByClassName("app")[0].style.backgroundColor = bgColor
    Array.from(document.getElementsByTagName("button")).forEach(element =>{
        element.style.backgroundColor = bgColor
    })
    document.getElementById("text").style.color = bgColor
    document.getElementById("author").style.color = bgColor
  }



  const handleTweet = () =>{
    let tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    let quoteString = document.getElementById("text").innerText.replace(/ /g, "%20");
    quoteString += "%20%20"
    quoteString += document.getElementById("author").innerText.replace(/ /g, "%20");

    document.getElementById("tweet-quote-link").href= `${tweetUrl}${quoteString}`
    
  }
  
    useEffect(()=>{
      handleClick()
    }, [])


  return (
    <>
    <div className = "app">
      <h1 id="heading">Quotes to get you through your day!</h1>
      <div id="quote-box">
        <div id="text"></div>
        <div id="author"></div>
        <div className="buttons">
          <Button idname = "new-quote" text="New Quote" onclick={handleClick} />
          <a id = "tweet-quote-link" target = "_blank" rel="noreferrer" href="https://twitter.com/intent/"><Button idname = "tweet-quote" text="Tweet Quote" onclick={handleTweet} /></a>
        </div>
      </div>
    </div>
    </>
  );
}


export default App;
