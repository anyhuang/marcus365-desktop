<template>
  <a-card class="main">
    <a-button @click="addOrder" style="margin:24px 0" type="primary">添加</a-button>
    <a-table :columns="columns" :dataSource="data">
      <span slot="action">
        <a @click="putOrder">编辑</a>
        <a-divider type="vertical"/>
        <a @click="delOrder">删除</a>
      </span>
    </a-table>
    <OrderModal ref="test" />
  </a-card>
</template>

<script>
  import OrderModal from "../components/OrderModal";

  const data = [
    {
      key: "1",
      orderId: "96206521774",
      platform: 1,
      principal: 100,
      commission: 485,
      date: "1992-10-26"
    },
    {
      key: "2",
      orderId: "96206521775",
      platform: 2,
      principal: 123,
      commission: 455,
      date: "1992-10-26"
    },
    {
      key: "3",
      orderId: "96206521776",
      platform: 3,
      principal: 123,
      commission: 433,
      date: "1992-10-26"
    }
  ];

  const columns = [
    {
      title: "订单号",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "平台",
      dataIndex: "platform",
      key: "platform"
    },
    {
      title: "本金",
      dataIndex: "principal",
      key: "principal"
    },
    {
      title: "佣金",
      dataIndex: "commission",
      key: "commission"
    },
    {
      title: "日期",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "操作",
      key: "action",
      width: 250,
      scopedSlots: {customRender: "action"}
    }
  ];

  export default {
    name: "Order",
    components: {OrderModal},
    data() {
      return {
        data,
        visible:true,
        columns
      };
    },

    created() {
      this.listOrder();
    },

    methods: {
      putOrder() {
      },
      addOrder() {

      },
      delOrder() {
      },
      listOrder() {

      }
    }
  };
</script>

<style scoped>
  .main {
    background-color: white;
    height: 100%;
  }
</style>
