import React from 'react';
import { connect } from 'react-redux'; // import the connect to actions
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        //console.log('hi' + this.props);
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map((post) => {
          return (
            <div className="item" key={post.id}>
              <i className="large middle aligned icon user" /> 
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
                <b><UserHeader userId={post.userId} /></b>
              </div>
            </div>
          );
        });
      }
    
      render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
      }
}

// MapStateProps is required when ypu want to get some data from Redux side and pass to connect 
const mapStateToProps = state => {
    return { posts: state.posts};
}

export default connect(
    mapStateToProps,
     {fetchPostsAndUsers}
     ) 
    (PostList); // Since we dont have the mapStateProps we need to inser a null argument