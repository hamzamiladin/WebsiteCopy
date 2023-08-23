import styles from "../style.js";
import {
    donations, hosted, refugees, pets, hospital, aid, ambulance, light, angel
} from "../assets";

const Foundation = () => {
    const data = [
        { image: donations, number: "€ 1 MLN+", description: "In donations." },
        { image: hosted, number: "1.040", description: "Refugees hosted in NL." },
        { image: refugees, number: "6.778", description: "Refugees registered in our system." },
        { image: pets, number: "80", description: "Pets successfully matched with Dutch hosts." },
        { image: hospital, number: "84", description: "Severely ill & wounded patients treated in NL." },
        { image: aid, number: "9.545", description: "Boxes of humanitarian aid sent to Ukraine." },
        { image: ambulance, number: "11", description: "Ambulances sent to Ukraine." },
        { image: light, number: "73", description: "Power generators sent to Ukraine." },
        { image: angel, number: "102", description: "Guardian Angels for our patients in NL." }
    ];

    return (
        <section id={"foundation"} className={`flex flex-wrap md:flex-row flex-col ${styles.paddingY} justify-center items-center`}>
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full md:w-1/3 p-4">
                    <img src={item.image} alt="" className="w-[150px] h-auto mb-4"/>
                    <p className="text-center font-poppins font-bold text-primary text-[44px] mb-2">{item.number}</p>
                    <p className="text-center font-poppins text-[12px] text-primary">{item.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Foundation;
