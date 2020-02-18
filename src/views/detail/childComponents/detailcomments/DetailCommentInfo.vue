<template>
  <div class="detail-comment-info">
   <div class="tab">
     <span>用户评论</span><span>更多</span>
   </div>
   <div class="comments">
     <comment
        v-for="i of detailComments.length >= 3 ? 3 : detailComments.length"
        :key="i"
        :comment-info="detailComments[i - 1]"
      ></comment>
   </div>
  </div>
</template>

<script>
  import Comment from "./Comment";

  export default {
    name: "Detaicomment",
    components: {
      Comment
    },
    props: {
      detailComments: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab {
    height: 43px;
    border-bottom: rgba(223, 223, 223, 0.6)1px solid;
    line-height: 43px;

    display: flex;
    justify-content: space-between;
  }
  .tab span {
    font-size: 15px;
    margin: 0 8px;
  }
</style>
