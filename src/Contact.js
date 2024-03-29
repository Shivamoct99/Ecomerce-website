import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function Contact() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.2781358262346!2d77.54602361294215!3d29.942677384796987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeab0fd0be38b%3A0xa975c465bc75a489!2sPerfection%20%2C%20Institute!5e0!3m2!1sen!2sin!4v1706601993212!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullscreen=""
        title="home"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkgvjal"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              className="text"
              name="UserName"
              placeholder="Enter UserName"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />
            <input
              type="text"
              className="Email"
              name="Email"
              placeholder="Enter Email"
              value={isAuthenticated ? user.email : ""}
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter Your Message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
