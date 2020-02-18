<template>
  <div class="comment">
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="用户头像">
      <p>{{ commentInfo.user.uname }}</p>
    </div>
    <div class="comment-content">{{ commentInfo.content }}
    </div>
    <div class="comment-goods">
      <span>{{ commentInfo.created | formatDate}}</span>
      <span
        v-for="(extra, index) of commentInfo.extraInfo"
        :key="index"
      >{{ extra }}</span>
    </div>
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
    },
    filters: {
      formatDate(value) {
        let date = new Date(value * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return year + '-' + month + '-' + day;
      }
    }
  }
</script>

<style scoped>
  .comment {
    box-shadow: 0 1px 2px -1px #b9b9b9;
  }
  .comment-user {
    padding: 5px 8px;
    height: 60px;

    display: flex;
    align-items: center;
  }
  .comment-user img {
    width: 45px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
  }

  .comment-content {
    padding: 5px 8px;
    font-size: 15px;
  }
  .comment-goods {
    padding: 10px 8px;
    font-size: 13px;
    color: #9e9e9e;
  }
  .comment-goods span {
    padding: 5px;
  }
</style>
