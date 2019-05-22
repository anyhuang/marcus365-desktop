<template>
  <div>
    <a-modal
      :title="title"
      v-model="visible  "
      @ok="handleOk"
      @cancel="handleCancel"
      :confirmLoading="confirmLoading"
    >
      <h1>hello</h1>
    </a-modal>
  </div>
</template>


<script>
  export default {
    name: 'OrderModal',
    data() {
      return {
        visible: false  ,
        confirmLoading: false,
        title: "",

      }
    },
    methods: {
      showModal() {
        this.visible = true;

      },
      handleOk(e) {

      },
      handleCancel(e) {
        this.visible = false
      }
    }
  }
</script>

<style>

</style>
