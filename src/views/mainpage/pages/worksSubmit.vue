<template>
  <!-- 作品提交 -->
  <div class="works_submit_container">
    <PublicTitle title="作品提交" />
    <div class="submit_container">
      <div class="submit_item">
        <div class="submit_left flex_center">作品说明书</div>
        <div class="submit_center">
          <div class="tip_item">队伍介绍</div>
          <div class="tip_item">作品描述</div>
          <div class="tip_item">设计创意说明:明确指出作品的创新关键点</div>
        </div>
        <div class="submit_right flex_center">
          <span v-if="file.name">
            <span>{{file.name}}</span>
            <span class="del_btn"
              @click="delFile('')">删除</span>
          </span>
          <PublicButton v-else @clickHandle="clickUploadBtn('0')">上传</PublicButton>
          <input type="file" v-show="false" :multiple="false" ref="file0" @change="fileChange">
        </div>
      </div>
      <div class="submit_item">
        <div class="submit_left flex_center">作品介绍</div>
        <div class="submit_center">
          <div class="tip_item title">包含以下但不限于:</div>
          <div class="tip_item">该产品的设计背景和市场现状分析（1-2p）</div>
          <div class="tip_item">方案展示</div>
          <div class="tip_item">设计亮点</div>
          <div class="tip_item">方案的可实施性说明</div>
        </div>
        <div class="submit_right flex_center">
          <span v-if="file1.name">
            <span>{{file1.name}}</span>
            <span class="del_btn"
              @click="delFile('1')">删除</span>
          </span>
          <PublicButton v-else @clickHandle="clickUploadBtn('1')">上传</PublicButton>
          <input type="file" v-show="false" :multiple="false" ref="file1" @change="fileChange1">
        </div>
      </div>
      <div class="submit_item">
        <div class="submit_left flex_center">作品附件</div>
        <div class="submit_center">
          <div class="tip_item">作品相关附件</div>
        </div>
        <div class="submit_right flex_center">
          <span v-if="file2.name">
            <span>{{file2.name}}</span>
            <span class="del_btn"
              @click="delFile('2')">删除</span>
          </span>
          <PublicButton v-else @clickHandle="clickUploadBtn('2')">上传</PublicButton>
          <input type="file" v-show="false" :multiple="false" ref="file2" @change="fileChange2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '@/components/public_title.vue'
import PublicButton from '@/components/public_button.vue'
export default {
  components: {
    PublicTitle,
    PublicButton
  },
  data () {
    return {
      file: {
        file: null,
        name: ''
      },
      file1: {
        file: null,
        name: ''
      },
      file2: {
        file: null,
        name: ''
      }
    }
  },
  methods: {
    clickUploadBtn (type) {
      console.log('上传类型', type)
      const ref = `file${type}`
      const dom = this.$refs[ref]
      dom && dom.click()
    },
    delFile (type) {
      const key = `file${type}`
      this[key].file = null
      this[key].name = ''
    },
    fileChange (e) {
      const file = e.target.files[0]
      console.log('file:', file)
      const name = file.name
      this.file.file = file
      this.file.name = name
    },
    fileChange1 (e) {
      const file = e.target.files[0]
      console.log('file1:', file)
      const name = file.name
      this.file1.file = file
      this.file1.name = name
    },
    fileChange2 (e) {
      const file = e.target.files[0]
      console.log('file2:', file)
      const name = file.name
      this.file2.file = file
      this.file2.name = name
    }
  }
}
</script>

<style lang="scss" scoped>
.works_submit_container {
  .flex_center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit_container {
    margin-top: 30px;
    box-shadow: 1px 2px 5px 1px #D3D3D3;
    .submit_item {
      display: flex;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: unset;
      }
      .submit_left,
      .submit_right {
        display: flex;
        align-items: center;
        width: 200px;
        padding: 0 20px;
      }
      .submit_left {
        border-right: 1px solid #ddd;
      }
      .submit_center {
        flex-grow: 1;
        padding: 20px 40px;
        .tip_item {
          line-height: 28px;
          &.title {
            font-weight: bold;
          }
        }
      }
      .submit_right {
        border-left: 1px solid #ddd;
        .del_btn {
          color: red;
          user-select: none;
          cursor: pointer;
          margin-left: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
