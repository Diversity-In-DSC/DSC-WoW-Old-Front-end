import React from 'react'
import 'react-tabs/style/react-tabs.css';
import {  Tabs, } from 'react-tabs';
import {  Row, } from 'react-bootstrap';



const ScheduleRow = ({startTime,endTime,title,chipIcon,chipText}) => {


	return (
		<div>

		<Tabs>
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
	</Tabs>

		</div>
	)
}

export default ScheduleRow
