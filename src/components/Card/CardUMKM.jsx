import react from "react";
import cardPic from "../../img/IMG_0331.jpg"
const CardUMKM = () => {
    return(
        <>
        <div className="bg-white justify-center items-center flex-col flex md:w-1/4 text-center rounded-2xl md:mx-4 my-6">
            <img
                src={cardPic}
                alt="missing img"
                className="rounded-t-2xl"
            />
            <h1 className="font-semibold text-lg p-6 text-black">Keripik Bu Dian</h1>
        </div>
        </>
    );
}

export default CardUMKM;
