import Chat from "./Chat";
import SignIn from "./SignIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";



function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
