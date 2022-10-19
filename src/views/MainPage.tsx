import { IsLoggedIn } from "../cache";
import { useSignout } from "../hooks/useSignOut";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";

export default function MainPage() {

  


  return (
    <>
      <Navbar></Navbar>
      
      <SearchForm></SearchForm>
    </>
  )
}
