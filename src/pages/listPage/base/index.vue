<template>
  <div class="list-common-table">
    <t-row>
      <t-col :span="3" >
        <div  >
          <t-button theme="primary">新建合同</t-button>
          <t-button theme="default">导出合同</t-button>
          <span style="padding-left:10px">已选 2 项</span>
        </div>
      </t-col>
      <t-col :span="5"></t-col>
      <t-col :span="4" >
        <div>
          <t-input
            clearable
            v-model="value"
            placeholder="请输入您需要搜索的内容"
            @clear="onClear"
          >
          </t-input>
        </div>
      </t-col>
    </t-row>
  </div>
</template>

<style scoped lang="less">
@import '@/style/variables.less';
.list-common-table{
  background-color: @bg-color-container;
  padding: 30px 32px;
  border-radius: @border-radius;
}
</style>