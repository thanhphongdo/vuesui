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
        <Accordion activeIndex="0" duration="200" ref="acordion" v-on:onOpen="onOpen($event)" class="styled">
            <div class="title">
                <i class="dropdown icon"></i>
                <span>What is a dog?</span>
            </div>
            <div class="content">
                <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                <span>What is a dog?</span>
            </div>
            <div class="content">
                <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </div>
            <div class="title">
                <i class="dropdown icon"></i>
                <span>What is a dog?</span>
            </div>
            <div class="content">
                <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </div>
        </Accordion>
        <div>
            <form>
                <input type="text" name="xxx" />
                <Checkbox v-for="(item, index) in checks" :key="index" v-model="item.checked" v-on:onChecked="console.log($event)" :checked="item.checked" :val="item.value" name="test" label="test here" radio="true"></Checkbox>
                <Dropdown>
                    <div class="text">File</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item">New</div>
                        <div class="item">
                            <span class="description">ctrl + o</span>
                            Open...
                        </div>
                        <div class="item">
                            <span class="description">ctrl + s</span>
                            Save as...
                        </div>
                        <div class="item">
                            <span class="description">ctrl + r</span>
                            Rename
                        </div>
                        <div class="item">Make a copy</div>
                        <div class="item">
                            <i class="folder icon"></i>
                            Move to folder
                        </div>
                        <div class="item">
                            <i class="trash icon"></i>
                            Move to trash
                        </div>
                        <div class="divider"></div>
                        <div class="item">Download As...</div>
                        <div class="item">
                            <i class="dropdown icon"></i>
                            Publish To Web
                            <div class="menu">
                                <div class="item">Google Docs</div>
                                <div class="item">Google Drive</div>
                                <div class="item">Dropbox</div>
                                <div class="item">Adobe Creative Cloud</div>
                                <div class="item">Private FTP</div>
                                <div class="item">Another Service...</div>
                            </div>
                        </div>
                        <div class="item">E-mail Collaborators</div>
                    </div>
                </Dropdown>
            </form>
        </div>
        <div>{{checkedNames}}</div>
        <div>{{checks}}</div>
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
