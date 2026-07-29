import {
  Button,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { Eye, EyeOff, Key, Mail } from "lucide-react";
import { useState } from "react";

function Login() {
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <div className="flex items-center gap-2 bg-transparent/50 backdrop-blur-lg w-full sm:px-8 px-2 py-2 border-b sticky top-0 left-0 z-50">
        <Logo />
        <span className="font-outfit font-bold text-2xl tracking-tight">
          Learn Loop
        </span>
      </div>
      {/* <div className="max-w-7xl mx-auto">
          <div className="border h-80 w-80 mx-auto">

          </div>
      </div> */}
      {/* <div className="grid md:grid-cols-2 min-h-dvh"> */}
        {/* <div className="md:flex items-center justify-center hidden bg-accent-soft">
          <img src="/login.avif" className="w-2/3 object-contain" />
        </div> */}
        <div className="flex items-center justify-center min-h-dvh">
          <Form className="border rounded-xl p-10 w-1/3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <h2 className="font-outfit text-3xl font-bold tracking-tight text-center mb-4">
                Welcome Again!
              </h2>
              <TextField>
                <Label>
                  Email <span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <InputGroup.Prefix>
                    <Mail className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    className="w-full"
                    placeholder="name@email.com"
                  />
                </InputGroup>
              </TextField>
              <TextField>
                <Label>
                  Password <span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <InputGroup.Prefix>
                    <Key className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    className="w-full"
                    type={showPwd ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputGroup.Suffix>
                    <Button
                      aria-label={showPwd ? "Hide password" : "Show password"}
                      size="sm"
                      variant="ghost"
                      onPress={() => setShowPwd(!showPwd)}
                      isIconOnly
                    >
                      {showPwd ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeOff className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>
              <Button className="w-full">Login</Button>
            </div>
          </Form>
        </div>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Login;
