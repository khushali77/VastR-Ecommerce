import React from "react";

function Footer(){
    return(
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">The primary objective of our project is to build a Software as a Service(SaaS) that removes the gap between the sellers and the buyers which exists in the physical shopping system . This enables for the buyers to shop from anywhere across the country and get the product delivered at their doorstep with ease and convenience. Along with that it enables the sellers to get countrywide reach and scope of customers overcoming all the boundaries. Apart from this our project is aimed to provide an extremely user friendly platform which is very easy to access helping the new customers to become acquainted with the website. Also our aim is to improve efforts on both the sellers and buyers side by including an online payment gateway which transfers funds directly from buyers wallet to sellers.Along with these our objective is also to provide a reliable system with minimum scope of failure and best user experience.</p>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">Men</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">Women</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">Kids</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Traditionals</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Western</a></li>
                </ul>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by<a href="#"> Vastra.com</a>.
                </p>
              </div>
    
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer;