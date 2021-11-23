<!-- 上传图片组件 -->
<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :multiple="ture"
      :show-file-list="false"
      :on-success="handleImageSucess"
      class="img-uploader"
      drag
      action="https://httpbin.org/post">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>
    <!-- 图片预览 -->
    <div class="image-preview">
        <div v-show="imageUrl.length>1" class="image-preview-wrapper">
          <img :src="imageUrl">
          <div class="image-preview-action">
            <i class="el-icon-delete" @click="rmImage" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default{
    name: "UploadImg",
    props:{
      value: {
          type: String,
          default: ""
      }
    },
    data() {
      return {
          dataObj: {},  // 上传图片时的额外参数
      }
    },
    computed: {
      imageUrl() {
        return this.value;
      }
    },
    methods: {  
      rmImage() {
         return this.emitInput('');
      },
      emitInput(val) {
        this.$emit("input", val);
      },
      handleImageSucess(file) {
        this.emitInput(file.files.file);
      }
    }
}
</script>

<style scoped>
.upload-container{
  width: 100%;
  position:relative;
}
.img-uploader {
  width: 35%;
  float: left;
}
.img-uploader >>> .el-upload-dragger {
  width: 250px;
  height: 160px;
}
.image-preview {
  width: 160px;
  height: 158px;
  position: relative;
  border: 1px dashed #d9d9d9;
  float: left;
  margin-left: 50px;
}
.image-preview-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.image-preview-action {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  transition: opacity .3s;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
.image-preview-action:hover {
  opacity: 1;
}
.el-icon-delete {
  font-size: 36px;
  padding-top: 50px;
}

</style>
