import { Link } from "react-router-dom"




function MainPage() {
  
    const Header = () => (
    <div className="header">
      <div>
        <Link to="/login">ddd</Link>
      </div>
      <div>
        <Link to="/detail">2222</Link>
      </div>
    </div>
  );

  return (
    <>
      <Header></Header>

      <div>여기는 메인페이지 입니당</div>

      
    </>
  )
}

export default MainPage
