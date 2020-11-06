import React from "react";

class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      const styles = {
        container: {
          height: "auto",
          width: 'auto',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'end',
          cursor: 'pointer',
          padding: '4px',
        },
        line: {
          background: this.state.color,
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          // transform: this.state.open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          // transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
        },       
      }
      return(
        <div style={styles.container} 
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop,background:"#FE4F5A",width:'64px',height:'6px'}}/>
          <div style={{...styles.line,...styles.lineMiddle,background:"#00A452",width:'54px',height:'6px'}}/>
          <div style={{...styles.line,...styles.lineBottom,background:"#008DFF",width:'42px',height:'6px'}}/>
          <div style={{...styles.line,...styles.lineBottom,background:"#FFBD00",width:'32px',height:'6px'}}/>
        </div>
      )
    }
  }

export default MenuButton