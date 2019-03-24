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
                <Dropdown ref="dropdown" multiple="true">
                    <div class="text">File</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item" data-value="1">New</div>
                        <div class="item" data-value="2">
                            <span class="description">ctrl + o</span>
                            Open...
                        </div>
                        <div class="item" data-value="3">
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
                            <div class="menu left">
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
                <!-- <Selectbox>
                    <div>Slot</div>
                </Selectbox> -->
                <Selectbox ref="selectbox">
                    <select class="ui search fluid dropdown" multiple="" name="country">
                        <option value="">State</option>
                        <option value="AL" selected>Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE" selected>Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA" selected>Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </Selectbox>
                <Selectbox ref="selectbox2" :values="selectValues" multiple="true" fullTextSearch="true" search="true" name="selectbox2" :apiSettings="apiSettings" v-model="select" class="xxx">
                    <!-- <template v-slot:item="row">
                        <div class="item" :class="{disabled: row.item.disabled}" :data-value="row.item.value">{{row.item.name}}</div>
                    </template> -->
                </Selectbox>
            </form>
        </div>
        <div>{{select}}</div>
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
