import "./Contact.css";
import Argentina from "../assets/Contact/argentinaIcon.png";
import Brasil from "../assets/Contact/brasilIcon.png";
import Uruguay from "../assets/Contact/uruguayIcon.png";
import EEUU from "../assets/Contact/eeuuIcon.png";
import China from "../assets/Contact/chinaIcon.png";

const Contact = () => {
    return (
        <div className="contact" id="contact"> 
            <div className="container py-5">
                <h3 className="text-center mb-4 title">MAXTECH en el mundo</h3>
                <div className="row gx-3"> 
                    <div className="col-md-4 mb-4">
                        <div className="card-contact h-100 text-center">
                            <img src={Argentina} className="card-img-top image" alt="Argentina" />
                            <div className="card-body">
                                <h5 className="title">Argentina</h5>
                                <p className="card-text text-justify">
                                    Email: maxtechargentina@gmail.com
                                </p>
                                <p className="card-text text-justify">
                                    Teléfono: +5491164734500
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card-contact h-100 text-center">
                            <img src={Brasil} className="card-img-top image" alt="Brasil" />
                            <div className="card-body">
                                <h5 className="title">Brasil</h5>
                                <p className="card-text text-justify">
                                    Email: maxtechlatam@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card-contact h-100 text-center">
                            <img src={Uruguay} className="card-img-top image" alt="Uruguay" />
                            <div className="card-body">
                                <h5 className="title">Uruguay</h5>
                                <p className="card-text text-justify">
                                    Email: maxtechlatam@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card-contact h-100 text-center">
                            <img src={EEUU} className="card-img-top image" alt="Estados Unidos" />
                            <div className="card-body">
                                <h5 className="title">Estados Unidos</h5>
                                <p className="card-text text-justify">
                                    Email: maxtechusa@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card-contact h-100 text-center">
                            <img src={China} className="card-img-top image" alt="China" />
                            <div className="card-body">
                                <h5 className="title">China</h5>
                                <p className="card-text text-justify">
                                    Email: maxtechcn@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
