<template>
  <!-- 作品提交 -->
  <div class="works_submit_container">
    <PublicTitle title="作品提交" />
    <div class="submit_container">
      <div class="submit_item">
        <div class="submit_left flex_center">作品说明书</div>
        <div class="submit_center">
          <div class="center_left">
            <div class="tip_item">队伍介绍</div>
            <div class="tip_item">作品描述</div>
            <div class="tip_item">设计创意说明:明确指出作品的创新关键点</div>
          </div>
          <div class="center_right">
            <template v-if="file.name">
              <span>{{file.name}}</span>
              <span @click="delFile('')" class="del_btn">x</span>
            </template>
          </div>
        </div>
        <div class="submit_right flex_center">
          <PublicButton @clickHandle="clickUploadBtn('0')"
            :disabled="file.name">上传</PublicButton>
          <input type="file" v-show="false" :multiple="false" ref="file0" @change="fileChange">
        </div>
      </div>
      <div class="submit_item">
        <div class="submit_left flex_center">作品介绍</div>
        <div class="submit_center">
          <div class="center_left">
            <div class="tip_item title">包含以下但不限于:</div>
            <div class="tip_item">该产品的设计背景和市场现状分析（1-2p）</div>
            <div class="tip_item">方案展示</div>
            <div class="tip_item">设计亮点</div>
            <div class="tip_item">方案的可实施性说明</div>
          </div>
          <div class="center_right">
            <template v-if="file1.name">
              <span>{{file1.name}}</span>
              <span @click="delFile('1')" class="del_btn">x</span>
            </template>
          </div>
        </div>
        <div class="submit_right flex_center">
          <PublicButton @clickHandle="clickUploadBtn('1')"
            :disabled="file1.name">上传</PublicButton>
          <input type="file" v-show="false" :multiple="false" ref="file1" @change="fileChange1">
          <!-- <i class="iconfont icon-lajitong"></i> -->
        </div>
      </div>
      <div class="submit_item">
        <div class="submit_left flex_center">作品附件</div>
        <div class="submit_center">
          <div class="center_left">
            <div class="tip_item">作品相关附件</div>
          </div>
          <div class="center_right">
            <div class="file_item"
              v-for="(item, index) in file2"
              :key="index">
              <span>{{item.name}}</span>
              <span @click="delFile('2', index)" class="del_btn">x</span>
            </div>
          </div>
        </div>
        <div class="submit_right flex_center">
          <PublicButton @clickHandle="clickUploadBtn('2')">上传</PublicButton>
          <input type="file" v-show="false" :multiple="true" ref="file2" @change="fileChange2">
        </div>
      </div>
    </div>
    <PublicTitle title="作品进度" />
    <div class="current_progress">
      <span>当前进度</span>
      <span class="bold">初筛</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PublicTitle from '@/components/public_title.vue'
import PublicButton from '@/components/public_button.vue'
export default {
  components: {
    PublicTitle,
    PublicButton
  },
  data () {
    return {
      // 作品说明书
      file: {
        name: '',
        file: null
      },
      // 作品介绍
      file1: {
        name: '',
        file: null
      },
      // 作品附件
      file2: []
    }
  },
  methods: {
    ...mapActions(['POST_FILE_UPLOAD']),
    clickUploadBtn (type) {
      console.log('上传类型', type)
      const ref = `file${type}`
      const dom = this.$refs[ref]
      dom && dom.click()
    },
    delFile (type, index) {
      const key = `file${type}`
      console.log(key, type)
      type === '2' ? this[key].splice(index, 1) : (this[key] = { name: '', file: null })
    },
    fileChange (e) {
      const file = e.target.files[0]
      console.log('file:', file)
      const name = file.name
      this.file.name = name
      this.file.file = file
      const dom = this.$refs.file0
      dom.value = ''
    },
    fileChange1 (e) {
      const file = e.target.files[0]
      console.log('file1:', file)
      const name = file.name
      this.file1.name = name
      this.file1.file = file
      const dom = this.$refs.file1
      dom.value = ''
    },
    fileChange2 (e) {
      const files = e.target.files
      console.log('file2:', files)
      files.forEach(file => {
        const name = file.name
        this.file2.push({
          name,
          file
        })
      })
      const dom = this.$refs.file2
      dom.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
  color: #dc1e32;
}
.works_submit_container {
  .flex_center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit_container {
    margin-top: 30px;
    margin-bottom: 50px;
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
        display: flex;
        flex-grow: 1;
        .tip_item {
          line-height: 28px;
          &.title {
            font-weight: bold;
          }
        }
        .center_left {
          flex-grow: 1;
          padding: 20px;
        }
        .center_right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          padding: 20px;
          width: 320px;
          height: 100%;
          border-left: 1px solid #ddd;
          .file_item {
            width: 100%;
          }
          .del_btn {
            margin-left: 20px;
            cursor: pointer;
            font-size: 24px;
            color: red;
          }
        }
      }
      .submit_right {
        border-left: 1px solid #ddd;
        .del_btn {
          user-select: none;
          cursor: pointer;
          margin-left: 20px;
          font-size: 16px;
        }
      }
    }
  }
  .current_progress {
    display: flex;
    justify-content: space-between;

    margin-top: 30px;

    font-size: 16px;
  }
}
</style>
