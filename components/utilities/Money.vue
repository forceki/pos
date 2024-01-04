<template>
    <div class="el-input el-input--small" :class="disabled ? 'is-disabled' : ''">
        <money 
            type="text" 
            autocomplete="off" 
            :disabled="disabled"  
            @input="handleInput" 
            :value="value"
            v-on="{
                ...$listeners,
                input: onInput,
                blur: onBlur,
                keydown: onKeydown,
            }" 
            class="el-input__inner" />
    </div>
</template>
<script>
export default{
    name : 'input-money',
    props : {
        value: {
            type: [String, Number],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput ($event) {
            this.$emit('input', $event)
        },
        onBlur($event){
            this.$emit('blur', $event)
        },
        onInput($event){
            this.$emit('input',$event)
        },
        onKeydown($event) {
            if (
                $event.keyCode === 69 ||
                $event.keyCode === 188 ||
                $event.keyCode === 190
            )
            $event.preventDefault() // prevent to type 'e | , | .'
        },
    }
}
</script>