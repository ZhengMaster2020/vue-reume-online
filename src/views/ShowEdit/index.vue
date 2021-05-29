<template>
  <div class="document">
    <Header />
    <section class="content">
      <el-row id="resume" class="main">
        <el-col :span="24">
          <el-row class="row">
            <el-col>
              <h1 style="font-weight: bold">{{ baseMsg.name }}</h1>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="24">
              <span class="tag">电话：</span>{{ baseMsg.phone }} | <span class="tag">电话：</span
              >{{ baseMsg.phone }} | <span class="tag">邮箱：</span>{{ baseMsg.email }} |
              <span class="tag">地址：</span>{{ baseMsg.address }}
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="24">
              <span class="tag">个人网址：</span>{{ baseMsg.web }} |
              <span class="tag">wechat：</span> weixin1899855881
            </el-col>
          </el-row>
          <el-row class="row skill">
            <el-col>
              <h2 class="title">专业技能</h2>
              <hr />
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <mavon-editor class="mavon-editor" v-html="skillRenderMsg" :boxShadow="false" />
            </el-col>
          </el-row>
          <el-row class="row intern">
            <el-col>
              <h2 class="title">工作经历</h2>
              <hr />
            </el-col>
          </el-row>
          <el-row v-for="(item, index) in content.internMsg" :key="index">
            <el-col>
              <div class="intern-header">
                <span>{{ item.comName }}</span>
                <span class="intern-position">{{ item.comPosition }}</span>
                <span class="intern-time"> {{ item.dateStart }} 至 {{ item.dateEnd }} </span>
              </div>
            </el-col>
            <el-col>
              <mavon-editor class="mavon-editor" v-html="item.internValue" :boxShadow="false" />
            </el-col>
          </el-row>
          <el-row class="row project">
            <el-col>
              <h2 class="title">项目经历</h2>
              <hr />
            </el-col>
          </el-row>
          <el-row v-for="item in content.projectMsg" :key="item.proName">
            <el-col>
              <div class="intern-header">
                <span> {{ item.proName }} </span>
                <span class="intern-position"> {{ item.proPosition }} </span>
                <span class="intern-position"> {{ item.proPartment }} </span>
                <span class="intern-time"> {{ item.dateStart }} 至 {{ item.dateEnd }} </span>
              </div>
            </el-col>
            <el-col>
              <mavon-editor class="mavon-editor" v-html="item.proValue" :boxShadow="false" />
            </el-col>
          </el-row>

          <el-row class="row education">
            <el-col>
              <h2 class="title">教育经历</h2>
              <hr />
            </el-col>
          </el-row>
          <el-row v-for="item in content.educationMsg" :key="item.eduSchoolName">
            <el-col>
              <div class="intern-header">
                <span> {{ item.eduSchoolName }} </span>
                <span class="intern-position"> {{ item.eduProfession }} </span>
                <span class="intern-position"> {{ item.eduSecCollege }} </span>
                <span class="intern-time"> {{ item.dateStart }} 至 {{ item.dateEnd }} </span>
              </div>
            </el-col>
            <el-col>
              <mavon-editor class="mavon-editor" v-html="item.eduValue" :boxShadow="false" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </section>
    <el-row class="btn">
      <el-col>
        <el-tooltip content="预览" placement="top">
          <el-button
            plain
            circle
            icon="el-icon-view"
            type="success"
            size="mini"
            :disabled="btnDisabled"
            @click="handlePreview"
          />
        </el-tooltip>
        <el-tooltip content="下载" placement="top">
          <el-button
            plain
            circle
            icon="el-icon-download"
            type="success"
            size="mini"
            @click="handleDown"
          />
        </el-tooltip>
      </el-col>
    </el-row>
    <Show ref="show" v-model="visible" @change="handleChange" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../../components/Header'
import Show from './show'
import htmlToPdf from '../../utils/htmlToPdf'
import html2canvas from 'html2canvas'

export default {
  components: { Header, Show },

  data() {
    return {
      content: '',
      value: '',
      visible: false,
      btnDisabled: false
    }
  },

  computed: {
    ...mapState(['baseMsg', 'skillMsg', 'skillRenderMsg', 'internMsg', 'projectMsg'])
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.content = this.$store.state
    },

    async handlePreview() {
      this.visible = true
      this.btnDisabled = true
      const canvas = await html2canvas(document.querySelector('#resume'))
      canvas && this.$refs['show'].onPreview(canvas)
    },

    handleChange(value) {
      this.visible = value
      this.btnDisabled = false
    },

    handleDown() {
      htmlToPdf.downloadPDF(document.querySelector('#resume'))
    },

    //浏览器方式打印
    handleWindowPrint() {
      document.body.innerHTML = document.querySelector('#resume').outerHTML
      //转异步 等待dom元素渲染（样式）完毕在打印
      setTimeout(() => {
        //打印
        window.print()
        //刷新页面
        window.location.reload()
      }, 20)
    }
  }
}
</script>

<style scoped lang="less">
.btn {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  margin: 10px;
}

.intern-time {
  float: right;
  margin-right: 20px;
}

.intern-position {
  margin-left: 20px;
}

.intern-header {
  text-align: left;
  font-size: 14px;
  font-weight: 800;
  margin-left: 20px;
  padding-bottom: 5px;
}

.mavon-editor {
  margin: 0 20px;
  margin-bottom: 5px;
  padding: 5px 0px;
  padding-left: 20px;
  width: 90%;
  border: none;
  min-height: 100px;
}

.tag {
  font-weight: bold;
}

.skill,
.intern,
.project,
.education .title {
  font-weight: bold;
}

.skill,
.intern,
.project,
.education {
  text-align: left;
  display: block;
}

.document {
  position: relative;
  height: 100vh;
  overflow: hidden;

  .content {
    text-align: center;
    margin-top: 20px;
    height: calc(100vh - 76px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .main {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    margin: 20px;
    margin-top: 0;
    background: #fefefe;
  }
}

.row {
  margin: 0 10px;
  padding: 5px 10px;
}
</style>
