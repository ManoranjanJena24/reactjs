import React, { useState } from 'react';

export default function About() {
    const [activeCollapse, setActiveCollapse] = useState(1);

    const handleCollapseToggle = (collapseId) => {
        setActiveCollapse(collapseId === activeCollapse ? null : collapseId);
    };
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black',
    //     borderColor: 'white'

    // }
    const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black',
            borderColor: 'white',
            border: '1px solid'

        }


    )

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'black'
            }
            )
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: 'black',
                    borderColor: 'white'
                }

            )
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-2'>About Us</h1>
            <div id="accordion" >
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                onClick={() => handleCollapseToggle(1)}
                                aria-expanded={activeCollapse === 1}
                                style={myStyle}
                            >
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div
                        id="collapseOne"
                        className={`collapse ${activeCollapse === 1 ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                    >
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                            haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                onClick={() => handleCollapseToggle(2)}
                                aria-expanded={activeCollapse === 2}
                                style={myStyle}
                            >
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className={`collapse ${activeCollapse === 2 ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                    >
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                            haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                onClick={() => handleCollapseToggle(3)}
                                aria-expanded={activeCollapse === 3}
                                style={myStyle}
                            >
                                Collapsible Group Item #3
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className={`collapse ${activeCollapse === 3 ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                            haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3"></div>
            <button type='button' onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div>
    );
}
