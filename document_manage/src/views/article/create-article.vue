<!-- 编写文件页面 -->
<template>
    <div>
        <!-- 标题栏 -->
        <el-row type="flex" justify="left" class="subheader-container" style="line-height: normal;">
            <el-col :span='4'><i class="el-icon-files"><span>我要贡献</span></i></el-col>
        </el-row>
        <el-row><hr/></el-row> 

        <div class="createPost-container">
          <!-- 组件信息表单 -->
          <el-form ref="postForm" :model="postForm" :rules="rules">
            <div class="createPost-main-container">
              <!-- 组件标题 -->
              <el-form-item prop="title">
                <el-input placeholder="请输入组件名称" v-model="postForm.title" class="title-container"></el-input>
              </el-form-item>
              <!-- 组件摘要 -->
              <el-form-item prop="shortContent">
                <el-input v-model="postForm.shortContent" placeholder="组件功能简述" :rows="2" type="textarea" class="article-textarea" autosize/>
                <span v-show="contentShortLength" class="word-counter">{{contentShortLength}}字</span>
              </el-form-item>
              <!-- 组件文档 -->
              <el-form-item prop="content" style="margin-top:12px; text-align:left">
                <markdown-toast v-model="postForm.content" :options="{hideModeSwitch:true, previewStyle:'tab', language:'zh-CN',}"/>
              </el-form-item>
              <!-- 组件图片 -->
              <el-form-item prop="image_url" style="margin-top:12px;">
                <upload-img v-model="postForm.image_url"></upload-img>
              </el-form-item>
            </div>
          </el-form>
        </div>
        
    </div>
</template>

<script>
import MarkdownToast from "@/components/MarkdownToast/index";
import UploadImg from "@/components/UploadImg/index";
const defaultForm = {
  title: "", // 组件名称
  author: "",  // 上传者姓名
  shortContent: "",  // 组件简介
  content: "",  // 文档内容
  image_url: "",  // 图片路径

}

export default {
    name: "CreateArticle",
    components: {
      MarkdownToast,
      UploadImg,
    },

    data(){
      const validateRequired = (rule, value, callback) => {
        if (value === "") {
          this.$message({
            message: rule.field + "为必输项",
            type: "error",
          });
          // callback(new Error (rule.field + "为必输项"))
          callback()

        } else {
          callback();
        }
      };
      return{
          postForm: Object.assign({}, defaultForm),
          rules:{
            title: [{validator: validateRequired}],
            shortContent: [{validator: validateRequired}],
            content: [{validator: validateRequired}],
          },
      };
    },
    
    computed: {
      // 统计shortContent的长度
      contentShortLength() {
        return this.postForm.shortContent.length
      },
    }
}
</script>

<style scoped>
/* .el-row{
    line-height: normal;
} */
.subheader-container{
    font-size:25px;
    text-align: left;
}
.subheader-container span{
    padding-left: 5px;
    font-weight: bold;
}
/* .el-form{
    margin:0 auto;
    padding-top: 10px;
} */
.el-form-item {
  margin-bottom: 0;
}

.createPost-container {
  position: relative;
  font-size: 15px;
}
.createPost-main-container {
  padding: 3px 0px 10px 0px;
}

.title-container >>> .el-input__inner{
  height: 30px;
  display: inline-flex !important;
}

.word-counter {
  width: 40px;
  position: absolute;
  right: 20px;
  top: 0px;
}

.article-textarea >>> textarea {
  padding-right: 50px;
}

</style>
