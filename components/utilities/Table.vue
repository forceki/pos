<template>
    <div class="my-5">
        <el-table v-bind="{...$attrs}" header-cell-class-name="default-header"> 
            <slot></slot>
        </el-table>
    </div>
</template>
<script>
export default{
    name : 'table-data',
}
</script>