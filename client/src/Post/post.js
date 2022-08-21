import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./post.css"
import Header from "../Header/header";

const Post = () => {
  const navigate = useNavigate();
  const [setvalue] = useState("No File Chosen")
  const [post, setPost] = useState({
    author: "",
    location: "",
    desc: "",
    image: "",
  });
  const convertbase64 = (file) => new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result)
    reader.onerror = (err) => rej(err)
  })

  const afterUpload = async (e) => {
    console.log("Hello")
    const file = e.target.files[0]
    const base64 = await convertbase64(file)
    setPost({ ...post, image: base64 })
    setvalue(e.target.value)
  }
  const handlePosts = () => {
    console.log(post);
    axios({
      url: "https://instaclonebackend100.herokuapp.com/posts",
      method: "POST",
      headers: {
      },
      data: post
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    navigate("/postview");
  }
  return (
    <>
      <Header />
      <div>
        <form action="">
          <div className="container">
            <div className="box">

              <div className="image">
                <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, image: base64 })} onChange={(e) => afterUpload(e)} ></FileBase64>
              </div>

              <div className="auth_loc">
                <input className="auth" type="text" placeholder="Author" onChange={(e) => setPost({ ...post, author: e.target.value })} />
                <input className="location" type="text" placeholder="Location" onChange={(e) => setPost({ ...post, location: e.target.value })} />
              </div>

              <div className="desc">
                <input className="msg" type="text" placeholder="Description" onChange={(e) => setPost({ ...post, desc: e.target.value })} />
              </div>

              <div className="post">
                <button className={(post.author === "" && post.location === "" && post.desc === "" && post.image === "") ? "btn" : "clrbtn"} type="submit" onClick={handlePosts}>Post</button>
              </div>
            </div>
          </div>
        </form>
      </div >
    </>
  );
};

export default Post