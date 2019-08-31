import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="wrapper">
      <div className="parallax-container">
        <div className="background">
          <img
            className="background__image"
            src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/building.jpg"
          />
        </div>
        <div className="foreground">
          <div className="foreground__content">
            <h1>Oooo, parallax</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
