<template>
<div ref="el" :key="key">
    <div v-if="!elProp.hasSlotDefault" class="ui selection dropdown" :class="{multiple, search}">
        <!-- <input :name="elProp.name" type="hidden"> -->
        <select :multiple="multiple" :name="elProp.name" v-model="selected" style="display: none">
            <template v-for="(item, index) in elProp.values">
                <option v-if="!item.isGroup" :value="item.value" :key="index"></option>
            </template>
        </select>
        <slot v-if="elProp.hasSlotIcon" name="icon"></slot>
        <i v-if="!elProp.hasSlotIcon" class="dropdown icon"></i>
        <slot v-if="elProp.hasSlotDefaultText" name="defaultText"></slot>
        <div v-if="!elProp.hasSlotIcon" class="default text">States</div>
        <div v-if="elProp.values" class="menu">
            <!-- <div>{{item.name}}</div> -->
            <template v-for="(item, index) in elProp.values">
                <slot v-if="!item.isGroup" name="item" :item="item"></slot>
                <div v-if="item.isGroup" :key="index" class="head dropdown-group">{{item.name}}</div>
            </template>
        </div>
    </div>
    <slot v-if="elProp.hasSlotDefault"></slot>
    <template></template>
</div>
</template>
