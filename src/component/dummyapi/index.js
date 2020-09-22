import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPosts from "./../../actions/index";
import { getposts } from "./../../reducers/posts/reducer";
import { types } from "./../../actions/types";

const Dummyapi = (props) => {
  const gettinglist = () => {
    console.log("ingetting");
    fetchPosts([], types.GET_POSTS);
  };
  React.useEffect(() => {
    gettinglist();
  }, [gettinglist]);
  return (
    <div>
      <button className="buttoncss" onClick={gettinglist}>
        get data
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: getposts(state, types.GET_POSTS),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPosts: fetchPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dummyapi);
