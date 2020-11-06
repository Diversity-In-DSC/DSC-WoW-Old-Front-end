import React from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {  Row } from 'react-bootstrap';
import '../css/timeline.css';

import TimelineRow from './TimelineRow'
import TimeImage from '../assets/timeline.png'

const Timeline = () => {

    // Day 1 Data 

	const dayOneTimings = [
		"5:00 PM - 5:30 PM",
		"5:30 PM - 6:30 PM",
		"6:30 PM - 7:00 PM",
		"7:00 PM - 8:00 PM",
	];

	const dayOneTitles = [
		"Keynote Speaker Session",
		"Technical - AI/ML",
		"Icebreakers",
		"Technical - AMA for AI/ML",
	];

	const dayOneChipOneIcons = [
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
	]

	const dayOneChipOneTexts = [
		"Keynote ",
		"Technical",
		"Icebreaker",
		"Ask Me Anything",
	]
	
	const dayOneChipTwoIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayOneChipTwoTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Day 2 Data 

	const dayTwoTimings = [
		"5:00 PM - 5:30 PM",
		"5:30 PM - 6:30 PM",
		"6:30 PM - 7:00 PM",
		"7:00 PM - 8:00 PM",
	];

	const dayTwoTitles = [
		"Keynote Speaker Session",
		"Technical - Blockchain",
		"Icebreakers",
		"Technical - AMA for Blockchain",
	];

	const dayTwoChipOneIcons = [
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
	]

	const dayTwoChipOneTexts = [
		"Keynote ",
		"Technical",
		"Icebreaker",
		"Ask Me Anything",
	]
	
	const dayTwoChipTwoIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayTwoChipTwoTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

// Day 3 Data 

	const dayThreeTimings = [
		"5:00 PM - 5:30 PM",
		"5:30 PM - 6:30 PM",
		"6:30 PM - 7:00 PM",
		"7:00 PM - 8:00 PM",
	];

	const dayThreeTitles = [
		"Keynote Speaker Session",
		"Technical - AR/VR",
		"Icebreakers",
		"Technical - AMA for AR/VR",
	];

	const dayThreeChipOneIcons = [
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
	]

	const dayThreeChipOneTexts = [
		"Keynote ",
		"Technical",
		"Icebreaker",
		"Ask Me Anything",
	]
	
	const dayThreeChipTwoIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayThreeChipTwoTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Day 4 Data 

	const dayFourTimings = [
		"5:00 PM - 5:30 PM",
		"5:30 PM - 6:30 PM",
		"6:30 PM - 7:00 PM",
		"7:00 PM - 8:00 PM",
	];

	const dayFourTitles = [
		"Keynote Speaker Session",
		"Technical - Web/Android",
		"Icebreakers",
		"Technical - AMA for AI/ML",
	];

	const dayFourChipOneIcons = [
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
		"https://cdn.iconscout.com/icon/free/png-512/tesla-14-892143.png",
	]

	const dayFourChipOneTexts = [
		"Keynote ",
		"Technical",
		"Icebreaker",
		"Ask Me Anything",
	]
	
	const dayFourChipTwoIcons = [
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
		"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
	]

	const dayFourChipTwoTexts = [
		"Speaker 1",
		"Speaker 2",
		"Speaker 3",
		"Speaker 4",
	]

	// Data end


	return (
		<div className="timeline">

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


		<Tabs>
		<TabList style={{color: "white"}}>
            <Tab style={{background: "#FE4F5A", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
             fontSize: "20px",}}>
			1. AI/ML
			</Tab>
            <Tab style={{background: "#FFBD00", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
             fontSize: "20px",}}>
			2. Blockchain
			</Tab>
            <Tab style={{background: "#546DDD", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
             fontSize: "20px",}}>
			3. AR/VR
			</Tab>
            <Tab style={{background: "#00A452", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", margin: "0 2px 0 2px",
             fontSize: "20px",}}>
			4. Web/Android
			</Tab>
		</TabList>

		
		{/* --------------- DAY ONE SCHEDULE ----------------- */}

		<TabPanel>
			<div className="tab-panel">
				<h2 style={{color: "#FE4F5A", fontWeight: "bold",}}>Day 1: AI/ML, December 7th 2020</h2>
				<hr />
				
				<TimelineRow 
					time={dayOneTimings[0]}
					title={dayOneTitles[0]}
					chipOneIcon={dayOneChipOneIcons[0]}
					chipOneText={dayOneChipOneTexts[0]}
					chipTwoIcon={dayOneChipTwoIcons[0]}
					chipTwoText={dayOneChipTwoTexts[0]}
				/>

				<TimelineRow 
					time={dayOneTimings[1]}
					title={dayOneTitles[1]}
					chipOneIcon={dayOneChipOneIcons[1]}
					chipOneText={dayOneChipOneTexts[1]}
					chipTwoIcon={dayOneChipTwoIcons[1]}
					chipTwoText={dayOneChipTwoTexts[1]}
				/>

				<TimelineRow 
					time={dayOneTimings[2]}
					title={dayOneTitles[2]}
					chipOneIcon={dayOneChipOneIcons[2]}
					chipOneText={dayOneChipOneTexts[2]}
					chipTwoIcon={dayOneChipTwoIcons[2]}
					chipTwoText={dayOneChipTwoTexts[2]}
				/>

				<TimelineRow 
					time={dayOneTimings[3]}
					title={dayOneTitles[3]}
					chipOneIcon={dayOneChipOneIcons[3]}
					chipOneText={dayOneChipOneTexts[3]}
					chipTwoIcon={dayOneChipTwoIcons[3]}
					chipTwoText={dayOneChipTwoTexts[3]}
				/>

				
				
			</div>
		</TabPanel>

			{/* --------------- DAY TWO SCHEDULE ----------------- */}

		<TabPanel>
			<div className="tab-panel">
				<h2 style={{color: "#FFBD00", fontWeight: "bold",}}>Day 2: Blockchain, December 8th 2020</h2>
				<hr />
				
				<TimelineRow 
					time={dayTwoTimings[0]}
					title={dayTwoTitles[0]}
					chipOneIcon={dayTwoChipOneIcons[0]}
					chipOneText={dayTwoChipOneTexts[0]}
					chipTwoIcon={dayTwoChipTwoIcons[0]}
					chipTwoText={dayTwoChipTwoTexts[0]}
				/>

				<TimelineRow 
					time={dayTwoTimings[1]}
					title={dayTwoTitles[1]}
					chipOneIcon={dayTwoChipOneIcons[1]}
					chipOneText={dayTwoChipOneTexts[1]}
					chipTwoIcon={dayTwoChipTwoIcons[1]}
					chipTwoText={dayTwoChipTwoTexts[1]}
				/>

				<TimelineRow 
					time={dayTwoTimings[2]}
					title={dayTwoTitles[2]}
					chipOneIcon={dayTwoChipOneIcons[2]}
					chipOneText={dayTwoChipOneTexts[2]}
					chipTwoIcon={dayTwoChipTwoIcons[2]}
					chipTwoText={dayTwoChipTwoTexts[2]}
				/>

				<TimelineRow 
					time={dayTwoTimings[3]}
					title={dayTwoTitles[3]}
					chipOneIcon={dayTwoChipOneIcons[3]}
					chipOneText={dayTwoChipOneTexts[3]}
					chipTwoIcon={dayTwoChipTwoIcons[3]}
					chipTwoText={dayTwoChipTwoTexts[3]}
				/>

				
			</div>
		</TabPanel>


			{/* --------------- DAY THREE SCHEDULE ----------------- */}

		
			<TabPanel>
			<div className="tab-panel">
				<h2 style={{color: "#546DDD", fontWeight: "bold",}}>Day 3: AR/VR, December 9th 2020</h2>
				<hr />
				
				<TimelineRow 
					time={dayThreeTimings[0]}
					title={dayThreeTitles[0]}
					chipOneIcon={dayThreeChipOneIcons[0]}
					chipOneText={dayThreeChipOneTexts[0]}
					chipTwoIcon={dayThreeChipTwoIcons[0]}
					chipTwoText={dayThreeChipTwoTexts[0]}
				/>

				<TimelineRow 
					time={dayThreeTimings[1]}
					title={dayThreeTitles[1]}
					chipOneIcon={dayThreeChipOneIcons[1]}
					chipOneText={dayThreeChipOneTexts[1]}
					chipTwoIcon={dayThreeChipTwoIcons[1]}
					chipTwoText={dayThreeChipTwoTexts[1]}
				/>

				<TimelineRow 
					time={dayThreeTimings[2]}
					title={dayThreeTitles[2]}
					chipOneIcon={dayThreeChipOneIcons[2]}
					chipOneText={dayThreeChipOneTexts[2]}
					chipTwoIcon={dayThreeChipTwoIcons[2]}
					chipTwoText={dayThreeChipTwoTexts[2]}
				/>

				<TimelineRow 
					time={dayThreeTimings[3]}
					title={dayThreeTitles[3]}
					chipOneIcon={dayThreeChipOneIcons[3]}
					chipOneText={dayThreeChipOneTexts[3]}
					chipTwoIcon={dayThreeChipTwoIcons[3]}
					chipTwoText={dayThreeChipTwoTexts[3]}
				/>

				
			</div>
		</TabPanel>


			{/* --------------- DAY FOUR SCHEDULE ----------------- */}



			<TabPanel>
			<div className="tab-panel">
				<h2 style={{color: "#00A452", fontWeight: "bold",}}>Day 4: Web/Android, December 10th 2020</h2>
				<hr />
				
				<TimelineRow 
					time={dayFourTimings[0]}
					title={dayFourTitles[0]}
					chipOneIcon={dayFourChipOneIcons[0]}
					chipOneText={dayFourChipOneTexts[0]}
					chipTwoIcon={dayFourChipTwoIcons[0]}
					chipTwoText={dayFourChipTwoTexts[0]}
				/>

				<TimelineRow 
					time={dayFourTimings[1]}
					title={dayFourTitles[1]}
					chipOneIcon={dayFourChipOneIcons[1]}
					chipOneText={dayFourChipOneTexts[1]}
					chipTwoIcon={dayFourChipTwoIcons[1]}
					chipTwoText={dayFourChipTwoTexts[1]}
				/>

				<TimelineRow 
					time={dayFourTimings[2]}
					title={dayFourTitles[2]}
					chipOneIcon={dayFourChipOneIcons[2]}
					chipOneText={dayFourChipOneTexts[2]}
					chipTwoIcon={dayFourChipTwoIcons[2]}
					chipTwoText={dayFourChipTwoTexts[2]}
				/>

				<TimelineRow 
					time={dayFourTimings[3]}
					title={dayFourTitles[3]}
					chipOneIcon={dayFourChipOneIcons[3]}
					chipOneText={dayFourChipOneTexts[3]}
					chipTwoIcon={dayFourChipTwoIcons[3]}
					chipTwoText={dayFourChipTwoTexts[3]}
				/>

				
			</div>
		</TabPanel>
	</Tabs>
		</div>
	)
}

export default Timeline;
