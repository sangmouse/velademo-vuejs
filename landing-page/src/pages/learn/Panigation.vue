<template>
    <div>
      <h3>pagination</h3>
      <a-pagination v-model:current="current" :total="500" @change="handleChangePage" />
      <div class="select-page-size">
        <a-select
          ref="select"
          v-model:value="pageSize"
          style="width: 120px; height: 40px"
          :options="options"
          @change="handleChange"
        >
        </a-select>
      </div>
      <ul>
        <li v-for="item in data1" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
    <script>
  import { ref } from "vue";
  export default {
    data() {
      const limit = ( c) => {
        return this.data1.filter((x, i) => {
          if (i <= c - 1) {
            return true;
          }
        });
      };
      const  skip = (c) => {
        return this.data1.filter((x, i) => {
          if (i > c - 1) {
            return true;
          }
        });
      };
      Array.prototype.skip = skip;
      Array.prototype.limit = limit;
   
      return {
        current: ref(6),
        options: [
          {
            value: 5,
            label: 5,
          },
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
          {
            value: 50,
            label: 50,
          },
        ],
        data1: [],
        pageSize:10,
        pageNumber:1,
  
      };
    },
    created() {
      fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((response) => response.json())
        .then((json) => (this.data1 = json))
        .catch((e) => {
          console.error("coloi");
        });
  
  
    },
    methods: {
      handleChangePage(pageNumber) {
          this.pageNumber = pageNumber
          // console.log(this.data1.skip(2).limit(20).length);
      },
      handleChange(value) {
          this.pageSize = value
      },
    },
    computed:{
      data1(){
          return this.data1.skip(this.pageNumber)
          // return this.data1.skip(this.pageNumber*this.pageSize).limit(this.pageSize)
  
      }
    },
    updated() {
      console.log(this.pageSize)
      console.log(this.pageNumber)
  
    },
  
  };
  </script>
  
  