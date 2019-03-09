<template>
<!-- <div id="app">
    <nav class="hide-on-med-and-down">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container main-body">
      <div class="row height-100">
        <div class="col s12 height-100 no-padding">
          <router-view/>
        </div>
      </div>
    </div>
  </div>-->
<div>
    <div class="ui fixed inverted menu">
        <div class="ui container">
            <a href="#" class="header item">
          <img class="logo" src="./assets/images/logo.png">
          Project Name
        </a>
            <a href="#" class="item">Home</a>
            <div class="ui simple dropdown item">
                Dropdown
                <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item" href="#">Link Item</a>
                    <a class="item" href="#">Link Item</a>
                    <div class="divider"></div>
                    <div class="header">Header Item</div>
                    <div class="item">
                        <i class="dropdown icon"></i>
                        Sub Menu
                        <div class="menu">
                            <a class="item" href="#">Link Item</a>
                            <a class="item" href="#">Link Item</a>
                        </div>
                    </div>
                    <a class="item" href="#">Link Item</a>
                </div>
            </div>
        </div>
    </div>

    <div class="ui main text container">
        <div class="ui styled accordion">
            <div class="active title">
                <i class="dropdown icon"></i>
                What is a dog?
            </div>
            <div class="active content">
                <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                What kinds of dogs are there?
            </div>
            <div class="content">
                <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                How do you acquire a dog?
            </div>
            <div class="content">
                <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
                <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
            </div>
        </div>
    </div>

    <div class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
            <div class="ui stackable inverted divided grid">
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 1</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>
                        <a href="#" class="item">Link Two</a>
                        <a href="#" class="item">Link Three</a>
                        <a href="#" class="item">Link Four</a>
                    </div>
                </div>
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 2</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>
                        <a href="#" class="item">Link Two</a>
                        <a href="#" class="item">Link Three</a>
                        <a href="#" class="item">Link Four</a>
                    </div>
                </div>
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 3</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>
                        <a href="#" class="item">Link Two</a>
                        <a href="#" class="item">Link Three</a>
                        <a href="#" class="item">Link Four</a>
                    </div>
                </div>
                <div class="seven wide column">
                    <h4 class="ui inverted header">Footer Header</h4>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
            </div>
            <div class="ui inverted section divider"></div>
            <img src="./assets/images/logo.png" class="ui centered mini image">
            <div class="ui horizontal inverted small divided link list">
                <a class="item" href="#">Site Map</a>
                <a class="item" href="#">Contact Us</a>
                <a class="item" href="#">Terms and Conditions</a>
                <a class="item" href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
</div>
</template>

<style>
body {
    background-color: #ffffff;
}

.ui.menu .item img.logo {
    margin-right: 1.5em;
}

.main.container {
    margin-top: 7em;
}

.wireframe {
    margin-top: 2em;
}

.ui.footer.segment {
    margin: 5em 0em 0em;
    padding: 5em 0em;
}
</style>
