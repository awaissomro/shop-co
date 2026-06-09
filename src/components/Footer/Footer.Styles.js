import styled from "styled-components";

export const NewsLetterBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  border-radius: 20px;
  padding: 36px 48px;
  margin-top: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 32px 24px;
  }
`;

export const NewsLetterTitle = styled.div`
  max-width: 550px;

  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    margin: 0;
  }

  span { display: block; }

  @media (max-width: 768px) {
    h2 { font-size: 32px; text-align: center; }
  }

  @media (max-width: 480px) {
    h2 { font-size: 28px; }
  }
`;

export const NewsLetterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 350px;

  @media (max-width: 768px) { width: 100%; }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 999px;
  padding: 0 16px;
  height: 48px;

  svg {
    color: #999;
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const EmailInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;

  &::placeholder { color: #999; }
`;

export const SubscribeButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 999px;
  background: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover { opacity: 0.9; }
`;

// ── Footer ──────────────────────────────────────────

export const FooterWrapper = styled.footer`
  padding: 60px 40px 0 40px;
  border-top: 1px solid #0000001a;
  margin-top: 60px;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.8fr repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #0000001a;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BrandName = styled.h2`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  color: #000;
  margin: 0;
`;

export const BrandDesc = styled.p`
  font-size: 14px;
  color: #00000099;
  line-height: 1.6;
  margin: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColumnTitle = styled.h4`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000;
  margin: 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li`
  a {
    font-size: 14px;
    color: #00000099;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover { color: #000; }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: #00000066;
  margin: 0;
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PaymentBadge = styled.div`
  border: 1px solid #0000001a;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;