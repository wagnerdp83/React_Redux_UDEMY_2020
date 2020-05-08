import React from 'react';


const seasonConfig = {
    summer: {
        text: "Jesus, is getting WARM!!",
        iconName: "sun"
    },
    winter:{
        text: "Is fucking cold bro",
        iconName: "snowflake"
    }

}

const getSeason = (lat, month) =>{
    if(month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat < 0 ? 'winter' : 'summer' ;
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    // Set the message that will show in the page
    // Bring the text object which will be used to show in the browser
    const {text, iconName} = seasonConfig[season];

    return  <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <div className={`latLong-display ${season}`}>
                    Latitude: {props.lat} <br/>
                    Longitude: {props.long}<br/>
                </div>
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
             </div>
};


export default SeasonDisplay;