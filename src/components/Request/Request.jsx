import {
  RequestContainer,
  RequestHeader,
  RequestName,
  RequestEmail,
  RequestButton,
} from "./Request.styled";

export function Request() {
  return (
    <RequestContainer>
      <div>
        <img alt="img" />
      </div>
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
          <RequestButton type="button">Send</RequestButton>
        </form>
      </div>
    </RequestContainer>
  );
}
