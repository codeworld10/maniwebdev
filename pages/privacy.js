import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";

function privacy() {
  return (
    <>
    <Navbar/>
      <div className="pri_v">
        <h1>Privacy Policy</h1>
        <p>
          <h2>Our Advertising Partners</h2>
          Some of the advertisers on our site may use cookies and web beacons.
          Our advertising partners are listed below. Each of our advertising
          partners has its own Privacy Policy for user data. For easier access,
          we hyperlinked to their Privacy Policies below. Google
          https://policies.google.com/technologies/ads. At Maniwebdev, accessible
          from https://maniwebdev.com/, visitors privacy is our main
          priority.You may consult this list to find the Privacy Policy for each
          of Maniwebdev advertising partners. Third-party ad servers or ad
          networks use technologies such as cookies, JavaScript, or Web Beacons
          used in their respective advertisements. Also, links that appear on
          Maniwebdev are sent directly to users browsers. They automatically
          receive your IP address when this occurs. These technologies are used
          to measure their advertising campaigns effectiveness and/or
          personalize the advertising content you see on websites you visit.
          <h3>Third-Party Privacy Policies</h3>
          Maniwebdev Privacy Policy does not apply to other advertisers or
          websites. Thus, we advise you to consult these third-party ad servers
          respective Privacy Policies for more detailed information. It may
          include their practices and instructions about how to opt-out of
          specific options. You can choose to disable cookies through your
          browser options. You can find out more about cookie management on the
          browsers respective websites.

         <h4> Consent</h4>
By using our website, you hereby consent to our Privacy Policy and agree to its terms
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default privacy;
