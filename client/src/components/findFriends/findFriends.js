import React from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import Autocomplete from "react-autocomplete";
import API from "../../utils/API";

import { ShowPotentialFriends } from "./showPotentialFriends";

class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      potentialFriends: []
    };
  }

  handleSearchKeyChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      API.searchEmail(this.state.searchKey, result => {
        console.log(result);
        this.setState({ potentialFriends: result });
      });
    });
  };

  render() {
    return (
      // <button type="button" classNameName="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
      <div
        className="modal fade"
        id="findFriendComp"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Find New Friends
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Find frind by email:
                  </label>
                  <input
                    onChange={this.handleSearchKeyChange}
                    value={this.state.searchKey}
                    type="email"
                    className="form-control"
                    name="searchKey"
                    id="friendEmail"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Suggested result:
                  </label>
                  <div className="border border-info">
                    <ShowPotentialFriends data={this.state.potentialFriends} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindFriends;