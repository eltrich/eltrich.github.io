<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<link rel="Stylesheet" href="css/main.css" type="text/css">
<link rel="Stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<title>index</title>
</head>
<body>

<!-----header section---------->

<div id="header">

                 <div class="container">
                                        <nav>
                                             <div id="logo">
                                                           <span>M</span>elvin
                                              </div>
<!-----------[(2007-2008,2009-2010,2019-2022),(31/12/2021)]----------->
                                              <ul>
                                                  <li><a href="#">Home</a></li>
                                                  <li><a href="#">About</a></li>
                                                  <li><a href="#">Services</a></li>
                                                  <li><a href="#">Portfolio</a></li>
                                                  <li><a href="#">Contact</a></li>
                                                   <i class="bi bi-x"></i>
                                              </ul>
                                              <i class="bi bi-list"></i>
                                        </nav>
                                       

                  

                  <div class="header-text">

                                           <p>UI/UX Designer</p>
                                           <h1>Hi, I'm <span>Melvin</span>
                                           <br>From Namibia.</h1>

                  </div>
        </div>

</div>

<!------About Section------>

                             <div id="about">
                                             <div class="container">
                                                                   <div class="row">
                                                                                    <div class="about-col-1">
                                                                                                             <img src="images/d.jpg">
                                                                                    </div>

                                                                                    <div class="about-col-2">
                                                                                                             <h1 class="sub-title">About Me</h1>
                                                                                                                                                <p>Hi there, I'm Melvin, a front end developer.I was born in khorixas, Namibia.</p>

                                                                                                                                                <div class="tab-titles">

                                                                                                                                                <p class="tab-links active-link" onclick="openTab('skills')">Skills</p>
                                                                                                                                                <p class="tab-links" onclick="openTab('experience')">Experience</p>
                                                                                                                                                <p class="tab-links" onclick="openTab('education')">Education</p>

                                                                                                                                                </div>
                                                                                                                                                <div class="tab-contents active-tab" id="skills">

                                                                                                                                                <ul>
                                                                                                                                                    <li><span>UI/UX</span><br>Designing Web/Appp interfaces</li>

                                                                                                                                                    <li><span>Web Development</span><br>Web/Appp development</li>

                                                                                                                                                    <li><span>App Development</span><br>Building Android, iOS apps.</li>

                                                                                                                                                 </ul>

                                                                                                                                                </div>

                                                                                                                                              <div class="tab-contents" id="experience">

                                                                                                                                                <ul>
                                                                                                                                                    <li><span>2019-current</span><br>Designed a tip calculator,budget manager,portfolio site using html,css,js.</li>

                                                                                                                                                    

                                                                                                                                                 </ul>

                                                                                                                                                </div>

                                                                                                                                       <div class="tab-contents" id="education">

                                                                                                                                                <ul>
                                                                                                                                                    <li><span>W3schools, from 2019-current</span><br>Took a course in web development online.</li>

                                                                                                                                                   

                                                                                                                                                 </ul>

                                                                                                                                                </div>




                                                                                                                                           
                                                                                    </div>


                                                                    </div>
                                             </div>
                              </div>

<!-----Services Section------->

                               <div id="services">
                                                  <h1 class="sub-title">My Services</h1>
                                                  <div class="services-list">
<div>
<i class="bi bi-code-slash"></i>
<h2>Web Design</h2>
<p>I design responsive and dynamic web sites.</p>
<a href="#">Learn More</a></p>
</div>

<div>
<i class="bi bi-crop"></i>
<h2>UI/UX Design</h2>
<p>I design front end forms,email templates.</p>
<a href="#">Learn More</a></p>
</div>

<div>
<i class="bi bi-app"></i>
<h2>App Design</h2>
<p>I design Web Applications that are customizable.</p>
<a href="#">Learn More</a></p>


</div>


                                                  </div>


                               </div>

<!-----Portfolio Section------->

                                <div id="portfolio">

                                                    <div class="container">
 <h2 class="sub-title">My Work</h2>
<div class="work-list">

<div class="work">

<img src="images/b.jpg" alt="">

<div class="layer">
<h3>Social Media App</h3>
<p>The app connects you to the talented people around the world.Download it from play store.</p>
<a href="#"><i class="bi bi-box-arrow-up-right"></i></a>
</div>

</div>

<div class="work">
<img src="images/c.jpg" alt="">

<div class="layer">
<h3>Music App</h3>
<p>The app connects you to the talented people around the world.Download it from play store.</p>
<a href="#"><i class="bi bi-box-arrow-up-right"></i></a>
</div>


</div>
<div class="work">




<img src="images/a.jpg" alt="">

<div class="layer">
<h3>Online Shopping  App</h3>
<p>The app connects you to the talented people around the world.Download it from play store.</p>
<a href="#"><i class="bi bi-box-arrow-up-right"></i></a>
</div>

</div>


</div>
<a href="#" class="btn">See More</a>


                                                    </div>


                                </div>
<!----Contact Section------->
                             <div id="contact">
                                               <div class="container">
<div class="contact-left">
<h1 class="sub-title">Contact Me</h1>
<div class="social-icons">
<p><i class="bi bi-send"></i>contact@example</p>
<p><i class="bi bi-telephone"></i>+264815488359</p>
<p><i class="bi bi-instagram"></i>@rich_dev</p>
</div>


<a href="documents/resume.pdf" download class="btn btn2">Download CV</a>
<div class="contact-right">

</div>
<form>
<input type="text"name=""placeholder="Your Name" required>
<input type="email"name=""placeholder="Your Email" required>
<textarea name="" rows="6" placeholder="Your Message"></textarea>
<button type="submit" class="btn btn2">Submit</button>
</form>
</div>
<div class="copyright">
<p>Copyright Melvin, Made with<i class="bi bi-heart-fill"></i></p>
</div>


</div>
                                               </div>
                             </div>
</body>
<script src="js/main.js">
</script>

</html>
