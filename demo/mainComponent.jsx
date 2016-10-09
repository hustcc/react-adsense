import React from 'react';
import AdSence from '../lib/index';

const MainComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1> react-adsence: adsence for react </h1>
        <p>
          Project <a href="https://github.com/hustcc/react-adsence">react-adsence</a> is a React-component for Google AdSence / Baidu advertisement.
        </p>

        <h2> 1. Install </h2>
        <pre className="strong"> npm install react-adsence </pre>

        <p> Then import it. </p>
        <pre>{"//import library use script tag.\n\nimport AdSence from 'react-adsence';"}
        </pre>

        <h2> 2. Usage </h2>
        <pre>{"import AdSence from 'react-adsence';\n\n<AdSence.Google client='ca-pub-7292810486004926'\n\t\tslot='7806394673' />"}

        </pre>

        <h2> 3. Demo default </h2>
        <AdSence.Google client='ca-pub-7292810486004926'
                        slot='7806394673' />

        <h2> 4. full-config Demo </h2>
        <AdSence.Google client='ca-pub-7292810486004926'
                        slot='7806394673'
                        style={{width: 500, height: 300, float: 'left'}}
                        format='' />
        <AdSence.Google client='ca-pub-7292810486004926'
                        slot='7806394673'
                        style={{width: 500, height: 300, float: 'left'}}
                        format='' />
      </div>
    );
  }
});

export default MainComponent;