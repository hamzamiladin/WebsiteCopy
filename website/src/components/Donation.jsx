import styles from "../style.js";
import {donate, donateGoods} from "../assets";

const Donation = () => {
    return (
        <section id={"donation"} className={`flex flex-col ${styles.paddingY} justify-center items-center bg-yellow-300`}>
            <div className="flex flex-col items-center w-full p-4 text-center mb-8">
                <h2 className="font-poppins font-bold text-[30px] sm:text-[40px] md:text-[50px] mb-4 text-white">Our focus.</h2>
                <ul className="list-disc list-inside space-y-4 sm:space-y-6 text-white pl-4 sm:pl-8 md:pl-[150px]">
                    <li className="font-poppins text-[18px] sm:text-[20px] md:text-[22px]">Delivering humanitarian, medical and defensive aid to Ukraine</li>
                    <li className="font-poppins text-[18px] sm:text-[20px] md:text-[22px]">Helping Ukrainian patients to receive medical treatment in The Netherlands</li>
                    <li className="font-poppins text-[18px] sm:text-[20px] md:text-[22px]">Arranging accommodation and providing humanitarian support for Ukrainian refugees arriving in The Netherlands - mission completed; ±1000 Ukrainian guests are accommodated and received support.</li>
                </ul>
            </div>

            <div className="flex flex-wrap justify-center items-center w-full p-4 space-y-4 sm:space-y-0 md:space-x-4 pt-8">
                <img src={donate} alt="Donate" className="w-[200px] sm:w-[250px] md:w-[350px] mb-4 sm:mb-0"/>
                <img src={donateGoods} alt="Donate Goods" className="w-[200px] sm:w-[250px] md:w-[350px]"/>
            </div>
        </section>
    )
}

export default Donation;
