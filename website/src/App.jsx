import styles from "./style.js";

import { Navbar, Foundation, Hero, Media, Donation, Footer, Partners} from "./components";
const App = () => {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`pl-10 ${styles.flexBetween}`}>
                <div className={`xl:max-w-[1700px] w-full`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-yellow ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Foundation />
                </div>
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Partners />
                </div>
            </div>
        </div>
    );
}

export default App;