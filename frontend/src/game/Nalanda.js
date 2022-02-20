// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "./Nalanda.css"
import LazyLoad from 'react-lazyload';
// import v1 from "./images/v1.png"



export default function Nalanda() {
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response1.json();
    // console.log(json);
    const name01 = json.userRiddleIndex;
    setUserIndex(name01);
    // console.log(userIndex, "userIndex--mainB--")
  }
  useEffect(() => {
    userdeatils();
    // eslint-disable-next-line
  }, [userIndex, setUserIndex]);

  // -************************

  const UserRiddleupdatecount = async (score) => {
    const response = await fetch("/user/updatecount", {
      method: "PUT",
      headers: {
        "authToken": localStorage.getItem("usertoken"),
        "userScore": score
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json, "jiii");
  }
  // --------------------
  const navigate = useNavigate();
  // eslint-disable-next-line
  const handlecorrect = () => {
    if (userIndex === 2) {
      toast.success("Right Answer", {
        position: "top-center",
        autoClose: 1500
      });
      const score = userIndex + 1;
      // console.log("score---> ", score)
      UserRiddleupdatecount(score);
      setTimeout(() => {
        navigate("/game/map", { replace: true });
      }, 2000);
    }
    else {
      toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
        position: "top-center",
        autoClose: 2000
      });
    }
  }
  // eslint-disable-next-line
  const handlewrong1 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "bottom-center",
      autoClose: 2000
    });
  }
  // eslint-disable-next-line
  const handlewrong2 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "top-left",
      autoClose: 2000
    });
  }
  // eslint-disable-next-line
  const handlewrong3 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "top-right",
      autoClose: 2000
    });
  }
  // eslint-disable-next-line
  const handlewrong4 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "bottom-left",
      autoClose: 2000
    });
  }
  // eslint-disable-next-line
  const handlewrong5 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "bottom-right",
      autoClose: 2000
    });
  }



  return (
    <>
      <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Nalanda/Nalanda%20horror.png?raw=true"} alt="hii" className='nal' /></LazyLoad>
      <div className='backbutton'>
        <h1 className="mx-3">
          <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
        </h1>
      </div>
      <LazyLoad>
        <div className="xyz1">
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Nalanda/snake-01.png?raw=true"} alt="hii" className='vectors nal1' onClick={handlecorrect} aria-hidden="true" />
          {/* <img src={v1} alt="hii" className='vectors nal2' onClick={handlewrong1} aria-hidden="true" />
        <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Nalanda/snake-01.png?raw=true"} alt="hii" className='vectors nal3' onClick={handlewrong1} aria-hidden="true" /> */}
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Nalanda/rushed%20paper%20(1).png?raw=true"} alt="hii" className='vectors nal4' onClick={handlewrong1} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Nalanda/dry%20leaf%20(1).png?raw=true"} alt="hii" className='vectors nal5' onClick={handlewrong2} aria-hidden="true" />
          <ToastContainer />
        </div>
      </LazyLoad>
    </>

  )
}
