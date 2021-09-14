<template>
  <module-box class="service-module-box">
    <template v-slot:main>
      <div class="service">
        <div class="module-box-cancel" @click="cancelBack"></div>
        <div class="head">
          <h3>服务说明</h3>
        </div>
        <div class="content">
          <div>
            <h5>72小时发货</h5>
            <p></p>
          </div>
          <div>
            <h5>30天无理由退货</h5>
            <p>物流签收后30天内买家可无理由退货，需满足退货条件</p>
          </div>
          <div>
            <h5>延误必赔</h5>
            <p>极速发货、送货保障，若发货时间晚于商家承诺时间或快递派送时间晚于平台标准，可获得延误补贴。</p>
          </div>
          <div>
            <h5>退货补运费</h5>
            <p>订单退货完成且绑定用于提现的银行卡，根据实际发货与收货地址，预计可获6~18元运费补贴，以实际到账为准。</p>
          </div>
        </div>
      </div>
    </template>
  </module-box>
</template>

<script>
import ModuleBox from 'components/content/moduleBox/ModuleBox.vue'

export default {
  name:'GoodsServiceModuleBox',
  emits:['serviceModuleShow'],
  components:{
    ModuleBox
  },
  data(){
    return {
      falg:true
    }
  },
  methods:{
    cancelBack(){
      this.flag = !this.flag
      this.$emit('serviceModuleShow')
    }
  }
}
</script>

<style>
  .module-box-cancel {
    position: absolute;
    top: 10px;
    right: 0px;
    width: 50px;
    height: 50px;
    background: url('~assets/img/icon/取消.png') top center no-repeat;
    background-size: 15px 15px;
    z-index: 999;
  }
.service-module-box>div {
  top: 45vh;
}
.service-module-box .service {
  width: 100%;
  height: 55vh;
  background-color: #fff;
}
.service-module-box .service .head {
  text-align: center;
  line-height: 30px;
  color: #333;
}
.service-module-box .service .content div{
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-bottom: 10px;
  margin-left: 10px;
  border-bottom: 1px solid #eaeaea;
}
.service .content div h5 {
  color: #666;
  padding: 5px 0px;
}
.service .content div p {
  width: 80vw;
  font-size: 12px;
  
}
</style>