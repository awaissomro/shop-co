import { useState } from "react"
import { PageWrapper,Panel,FormTitle,FieldGroup,SignInButton } from "./SignIn.styles"
import { toast, ToastContainer } from "react-toastify"
import { LuLockKeyholeOpen, LuLockKeyhole } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

const SignIn = ({onLogIn}) => {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const[showPassword, setShowPassword] = useState (false);
  
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = () =>{
    if(!formData.email || !formData.password){
      toast.error("Please fill the fields")
      return;
    }
     toast.success("You're SignedIn successfully")
    // console.log(formData)
    onLogIn();
    navigate('/')

  }
 

  return (
    <PageWrapper>
    <ToastContainer/>
    <Panel>
        <FormTitle>SignIn Account </FormTitle>
        <FieldGroup>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
        </FieldGroup>
        <FieldGroup>
        <label>Password</label>
        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} style={{ paddingRight: "2.5rem" }} />
        <span onClick={()=> setShowPassword(!showPassword)} style={{ position: "absolute", right: "0.75rem", top: "70%", transform: "translateY(-50%)", cursor: "pointer", color: "#888" }} >
          {showPassword ? <LuLockKeyholeOpen/> : <LuLockKeyhole/>}
        </span>
        </FieldGroup>
        <SignInButton onClick={handleSubmit}>Sign in</SignInButton>
    </Panel>
    </PageWrapper>
  )
}

export default SignIn
