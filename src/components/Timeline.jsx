import React from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {  Row } from 'react-bootstrap';
import '../css/timeline.css';
import TimelineRow from './TimelineRow'
// import TimeImage from '../assets/timeline.png'

const Timeline = () => {

	return (
		<div className="timeline-container">

		<Row md={7} className="justify-content-center p-md-0">
		<h1>Timeline</h1>
	</Row>

	<div className="row mb-5 justify-content-center mx-auto">
		<div className="col-12">
			<div className="timeline text-center">                        
				<p style={{fontSize: "20px"}}>
					Interested in knowing more about our DSC WOW? See the flow of our events over here:
				</p>
			</div>			
		</div>
	</div>

		<div className="schedule-container text-center ">
		<Tabs>
		<TabList style={{color: "white"}}>
					<Tab 
						style={{background: "#FE4F5A", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
						 fontSize: "20px",}}
						>
					1. AI/ML
					</Tab>
								
					<Tab 
						style={{background: "#FFBD00", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
								fontSize: "20px",}}
						>
					2. Blockchain
					</Tab>
								
					<Tab 
						style={{background: "#546DDD", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
								fontSize: "20px",}}
					>
					3. AR/VR
					</Tab>
							
					<Tab 
						style={{background: "#00A452", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
								fontSize: "20px",}}
					>
					4. Web/Android
					</Tab>
		</TabList>

		
		{/* --------------- DAY ONE SCHEDULE ----------------- */}

		<TabPanel>
			<div className="tab-panel">
				<div className="event-day-title">
					<h2 style={{backgroundColor: "#FE4F5A",color: "white", fontWeight: "bold",}}>Day 1: AI/ML, December 7th 2020</h2>
				</div>
				
				<div className="event-rows" style={{borderColor: "#FE4F5A"}}>
					<TimelineRow 
						startTime="5:00 PM"
						endTime="- 5:30 PM"
						title="Keynote Speaker Session"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 1"
					/>

					<TimelineRow 
						startTime="5:30 PM"
						endTime="- 6:30 PM"
						title="Technical - AI/ML"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 2"
					/>

					<TimelineRow 
						startTime="6:30 PM"
						endTime="- 7:00 PM"
						title="Icebreakers"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 3"
					/>
			
					<TimelineRow 
						startTime="7:00 PM"
						endTime="- 8:00 PM"
						title="Technical - AMA for AI/ML"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 4"
					/>
				</div>

				
				
			</div>
		</TabPanel>

			{/* --------------- DAY TWO SCHEDULE ----------------- */}

		<TabPanel>
			<div className="tab-panel">

			<div className="event-day-title">
				<h2 style={{backgroundColor: "#FFBD00",color: "white", fontWeight: "bold",}}>Day 2: Blockchain, December 8th 2020</h2>
			</div>
				
				<div className="event-rows" style={{borderColor: "#FFBD00"}}>
				
					<TimelineRow 
						startTime="5:00 PM"
						endTime="- 5:30 PM"
						title="Keynote Speaker Session"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 1"
					/>

					<TimelineRow 
						startTime="5:30 PM"
						endTime="- 6:30 PM"
						title="Technical - Blockchain"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 2"
					/>

					<TimelineRow 
						startTime="6:30 PM"
						endTime="- 7:00 PM"
						title="Icebreakers"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 3"
					/>
			
					<TimelineRow 
						startTime="7:00 PM"
						endTime="- 8:00 PM"
						title="Technical - AMA for Blockchain"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 4"
					/>
				
				</div>
				
			</div>
		</TabPanel>


			{/* --------------- DAY THREE SCHEDULE ----------------- */}

		
			<TabPanel>
			<div className="tab-panel">
				<div className="event-day-title">
					<h2 style={{backgroundColor: "#546DDD",color: "white", fontWeight: "bold",}}>Day 3: AR/VR, December 9th 2020</h2>
				</div>
				
				<div className="event-rows" style={{borderColor: "#546DDD"}}>
					<TimelineRow 
						startTime="5:00 PM"
						endTime="- 5:30 PM"
						title="Keynote Speaker Session"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 1"
					/>

					<TimelineRow 
						startTime="5:30 PM"
						endTime="- 6:30 PM"
						title="Technical - AR/VR"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 2"
					/>

					<TimelineRow 
						startTime="6:30 PM"
						endTime="- 7:00 PM"
						title="Icebreakers"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 3"
					/>
			
					<TimelineRow 
						startTime="7:00 PM"
						endTime="- 8:00 PM"
						title="Technical - AMA for AR/VR"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 4"
					/>

				</div>

				
			</div>
		</TabPanel>


			{/* --------------- DAY FOUR SCHEDULE ----------------- */}



			<TabPanel>
			<div className="tab-panel">
				<div className="event-day-title">
					<h2 style={{backgroundColor: "#00A452",color: "white", fontWeight: "bold",}}>Day 4: Web/Android, December 10th 2020</h2>
				</div>
				
				<div className="event-rows" style={{borderColor: "#00A452"}}>
					<TimelineRow 
						startTime="5:00 PM"
						endTime="- 5:30 PM"
						title="Keynote Speaker Session"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 1"
					/>

					<TimelineRow 
						startTime="5:30 PM"
						endTime="- 6:30 PM"
						title="Technical - Web/Android"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 2"
					/>

					<TimelineRow 
						startTime="6:30 PM"
						endTime="- 7:00 PM"
						title="Icebreakers"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 3"
					/>
			
					<TimelineRow 
						startTime="7:00 PM"
						endTime="- 8:00 PM"
						title="Technical - AMA for Web/Android"
						chipIcon="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						chipText="Speaker 4"
					/>
				</div>
				
			</div>
		</TabPanel>
	</Tabs>
	</div>
		</div>
	)
}

export default Timeline;
