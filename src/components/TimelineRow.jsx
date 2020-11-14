import React from 'react'
import 'react-tabs/style/react-tabs.css';
import {  Row, } from 'react-bootstrap';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';


const TimelineRow = ({startTime,endTime,title,chipIcon,chipText,speaker}) => {

	return (
		<div>
			<div className="title">
				{title} 
			</div>
			<div className="subtitle">
				{startTime} {endTime} | {speaker}
			</div>
			<Row>
				<div className="chip">
					<HeadsetMicIcon className="chipIcon"/>
					<span className="chipText">{chipText}</span>
				</div>
			</Row>
			<hr/>
		</div>
	)


{/**
	return (
		<div>
			<Row>
				<div className="col-4 col-md-3 text-center" style={{fontSize: "20px"}} >
						{startTime}
				</div>

				<div className="col-8 text-left">
					<span className="title" style={{fontSize: "20px"}}>
						{title}
					</span>
				</div>
			</Row>
		
		<div className="chipContainer justify-content-center">
				<Row style={{padding: "0 0 0px 0"}}>
					<div className="col-4 col-md-3 text-center " style={{fontSize: "18px"}} >
						{endTime}
					</div>

					<div className="col-8">
						<Row className=" justify-content-left">
							<button className="chip">
								<span className="buttonText">{chipText}</span>
							</button>		
						</Row>
					</div>
										
				</Row>
			</div>

		<hr />			
	

		</div>
	)
 */}
}

export default TimelineRow;
