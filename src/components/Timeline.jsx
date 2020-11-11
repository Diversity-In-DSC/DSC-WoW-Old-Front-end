import React from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {  Row } from 'react-bootstrap';
import '../css/timeline.css';

import TimelineRow from './TimelineRow'
import TimeImage from '../assets/timeline.png'

const Timeline = () => {

    // Day 1 Data 

	const dayOneStartTimings = [
		"5:00 PM",
		"5:30 PM",
		"6:30 PM",
		"7:00 PM",
	];

	const dayOneEndTimings = [
		"- 5:30 PM",
		"- 6:30 PM",
		"- 7:00 PM",
		"- 8:00 PM",
	];

	const dayOneTitles = [
		"Keynote Speaker Session",
		"Technical - AI/ML",
		"Icebreakers",
		"Technical - AMA for AI/ML",
	];

	const dayOneChipIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayOneChipTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Day 2 Data 

	const dayTwoStartTimings = [
		"5:00 PM",
		"5:30 PM",
		"6:30 PM",
		"7:00 PM",
	];

	const dayTwoEndTimings = [
		"- 5:30 PM",
		"- 6:30 PM",
		"- 7:00 PM",
		"- 8:00 PM",
	];

	const dayTwoTitles = [
		"Keynote Speaker Session",
		"Technical - Blockchain",
		"Icebreakers",
		"Technical - AMA for Blockchain",
	];
	
	const dayTwoChipIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayTwoChipTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

// Day 3 Data 

const dayThreeStartTimings = [
	"5:00 PM",
	"5:30 PM",
	"6:30 PM",
	"7:00 PM",
];

const dayThreeEndTimings = [
	"- 5:30 PM",
	"- 6:30 PM",
	"- 7:00 PM",
	"- 8:00 PM",
];

	const dayThreeTitles = [
		"Keynote Speaker Session",
		"Technical - AR/VR",
		"Icebreakers",
		"Technical - AMA for AR/VR",
	];
	
	const dayThreeChipIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayThreeChipTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Day 4 Data 

	const dayFourStartTimings = [
		"5:00 PM",
		"5:30 PM",
		"6:30 PM",
		"7:00 PM",
	];

	const dayFourEndTimings = [
		"- 5:30 PM",
		"- 6:30 PM",
		"- 7:00 PM",
		"- 8:00 PM",
	];

	const dayFourTitles = [
		"Keynote Speaker Session",
		"Technical - Web/Android",
		"Icebreakers",
		"Technical - AMA for AI/ML",
	];
	
	const dayFourChipIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayFourChipTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Data end



	return (
		<div className="timeline-container">

		<Row md={7} className="justify-content-center p-md-0">
		<h1>Timeline</h1>
	</Row>

	<div className="row justify-content-center">
			<div className="col-10 col-md-5">
					<img src={TimeImage} alt="Timeline" className="img-fluid" />
			</div>
			<div className="col-md-5">
					<div className="timeline">                        
							<br/>
							<p>Interested in knowing more about our DSC WOW? <br/>
									See the flow of our events over here:
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
						startTime={dayOneStartTimings[0]}
						endTime={dayOneEndTimings[0]}
						title={dayOneTitles[0]}
						chipIcon={dayOneChipIcons[0]}
						chipText={dayOneChipTexts[0]}
					/>

					<TimelineRow 
						startTime={dayOneStartTimings[1]}
						endTime={dayOneEndTimings[1]}
						title={dayOneTitles[1]}
						chipIcon={dayOneChipIcons[1]}
						chipText={dayOneChipTexts[1]}
					/>

					<TimelineRow 
						startTime={dayOneStartTimings[2]}
						endTime={dayOneEndTimings[2]}
						title={dayOneTitles[2]}
						chipIcon={dayOneChipIcons[2]}
						chipText={dayOneChipTexts[2]}
					/>

					<TimelineRow 
						startTime={dayOneStartTimings[3]}
						endTime={dayOneEndTimings[3]}
						title={dayOneTitles[3]}
						chipIcon={dayOneChipIcons[3]}
						chipText={dayOneChipTexts[3]}
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
						startTime={dayTwoStartTimings[0]}
						endTime={dayTwoEndTimings[0]}
						title={dayTwoTitles[0]}
						chipIcon={dayTwoChipIcons[0]}
						chipText={dayTwoChipTexts[0]}
					/>

					<TimelineRow 
						startTime={dayTwoStartTimings[1]}
						endTime={dayTwoEndTimings[1]}
						title={dayTwoTitles[1]}
						chipIcon={dayTwoChipIcons[1]}
						chipText={dayTwoChipTexts[1]}
					/>

					<TimelineRow 
						startTime={dayTwoStartTimings[2]}
						endTime={dayTwoEndTimings[2]}
						title={dayTwoTitles[2]}
						chipIcon={dayTwoChipIcons[2]}
						chipText={dayTwoChipTexts[2]}
					/>

					<TimelineRow 
						startTime={dayTwoStartTimings[3]}
						endTime={dayTwoEndTimings[3]}
						title={dayTwoTitles[3]}
						chipIcon={dayTwoChipIcons[3]}
						chipText={dayTwoChipTexts[3]}
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
						startTime={dayThreeStartTimings[0]}
						endTime={dayThreeEndTimings[0]}
						title={dayThreeTitles[0]}
						chipIcon={dayThreeChipIcons[0]}
						chipText={dayThreeChipTexts[0]}
					/>

					<TimelineRow 
						startTime={dayThreeStartTimings[1]}
						endTime={dayThreeEndTimings[1]}
						title={dayThreeTitles[1]}
						chipIcon={dayThreeChipIcons[1]}
						chipText={dayThreeChipTexts[1]}
					/>

					<TimelineRow 
						startTime={dayThreeStartTimings[2]}
						endTime={dayThreeEndTimings[2]}
						title={dayThreeTitles[2]}
						chipIcon={dayThreeChipIcons[2]}
						chipText={dayThreeChipTexts[2]}
					/>

					<TimelineRow 
						startTime={dayThreeStartTimings[3]}
						endTime={dayThreeEndTimings[3]}
						title={dayThreeTitles[3]}
						chipIcon={dayThreeChipIcons[3]}
						chipText={dayThreeChipTexts[3]}
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
						startTime={dayFourStartTimings[0]}
						endTime={dayFourEndTimings[0]}
						title={dayFourTitles[0]}
						chipIcon={dayFourChipIcons[0]}
						chipText={dayFourChipTexts[0]}
					/>

					<TimelineRow 
						startTime={dayFourStartTimings[1]}
						endTime={dayFourEndTimings[1]}
						title={dayFourTitles[1]}
						chipIcon={dayFourChipIcons[1]}
						chipText={dayFourChipTexts[1]}
					/>

					<TimelineRow 
						startTime={dayFourStartTimings[2]}
						endTime={dayFourEndTimings[2]}
						title={dayFourTitles[2]}
						chipIcon={dayFourChipIcons[2]}
						chipText={dayFourChipTexts[2]}
					/>

					<TimelineRow 
						startTime={dayFourStartTimings[3]}
						endTime={dayFourEndTimings[3]}
						title={dayFourTitles[3]}
						chipIcon={dayFourChipIcons[3]}
						chipText={dayFourChipTexts[3]}
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
