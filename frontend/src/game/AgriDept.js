// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
// import v1 from "./images/v1.png"
import "./AgriDept.css"
import LazyLoad from 'react-lazyload';



export default function AgriDept() {
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
    if (userIndex === 8) {
      toast.success("Ye to kamaal ho gya..dhoti faad ke rumaal ho gya...", {
        position: "top-center",
        autoClose: 2000
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
    toast.error("Itna Galat Kaise ho sakte ho....", {
      position: "bottom-center",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong2 = () => {
    toast.error("Udi  baba... Mera 20 saal ka tajurba mei itna galat kabhi nhi dekha.", {
      position: "top-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong3 = () => {
    toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
      position: "top-right",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong4 = () => {
    toast.error("Kacha badaam dada kacha badaam... Galti kar di hai tumnei sanam...", {
      position: "bottom-left",
      autoClose: 3000
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
      <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/BG%20images/Dark%20Images/AGFE%20DEP%20horror%20f.png?raw=true"} alt="hii" className='agri' /></LazyLoad>
      <div className='backbutton'>
        <h1 className="mx-3">
          <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
        </h1>
      </div>
      <LazyLoad>
        <div className="xyz1">
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/AGFE%20DEP/favpng_harry-potter-quidditch-world-cup-harry-potter-and-the-philosophers-stone-broom.png?raw=true"} alt="hii" className='vectors agri1' onClick={handlecorrect} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/AGFE%20DEP/insect%202.png?raw=true"} alt="hii" className='vectors agri2' onClick={handlewrong1} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/AGFE%20DEP/imgbin_harry-potter-and-the-philosophers-stone-owl-hedwig-hogwarts-png.png?raw=true"} alt="hii" className='vectors agri3' onClick={handlewrong2} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/AGFE%20DEP/plant-01.png?raw=true"} alt="hii" className='vectors agri4' onClick={handlewrong4} aria-hidden="true" />
          {/* <img src={v1} alt="hii" className='vectors agri5' onClick={handlewrong1} aria-hidden="true" /> */}
          <ToastContainer />
        </div>
      </LazyLoad>
    </>
  )
}
