import React from 'react'
import TimeImage from '../assets/timeline.png'
import '../css/timeline.css'

function Timeline() {
    return (
        <div className="faq_sec my-5">
            <div className="row">
                <div className="col-12 col-md-5 my-3">
                    <img src={TimeImage} alt="Timeline" className="img-fluid" style={{width: "80%"}} />
                </div>
                <div className="col-md-7">
                    <div className="timeline">
                        <h1 className='font-italic'>Timeline</h1>
                        <br/>
                        <p>Interested in knowing more about our DSC WOW. <br/>
                            See the flow of our events over here.
                        </p>
                    </div>
                    
                </div>
            </div>

            {/* ------- Timeline cards -------- */}
            <div className='container-fluid tl-cards col-md mt-4'>
                <div className='row justify-content-center'>

                    {/* ------- Day 1 card -------- */}
                    <div className="card mr-5 mb-5">
                        <h5 className="card-header text-center text-white" style={{background: "#FE4F5A"}}>
                            Day 1
                        </h5>
                        <div className="card-body">
                            <h5 className="card-title text-center">Android Day</h5>
                            <p className="card-text">
                                Learn about Android App Development from the best of the speakers in the industry!
                            </p>
                            <a href="#" class="btn btn-primary" style={{background: "#FE4F5A"}}>
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* ------- Day 2 card -------- */}
                    <div className="card mr-5 mb-5">
                        <h5 className="card-header text-center text-white" style={{background: "#FFBD00"}}>
                            Day 2
                        </h5>
                        <div className="card-body">
                            <h5 className="card-title text-center">Cloud Day</h5>
                            <p className="card-text">
                                Learn about Google Cloud Platform from the best of the speakers in the industry!
                            </p>
                            <a href="#" class="btn btn-primary" style={{background: "#FFBD00"}}>
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* ------- Day 3 card -------- */}
                    <div className="card mr-5 mb-5">
                        <h5 className="card-header text-center text-white" style={{background: "#546DDD"}}>
                            Day 3
                        </h5>
                        <div className="card-body">
                            <h5 className="card-title text-center">AI/ML Day</h5>
                            <p className="card-text">
                                Learn about AI and ML from the best of the speakers in the industry!                                        
                            </p>
                            <a href="#" class="btn btn-primary" style={{background: "#546DDD"}}>
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* ------- Day 4 card -------- */}
                    <div className="card mr-5 mb-5">
                        <h5 className="card-header text-center text-white" style={{background: "#00A452"}}>
                                    Day 4
                        </h5>
                        <div className="card-body">
                            <h5 className="card-title text-center">Web Day</h5>
                            <p className="card-text">
                                Learn about Web Development from the best of the speakers in the industry! 
                            </p>
                            <a href="#" class="btn btn-primary" style={{background: "#00A452"}}>
                                Know More
                            </a>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Timeline
