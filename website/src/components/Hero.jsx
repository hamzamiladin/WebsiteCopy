import styles from "../style.js";
import {donate, donateGoods, offerhelp, facebook2, instagram2, linkedin2, whatsapp, telegram, screen3, screen4, screen5} from "../assets";
import {Tweet} from "react-twitter-widgets";

const Hero = () => (
    <section id={"home"} className={`flex md:flex-row flex-col ${styles.paddingY} justify-center items-center`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div
                className="flex justify-center flex-row items-center py-[50px] bg-primary rounded-[10px] mb-16 pl-[75px] sm:pl-[300px]">
                <h1 className="text-[35px] sm:text-[45px] md:text-[70px] font-bold font-poppins text-white">Helping Ukrainians.</h1>
            </div>
            <div
                className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
                <img src={donate} alt="Donate" className="w-[250px] sm:w-[350px]"/>
                <img src={donateGoods} alt="Donate Goods" className="w-[250px] sm:w-[350px]"/>
                <img src={offerhelp} alt="Offer Help" className="w-[250px] sm:w-[350px]"/>
            </div>
            <div className=" flex justify-center items-center w-full text-center mt-[70px]">
                <h2 className="text-[14px] font-bold font-poppins text-white">JOIN US</h2>
            </div>
            <div
                className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-20 mt-4">
                <img src={facebook2} alt="Facebook" className="w-[150px] sm:w-[250px]"/>
                <img src={instagram2} alt="Instagram" className="w-[150px] sm:w-[250px]"/>
                <img src={linkedin2} alt="LinkedIn" className="w-[150px] sm:w-[250px]"/>
            </div>
            <div
                className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-32 mt-11">
                <div className="flex flex-col justify-center items-center">
                    <img src={telegram} alt="Telegram" className="w-[70px] sm:w-[120px]"/>
                    <p className="text-[14px] font-bold font-poppins text-white mt-6">Telegram</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={whatsapp} alt="WhatsApp" className="w-[70px] sm:w-[120px]"/>
                    <p className="text-[14px] font-bold font-poppins text-white mt-6">WhatsApp</p>
                </div>


            </div>

            <div
                className="flex flex-col-reverse md:flex-row items-start w-full mt-32 space-y-2 md:space-y-0 md:space-x-32">
                <div className="video-container flex-auto md:order-1 sm:order-1 order-2 md:pr-28 scale-150">
                    <iframe src="https://player.vimeo.com/video/801742389" width="100%" height="600" frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div
                    className="description-container flex-1 flex-wrap flex flex-col space-y-4 md:order-1 sm:order-1 order-2 pt-20 items-center sm:items-start flex-shrink-0">
                    <h2 className="text-white font-poppins font-bold text-[25px] sm:text-[35px] md:text-[50px] mb-4 break-words">The state of our foundation</h2>
                    <p className="text-white font-poppins text-[14px] sm:text-[16px] md:text-[20px] mb-4 break-words">25 February 2023</p>
                    <p className="text-white font-poppins mb-4 text-[12px] sm:text-[14px] md:text-[20px] break-words scale-75 sm:scale-100">
                        We wanted to let you know how we‘ve spent the donations for Ukraine so far and thank
                        all of you again for your invaluable support! A year has passed since the beginning of the war in Ukraine, and
                        almost one year of existence of our Netherlands for Ukraine Foundation. Please find the results of some of our activities in this video, kindly donated to us by Maarten Films:
                    </p>
                    <a href="#" className="text-blue-400 font-poppins underline">READ MORE IN THE FULL UPDATE</a>
                </div>
            </div>

            <div className="flex flex-wrap flex-col-reverse md:flex-row w-full mt-40 space-y-8 md:space-y-0 md:space-x-32">
                <div className="flex-1 flex flex-col items-start space-y-16">
                    <img src={screen3} alt="Screen3 Image" className="w-full md:w-[100%] scale-125 "/>
                    <div className="flex items-center flex-col space-y-4 pl-0 md:pl-[170px]">
                        <h2 className="text-white font-poppins font-bold text-[25px] sm:text-[50px] mb-4">Our foundation
                            on Nieuwsuur</h2>
                        <p className="text-white font-poppins text-[14px] sm:text-[22px] mb-4">14 February 2023 (Dutch
                            TV)</p>
                        <div className="scale-75 sm:scale-100">
                            <p className="text-white font-poppins mb-4 text-[14px] sm:text-[20px]">
                                ‘Ukraine is unable to treat all its patients due to overloaded and/or destroyed hospitals.
                                Other European countries receive some of these soldiers and other patients. Also the
                                Netherlands.’
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex-1 flex justify-center items-start pt-20 scale-75 sm:scale-100">
                    <div style={{maxWidth: '500px', width: '100%'}}>
                        <Tweet tweetId="1625606692183351299"/>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap w-full mt-32 space-y-8 md:space-y-0 md:space-x-24">
                <div className="flex-1 w-full md:w-1/2 p-4">
                    <img src={screen4} alt="Screen4 Image" className="w-full h-auto object-cover rounded-md shadow-lg"/>
                </div>

                <div className="flex-1 w-full md:w-1/2 p-4">
                    <img src={screen5} alt="Screen5 Image" className="w-full h-auto object-cover rounded-md shadow-lg"/>
                </div>
            </div>

        </div>
    </section>
)

export default Hero;
