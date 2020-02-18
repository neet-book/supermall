<template>
  <div class="detail-comment-info">
   <div class="tab"></div>
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

</style>
