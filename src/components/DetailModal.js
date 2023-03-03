import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { RxCross2 } from "react-icons/rx";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { state } = useLocation();
  const vehicle = state.item;

  const items = [
    {
      src: vehicle.Image1,
      key: 1,
    },
    {
      src: vehicle.Image2,
      key: 2,
    },
    {
      src: vehicle.Image3,
      key: 3,
    },
    {
      src: vehicle.Image4,
      key: 4,
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="imagemodal" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

const DetailModal = ({ modal, setModal }) => {
  const { state } = useLocation();
  const vehicle = state.item;

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <div className="modalclosebtn" onClick={toggle}>
      <RxCross2 />
    </div>
  );

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={"modalsize"}
      centered={true}
      size={"lg"}
    >
      <ModalHeader toggle={toggle} close={closeBtn} className={"m-0 p-0"}>
        <Example />
      </ModalHeader>
    </Modal>
  );
};

export default DetailModal;
