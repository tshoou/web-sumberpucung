import react from "react";
import Title from "../components/Title"
import Navbar from "../components/Navbar/Navbar";
import CardInformasi from "../components/Card/CardInformasi"
import Footer from "../components/Footer/Footer";
const Wisata = () => {
    return(
        <>
            <Navbar/>
            <Title titleInf="Wisata"/>
            <div className="flex justify-center flex-wrap bg-white"> 
                <CardInformasi status="wisata" linkMedia="/Detail" titleInformasi="Kedung Gopit" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu ..."/>
                <CardInformasi status="wisata" linkMedia="/Detail" titleInformasi="Kedung Gopit" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu ..."/>
                <CardInformasi status="wisata" linkMedia="/Detail" titleInformasi="Kedung Gopit" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu ..."/> 
            </div>
            <Footer/>
        </>
    );
}
export default Wisata;