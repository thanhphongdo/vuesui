<template>
    <div class="ui checkbox" :class="{'radio': elProp.radio }" ref="el">
        <input v-if="elProp.radio" type="radio" :name="elProp.name" :value="elProp.val" @change="check($event)" tabindex="0" ref="checkbox">
        <input v-if="!elProp.radio" type="checkbox" :name="elProp.name" :value="elProp.val" @change="check($event)" tabindex="0" ref="checkbox">
        <label @click="$refs.checkbox.click()">{{elProp.label}}</label>
    </div>
</template>
