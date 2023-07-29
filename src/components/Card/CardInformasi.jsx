import react from "react";
import cardPic from "../../img/IMG_0331.jpg"
const CardInformasi = () => {
    return(
        <>
        <div className="bg-2 justify-center items-center flex-col flex w-1/4 text-center rounded-2xl mx-4">
            <img
                src={cardPic}
                alt="missing img"
                className="rounded-t-2xl"
            />
            <h1 className="font-semibold text-lg pt-2">Sejarah</h1>
            <p className="text-md p-4">Pertama, wilayah Desa Dilem ini dulunya merupakan 'kaputren' , yaitu suatu tempat tinggal ...</p>

        </div>
        </>
    );
}

export default CardInformasi;
