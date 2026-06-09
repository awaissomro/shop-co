import styled from "styled-components"

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
min-height: 100vh;
background: #f2f0eb;

`
export const Panel = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.08);
`
export const FormTitle = styled.h1`
font-family: "Satoshi", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.03em;
  margin-bottom: 0.3rem;

`
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
    label{
        font-family: "Satoshi", sans-serif;
        font-size: 0.78rem;
        font-weight: 600;
        color: #111;
        margin-bottom: 0.4rem;
        letter-spacing: 0.01em;
    }

    input{
        padding: 0.72rem 1rem;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        font-family: "Satoshi", sans-serif;
        font-size: 0.88rem;
        color: #111;
        background: #fafafa;
        transition: border-color 0.15s, background 0.15s;
        outline: none;

         &:focus {
             background: #fff;
             border-color: #111;
        }

            &::placeholder {
                    color: #c0c0c0;
            }
    }
`
export const SignInButton = styled.div`
  width: 50%;
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

`
