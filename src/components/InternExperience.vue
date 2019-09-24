<template>
  <div class="internmsg">
    <h3 class="title">
      实习经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.name" placeholder="公司名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.name" placeholder="公司地址"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input  v-model="form.name" placeholder="你的职位"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input  v-model="form.name" placeholder="所在部门"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="9">
          <el-date-picker type="date" placeholder="起始时间（YYYY-MM）" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="9">
          <el-time-picker placeholder="结束时间（YYYY-MM）" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style scoped>
.internmsg {
  padding: 10px;
  color: #404040;
}
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
</style>