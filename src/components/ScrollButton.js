import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <button
                className="btn dark scrollBtn"
                style={{ display: visible ? "inline" : "none" }}
                onClick={scrollToTop}
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
};

export default ScrollButton;
