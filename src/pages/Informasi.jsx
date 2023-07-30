import react from "react";
import Title from "../components/Title"
import Navbar from "../components/Navbar/Navbar";
import CardInformasi from "../components/Card/CardInformasi"
import Footer from "../components/Footer/Footer";
const Informasi = () => {
    return(
        <>
            <Navbar/>
            <Title titleInf="Informasi"/>
            <div className="flex justify-center flex-wrap bg-white"> 
                <CardInformasi linkMedia="/Detail" status="informasi" titleInformasi="Sejarah" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu tempat tinggal ..."/>
                <CardInformasi linkMedia="/Detail" status="informasi" titleInformasi="Sejarah" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu tempat tinggal ..."/>
                <CardInformasi linkMedia="/Detail" status="informasi" titleInformasi="Sejarah" descInformasi="Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu tempat tinggal ..."/> 
            </div>
            <Footer/>
        </>
    );
}
export default Informasi