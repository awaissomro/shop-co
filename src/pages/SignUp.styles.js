import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f2f0eb;
  padding: 2rem 1rem;
`;

export const Panel = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.08);
`;

export const FormTitle = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.03em;
  margin-bottom: 0.3rem;
`;

export const SubText = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 1.5rem;

  a {
    color: #111;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid #111;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const OfferBanner = styled.div`
  background: #111;
  color: #fff;
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-family: "Satoshi", sans-serif;
  font-size: 0.82rem;
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: #e8d5a3;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  font-family: "Satoshi", sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 0.4rem;
  letter-spacing: 0.01em;
`;

export const Input = styled.input`
  padding: 0.72rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: 0.88rem;
  font-family: "Satoshi", sans-serif;
  background: #fafafa;
  color: #111;
  outline: none;
  transition: border-color 0.15s, background 0.15s;

  &:focus {
    border-color: #111;
    background: #fff;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 62px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Satoshi", sans-serif;
  cursor: pointer;
  margin-top: 0.25rem;
  transition: opacity 0.15s, transform 0.15s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.1rem 0;
  color: #ccc;
  font-size: 0.8rem;
  font-family: "Satoshi", sans-serif;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #ebebeb;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 0.78rem;
  background: #fff;
  color: #111;
  border: 1px solid #e5e5e5;
  border-radius: 62px;
  font-size: 0.88rem;
  font-weight: 500;
  font-family: "Satoshi", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }
`;

export const GoogleIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const Terms = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 0.75rem;
  color: #aaa;
  text-align: center;
  margin-top: 1.1rem;
  line-height: 1.6;

  a {
    color: #555;
    text-decoration: underline;

    &:hover {
      color: #111;
    }
  }
`;