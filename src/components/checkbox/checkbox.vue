<template>
    <div class="ui radio checkbox" ref="el">
        <input v-if="elProp.radio" type="radio" name="example" :value="val" @change="check($event)" tabindex="0" ref="checkbox">
        <input v-if="!elProp.radio" type="checkbox" name="example" :value="val" @change="check($event)" tabindex="0" ref="checkbox">
        <label @click="$refs.checkbox.click()">Label</label>
    </div>
</template>
