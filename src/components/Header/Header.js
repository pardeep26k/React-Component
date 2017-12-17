import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header id="header">
  <div class="row">

        
      <div class="col-12">

        <a id="logo" class="logo" href="http://nikhtto.in">Pardeep Kumar</a>
        <div class="icon-nav">navigation</div>

        <ul class="social">
          <li class="facebook"><a href="https://www.facebook.com/NJ.Hurrrr" title="Like me on Facebook" target="_blank">facebook</a></li>
          <li class="twitter"><a href="https://twitter.com/pardeepkmar" title="Follow me on Twitter" target="_blank">twitter</a></li>
          <li class="linkedin"><a href="https://in.linkedin.com/in/pardeep26k" title="Connect with me on Linkedin" target="_blank">linkedin</a></li>
        </ul>
        
        <nav>

          <ul id="nav">
<li class="page_item page-item-2 "><a href="http://nikhtto.in/about.php">About</a></li>
<li class="page_item page-item-5 "><a href="http://nikhtto.in/feedback.php">Client Talk</a></li>
<li class="page_item page-item-7 "><a href="http://nikhtto.in/portfolio.php">Portfolio</a></li>
<li class="page_item page-item-11 "><a href="http://nikhtto.in/contact.php">Contact</a></li>
 
          </ul>

        </nav>

      </div>

    </div>

  </header>
    );
  }
}
export default Header;
