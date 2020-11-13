import React from 'react';
import TimelineRow from './TimelineRow'

import '../css/timeline.css';


const Timeline = () => {

	return (
		<div className="timeline-container">

		<div className="text-center p-md-0">
		<h1>Timeline</h1>
	</div>

	<div className="row mb-5 justify-content-center mx-auto">
		<div className="col-12">
			<div className="timeline text-center">                        
				<p style={{fontSize: "20px"}}>
					Interested in knowing more about our DSC WOW? See the flow of our events over here:
				</p>
			</div>			
		</div>
	</div>

  <div className="tabs">
 <Tabs>
   <Tab label="Dec 7" >
     <div>

        <h4 style={{marginTop: "-30px", color: "#000fd5"}}>Day 1. December 7, Monday, 2020</h4>

        <hr/>
        <TimelineRow 
          startTime="5:00 PM"
          endTime="- 5:30 PM"
          title="Keynote Speaker"
          chipIcon="https://www.biography.com.image/c_fill%2Ccs_srgb%Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
          chipText="Speaker 1"
        />

        <TimelineRow 
        startTime="5:30 PM"
        endTime="- 6:30 PM"
        title="Technical - AI/ML"
        chipIcon="https://www.biography.com/.iage/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        chipText="Speaker 2"
        />

        <TimelineRow 
        startTime="6:30 PM"
        endTime="- 7:00 PM"
        title="Icebreakers"
        chipIcon="https://www.biography.com/.imge/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        chipText="Speaker 3"
        />

        <TimelineRow 
        startTime="7:00 PM"
        endTime="- 8:00 PM"
        title="AMA - AI/ML"
        chipIcon="https://www.biography.com/.image/c_ill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        chipText="Speaker 4"
        />
     </div>
   </Tab>


   <Tab label="Dec 8">
   <div>

   <h4 style={{marginTop: "-30px", color: "#000fd5"}}>Day 2. December 8, Tuesday, 2020</h4>

        <hr/>
      <TimelineRow 
        startTime="5:00 PM"
        endTime="- 5:30 PM"
        title="Keynote Speaker"
        chipIcon="https://www.biography.com.image/c_fill%2Ccs_srgb%Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        chipText="Speaker 1"
      />

      <TimelineRow 
      startTime="5:30 PM"
      endTime="- 6:30 PM"
      title="Technical - Blockchain"
      chipIcon="https://www.biography.com/.iage/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      chipText="Speaker 2"
      />

      <TimelineRow 
      startTime="6:30 PM"
      endTime="- 7:00 PM"
      title="Icebreakers"
      chipIcon="https://www.biography.com/.imge/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      chipText="Speaker 3"
      />

      <TimelineRow 
      startTime="7:00 PM"
      endTime="- 8:00 PM"
      title="AMA - Blockchain"
      chipIcon="https://www.biography.com/.image/c_ill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      chipText="Speaker 4"
      />
   </div>
 </Tab>

 <Tab label="Dec 9">
 <div>

 <h4 style={{marginTop: "-30px", color: "#000fd5"}}>Day 3. December 9, Wednesday, 2020</h4>

        <hr/>
    <TimelineRow 
      startTime="5:00 PM"
      endTime="- 5:30 PM"
      title="Keynote Speaker"
      chipIcon="https://www.biography.com.image/c_fill%2Ccs_srgb%Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      chipText="Speaker 1"
    />

    <TimelineRow 
    startTime="5:30 PM"
    endTime="- 6:30 PM"
    title="Technical - AR/VR"
    chipIcon="https://www.biography.com/.iage/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    chipText="Speaker 2"
    />

    <TimelineRow 
    startTime="6:30 PM"
    endTime="- 7:00 PM"
    title="Icebreakers"
    chipIcon="https://www.biography.com/.imge/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    chipText="Speaker 3"
    />

    <TimelineRow 
    startTime="7:00 PM"
    endTime="- 8:00 PM"
    title="AMA - AR/VR"
    chipIcon="https://www.biography.com/.image/c_ill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    chipText="Speaker 4"
    />
 </div>
</Tab>

<Tab label="Dec 10">
<div>
<h4 style={{marginTop: "-30px", color: "#000fd5"}}>Day 4. December 10, Thursday, 2020</h4>

        <hr/>
   <TimelineRow 
     startTime="5:00 PM"
     endTime="- 5:30 PM"
     title="Keynote Speaker"
     chipIcon="https://www.biography.com.image/c_fill%2Ccs_srgb%Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
     chipText="Speaker 1"
   />

   <TimelineRow 
   startTime="5:30 PM"
   endTime="- 6:30 PM"
   title="Technical - Web/Android"
   chipIcon="https://www.biography.com/.iage/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
   chipText="Speaker 2"
   />

   <TimelineRow 
   startTime="6:30 PM"
   endTime="- 7:00 PM"
   title="Icebreakers"
   chipIcon="https://www.biography.com/.imge/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
   chipText="Speaker 3"
   />

   <TimelineRow 
   startTime="7:00 PM"
   endTime="- 8:00 PM"
   title="AMA - Web/Android"
   chipIcon="https://www.biography.com/.image/c_ill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
   chipText="Speaker 4"
   />
</div>
</Tab>


 </Tabs>
</div>

		</div>
	)
}


class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <div>
      {props.children}
    </div>
  )
}
 
export default Timeline;