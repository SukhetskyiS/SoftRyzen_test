import {
  RequestContainer,
  RequestHeader,
  RequestName,
  RequestEmail,
  RequestButton,
} from "./Request.styled";

import contact from "../../assets/home/contact.jpg";
import contact_2x from "../../assets/home/contact@2x.jpg";
import contact_webp from "../../assets/home/contact.webp";
import contact_webp2x from "../../assets/home/contact@2x.webp";

export function Request() {
  const image = {
    src: contact,
    srcSet: `${contact} 1x, ${contact_2x} 2x`,
    webpSrcSet: `${contact_webp} 1x, ${contact_webp2x} 2x`,
  };

  return (
    <>
      <img
        src={image.src}
        srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        alt="contact"
      />
      <RequestContainer>
        <div>
          <form>
            <RequestHeader>Request Callback</RequestHeader>
            <RequestName
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <RequestEmail
              type="email"
              name="email"
              id="email"
              placeholder="Enter email*"
            />
            <RequestButton type="button">
              Send
            </RequestButton>
          </form>
        </div>
      </RequestContainer>
    </>
  );
}
