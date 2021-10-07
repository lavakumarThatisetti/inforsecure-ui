<template>
  <div class="container-fluid">
    <h2 class="tagline">"Empowering Indians with their Data for a Better Financial Future"</h2>
    <h2 class="text-left"><b>Our Main Goal</b></h2>
    <h5 class="text-left">
     Our primary goal is to make everyone rich. Most of the people dont have any idea how cashflow 
     works and how to double the income and how to invest and what are the best firms to invest early
     for long term goals and become wealth person.
    </h5>
    <h5 class="text-left">
     Also, Most of the People will invest on firms without having idea. Just investing by seeing some
     Ads and from seeing people around. Without right Strategy will make u poor by losing money 
     instead of rich.
    </h5>
    <h5 class="text-left">
      So, to overcome all the hurdles of what common man is facing financialky we happy to 
      say we are their to help you.  
    </h5>
    <br/>
    <h5 class="text-left">
      <b>If you are looking to manage your wealth without Hussle and Manage you wealth
        by closly monitoring your financial data and to recommend where best ways and best suitable firms
        to invest to become wealth person and beat the Inflation.
      </b>
    </h5>
    <br/>
    <h4 class="text-left">
      <b>A single click away to manage your finance data. To know more about How we are doing
        checkout our <router-link  to="/about"> 
                        <span class="nav_name">About Page</span>
                    </router-link> 
      </b>
    </h4>
    <br/>
    <h2 class="text-left" ><b>Services which we offered</b></h2>
    <div class="row">
      <div class="col-md-3">
        <div class="wrimagecard wrimagecard-topimage">
          <a>
            <div
              class="wrimagecard-topimage_header"
              style="background-color: rgba(187, 120, 36, 0.1)"
            >
              <center>
                <i class="fa fa-university" style="color: #bb7824"></i>
              </center>
            </div>
            <div class="wrimagecard-topimage_title">
              <h4>
                Bank
              </h4>
            </div>
          </a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wrimagecard wrimagecard-topimage">
          <a>
            <div
              class="wrimagecard-topimage_header"
              style="background-color: rgba(22, 160, 133, 0.1)"
            >
              <center>
                <i class="fa fa-hand-holding-medical" style="color: #16a085"></i>
              </center>
            </div>
            <div class="wrimagecard-topimage_title">
              <h4>
                Insurance
                <div class="pull-right badge" id="WrControls"></div>
              </h4>
            </div>
          </a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wrimagecard wrimagecard-topimage">
          <a>
            <div
              class="wrimagecard-topimage_header"
              style="background-color: rgba(213, 15, 37, 0.1)"
            >
              <center>
                <i class="fa fa-money-bill-alt" style="color: #d50f25"></i>
              </center>
            </div>
            <div class="wrimagecard-topimage_title">
              <h4>
                Pension
                <div class="pull-right badge" id="WrForms"></div>
              </h4>
            </div>
          </a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wrimagecard wrimagecard-topimage">
          <a>
            <div
              class="wrimagecard-topimage_header"
              style="background-color: rgba(250, 188, 9, 0.1)"
            >
              <center>
                <i class="fa fa-rupee-sign" style="color: #fabc09"></i>
              </center>
            </div>
            <div class="wrimagecard-topimage_title">
              <h4>
                 Investments
                <div class="pull-right badge" id="WrGridSystem"></div>
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {},
};
</script>
<style lang="css" scoped>
.wrimagecard {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative;
  background: #fff;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  border-radius: 4px;
  transition: all 0.3s ease;
}
.wrimagecard .fa {
  position: relative;
  font-size: 70px;
}
.wrimagecard-topimage_header {
  padding: 20px;
}
a.wrimagecard:hover,
.wrimagecard-topimage:hover {
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
}
.wrimagecard-topimage a {
  width: 100%;
  height: 100%;
  display: block;
}
.wrimagecard-topimage_title {
  padding: 20px 24px;
  height: 80px;
  padding-bottom: 0.75rem;
  position: relative;
}
.wrimagecard-topimage a {
  border-bottom: none;
  text-decoration: none;
  color: #525c65;
  transition: color 0.3s ease;
}
.tagline{
  color:rgb(9, 36, 109);
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
