import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailPic from "../img/Frame 3.png";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { status } = useParams();
  let content = null;

  if (status === "wisata") {
    content = (
      <>
        <h2 className="text-lg pt-2">Alamat: Jalan Simpang Dewandaru</h2>
        <h2 className="text-lg pt-2">Kontak: 09989809809 (Faza)</h2>
        <h2 className="text-lg pt-2">HTML :6000</h2>
      </>
    );
  } else if (status === "umkm") {
    content = (
      <>
        <h2 className="text-lg pt-2">Alamat: Jalan Simpang Dewandaru</h2>
        <h2 className="text-lg pt-2">Kontak: 09989809809 (Faza)</h2>
      </>
    );
  } else if (status === "informasi") {
    content = (
      <>
      
        <h2 className="text-lg pt-2">Tangggal Kegiatan : 20 July 2023</h2>
      </>
    );
  } else {
    content = (
      <>
        <p>Tidak ada informasi yang sesuai</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <img src={DetailPic} className="w-full h-96 object-cover" />
      <div className="bg-secondary text-white px-24 py-4">
        <h1 className="font-bold text-4xl">Judul Informasi</h1>
        {content}
        <hr className="rounded-lg border-2 my-4 bg-primary border-tertiary" />
      </div>
      <div className="px-24 py-8">
        <p>
          Lorem ipsum dolor sit amet consectetur. Malesuada at tempor erat
          fermentum at malesuada. Suspendisse justo a mollis mauris ullamcorper
          leo morbi aliquam. Adipiscing ullamcorper eu lacus enim in. Euismod
          arcu congue quam placerat massa in tortor. Morbi molestie porttitor
          quisque eu. Integer dui montes et nibh amet eget at nunc. Diam
          placerat convallis tincidunt curabitur vulputate elementum eu nibh
          tortor. Enim diam non dolor bibendum vitae eget consectetur. Ut massa
          quis tellus scelerisque. Nulla id suspendisse maecenas vitae.
          Malesuada sit vel consectetur non pretium fusce sed. Risus praesent
          fames lacinia imperdiet. Malesuada eros nulla scelerisque a ultricies
          amet. Vulputate leo pharetra massa arcu sapien mattis. Adipiscing
          habitant lacus dictumst ac quam turpis proin. Ultricies nibh aenean
          non arcu felis velit. Ullamcorper iaculis aliquet elit vitae sed
          aliquam pulvinar. Rhoncus ac duis faucibus molestie lectus consequat
          placerat ultricies. Tempus sit in vulputate at tristique sed suscipit
          urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Malesuada at tempor erat
          fermentum at malesuada. Suspendisse justo a mollis mauris ullamcorper
          leo morbi aliquam. Adipiscing ullamcorper eu lacus enim in. Euismod
          arcu congue quam placerat massa in tortor. Morbi molestie porttitor
          quisque eu. Integer dui montes et nibh amet eget at nunc. Diam
          placerat convallis tincidunt curabitur vulputate elementum eu nibh
          tortor. Enim diam non dolor bibendum vitae eget consectetur. Ut massa
          quis tellus scelerisque. Nulla id suspendisse maecenas vitae.
          Malesuada sit vel consectetur non pretium fusce sed. Risus praesent
          fames lacinia imperdiet. Malesuada eros nulla scelerisque a ultricies
          amet. Vulputate leo pharetra massa arcu sapien mattis. Adipiscing
          habitant lacus dictumst ac quam turpis proin. Ultricies nibh aenean
          non arcu felis velit. Ullamcorper iaculis aliquet elit vitae sed
          aliquam pulvinar. Rhoncus ac duis faucibus molestie lectus consequat
          placerat ultricies. Tempus sit in vulputate at tristique sed suscipit
          urna.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
