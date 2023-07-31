// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import react,  {useEffect, useRef, useState}from "react";
import { Link } from "react-router-dom";
import DescriptionPic from "../img/balai-desa-sumberpucung.jpg";
import VisiMisiPic from "../img/visi-misi.jpg";
import CardInformasi from "../components/Card/CardInformasi";
import CardUMKM from "../components/Card/CardUMKM";
import Footer from "../components/Footer/Footer";
import flowbite from "flowbite";
import axios from "axios"
import picSlider from "../img/kedung-gopit.jpg";
import picSlider2 from "../img/kedung-gopit-kolam.jpg";
const Landing = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([])
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);
  const panelsRef = useRef([]);

  useEffect(() => {
    // Set initial indicator position
    if (tabsRef.current.length > 0 && indicatorRef.current) {
      updateIndicator(0);
    }

    // Add event listeners to tabs
    tabsRef.current.forEach((tab, index) => {
      tab.addEventListener("click", () => handleTabClick(index));
    });

    // Hide all panels initially
    panelsRef.current.forEach((panel) => {
      panel.classList.add("invisible", "opacity-0");
    });
  }, []);

  const updateIndicator = (tabIndex) => {
    const tab = tabsRef.current[tabIndex];
    const indicator = indicatorRef.current;

    if (tab && indicator) {
      indicator.style.width = tab.getBoundingClientRect().width + "px";
      indicator.style.left =
        tab.getBoundingClientRect().left -
        tab.parentElement.getBoundingClientRect().left +
        "px";
    }
  };

  const handleTabClick = (tabIndex) => {
    updateIndicator(tabIndex);

    // Show the clicked panel and hide others
    panelsRef.current.forEach((panel, index) => {
      if (tabIndex === index) {
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        panel.classList.add("invisible", "opacity-0");
      }
    });
  };
  const fetchUserData = () => {
    fetch("http://103.150.93.67:8080/desa")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <>
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <p>{user.visi}</p>
          ))}
        </ul>
      )}
    </div>
      <Navbar />
      <div className="bg-LandingPic bg-cover bg-no-repeat h-[100vh]">
        <div className="bg-black bg-opacity-30 flex justify-center items-left flex-col pl-24 font-semibold text-white text-2xl h-screen">
          <h1 className="animate-text bg-gradient-to-r from-white via-primary-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Selamat Datang!
          </h1>
          <h1>Desa Sumberpucung, Sumberpucung Jawa Timur</h1>
        </div>
      </div>

      {/* tentang */}
      <div className="bg-Pattern">
        <div className="judul text-center py-8">
          <h1 className="text-4xl font-bold">Tentang</h1>
          <h2 className="text-2xl pt-2">Desa Sumberpucung</h2>
          {/* <hr className="rounded-lg border-2 my-4 bg-primary border-primary"/> */}
        </div>
        <div className="flex px-12 items-center flex-wrap flex-col md:flex-row justify-between">
          <p className="w-full md:w-1/2">
            {users.tentang_desa}
          </p>
          <img
            src={DescriptionPic}
            className="rounded border border-2 border-primary p-1 mt-6 w-full md:w-1/4"
            alt="..."
          />
        </div>
      </div>

      {/* visi */}
      <div className="flex justify-between bg-primary my-12 md:px-24 py-12 font-semibold flex-wrap flex-col md:flex-row">
        <div className="mr-0 md:mr-12 text-white text-center md:text-start">
          <h1 className="text-4xl">Visi dan Misi </h1>
          <h2 className="text-2xl">Desa Sumberpucung</h2>
          <div className="max-w-[70vh] md:px-8 sm:px-0 flex justify-start mt-6 ">
            <div>
              <div
                role="tablist"
                aria-label="tabs"
                className="relative w-full mx-auto h-12 grid grid-cols-2 items-center rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
              >
                <div
                  ref={indicatorRef}
                  className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"
                ></div>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-1"
                  id="tab-1"
                  tabIndex="0"
                  className="relative block h-10 tab rounded-full"
                  ref={(el) => (tabsRef.current[0] = el)}
                >
                  <span className="text-gray-800">Visi</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-2"
                  id="tab-2"
                  tabIndex="-1"
                  className="relative block h-10 px-6 tab rounded-full"
                  ref={(el) => (tabsRef.current[1] = el)}
                >
                  <span className="text-gray-800">Misi</span>
                </button>
              </div>
              
              <div className="relative rounded-3xl">
    
                <div
                  role="tabpanel"
                  id="panel-1"
                  className="tab-panel p-6 transition duration-300"
                  ref={(el) => (panelsRef.current[0] = el)}
                >
            
                  <p className="text-white">
                   {users.visi}
                  </p>
                </div>

                <div
                  role="tabpanel"
                  id="panel-2"
                  className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
                  ref={(el) => (panelsRef.current[1] = el)}
                >
                  <p className="text-white">
                    {users.misi}
                  </p>
                </div>
              </div>
            </div>
                
          </div> 
        </div>
        <div className="justify-center md:justify-end flex">
          <img
            src={VisiMisiPic}
            alt="Description"
            className="max-w-[60vh] max-h-[80vh]"
          />
        </div>
      </div>
      {/* informasi */}
      <div className="informasi">
        <div className="judul text-center py-12 ">
          <h1 className="text-4xl font-bold text-secondary">Informasi</h1>
          <h2 className="text-black text-lg md:text-xl pt-2 px-12">
            Dapatkan Informasi update seputar Desa Sumberpucung disini.
          </h2>
          <hr className="rounded-lg border-2 my-4 border-secondary mx-96"/>
        </div>
        <div className="flex justify-center mx-12 md:mx-24 flex-wrap text-center md:text-start items-center">
          <CardInformasi titleInformasi="Sejarah Desa Sumberpucung" descInformasi="Di suatu tempat ada sebuah sumber air yang letaknya mudah dijangkau. Persis di atas lokasi ..."/>
          <CardInformasi titleInformasi="Sejarah Desa Sumberpucung" descInformasi="Di suatu tempat ada sebuah sumber air yang letaknya mudah dijangkau. Persis di atas lokasi ..."/>
          <CardInformasi titleInformasi="Sejarah Desa Sumberpucung" descInformasi="Di suatu tempat ada sebuah sumber air yang letaknya mudah dijangkau. Persis di atas lokasi ..."/>
        </div>
        <Link
          to="/"
          className="flex justify-center my-12 bg-secondary text-white md:mx-auto rounded-lg py-2 md:w-1/4  font-medium mx-12"
        >
          Informasi Lainnya
        </Link>
      </div>

      {/* umkm */}
      <div className="umkm p-12 bg-primary text-white">
        <h1 className="text-4xl font-bold">UMKM</h1>
        <h2 className="text-2xl">Desa Sumberpucung</h2>
        <hr className="rounded-lg border-2 my-4 border-tertiary w-36"/>
        <div className="flex justify-center md:mx-24 flex-wrap my-6">
          <CardUMKM />
          <CardUMKM />
          <CardUMKM />
          <CardUMKM />
          <CardUMKM />
        </div>
        <Link
          to="/"
          className="flex justify-center my-4 bg-white text-black mx-auto rounded-lg py-2 md:w-1/4 font-medium"
        >
          UMKM Lainnya
        </Link>
      </div>

      {/* wisata */}
      <div className="umkm p-12">
        <h1 className="text-4xl font-bold">Wisata</h1>
        <h2 className="text-2xl">Desa Sumberpucung</h2>
        <hr className="rounded-lg border-2 my-4 bg-primary border-primary w-36"/>
        <div className="flex justify-center items-center">
          <div
            id="default-carousel"
            className="relative w-1/2 "
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out "
                data-carousel-item
              >
                <img
                  src={picSlider}
                  alt="missing img"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
                <h1 className="w-full bg-black">Waduk karangkates</h1>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={picSlider2}
                  alt="missing img"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={picSlider}
                  alt="missing img"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={picSlider2}
                  alt="missing img"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={picSlider}
                  alt="missing img"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <Link
          to="/"
          className="flex justify-center my-4 bg-secondary text-white mx-auto rounded-lg py-2 md:w-1/4 font-medium"
        >
          Wisata Lainnya
        </Link>
      </div> 
      <Footer />
    </>
  );
};

export default Landing;
