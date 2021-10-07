<template>
    <header class="header" id="header" @click="showNavBar" >
        <div class="header_toggle" :style="showNavBarcheck ? headerExpand : null"> <i :class="sideToggle" id="header-toggle"></i> </div>
    </header>
    <div class="l-navbar" id="nav-bar" :style="showNavBarcheck ? show : null">
        <nav class="nav">
            <div> 
                <a class="nav_logo"> 
                <span class="nav_logo-name"></span> 
                </a>
                <div class="nav_list"> 
                    <router-link 
                        @click="active = 'personlization'"
                        :class="{active:active === 'personlization'}"
                        class="nav_link" to="/personlization"> 
                        <i class='fab fa-intercom nav_icon'></i>
                        <span class="nav_name">Personlization</span>
                    </router-link> 
                    <router-link 
                        @click="active = 'consent'"
                        :class="{active:active === 'consent'}" 
                        class="nav_link" to="/consent"> 
                        <i class="fas fa-fingerprint nav_icon"></i>
                        <span class="nav_name">Give us Consent</span> 
                    </router-link>
                     <router-link 
                        @click="active = 'fetchData'"
                        :class="{active:active === 'fetchData'}" 
                        class="nav_link" to="/fetchData"> 
                        <i class='fa fa-check-circle nav_icon'></i> 
                        <span class="nav_name">Instant Insights</span> 
                    </router-link>
                     <router-link 
                         @click="active = 'transactions'"
                         :class="{active:active === 'transactions'}" 
                         class="nav_link" to="/transactions">
                         <i class='fa fa-money-bill-alt nav_icon'></i> 
                         <span class="nav_name">Transactions</span>
                    </router-link>
                    <router-link 
                         @click="active = 'stats'"
                         :class="{active:active === 'stats'}" 
                         class="nav_link" to="/stats"> 
                        <i class='fa fa-trophy nav_icon'></i>
                        <span class="nav_name">Stats</span> 
                    </router-link> 
                    <router-link 
                          @click="active = 'profile'"
                          :class="{active:active === 'profile'}"
                          class="nav_link" to="/profile">
                         <i class='fa fa-user nav_icon'></i> 
                         <span class="nav_name">Profile</span> 
                    </router-link> 
                </div>
            </div> 
        </nav>
    </div>
</template>
<script>
import {ref,onMounted} from 'vue';
export default {
  name: 'SideNavBar',
  components:{
      
  },
  setup(){
     const showNavBarcheck = ref(false);
     const sideToggle = ref('fa fa-bars');
     const active = ref(null);
     onMounted( () => {
         
     });
     const showNavBar = () =>{
         sideToggle.value =  sideToggle.value == 'fa fa-bars' ? "fa fa-times":'fa fa-bars';
        if(showNavBarcheck.value){
            console.log("show")
            showNavBarcheck.value  = false;
        }else{
            console.log("hide")
            showNavBarcheck.value  = true;
        }
     }
     return{
         showNavBar,
         showNavBarcheck,
         show: {
              'width': 'calc(var(--nav-width) + 140px)',
              'left': 0
         },
         headerExpand:{
             'padding-left': 'calc(var(--nav-width) + 8rem)'
         },
         sideToggle,
         active
     }
 }
}
</script>

<style>
    :root {
        --header-height: 3rem;
        --nav-width: 75px;
        --first-color: rgb(9, 36, 109);
        --first-color-light: #AFA5D9;
        --white-color: #F7F6FB;
        --normal-font-size: 1rem;
        --z-fixed: 100
   }
</style>
<style scoped>
*,
::before,
::after {
    box-sizing: border-box;
}
a {
    text-decoration: none
}

.header {
    height: var(--header-height);
    position: fixed;
    top: 10.0%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: var(--white-color);
    z-index: var(--z-fixed);
    transition: .5s
}

.header_toggle {
    color: var(--first-color);
    font-size: 1.5rem;
    cursor: pointer
}

.header_img {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden
}

.header_img img {
    width: 40px
}

.l-navbar {
    position: fixed;
    top: 10.0%;
    left: -20%;
    width: var(--nav-width);
    height: 100vh;
    background-color: var(--first-color);
    padding: .8rem 1rem 0 0;
    transition: .5s;
    z-index: var(--z-fixed)
}

.nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.nav_logo,
.nav_link {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 1rem;
    padding: 1rem 0 .5rem 1.5rem
}

.nav_logo {
    margin-bottom: 2rem
}

.nav_logo-icon {
    font-size: 1.25rem;
    color: var(--white-color)
}

.nav_logo-name {
    color: var(--white-color);
    font-weight: 700
}

.nav_link {
    position: relative;
    color: var(--first-color-light);
    margin-bottom: 1.5rem;
    transition: .3s
}

.nav_link:hover {
    color: var(--white-color)
}

.nav_icon {
    font-size: 2.0rem
}
.body-pd {
    padding-left: calc(var(--nav-width) + 1rem)
}

.active {
    color: var(--white-color)
}

.active::before {
    content: '';
    position: absolute;
    left: 0;
    width: 2px;
    height: 32px;
    background-color: var(--white-color)
}

.height-100 {
    height: 100vh
}
@media screen and (min-width: 768px) {

    .header {
        height: calc(var(--header-height) + 1rem);
        padding: 0 2rem 0 calc(var(--nav-width) + 2rem)
    }

    .header_img {
        width: 40px;
        height: 40px
    }

    .header_img img {
        width: 45px
    }

    .l-navbar {
        left: 0;
        padding: 1rem 1rem 0 0
    }

    .show {
        width: calc(var(--nav-width) + 156px)
    }

    .body-pd {
        padding-left: calc(var(--nav-width) + 188px)
    }
}
</style>