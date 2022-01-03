import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head"
import Footer from "../Components/Footer";
import Action from "../Components/Action";


function index() {
  return (
    <>
    <Head>
  <title>Home | Your Site Maker</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>
      <Navbar />
      {/* section1 starts */}
      <div className="section1">
        <div className="text">
          <div className="head">
            <h1>Your Site Maker</h1>
          </div>
          <p className="para">
          Passionate about helping businesses to grow online.
            </p>
            <span>
              <p className="para">
              I will create a professional-looking website for your business.
              </p>
            </span>
          
          <div className="butto">
            <span>
              <Link href="/services">
                <button className="btn">Services</button>
              </Link>
              <Link href="/contact">
                <button className="btn2">Contact me</button>
              </Link>
            </span>
          </div>
        </div>
        {/* Adding the image of section1 */}
        <div className="img">
          <Image
            className="topimg"
            src="/images/homtop.png"
            width="500"
            height="420"
          ></Image>
        </div>
      </div>
      <div className="how">
        <h2>We Value Your Business</h2>
      </div>
      <div className="para3">
        <p>
        We aim to provide you best services at cheap rates. I started my
          business locally and now
        </p>
        <span>
          <p>
          moving my business to the next level by offering my services online from national to international.
          </p>
        </span>
      </div>
      <div className="howw">
        <h3>How It Works!</h3>
      </div>
     
      <div className="section2">
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/research.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 className="he1">Research & Analysis</h2>
            </span>
            <span className="pre">
              <p className="pp1">
              I do deep research on my project about business competition ranking etc. So that I will come out with a good idea, That will satisfy you.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon1">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/design.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 className="he1">Designing</h2>
            </span>
            <span className="pre">
              <p className="pp1">
             It's time to start creative work. I will deliver you a design and do consider changes, or you have already designed then share it to me.
                
              </p>
            </span>
          </div>
        </div>
        <div className="secicon2">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/development.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 className="he1">Development</h2>
            </span>
            <span className="pre">
              <p className="pp1">
              It's time to convert your ideas into reality. Create Pages, upload content, and be responsive adding layouts and SEO for Google ranking.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="seecicon">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/webtest.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2 className="he2">Testing Phase</h2>
            </span>
            <span className="pree">
              <p className="pp2">
              Website links pages are working, and the site is responsive for
                different devices and page speed, etc.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon1">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/liveweb.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2  className="he2">Putting Live</h2>
            </span>
            <span className="pree">
              <p className="pp2">
              Here I will put your website live on the server. So that it will
                be visible to everyone worldwide on the browser.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon2">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/deliver.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2  className="he2">Delivery</h2>
            </span>
            <span className="pree">
              <p className="pp2">
              Hooray! Now it's time to deliver your business website to you. when you are 100% satisfied with my work.
              </p>
            </span>
          </div>
        </div>
      </div>
    
      <div className="choose">
        <div className="cho">
          <h3>Why Choose Me?</h3>
        </div>
      </div>
      <div className="cho_icon">
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/responsive.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Fast/Responsive</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/low.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Low Cost</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/support.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Support</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/revision.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Revision</h4>
          </span>
        </div>
      </div>
      <div className="abt">
      <Link href="/aboutme">
      <button className="abt_me">About Me</button>
              </Link>
        
      </div>
      <Action/>
      <Footer/>
    </>
  );
}

export default index;