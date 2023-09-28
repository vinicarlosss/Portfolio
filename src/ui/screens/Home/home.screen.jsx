import "./home.style.css"
import { Header, Footer, Presentation } from "../../index"

export function Home(){
    return(
        <main className="home__main">
            <Header/>
            <Presentation/>
            <Footer/>
        </main>
    )
}