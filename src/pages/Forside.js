import yorkie from "../images/vivi.jpg";

export default function Forside() {
    return (
        <main>
            <div className="forsidebillede">
                <img src={yorkie} alt="yorkshire terrier" className="herobillede"/>
                <h1 className="herotekst">Fido&Fidoline</h1>
            </div>

            <div className="servicekort">
                <div> Klipning </div>
                <div> Bad </div>
                <div> etc. </div>
            </div>
        </main>
    
    )
}