import React, { Component } from "react";

export class PostBlock extends Component {
  state = {
    posts: [
      {
        id: 1,
        _id: "2ij1r3nkowmlp",
        body: "worldcla$$ mixtape out now !!!! .\n stream , buy , download my debut mixtape on all free and premium music platforms !!!",
        hearts: 0,
        date: Date(),
        comments: [
          {
            email: "john@doe.com",
            post: "letss goooo !!!!",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="post">
        {this.state.posts.map((post) => (
          <React.Fragment key={post._id}>
            <div className="post-time">{post.date}</div>
            <div className="post-body">{post.body}</div>
            <div className="post-options">
              <button className="post-options-opt">
                <i className="bi bi-heart-fill"></i>
                <div className="quan">{post.hearts}</div>
              </button>
              <button className="post-options-opt">
                <i className="bi bi-blockquote-left"></i>
                <div className="quan">{post.comments.length}</div>
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
