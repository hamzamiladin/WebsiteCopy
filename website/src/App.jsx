import styles from "./style.js";

import { Navbar, Foundation, Hero, Media, Donation, Footer, Partners} from "./components";
const App = () => {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${styles.paddingX} ${styles.flexVCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Foundation />
                    <Donation />
                    <Media />
                    <Partners />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;