<template>
    <div class="mt-4 flex justify-between">
        <div style="width: 70px;">
            <client-only>
                <el-select v-model="value" size="small" @change="changeSize">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </client-only>
        </div>
        <client-only>
            <el-pagination
            @current-change="currentChange"
            :current-page.sync="data.current_page"
            :page-size="parseInt(data.per_page)"
            layout="prev, pager, next"
            :total="data.total">
            </el-pagination>
        </client-only>
    </div>
</template>

<script>
export default{
    name : 'pagination',
    props : {
        data : {
            type : Object,
            default : () => {}
        }
    },
    data(){
        return {
            value : 10,
            options: [
                {
                    value: 10,
                    label: '10'
                }, 
                {
                    value: 25,
                    label: '25'
                },
                {
                    value: 50,
                    label: '50'
                }, 
                {
                    value: 100,
                    label: '100'
                },
            ]
        }
    },
    methods : {
        currentChange(value){
            this.$emit('currentChange',value)
        },
        changeSize(value){
            this.$emit('changeSize',value)
        }
    }
}
</script>