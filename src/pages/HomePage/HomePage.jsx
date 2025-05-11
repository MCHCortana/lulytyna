import "./homePage.css"
import {Crawl} from "../../components/Crawl/Crawl.jsx";
import {Header} from "../../components/Header/Header.jsx";
export const HomePage = () => {
    return (
        <>
            <div className="first-half">
                <Header skipAnimation={false} />
                {/*<img className="img-top" src={testImg}/>*/}
            </div>
            <Crawl/>
        </>

    )
}