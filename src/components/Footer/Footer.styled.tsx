import styled from "styled-components";

interface ILink {
  imageLink: string;
}

export const Container = styled.footer`
  padding: 24px 16px 24px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  color: #fff;
`;

export const LinksBlock = styled.div`
  max-width: 173px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LinksTitle = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0;
`;

export const LinksItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a<ILink>`
  max-width: 40px;
  width: 100%;
  height: 40px;
  background-image: url(${({ imageLink }) => imageLink});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Divider = styled.div`
  width: 1px;
  height: 120px;
  background-color: #727683;
  opacity: 30%;
`;
