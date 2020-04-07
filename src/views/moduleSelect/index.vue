<template>
  <div class="module_select_container">
    <el-header class="main_header">
      <MainHeader></MainHeader>
    </el-header>
    <div class="main_contain">
      <div @click="canCreate" class="module_item">
        创建队伍
      </div>
      <div @click="$router.push('/teamhall')" class="module_item">
        加入队伍
      </div>
    </div>
    <el-dialog
      @close="dialogVisible = false"
      :visible="dialogVisible"
      title="创建队伍"
      width="30%"
      >
      <el-form
        ref="createForm"
        :rules="rules"
        :model="formData"
        label-width="80px"
        >
        <el-form-item
          prop="teamName"
          label="队名"
          >
          <el-input
            v-model="formData.teamName"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          prop="province"
          label="省份"
          >
          <el-input
            v-model="formData.province"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          prop="zone"
          label="赛区"
          >
          <el-input
            v-model="formData.zone"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          prop="direction"
          label="作品方向"
          >
          <el-input
            v-model="formData.direction"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          prop="topic"
          label="作品课题"
          >
          <el-input
            v-model="formData.topic"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          label="指导老师"
          >
          <el-input
            v-model="formData.teacherName"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          label="老师电话"
          >
          <el-input
            v-model="formData.teacherPhone"
            size="mini"></el-input>
        </el-form-item>
        <el-form-item
          prop="needs"
          label="招募需求"
          >
          <el-input v-model="formData.needs" resize="none" rows="3" size="mini" type="textarea"></el-input>
        </el-form-item>
        <el-form-item
          prop="intr"
          label="团队介绍"
          >
          <el-input v-model="formData.intr" resize="none" rows="3" size="mini" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" type="danger" @click="createTeam">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
export default {
  components: {
    MainHeader
  },
  data () {
    return {
      dialogVisible: false,
      formData: {
        teamName: '',
        province: '',
        zone: '',
        teacherName: '',
        teacherPhone: '',
        direction: '',
        topic: '',
        needs: '',
        intr: ''
      },
      rules: {
        teamName: [
          { required: true, message: '', trigger: 'blur' }
        ],
        province: [
          { required: true, message: '', trigger: 'blur' }
        ],
        zone: [
          { required: true, message: '', trigger: 'blur' }
        ],
        direction: [
          { required: true, message: '', trigger: 'blur' }
        ],
        topic: [
          { required: true, message: '', trigger: 'blur' }
        ],
        needs: [
          { required: true, message: '', trigger: 'blur' }
        ],
        intr: [
          { required: true, message: '', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    canCreate () {
      if (this.getUser().captainFlag) {
        this.$message.error('你已有队伍')
      } else {
        this.dialogVisible = true
      }
    },
    createTeam () {
      this.$refs.createForm.validate(valid => {
        if (valid) {
          console.log('通过')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .module_select_container {
    width: 100%;
    min-height: 100vh;

    background-color: #f4f5f8;
    .main_header {
      background-color: $bg_color;
    }
    .main_contain {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 1200px;
      height: calc(100vh - 60px);
      margin: 0 auto;
      .module_item {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 400px;
        height: 300px;

        background-color: #fff;
        transition: all .2s linear;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        &:hover {
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-dialog__body {
    padding-bottom: 0;
  }
</style>
