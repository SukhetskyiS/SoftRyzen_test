import React, { useState } from "react";
import next from "../../assets/gallery/next.png";
import prev from "../../assets/gallery/prev.png";
import close from "../../assets/gallery/close.png";
import {
  CasesContainer,
  CasesHeader,
  CasesQuestion,
  CasesText,
  List,
  Image,
  Modal,
  ModalContent,
  ModalImage,
  ModalArrowLeft,
  ModalArrowRight,
  ModalCloseButton,
  Div,
  Item,
} from "./Cases.styled";
import { images } from "./images";

export function Cases() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <CasesContainer id="cases">
      <CasesQuestion>This is what we do</CasesQuestion>
      <CasesHeader>Business Cases</CasesHeader>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </CasesText>
      <List>
        {images.map((image, index) => (
          <Item key={index}>
            <Image
              src={image.src}
              srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 25vw"
              alt={`Cases ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          </Item>
        ))}
      </List>
      {modalOpen && (
        <Modal>
          <ModalContent>
            <Div>
              <ModalImage
                src={images[currentImageIndex].src}
              />
              <ModalCloseButton
                src={close}
                onClick={handleModalClose}
              />
            </Div>

            <ModalArrowLeft
              src={prev}
              onClick={handlePreviousClick}
            />
            <ModalArrowRight
              src={next}
              onClick={handleNextClick}
            />
          </ModalContent>
        </Modal>
      )}
    </CasesContainer>
  );
}
