import react from "react";
import Title from "../components/Title"
import Navbar from "../components/Navbar/Navbar";
import CardInformasi from "../components/Card/CardInformasi"
import Footer from "../components/Footer/Footer";
const UMKM = () => {
    return(
        <>
            <Navbar/>
            <Title titleInf="UMKM"/>
            <div className="flex justify-center flex-wrap bg-white"> 
                <CardInformasi status="umkm" linkMedia="/" titleInformasi="Keripik Bu Dian" descInformasi="Keripik berbahan pisang yang diolah dengan higienis dan bahan premium ..."/>
                <CardInformasi status="umkm" linkMedia="/" titleInformasi="Keripik Bu Dian" descInformasi="Keripik berbahan pisang yang diolah dengan higienis dan bahan premium ..."/>
                <CardInformasi status="umkm" linkMedia="/" titleInformasi="Keripik Bu Dian" descInformasi="Keripik berbahan pisang yang diolah dengan higienis dan bahan premium ..."/> 
            </div>
            <Footer/>
        </>
    );
}
export default UMKM;