<template>
    <div class="flex flex-col items-center justify-center w-full" id="app">
        <div @dragover="dragover" @dragleave="dragleave" @drop="drop" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
            <input type="file" name="assetsFieldHandle" id="assetsFieldHandle" 
            class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />
            <label v-if="tempPreview == ''" for="assetsFieldHandle" class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PNG or JPG</p>
            </label>

            <img v-else :src="tempPreview" alt="">

        </div>
        <label class="mt-5 text-white">
            {{ filelist.name }}
        </label>
    </div>
</template>
<script>
export default {
    name : "file-upload-drop",
    data () {
        return {
            filelist : "",
            tempPreview : ""
        }
    },
    props: {
        keyField: {
            type: String
        }
    },
    methods: {
        onChange(e, key){
            this.$emit('onChange', {
                keyField: this.keyField,
                target: this.$refs.file.files ? this.$refs.file.files[0] : e.target.files[0]
            });
            this.filelist = this.$refs.file.files[0];
            this.tempPreview = URL.createObjectURL(this.filelist)
        },
        dragover(event) {
            event.preventDefault();
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); 
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        clearPreview(){
            this.tempPreview = ''
            this.$refs.file.files = null
        }
    }

}
</script>
