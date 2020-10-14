import React from 'react';

class Tooltip extends React.Component{
    render(){
        return(
            <div className = "container">
                <div className = "position-selector">
                <div>TOP</div>
                <div>RIGHT</div>
                <div>BOTTOM</div>
                <div>LEFT</div>
                </div>
                <div className="tooltip">
                    <button>Hover Over</button>
                </div>
                
            </div>
        );
    }
}

export default Tooltip;