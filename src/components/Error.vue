<template>
  <div>
    <h2>{{ errorMessage }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorMessage: String
  }
}
</script>