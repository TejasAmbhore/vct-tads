import Modal from "react-bootstrap/Modal";
import "./Modal.css";



function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="custom-modal-style"
      dialogClassName="modal-w "
      className="mobile_view"
      transparent={true}
      style={{
        backdropFilter: "blur(6px) saturate(180%)",
        webkitbackdropFilter: "blur(6px) saturate(180%)",
        backgroundColor: "rgba(155, 155, 155, 0.45)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)"
      }}
    >
      <Modal.Body
        style={{ backgroundColor: "rgb(91 48 8)", border: "1px solid #333333" }}
      >
        <div style={{ padding: "7%", color: "#ffffff", fontWeight: "500", fontSize: "20px", lineHeight: "2.4" }}>
          1.	Click on the "Virtual Cycle Trip" tab present on the left. Then click on "Let's Go" button on the page that appears to start the game. Beware… the countdown begins! So be quick.<br />
          2.	A clue appears on the screen depicting a place in IIT KGP campus. Guess the place and click on the respective pointer on the map present on screen.<br />
          3.	The pointer you choose opens an image of the same. This image contain 5 vectors out of which only 1 vector is correct. Find that one, and you get the next hint on your screen.<br />
          4.	To again see the hint, click on the icon present on top-left part of the screen. You can also check your score from this section of the screen.<br />
          5.	Finish all the riddles similarly, as fast as you can, to win exciting prizes.<br />
          6.	Make sure to attempt the VCT in one go. You cannot leave it in middle and start again. <br />

        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;