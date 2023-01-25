<script>
export default {
  data() {
    return {
      name: '',
      avg: '',
      min: '',
      max: '',
    }
  }
}

</script>

<template>
  <p>The Store Name is {{ name }}, avg is {{ avg  }}, min is {{ min }}, max is{{ max }}</p>
  <label>Enter Name:
    <input v-model="name" placeholder="Store Name" />
  </label>
  <label>Enter avg:
    <input v-model="avg" placeholder="avg" />
  </label>
  <label>Enter min:
    <input v-model="min" placeholder="min" />
  </label>
  <label>Enter max:
    <input v-model="max" placeholder="max" />
  </label>
</template>
