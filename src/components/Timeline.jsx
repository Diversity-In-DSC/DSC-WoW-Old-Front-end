import React from 'react';
import '../css/timeline.css';
import { Row } from 'react-bootstrap';

//icons:
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


const Timeline = () => {

	return (
		<div className="timeline-container">

		<div className="text-center p-md-0">
		<h1 className="heading">Timeline</h1>
	</div>

	<div className="row mb-5 justify-content-center mx-auto">
		<div className="text">
		<div className="col-12">
				<div className="timeline text-center">
					<p style={{fontSize: "20px"}}>
						Interested in knowing more about our DSC WOW? See the flow of our events over here:
					</p>
				</div>
		</div>
		</div>
	</div>

  <div className="tabs">
 <Tabs>
   <Tab label="Dec 7" >
     <div>

        {/* <h5 style={{ color: "#000fd5"}}>Day 1. December 7, Monday, 2020</h5> */}

        <hr/>

				<div>
					<div className="title">Kickstarting the DSC WOW!</div>
					<div className="subtitle">5:00 PM - 5:30 PM </div>
					<Row>
						<div className="chip" style={{color: "#00a8db"}}>
							<HeadsetMicIcon className="chipIcon"/>
							<span className="chipText">Keynote</span>
						</div>
					</Row>
					<hr/>
				</div>

				<div>
					<div className="title">Technical Session on ML</div>
					<div className="subtitle">5:30 PM - 6:30 PM </div>
					<Row>
						<div className="chip" style={{color: "#ffb404"}}>
							<CodeIcon className="chipIcon"/>
							<span className="chipText">ML</span>
						</div>
					</Row>
					<hr/>
				</div>

        <div>
					<div className="title">Icebreakers!</div>
					<div className="subtitle">6:30 PM - 7:00 PM</div>
					<Row>
						<div className="chip" style={{color: "#b32cdc"}}>
							<SportsEsportsIcon className="chipIcon"/>
							<span className="chipText">Icebreaker</span>
						</div>
					</Row>
					<hr/>
				</div>

				<div>
					<div className="title">Ask Me Anything - ML</div>
					<div className="subtitle">7:00 PM - 8:00 PM</div>
					<Row>
						<div className="chip" style={{color: "#06a94d"}}>
							<QuestionAnswerIcon className="chipIcon"/>
							<span className="chipText">Q&A</span>
						</div>
					</Row>
					<hr/>
				</div>

     </div>
   </Tab>


   <Tab label="Dec 8">
   <div>

   {/* <h5 style={{color: "#000fd5"}}>Day 2. December 8, Tuesday, 2020</h5> */}

        <hr/>

				<div>
					<div className="title">Keynote Speaker on Blockchain</div>
					<div className="subtitle">5:00 PM - 5:30 PM </div>
					<Row>
						<div className="chip" style={{color: "#b32cdc"}}>
							<HeadsetMicIcon className="chipIcon"/>
							<span className="chipText">Keynote</span>
						</div>
					</Row>
					<hr/>
				</div>

				<div>
					<div className="title">Technical Session on Blockchain</div>
					<div className="subtitle">5:30 PM - 6:30 PM </div>
					<Row>
						<div className="chip" style={{color: "#00a8db"}}>
							<CodeIcon className="chipIcon"/>
							<span className="chipText">Blockchain</span>
						</div>
					</Row>
					<hr/>
				</div>

				<div>
					<div className="title">Icebreakers!</div>
					<div className="subtitle">6:30 PM - 7:00 PM</div>
					<Row>
						<div className="chip" style={{color: "#06a94d"}}>
							<SportsEsportsIcon className="chipIcon"/>
							<span className="chipText">Icebreaker</span>
						</div>
					</Row>
					<hr/>
				</div>

				<div>
					<div className="title">Ask Me Anything - Blockchain</div>
					<div className="subtitle">7:00 PM - 8:00 PM</div>
					<Row>
						<div className="chip" style={{color: "#ffb404"}}>
							<QuestionAnswerIcon className="chipIcon"/>
							<span className="chipText">Q&A</span>
						</div>
					</Row>
					<hr/>
				</div>

   </div>
 </Tab>

 <Tab label="Dec 9">
 <div>

 {/* <h5 style={{color: "#000fd5"}}>Day 3. December 9, Wednesday, 2020</h5> */}

        <hr/>


				<div>
				<div className="title">Keynote Speaker on AR/VR</div>
				<div className="subtitle">5:00 PM - 5:30 PM </div>
				<Row>
					<div className="chip" style={{color: "#00a8db"}}>
						<HeadsetMicIcon className="chipIcon"/>
						<span className="chipText">Keynote</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Technical Session on AR/VR</div>
				<div className="subtitle">5:30 PM - 6:30 PM </div>
				<Row>
					<div className="chip" style={{color: "#eb4b3d"}}>
						<CodeIcon className="chipIcon"/>
						<span className="chipText">AR/VR</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Icebreakers!</div>
				<div className="subtitle">6:30 PM - 7:00 PM</div>
				<Row>
					<div className="chip" style={{color: "#b32cdc"}}>
						<SportsEsportsIcon className="chipIcon"/>
						<span className="chipText">Icebreaker</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Ask Me Anything - AR/VR</div>
				<div className="subtitle">7:00 PM - 8:00 PM</div>
				<Row>
					<div className="chip" style={{color: "#06a94d"}}>
						<QuestionAnswerIcon className="chipIcon"/>
						<span className="chipText">Q&A</span>
					</div>
				</Row>
				<hr/>
			</div>

 </div>
</Tab>

<Tab label="Dec 10">
<div>
{/* <h5 style={{ color: "#000fd5"}}>Day 4. December 10, Thursday, 2020</h5> */}

        <hr/>

				<div>
				<div className="title">Keynote Speaker on Web/Android</div>
				<div className="subtitle">5:00 PM - 5:30 PM </div>
				<Row>
					<div className="chip" style={{color: "#b32cdc"}}>
						<HeadsetMicIcon className="chipIcon"/>
						<span className="chipText">Keynote</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Technical Session on Web/Android</div>
				<div className="subtitle">5:30 PM - 6:30 PM </div>
				<Row>
					<div className="chip" style={{color: "#eb4b3d"}}>
						<CodeIcon className="chipIcon"/>
						<span className="chipText">Web/Android</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Icebreakers!</div>
				<div className="subtitle">6:30 PM - 7:00 PM</div>
				<Row>
					<div className="chip" style={{color: "#06a94d"}}>
						<SportsEsportsIcon className="chipIcon"/>
						<span className="chipText">Icebreaker</span>
					</div>
				</Row>
				<hr/>
			</div>

			<div>
				<div className="title">Ask Me Anything - Web/Android</div>
				<div className="subtitle">7:00 PM - 8:00 PM</div>
				<Row>
					<div className="chip" style={{color: "#ffb404"}}>
						<QuestionAnswerIcon className="chipIcon"/>
						<span className="chipText">Q&A</span>
					</div>
				</Row>
				<hr/>
			</div>



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