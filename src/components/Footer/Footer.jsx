import {
  NewsLetterBanner, NewsLetterTitle, NewsLetterForm,
  InputWrapper, EmailInput, SubscribeButton,
  FooterWrapper, FooterTop,
  BrandColumn, BrandName, BrandDesc, SocialIcons, SocialIcon,
  LinkColumn, ColumnTitle, LinkList, LinkItem,
  FooterBottom, Copyright, PaymentIcons, PaymentBadge
} from "./Footer.Styles";
import { Container } from "../../styles/Container";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import visaImage from "../../assets/Visa.png"
import masterCardImage from "../../assets/Mastercard.png"
import payPalImage from "../../assets/Paypal.png"
import applePayImage from "../../assets/A Pay.png"
import gPayImage from "../../assets/G Pay.png"




const footerLinks = [
  { id: 1, title: "Company",   link: ["About", "Features", "Works", "Career"] },
  { id: 2, title: "Help",      link: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
  { id: 3, title: "FAQ",       link: ["Account", "Manage Deliveries", "Orders", "Payments"] },
  { id: 4, title: "Resources", link: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
];

    const socialLinks = [
        {id:1, icon:<FaTwitter/>, href:"#" },
        {id:2, icon:<FaFacebookF/>, href:"#"},
        {id:3, icon: <FaInstagram/>, href:"#"},
        {id:4, icon:<FaGithub/>, href:"#"}
    ]
const paymentMethods = [
  {id:1,image:visaImage, alt: "visa"},
  {id:2,image:masterCardImage, alt: "Master Card"},
  {id:3,image:payPalImage, alt: "PayPal"},
  {id:4,image:applePayImage, alt: "Apple Pay"},
  {id:5,image:gPayImage, alt: "G Pay"}
];
// ["VISA", "MC", "PayPal", "Apple Pay", "G Pay"];

const Footer = () => {
  return (
    <>
      <Container>
      <NewsLetterBanner>
        <NewsLetterTitle>
          <h2>Stay upto date about <span>our latest offers</span></h2>
        </NewsLetterTitle>
        <NewsLetterForm>
          <InputWrapper>
            <MdOutlineEmail />
            <EmailInput type="email" placeholder="Enter your email address" />
          </InputWrapper>
          <SubscribeButton>Subscribe to Newsletter</SubscribeButton>
        </NewsLetterForm>
      </NewsLetterBanner>
      </Container>

      
      <FooterWrapper>
        <FooterTop>

          <BrandColumn>
            <BrandName>Shop.co</BrandName>
            <BrandDesc>
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </BrandDesc>
            <SocialIcons>
                {
                    socialLinks.map((s)=>(
                        <SocialIcon key={s.id} href={s.href} >{s.icon}</SocialIcon>
                    ))
                }
            </SocialIcons>

          </BrandColumn>

          {footerLinks.map((column) => (
            <LinkColumn key={column.id}>
              <ColumnTitle>{column.title}</ColumnTitle>
              <LinkList>
                {column.link.map((link) => (
                  <LinkItem key={link}>
                    <a href="#">{link}</a>
                  </LinkItem>
                ))}
              </LinkList>
            </LinkColumn>
          ))}

        </FooterTop>

        <FooterBottom>
          <Copyright>Shop.co © 2000-2023, All Rights Reserved</Copyright>
          <PaymentIcons>
            {paymentMethods.map((method) => (
              <PaymentBadge key={method.id}>
                <img src={method.image} alt={method.alt} />
              </PaymentBadge>
            ))}
          </PaymentIcons>
        </FooterBottom>

      </FooterWrapper>
    </>
  );
};

export default Footer;


  {/* <PaymentBadge key={method}>{method}</PaymentBadge> */}
