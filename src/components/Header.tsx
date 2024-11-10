
import Link from 'next/link'; // Make sure to use Next.js Link for internal routing
import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <div>
     <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa-solid fa-list"></i>
      </label>
      
      
<Image
src="/images/muskan.png" 
alt="My Profile Picture"
width={50}                
height={50}  
className="logoo"             
/>

      <label className="logo">Muskan</label>
      <ul>
        <li className="active">
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
    

{/* // home page */}
<section id="home">
<div className="Home-container">
<div className="home-left"><h1 className="main-heading">Hi, <br /> <b>I'M MUSKAN BATOOL</b></h1>
<p className="bio">  I am a Biotechnologist to be & I am passionate about  technology with a <br /> strong background in both development and laboratory work.
</p>

 
</div>
<div className="home-right">
<Image
src="/images/muskan.png" 
alt="My Profile Picture"
width={300}                
height={300}  
className="profile"             
/>
</div>



</div>

</section>

{/* about us */}
<section id="about">
<div className="about-us">
    <h1 className="about-us-heading">About MySelf</h1>
    <p className="about-me-description">Here’s a bit more about myself, what I do, i am
      Biotechnology student <br/> with a passion for coding and web development, blending science and technology.</p>

<div className="bottom-parent">
<div className="left-side">
<h1 className="bottom-heading">Find out more about me</h1>
<p className="botom-left-description">I am a biotechnology student with hands-on experience in lab work and a good foundation in HTML and CSS. Currently, I  <br />am  learning Next.js and working on various web development <br /> projects to enhance my coding skills. I am passionate about combining my scientific knowledge with technology to create innovative solutions. 
<br />
<i>Feel free to connect with me on LinkedIn—I'm always <br />open to new opportunities and collaborations!</i></p>

</div>
<div className="right-side">
    <h1 className="right-heading">Skills</h1>
<div className="skill">
    <p>HTML</p>
    <div className="progress-bar">
      <div className="progress" id="p1" ></div>
    </div>
  </div>

<div className="skill">
    <p>CSS</p>
    <div className="progress-bar">
        <div className="progress" id="p2"></div>
    </div>
</div>

<div className="skill">
    <p>Typescript</p>
    <div className="progress-bar">
        <div className="progress" id="p3"></div>
    </div>
</div>

   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* about-us div */}
</div>

</section>

{/* Projects Section */}
<section id="projects">

<div className="projects">
    <h1 className="projects-heading">PROJECTS</h1>
    <p className="projects-description">Here you will find some of the personal  projects that I created.</p>

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Static Resume Builder</h1>
<p className="projects-bottom-left-description">Created a static interactive resume project featuring structured sections for personal details, education, and skills. Demonstrated proficiency in HTML, CSS, and design to build an appealing, user-friendly layout.
</p>
 <div className="button-container">
    <Link href="https://static-resume-by-muskan-batool.vercel.app/" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/project1.png" 
        alt="Age Calculator"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Next.js-based website</h1>
<p className="projects-bottom-left-description">This tool creates strong and secure passwords to enhance your online security. It allows you to customize the length and complexity of the password, 
ensuring it's difficult to guess while remaining easy for you to remember.</p>
 <div className="button-container">
    <Link href="https://muskan" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/project2.png" 
        alt="Password Generator"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* next section */}



{/* bottom-parent div */}
</div>




{/* about-us div */}

</section>

{/* contact us */}
<section id="contact">
<div className="contact-us">
 <h1 className="contact-us-heading">Contact</h1>
 <p className="contact-us-description">If you have any questions or would like to discuss a project, feel free to reach out <br /> to me through the contact form below or via email. I'll do my best to respond as soon as possible!</p>


<div className="form-contact">
  <form >
<label htmlFor="name" className="labell">Name</label> <br/>
<input type="name" id="name" name="name" placeholder="Enter Your Name" /><br/>

<label htmlFor="email" className="labell">Email</label><br/>
<input type="email" id="email" name="email" placeholder="Enter your email" /><br/>
<label htmlFor="message" className="labell">Message</label><br/>
<textarea name="Message" id="message" cols={30} rows={7} placeholder="Enter your message"></textarea>

<button className="submit">Submit</button>


  </form>
</div>
 </div>
 </section>



{/* footer */ }
<footer>
  <div className="parent-footer">
    <div className="one-coloumn">
      <h1 className="footer-heading">Muskan Batool</h1>

      <p className="footer-description">Thank you for visiting my portfolio! I appreciate your time and interest. Feel free  to follow <br /> me  on social media for updates on my latest projects, insights, and professional journey. <br /> Let's stay connected!</p>
    </div>

    <div className="four-coloumn">
      <h1 className="social">Social Media</h1>
      <i className="fa-brands fa-facebook" aria-hidden="true"></i>
      <Link href="https:www.linkedin.com/in/muskan-batool-15584b277" target="blank"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></Link>
      <i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
      <Link href="https://github.com/imuskanbatool7" target="blank"><i className="fa-brands fa-github" aria-hidden="true"></i></Link>
    </div>
  </div>
  <hr />
  <p className="after-hr">© Copyright {new Date().getFullYear()}.Made by Muskan batool</p>
</footer>


</div>
  )
}
;