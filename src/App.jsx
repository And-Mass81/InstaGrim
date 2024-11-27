import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home_page/HomePage";
import AuthPage from "./pages/Auth_page/AuthPage";
import PageLayout from "./layout/pageLayout/pageLayout";
import { ProfilePage } from "./pages/Profile_Page/ProfilePage";



function App() {


  return (

    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
 
  )
}
 
export default App


// https://www.color-hex.com/color-palette/80053  colors https://uicolors.app/create