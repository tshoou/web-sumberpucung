import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardPic from "../../img/sejarah.jpg";

const CardInformasi = ({ status, linkMedia, titleInformasi, descInformasi }) => {
  const [wisata, setWisata] = useState(false);
  const [umkm, setUmkm] = useState(false);
  const [informasi, setInformasi] = useState(false);

  useEffect(() => {
    if (status === "wisata") {
      setWisata(true);
      setUmkm(false);
      setInformasi(false);
    } else if (status === "umkm") {
      setUmkm(true);
      setWisata(false);
      setInformasi(false);
    } else {
      setInformasi(true);
      setWisata(false);
      setUmkm(false);
    }
  }, [status]);

  return (
    <>
    {console.log(linkMedia+status)}
      <Link to={`/Detail/${status}`} className="bg-secondary text-white justify-center items-center flex-col flex my-6 md:w-1/4 text-center rounded-2xl mx-4">
        <div className="pb-4">
          <img src={cardPic} alt="missing img" className="rounded-t-2xl" />
          <h1 className="font-semibold text-lg pt-2">{titleInformasi}</h1>
          {console.log(wisata)}
          {wisata ? (
            <div className="items-start">
              <h2>HTM : 8000</h2>
              <h2>Jam operasional : 18.00</h2>
            </div>
          ) : umkm ? (
            <div className="items-start">
              <h2>Kontak : (08989809809) Faza</h2>
              <h2>Alamat : Jalan Simpang Dewandaru</h2>
            </div>
          ) : (
            <p className="text-md p-4">{descInformasi}</p>
          )}
        </div>
      </Link>
    </>
  );
};

export default CardInformasi;
