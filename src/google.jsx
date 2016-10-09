import React from 'react';

const Google = React.createClass({
  propTypes: {
    style: React.PropTypes.object,
    client: React.PropTypes.string.isRequired,
    slot: React.PropTypes.string.isRequired,
    format: React.PropTypes.string
  },

  componentDidMount: function() {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  },

  getDefaultProps: function() {
    return {
      style: {display: 'block'}, 
      format: 'auto'
    };
  },

  render: function() {
    return (
      <ins className="adsbygoogle" 
        style={this.props.style} 
        data-ad-client={this.props.client} 
        data-ad-slot={this.props.slot} 
        data-ad-format={this.props.format}></ins>
    );
  }
});

module.exports = Google;