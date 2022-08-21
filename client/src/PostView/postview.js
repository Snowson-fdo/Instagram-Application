import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import like from "../Images/heart.png"
import share from "../Images/share.png"
import "./postview.css"
const PostView = () => {
  const [userData, setPostData] = useState([]);
  useEffect(() => {
    axios.get("https://instaclonebackend100.herokuapp.com/newposts").then((res) => {
      let data = res.data.reverse();
      console.log(data)
      setPostData(data);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <Header />
      {userData.map((elem, i) => {
        return (
          <div className="block">
            <div className="block-header">
              <div key={i}>
                <b>{elem.author}</b>
                <p className="loc">{elem.location}</p>
              </div>
              <p className="dots">...</p>
            </div>

            <div>
              <img className="postImage" src={elem.image} alt="Wait still not found" />
            </div>

            <div className="img">
              <img id="like" src={like} alt="Wait still not found"></img>
              <img id="share" src={share} alt="Wait still not found"></img>
              <span>{elem.date}</span>
            </div>
            <p className="likes">{"43M likes"}</p>
            <p className="likes"><b>{elem.desc}</b></p>
          </div>
        );
      })}
    </>
  )
}
export default PostView;