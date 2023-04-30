import {
  ContactFooter,
  ContactList,
  ContactFacebook,
  ContactTwitter,
  ContactYoutube,
  ContactLinkedin,
  ContactText,
} from "./Contact.styled";

export function Contact() {
  return (
    <ContactFooter id="contact">
      <ContactList>
        <ContactFacebook />
        <ContactTwitter />
        <ContactYoutube />
        <ContactLinkedin />
      </ContactList>
      <ContactText>
        Copyright © 2021 - FinanceLedger
      </ContactText>
    </ContactFooter>
  );
}
