<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.name }}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  props: ["comment"],
  methods: {
    del() {
      if (!confirm('您确认要删除当前评论吗?')) return;
      this.$bus.$emit('delComment', this.comment.id);
    }
  }
};
</script>

<style scoped></style>
