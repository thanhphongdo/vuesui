<template>
<div ref="el">
    <div v-if="!elProp.hasSlotDefault" class="ui selection dropdown" :class="{multiple}">
        <input :name="elProp.name" type="hidden">
        <slot v-if="elProp.hasSlotIcon" name="icon"></slot>
        <i v-if="!elProp.hasSlotIcon" class="dropdown icon"></i>
        <slot v-if="elProp.hasSlotDefaultText" name="defaultText"></slot>
        <div v-if="!elProp.hasSlotIcon" class="default text">States</div>
        <div v-if="elProp.values" class="menu">
            <!-- <div>{{item.name}}</div> -->
            <template v-for="item in elProp.values">
                <slot name="item" :item="item"></slot>
            </template>
        </div>
    </div>
    <slot v-if="elProp.hasSlotDefault"></slot>
    <template></template>
</div>
</template>
