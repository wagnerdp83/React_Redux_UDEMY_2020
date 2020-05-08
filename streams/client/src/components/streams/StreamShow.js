import React from 'react';
import flv from 'flv.js'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    //Create a Reference for the video element
    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    }
    
    componentDidMount(){
        //Now remember componentDidMount is only going to be called one time when the company is first rendered to the screen.
        const {id} = this.props.match.params;
        
        //We're going to call build a player if we have not built the player before.
        this.props.fetchStream(id);
        this.buildPlayer();
       
    }

    /* So just in case we do not yet have access to our stream and we're going to try to fetch it on the fly 
    we need to have some place to call build player after we successfully fetch the stream.
    So to handle that case will define another lifecycle method component.
    */

   componentDidUpdate(){
        this.buildPlayer();
   }

   // componentWillUnmount is a perfect place to do a little bit of cleanup and take care of any resources that our component might have created.

   componentWillUnmount(){
       this.player.destroy();

   }

   /* So now the idea is that when our component first renders attempt to build the player and then if our
    component fetches the stream successfully at some point in the future and the component renders component
    it update will be called. And we will attempt to call build player in there as well.
    */

    buildPlayer(){

        const {id} = this.props.match.params;

        if(this.player || !this.props.stream){
            return;
        }
        
         //Function Create a player
         this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }


    render(){

        if(!this.props.stream){
            return <div>Loading</div>
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videoRef} style={{ width:'100%'}} controls/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    {fetchStream}
)(StreamShow)