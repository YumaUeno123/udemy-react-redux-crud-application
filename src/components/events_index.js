import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>

        <tbody>
          { this.renderEvents() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToPorps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToPorps)(EventsIndex)
