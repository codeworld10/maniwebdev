import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import Link from "next/link";
import Action from "../Components/Action";
import Head from "next/head"
function services() {
  return (
    <>
  <Head>
  <title>Services</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>

      <Navbar />

      <div className="sermain">
        <div className="serteext">
          <h1 className="serani">My Services</h1>
          <span>
            <p className="ser_para">
              My goal is to provide you good services with 100% satisfaction.
              <br></br> Here is the list of services that I am giving.
            </p>
          </span>
        </div>

        <div className="sertoop">
          <Image
            className="sertoup"
            src="/images/sertop.png"
            width="500"
            height="420"
          ></Image>
        </div>
      </div>
      <div className="wido">
        <h2>What I Do?</h2>
      </div>
      <div className="sersec2">
        <div className="sertext">
          <Image
            className="serimg"
            src="/images/webdev.png"
            width="500"
            height="420"
          ></Image>
        </div>
        <div className="serimg">
          <h2 className="wbd">Website Development</h2>
          <span>
            <p className="serpara">
              For improving your online presence. You need a website for your
              business. I will build a website according to your business need.
              it's pretty simple all you need to do is provide about your
              business so that I will do deep research on it and build a good
              website for you.
            </p>
          </span>
        </div>
      </div>
      <div className="sersec3">
        <div className="serimg1">
          <h2 className="wbd1">Website Design</h2>
          <span>
            <p className="serpara1">
              Design is not just what it looks like and feels like. Design is
              how it works, saying 'Steve jobs.' Yes, I will design that really
              describes your business to your audience so that they can
              understand it easily. This is the real approach of a designer to
              make it simple and easy.
            </p>
          </span>
        </div>
        <div className="sertext1">
          <Image
            className="serimg1"
            src="/images/webdesign.png"
            width="540"
            height="420"
          ></Image>
        </div>
      </div>

      <div className="sersec4">
        <div className="sertext2">
          <Image
            className="serimg2"
            src="/images/redweb.png"
            width="540"
            height="420"
          ></Image>
        </div>
        <div className="serimg2">
          <h2 className="wbd3">Website Redesign</h2>
          <span>
            <p className="serpara2">
              If you have an old or unprofessional website design and looking to
              renew, then you are at the right place. I will build a responsive
              website design for you in Figma, then show you a copy of it,
              consider changes when you are satisfied, I will start building it.
            </p>
          </span>
        </div>
      </div>
      <div className="sersec5">
        <div className="serimg3">
          <h2 className="wbd4">Search Engine Optimization</h2>
          <span>
            <p className="serpara4">
              For ranking on Google SEO is important. First, I need to do
              research about your business what people are searching for on
              google. Then I will collect and add low competition keywords so
              that your site comes in search results of Google. I will also
              submit it in the google search console, Etc.
            </p>
          </span>
        </div>
        <div className="sertext4">
          <Image
            className="serimg3"
            src="/images/seoo.png"
            width="540"
            height="420"
          ></Image>
        </div>
      </div>
      <div className="tol">
        <h3>Tools That I Use</h3>
      </div>
      <div className="tolls">
        <div className="tollimg">
          <Image
            className="toolimg"
            src="/images/htm.png"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className="tollimg">
          <Image
            className="toolimg"
            src="/images/cs3.png"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className="tollimg">
          <Image
            className="toolimg"
            src="/images/js.png"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className="tollimg">
          <Image
            className="toolimg"
            src="/images/rea.png"
            width="50"
            height="50"
          ></Image>
        </div>
      </div>

      <div className="tolls1">
        <div className="tollimg1">
          <Image
            className="toolimg1"
            src="/images/nex.png"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className="tollimg1">
          <Image
            className="toolimg1"
            src="/images/word.png"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className="tollimg1">
          <Image
            className="toolimg1"
            src="/images/fig.png"
            width="50"
            height="50"
          ></Image>
        </div>
      </div>
      <div className="serbtn">
        <Link href="/contact">
          <button className="serbtn1">Contact Me</button>
        </Link>
      </div>
      <Action />
      <Footer />
    </>
  );
}

export default services;
