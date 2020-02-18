<template>
  <div class="comment">
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="用户头像">
      <p>{{ commentInfo.user.uname }}</p>
    </div>
    <div class="comment-content"></div>
    <div class="comment-goods"></div>
    <div class="comment-picture"></div>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>
