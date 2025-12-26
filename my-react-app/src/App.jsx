import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Students from "./components/students/students";
import Greetings from "./components/UserGreetings/geetings";

function App() {
  return (
    <><Header /><Greetings userName="Kulsrestha" isLoggedIn={true}/>
      <Students name="John Doe" age={20} isStudent={true} />
      <Students name="Jane Smith" age={22} isStudent={false} />
      <Students name="Bob Johnson" age={19} isStudent={true} />
      <Students name="Alice Brown" age={21} isStudent={true} />
      <Students name="Charlie Wilson" age={23} isStudent={false} />
      <Students/>
    <Footer /></>
  );
}

export default App
