import Featured from "../../Component/featured/Featured.jsx";
import FeaturedProperties from "../../Component/featuredProperties.jsx/FeaturedProperties.jsx";
import Footer from "../../Component/footer/Footer.jsx";
import Header from "../../Component/Header/Header.jsx";
import MailList from "../../Component/mailList/MailList.jsx";
import Navbar from "../../Component/Navbar/Navbar";
import PropertyList from "../propertyList/PropertyList.jsx";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;