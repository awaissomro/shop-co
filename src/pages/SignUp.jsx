import { useState } from "react";
import {
  PageWrapper,
  Panel,
  FormTitle,
  SubText,
  OfferBanner,
  Row,
  FieldGroup,
  Label,
  Input,
  SubmitButton,
  Divider,
  GoogleButton,
  GoogleIcon,
  Terms,
} from "./SignUp.styles";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LuLockKeyholeOpen, LuLockKeyhole } from "react-icons/lu";


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    email :"",
    password :""
  });

  const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) =>{
      setFormData({...formData,[e.target.name]:e.target.value})
      
    }

    const handleSubmit = () =>{
      // console.log(formData)
      // alert(formData)
      if(!formData.firstName || !formData.lastName || !formData.email || !formData.password){
        toast.error("Please fill all the fields")
        return;
      }
      // console.log(formData);
      toast.success("Account created successfully 🎉")
    }

  return (
    <PageWrapper>
    <ToastContainer position="top-right" autoClose={3000}/>
      <Panel>
        <FormTitle>Create Account</FormTitle>
        <SubText>
          Already have an account? <Link to="/signIn">Sign in</Link>
        </SubText>

        <OfferBanner>
          🎉 Sign up now and get <strong>20% off</strong> your first order
        </OfferBanner>

        <Row>
          <FieldGroup>
            <Label>First Name</Label>
            <Input type="text" name="firstName" placeholder="Muhammad" value={formData.firstName} onChange={handleChange}  />
          </FieldGroup>
          <FieldGroup>
            <Label>Last Name</Label>
            <Input type="text" name="lastName" placeholder="Owais" value={formData.lastName} onChange={handleChange}/>
          </FieldGroup>
        </Row>

        <FieldGroup>
          <Label>Email Address</Label>
          <Input type="email" name="email" placeholder="owais@example.com" value={formData.email} onChange={handleChange}/>
        </FieldGroup>

        <FieldGroup>
          <Label>Password</Label>
          <Input type={showPassword?"text": "password"} name="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} style={{ paddingRight: "2.5rem" }}  />          
          <span onClick={()=>setShowPassword(!showPassword)} style={{ position: "absolute", right: "0.75rem", top: "70%", transform: "translateY(-50%)", cursor: "pointer", color: "#888" }}>
            {showPassword? <LuLockKeyholeOpen/> : <LuLockKeyhole/> }
          </span>
        </FieldGroup>

        <SubmitButton onClick={handleSubmit}>Create Account</SubmitButton>

        <Divider>or</Divider>

        <GoogleButton>
          <GoogleIcon viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </GoogleIcon>
          Continue with Google
        </GoogleButton>

        <Terms>
          By creating an account you agree to our{" "}
          <Link to="/terms">Terms of Service</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </Terms>
      </Panel>
    </PageWrapper>
  );
};

export default SignUp;