import React, { useRef, useEffect, useCallback } from 'react';
import "./modal.css"
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


 const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 400
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div className="Background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            < div className="ModalWrapper" showModal={showModal}>
              <div className="ModalContent">
                <form className="form">
                  <input type="file" placeholder="uplode your img"/>
                  <input placeholder="Full Name"/>
                  <input type="email" placeholder="email"/>
                  <input type="number" placeholder="Phone number"/>
                  <textarea placeholder="about me "/>
                </form>
                <button className="btn-dark">Update My Info</button>
              </div>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal