<template>
  <div class="projectmsg">
    <h3 class="title">
      项目经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.name" placeholder="项目名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.address" placeholder="城市"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input  v-model="form.position" placeholder="你的职位"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input  v-model="form.partment" placeholder="所在部门"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="9">
          <el-date-picker type="date" placeholder="起始时间（YYYY-MM）" v-model="form.dateStart" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="9">
          <el-date-picker placeholder="结束时间（YYYY-MM）" v-model="form.dateEnd" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-row>
        <el-col :span="20">
          <el-form-item>
             <el-tag type="info" style="float:left">内容描述</el-tag>
          </el-form-item>
          <el-form-item>
             <mavon-editor 
              class="mavon-editor" 
              toolbarsBackground="#f6f8fa" 
              defaultOpen="edit"
              v-model="form.internValue"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button  style="float:left; color:#9c9c9c" size="medium" type="text">
          <el-icon class="el-icon-plus" style="color:#ff4f4c; font-weight:bold"></el-icon>
          添加更多项目经历
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button>上一步</el-button>
        <el-button>保存</el-button>
        <el-button type="danger">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProjectExp",
  data() {
    return {
      form: {
        name: "",
        address: "",
        dateStart: "",
        dateEnd: "",
        position: "",
        partment: "",
        internValue: ''
      }
    };
  }
};
</script>

<style scoped>
.mavon-editor {
  min-height: 500px;
}
.projectmsg {
  padding: 10px;
  color: #404040;
  width: 100%;
  overflow: hidden;
}
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
</style>