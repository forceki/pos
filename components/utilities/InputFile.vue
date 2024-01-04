<template>
    <div>
         <input
            class="relative m-0 block w-full 
                min-w-0 flex-auto cursor-pointer 
                rounded border border-solid 
                border-neutral-300 bg-clip-padding 
                px-3 py-[0.32rem] text-sm font-normal 
                text-gray-400 transition duration-300 
                ease-in-out file:-mx-3 file:-my-[0.32rem] 
                file:cursor-pointer file:overflow-hidden file:rounded-none 
                file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 
                file:px-3 file:py-[0.32rem] file:text-gray-600 file:transition 
                file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] 
                file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-gray-600 
                focus:shadow-te-primary focus:outline-none "
            type="file"
            :id="keyField" @change="changeField($event)"/>
     </div>
</template>



<script>
export default {
    props: {
        keyField: {
            type: String
        }
    },
    methods: {
        changeField(e, key){
            this.$emit('changeField', {
                keyField: this.keyField,
                target: e
            });
        }
    }
}
</script>

<style scoped>
.inputFile-main-cms {
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cccccc;
}

.inputFile-main-cms::file-selector-button {
  height: 35px;
  width: 100px;
  font-family: poppinsRegular;
  color: #636363;
  border-radius: 10px;
  border: 0px solid #cccccc;
  border-right: 1px solid #cccccc;
}
</style>