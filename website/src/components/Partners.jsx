import styles from "../style.js";
import {rabobank, capitalC4U, club9, screen1, C4U } from "../assets";

const Partners = () => {
    const partnerImages = [rabobank, capitalC4U, club9, screen1, C4U];

    return (
        <section id={"partners"} className={`flex flex-col ${styles.paddingY} justify-center items-center bg-yellow-300`}>
            <h2 className="font-poppins font-bold text-[30px] sm:text-[40px] md:text-[50px] mb-8 text-black">Our partners</h2>

            <div className="flex flex-wrap justify-center items-center w-full p-4 space-y-4 sm:space-y-0 md:space-x-4">
                {partnerImages.map((image, index) => (
                    <img key={index} src={image} alt="Partner" className="w-[150px] sm:w-[200px] md:w-[250px] mb-4 sm:mb-0 mx-2"/>
                ))}
            </div>
        </section>
    )
}

export default Partners;
