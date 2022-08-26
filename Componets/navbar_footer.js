const navbar = () => {

      return `<div id="logo">
            <a href="index.html">
                  <img src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/SparkAmerica2020-02-515x65.png"
                        alt="">
            </a>
      </div>
      <div id="category">
            <div id="lists">
                  <ul>
                        <li>
                              <a href="">
                                    JOIN THE MOVEMENT
                              </a>
                        </li>
                        <li>
                              <a href="">
                                    PARTNERS
                              </a>
                        </li>
                        <li>
                              <a href="">
                                    CALENDER
                              </a>
                        </li>
                        <li>
                              <a href="">
                                    THE APP
                              </a>
                        </li>
                        <li>
                              <a href="">
                                    CONTACT US
                              </a>
                        </li>
                        <li>
                              <a href="./registerPage.html">
                                    REGISTER
                              </a>
                        </li>
                  </ul>

                  <ul>
                        <li>
                              <a href="">
                                    <i class="fa-brands fa-square-facebook"></i>
                              </a>
                        </li>
                        <li>
                              <a href="">
                                    <i class="fa-brands fa-instagram"></i>
                              </a>
                        </li>
                  </ul>
            </div>
      </div>`

}



const footer = () =>{
      return ` <div>
      <div>
            <h3>CONTACT US</h3>
            <ul>
                  <li>
                        <a href="">support@sparkamerica.com</a>
                  </li>
                  <li>
                        (888) 330-6891
                  </li>
                  <li>
                        SparkAmerica
                  </li>
                  <li>
                        P.O. Box 123, Oakmont, PA 15139
                  </li>
            </ul>
      </div>

      <div>
            <h3>CONTACT US</h3>
            <ul>
                  <li>
                        <a href="">JOIN THE MOVEMENT</a>
                  </li>
                  <li>
                        <a href="">PARTNERS</a>
                  </li>
                  <li>
                        <a href="">CALENDAR</a>
                  </li>
                  <li>
                        <a href="">THE APP</a>
                  </li>
                  <li>
                       <a href="">CONTACT US</a> 
                  </li>
                  <li>
                        <a href="">REGISTER</a>
                  </li>
            </ul>
      </div>
</div>

      <p id="footer_tag">
            ® 2020 PeopleOne Health. All Rights Reserved.
            </p>`
}


let navbar2 = function(){
      return  `<div class="nav">
      <div id="logo2">
            <a href="index.html">
                  <img src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/SparkAmerica2020-02-515x65.png"
                        alt="">
            </a>
      </div>
      <div>
            <div id="menu_icon_div">
                  <a href="" id="menu_icon">
                        <i onclick="getmenu()" class="fa-solid fa-bars"></i>
                  </a>
            </div>
            <div>
                  <a href="" id="menu_icon_delete">
                        <i onclick="Delete()" class="fa-solid fa-xmark"></i>
                  </a>
            </div>
      </div>
     
    </div>
</div>

<div class="list_of_links">
<ul>
      <li>
            <a href="">
                  JOIN THE MOVEMENT
            </a>
      </li>
      <li>
            <a href="">
                  PARTNERS
            </a>
      </li>
      <li>
            <a href="">
                  CALENDER
            </a>
      </li>
      <li>
            <a href="">
                  THE APP
            </a>
      </li>
      <li>
            <a href="">
                  CONTACT US
            </a>
      </li>
      <li>
            <a href="">
                  REGISTER
            </a>
      </li>
      <li>
            <a href="">
                  <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
                  <i class="fa-brands fa-instagram"></i>
            </a>
      </li>

   
</ul>
</div>`
}


export {navbar, footer, navbar2};