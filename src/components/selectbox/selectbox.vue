<template>
<div ref="el">
    <div v-if="!elProp.hasSlot" class="ui dropdown" :class="{multiple}"></div>
    <slot v-if="elProp.hasSlot"></slot>
    <div></div>
</div>
</template>
