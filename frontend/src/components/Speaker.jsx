import React from 'react'
import badge from '../assets/badge.png'

//css
import '../css/Speaker.css'

const Speaker=()=> {

    let obj=[];
    const speeakrs1=[{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge}]
    obj=speeakrs1.map((i)=>{
        return(
            <div className="card">
            <div className="card-inner">
               <img className="card-img" src={i.img} alt="Speaker" />
           </div>
           <p>{i.name}</p>
       </div>
        )
    });
    let obj2=[];
    const speeakrs2=[{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge},{name:"yashank",img:badge}]
    obj2=speeakrs2.map((i)=>{
        return(
            <div className="card">
            <div className="card-inner">
               <img className="card-img" src={i.img} alt="Speaker" />
           </div>
           <p>{i.name}</p>
       </div>
        )
    });

        return (
            <React.Fragment>
                <div className="row container-fluid my-5 mx-auto px-md-5">
                    <div className="col-12 col-md-10 p-md-0">
                        <div className="timeline">
                            <h1>Speakers at W.O.W</h1>
                            <p className="mt-3">
                                Meet the amazing speakers at our event. 
                                We have the best of speakers lined up for you. 
                                From Googlers to GDE's from Angular to React, 
                                DSC W.O.W will be covering all aspects

                                <br/><br/>
                            </p>
                            <div className="cardDiv">
                               {obj}
                            </div>
                            <div className="cardDiv">
                               {obj2}
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    
}

export default Speaker;
