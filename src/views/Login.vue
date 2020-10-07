<template>
  <el-row type="flex" justify="center" align="middle" class="wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="手机号/账号:" label-width="100px">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" label-width="100px">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

  <script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.form.username === "" || this.form.password === "") {
        this.$message.warning("账号或者密码不能为空");
        return;
      }
      this.$axios({
        method: "post",
        url: "/login",
        data: this.form,
      }).then((response) => {
        if (response.data.message === "登录成功") {
          localStorage.setItem("token", response.data.data.token);
          this.$message.success(response.data.message);
          this.$router.push("/home");
        }
      });
    },
    reset() {
      this.form = {
        username: "",
        passwrd: "",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
}
</style>