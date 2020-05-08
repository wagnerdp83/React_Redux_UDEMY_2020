import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal'
import createBrowserHistory from '../../history';
import {fetchStream, deleteStream} from '../../actions';


class StreamDelete extends React.Component {

    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){

        const {id} = this.props.match.params;

        return (
            //User Fragment to wrapp elements without change de DOM or include tags in the HTML
            <React.Fragment>
                <button 
                onClick={() => {this.props.deleteStream(id)}}
                className="ui negative button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    };

    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete the stream?"
        }
        return <div>Are you sure you want to delete this title <b><u> {this.props.stream.title}</u></b> ?</div>
    }

    render(){
        return (
                <Modal
                title="Delete Streams"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => createBrowserHistory.push('/')}
            />
        );
    };
};

const mapStateToProps = (state, ownProps) =>{

    return { stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream}) (StreamDelete);