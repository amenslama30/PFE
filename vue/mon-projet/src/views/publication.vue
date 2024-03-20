<template>
    <!-- <Sidebar/> -->
  <div class="container-sm">
    <div class="m-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select a platform</option>
        <option value="1">Facebook</option>
        <option value="2">Instagram</option>
        <option value="3">Twitter</option>
        <option value="4">Github</option>
      </select>
    </div>
    <div class="m-3">
      
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue"
import Sidebar from "@/components/Sidebar.vue"
export default {
  components: {
    Topbar,
    Sidebar
  },
}
</script>
