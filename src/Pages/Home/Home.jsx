
import { useContext } from "react";
import Banner from "./Banner/Banner";
import CurlinerySection from "./CurlinerySection/CurlinerySection";
import PopularClass from "./PopularClass/PopularClass";
import TopInstructor from "./TopInstructor/TopInstructor";
import { ThemeContext } from "../../Layouts/ThemeContext";



const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`home-container ${theme}`}>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <TopInstructor/>
            <CurlinerySection></CurlinerySection>
        </div>
    );
};

export default Home;