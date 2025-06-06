import "./overlay.css";
import {Link} from "react-router-dom";

export const OverlayGuidepost = () => {
    return (
        <>
            <section className="top-layer-overlay_guidepost">
                <Link to={"/kdy"}>
                    <h2 className="guide-heading starwas">
                        KDY?
                    </h2>
                </Link>
                <Link to="/kde">
                    <h2 className="guide-heading starwas">
                        KDE?
                    </h2>
                </Link>
                <Link to="/info">
                    <h2 className="guide-heading starwas">
                        info
                    </h2>
                </Link>
                <Link to="/rsvp">
                    <h2 className="guide-heading starwas">
                        rsvp
                    </h2>
                </Link>
            </section>
        </>
    )
}