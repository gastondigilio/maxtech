import "./Contact.css";
import Argentina from "../assets/Contact/argentinaIcon.png";
import Uruguay from "../assets/Contact/uruguayIcon.png";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container py-5">
                <div className="card-contact text-center">
                    <img src={Argentina} className="card-img-top imageContact" alt="Argentina" />
                    <div className="card-body">
                        <h5 className="title">Argentina</h5>
                    </div>
                </div>
                <div className="card-contact text-center">
                    <img src={Uruguay} className="card-img-top imageContact" alt="Uruguay" />
                    <div className="card-body">
                        <h5 className="title">Uruguay</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

