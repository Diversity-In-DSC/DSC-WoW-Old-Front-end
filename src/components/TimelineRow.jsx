import React from 'react'
import 'react-tabs/style/react-tabs.css';
import {  Tabs, } from 'react-tabs';
import {  Row } from 'react-bootstrap';



const TimelineEvent = ({startTime,endTime,title,chipIcon,chipText}) => {


	return (
		<div>
			<Tabs>

				<Row>
					<div className="col-3 col-lg-6 text-center">
						<span className="time">
							{startTime}
						</span>
					</div>

					<div className="col-9 col-lg-6 text-left">
						<span className="title">
							{title}
						</span>
					</div>
				</Row>
				
				<div className="chipContainer justify-content-center">
						<Row>
							<div className="col-3 col-lg-6">
								{endTime}
							</div>

							<div className="col-9 col-lg-6">
								<Row className=" justify-content-left">
									<button className="chip">
										<img 
											className="buttonImg" 
											src={chipIcon} 
											alt="icon"
										>
										</img>
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

export default TimelineEvent
