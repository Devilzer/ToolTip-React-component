import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';


class Tooltip extends React.Component{
    constructor (){
        super();
        this.state={
          active:"top"
        }
      }


    setPositionTop = ()=>{
       this.setState({
           active : "top"
       });
       document.querySelector('#top').classList.add('active');
        document.querySelector('#right').classList.remove('active');
        document.querySelector('#bottom').classList.remove('active');
        document.querySelector('#left').classList.remove('active');
      
    }
    setPositionRight = ()=>{
        this.setState({
            active : "right"
        });
        document.querySelector('#top').classList.remove('active');
        document.querySelector('#right').classList.add('active');
        document.querySelector('#bottom').classList.remove('active');
        document.querySelector('#left').classList.remove('active');
     }
     setPositionBottom = ()=>{
        this.setState({
            active : "bottom"
        });
        document.querySelector('#top').classList.remove('active');
        document.querySelector('#right').classList.remove('active');
        document.querySelector('#bottom').classList.add('active');
        document.querySelector('#left').classList.remove('active');
     }
     setPositionLeft = ()=>{
        this.setState({
            active : "left"
        });
        document.querySelector('#top').classList.remove('active');
        document.querySelector('#right').classList.remove('active');
        document.querySelector('#bottom').classList.remove('active');
        document.querySelector('#left').classList.add('active');
     }
    render(){
        return(
            <div className = "container">
                <div className = "position-selector">
                <div id='top' onClick={this.setPositionTop} className ='active'>TOP</div>
                <div id='right' onClick = {this.setPositionRight}>RIGHT</div>
                <div id='bottom' onClick={this.setPositionBottom}>BOTTOM</div>
                <div id='left' onClick={this.setPositionLeft}>LEFT</div>
                </div>
                <div className="tooltip">
                    <Tippy content={'Tooltip!'} placement ={this.state.active} animation='scale' theme={'abc'} >
                    <button>Hover Over</button>
                    </Tippy>
                    
                </div>
                
            </div>
        );
    }
}

export default Tooltip;