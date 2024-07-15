import { ChakraProvider } from "@chakra-ui/react";
import Menubar from "./Menubar.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./AuthContext";
import "./global.css";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="892995168064-ql1dklpi8qe0sf6q2uauvdmht8pl66th.apps.googleusercontent.com">
        <ChakraProvider>
          <AuthProvider>
            <Menubar />
          </AuthProvider>
        </ChakraProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
