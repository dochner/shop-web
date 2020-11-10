<template>
  <div>
    <Header />

    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper">
        <router-view></router-view>
        <!-- container-fluid div Replaced by router-view -->

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../js/components/Header";
import Sidebar from "../js/components/Sidebar.vue";
import Footer from "../js/components/Footer.vue";

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>
    </main>
</template>
