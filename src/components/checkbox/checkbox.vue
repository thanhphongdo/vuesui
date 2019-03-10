<template>
    <div class="ui checkbox" ref="el">
        <input type="checkbox" name="example" :value="val" @change="check($event)">
        <label>Make my profile visible</label>
    </div>
</template>
