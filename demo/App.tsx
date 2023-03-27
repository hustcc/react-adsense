import { AdSense } from '../src';

export default function App() {
  return (
    <div>
      <h1> react-adsense: adsense for react </h1>
      <p>
        Project{' '}
        <a href="https://github.com/hustcc/react-adsense">react-adsense</a> is a
        React-component for Google AdSense / Baidu advertisement.
      </p>

      <h2> 1. Install </h2>
      <pre className="strong"> npm install react-adsense </pre>

      <p> Then import it. </p>
      <pre>
        {
          "//import library use script tag.\n\nimport AdSense from 'react-adsense';"
        }
      </pre>

      <h2> 2. Usage </h2>
      <pre>
        {
          "import AdSense from 'react-adsense';\n\n<AdSense\n\tclient='ca-pub-7292810486004926'\n\tslot='7806394673'\n/>"
        }
      </pre>

      <h2> 3. default props </h2>
      <AdSense client="ca-pub-7292810486004926" slot="7806394673" />

      <h2> 4. in-article layout </h2>
      <AdSense
        client="ca-pub-7292810486004926"
        slot="7806394673"
        layout="in-article"
      />

      <h2> 5. full-config Demo </h2>
      <AdSense
        client="ca-pub-7292810486004926"
        slot="7806394673"
        style={{ width: 500, height: 300, float: 'left' }}
        layout="in-article"
        format=""
      />
      <AdSense
        client="ca-pub-7292810486004926"
        slot="7806394673"
        style={{ width: 500, height: 300, float: 'left' }}
        layout="in-article"
        format=""
      />
    </div>
  );
}
