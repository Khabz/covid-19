<template>
  <div id="app">
    <div id="layout-wrapper">
      <Navbar />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar
  }
};
</script>
