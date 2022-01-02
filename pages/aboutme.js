import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import styles from "../styles/aboutme.module.css"
import Head from "next/head"
import Action from "../Components/Action";

function aboutme() {
  return (
    <>
  <Head>
  <title>About Me</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>

      <Navbar />

      <div className={styles.asection__main}>
         
        <div className={styles.sertxt}>
          <h1 className={styles.abtani}>Hi There,</h1>
          <span>
            <p className={styles.ser_para}>
              Welcome, here is a story of My life. A little
              <br></br> about my skills and setup.
            </p>
          </span>
        </div>

        <div className={styles.ser__tops}>
          <Image
            className={styles.img_top}
            src="/images/usm.jpg"
            width="450"
            height="420"
          ></Image>
        </div>
       
      </div>
      <div className={styles.aboutst}>
        <p>“The purpose of our lives is to be happy.”</p>
        <p>
          “If you want to live a happy life, tie it to a goal, not to people or
          things.” Albert Einstein
        </p>
      </div>
      <div className={styles.story}><h3>My Story</h3></div>
      <div className={styles.main_abt}>
        <div className={styles.aboutmee}>
          <p>
            My name is Usman's nickname, Mani. I am 21 years old. I have started
            learning how to code in 2016 but, after my father's death. I am in
            much pain, and there is a gap of 5 months in my learning. At this
            time, it's hard to survive. So I am doing a part-time job in a
            general store. After that, I continue learning about how to code.
            Then, in the middle of 2018, I have tried to test myself. I have
            created an account on Fiverr, Upwork and started giving my services online.
            After this, I worked on some projects, and then suddenly, I have
            stopped getting orders, But I have continued my study and polished
            my skills more, and tried to get website projects. At the end of
            2019, I have met a man on social media. He is from Austria, Europe.
            He is an IT expert. I have made a website for him, and he liked that
            website. After this, he decides to refer me to his friend. So, I
            have started working again for clients. Now it's the end of 2021. I
            am going to build my brand here. I will help and guide small and
            large businesses to grow online. In short, I have learned a lesson
            is, to never give up always focus on your goals because hard time is
            only for brave people.
          </p>
       </div>
      </div>
      <div className={styles.skil}>
        <h2>What Is Next?</h2>
      </div>
      <div className={styles.skills_d}>
        <b className={styles.set_para}>
         Currently I am building websites (Business, Portfolio, Ecommerce etc almost in all niches) with HTML,CSS and javascript,React,Nextjs and Wordpress. Now I am doing polish my backend skills. After this thinking to learn
          app development and digital marketing. I already know about digital
          marketing but it's not enough.
        </b>
      </div>
      <div className={styles.seet}>
        <h4>My Setup</h4>
      </div>
      <div className={styles.my_setup}>
        
        <div className={styles.setimg}>
           <Image
              className="see_pimg"
              src="/images/setu.jpg"
              width="1000"
              height="500"
            ></Image></div>
      </div>
      <Action/>
      <Footer />
    </>
  );
}

export default aboutme;
