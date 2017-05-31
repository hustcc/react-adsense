import React from 'react';
import PropTypes from 'prop-types';

export default class Google extends React.Component {
  componentDidMount() {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  };

  render() {
    return (
      <ins className="adsbygoogle" 
        style={this.props.style} 
        data-ad-client={this.props.client} 
        data-ad-slot={this.props.slot} 
        data-ad-format={this.props.format}></ins>
    );
  }
};

Google.propTypes = {
  style: React.PropTypes.object, // eslint-disable-line
  client: React.PropTypes.string.isRequired,
  slot: React.PropTypes.string.isRequired,
  format: React.PropTypes.string,
};

Google.defaultProps = {
  style: {display: 'block'}, 
  format: 'auto',
};