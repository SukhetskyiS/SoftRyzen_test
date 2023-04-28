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
    <ContactFooter>
      <ContactList>
        <ContactFacebook>f</ContactFacebook>
        <ContactTwitter>t</ContactTwitter>
        <ContactYoutube>y</ContactYoutube>
        <ContactLinkedin>l</ContactLinkedin>
      </ContactList>
      <ContactText>
        Copyright © 2021 - FinanceLedger
      </ContactText>
    </ContactFooter>
  );
}
