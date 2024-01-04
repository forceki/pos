<template>
  <div>
     <el-row :gutter="20">
       <el-col :span="6">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>Card 1</span>
           </div>
           <div v-for="o in 4" :key="o" class="text item">
             {{'List item ' + o }}
           </div>
         </el-card>
       </el-col>
       <el-col :span="6">
         <el-card class="box-card" style="background-color: #e3e3e3; color: #4d4d4d;">
           <div slot="header" class="clearfix">
             <span>Card 2</span>
           </div>
           <div v-for="o in 4" :key="o" class="text item">
             {{'List item ' + o }}
           </div>
         </el-card>
       </el-col>
       <el-col :span="6">
         <el-card class="box-card" style="background-color: #c9c9c9; color: #4d4d4d;">
           <div slot="header" class="clearfix">
             <span>Card 3</span>
           </div>
           <div v-for="o in 4" :key="o" class="text item">
             {{'List item ' + o }}
           </div>
         </el-card>
       </el-col>
       <el-col :span="6">
         <el-card class="box-card" style="background-color: #bdbdbd; color: #4d4d4d;">
           <div slot="header" class="clearfix">
             <span>Card 4</span>
           </div>
           <div v-for="o in 4" :key="o" class="text item">
             {{'List item ' + o }}
           </div>
         </el-card>
       </el-col>
     </el-row>
  </div>
 </template>
 
 <script>
  export default {
     data() {
       return {
         number: 0
       }
     },
     methods: {
       increase() {
         this.number++;
       }
     }
  }
 </script>
 
 <style>
  .text {
     font-size: 14px;
  }
 
  .item {
     margin-bottom: 18px;
  }
 
  .clearfix:before,
  .clearfix:after {
     display: table;
     content: "";
  }
  .clearfix:after {
     clear: both
  }
 
  .box-card {
     width: 100%;
  }
 </style>