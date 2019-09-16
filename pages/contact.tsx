import Layout from "../components/Layout";
import { useState } from "react";
//import Navbar from "../components/Navbar";

export default () => {
  // function handleMessageBoxClick(event: React.MouseEvent<HTMLDivElement>) {
  //   console.log(event.currentTarget.textContent);
  //   event.currentTarget.textContent = "";
  // }
  const [messageBoxIsEmpty, setMessageBoxIsEmpty] = useState(true);
  function handleInput(event: React.FormEvent<HTMLDivElement>) {
    if (event.currentTarget.textContent !== "") {
      setMessageBoxIsEmpty(false);
    } else {
      setMessageBoxIsEmpty(true);
    }
  }
  return (
    <Layout isParallax={false}>
      {/* <div> */}
      <div>
        <input className="focus:outline-none" placeholder="Your name"></input>
      </div>
      <div>
        <input
          className="focus:outline-none"
          placeholder="Your email address"
        ></input>
      </div>
      <div className="relative">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          Your message
        </div>
        <div
          className={`${messageBoxIsEmpty ? "bg-transparent" : "bg-white"}`}
          contentEditable={true}
          //onClick={handleMessageBoxClick}
          onInput={handleInput}
          //onChange={handleMessageChange}
          style={{
            outline: "none"
            //height: "1.5rem"
          }}
        />
      </div>
      <button className="focus:outline-none">send</button>
      <button className="focus:outline-none">delete</button>
      {/* </div> */}
    </Layout>
  );
};
