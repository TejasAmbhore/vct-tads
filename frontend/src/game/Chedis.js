// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
// import v1 from "./images/v1.png"
import "./Chedis.css"



export default function Chedis() {
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
  const handlecorrect = () => {
    if (userIndex === 15) {
      toast.success("Master gave Dobby the right answer.", {
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
    toast.error("Tum to Maglu lagte ho bro...", {
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
    toast.error("Aise jawab ke liye aapko Hogwarts...jaadu aur tantr ke vidyalaya se nikala jata hai...", {
      position: "bottom-right",
      autoClose: 2000
    });
  }



  return (
    <>
      <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/BG%20images/Dark%20Images/Cheddis%20horror.png?raw=true"} alt="hii" className='chedis' /></LazyLoad>
      <div className='backbutton'>
        <h1 className="mx-3">
          <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
        </h1>
      </div>
      <LazyLoad>
        <div className="xyz1">
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Chedis/cold_drinks.png?raw=true"} alt="hii" className='vectors chedis1' onClick={handlecorrect} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Chedis/scroll.png?raw=true"} alt="hii" className=' chedis2' onClick={handlewrong3} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Chedis/poster.png?raw=true"} alt="hii" className='vectors chedis3' onClick={handlewrong5} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Chedis/glaass.png?raw=true"} alt="hii" className='vectors chedis4' onClick={handlecorrect} aria-hidden="true" />
          {/* <img src={v1} alt="hii" className='vectors chedis5' onClick={handlewrong1} aria-hidden="true" /> */}
          <ToastContainer />
        </div>
      </LazyLoad>
    </>
  )
}
