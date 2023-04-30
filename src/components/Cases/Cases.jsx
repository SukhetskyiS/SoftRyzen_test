import React, { useState } from "react";
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
          <li key={index}>
            <Image
              src={image.src}
              srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              alt={`Cases ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          </li>
        ))}
      </List>
      {modalOpen && (
        <Modal>
          <ModalContent>
            <ModalImage
              src={images[currentImageIndex].src}
            />
            <ModalArrowLeft onClick={handlePreviousClick} />
            <ModalArrowRight onClick={handleNextClick} />
            <ModalCloseButton onClick={handleModalClose} />
          </ModalContent>
        </Modal>
      )}
    </CasesContainer>
  );
}
