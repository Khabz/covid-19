<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <div
          class="page-title-box d-flex align-items-center justify-content-between"
        >
          <h4 class="mb-0 font-size-18">Dashboard</h4>
        </div>
      </div>
      <div class="col-md-12">
        <ol class="breadcrumb m-0">
        <label>Select Country</label>
        <select
          class="form-control"
          v-model="selected_country"
          @click="getStatsByCountry(selected_country)"
        >
          <option
            v-for="(country, index) in countries"
            :key="index"
            :value="country"
          >
            {{ index }}
          </option>
        </select>
      </ol>
      </div>
      <div v-if="selected_country !== null" track-by="id" class="col-xl-12 mt-3">
        <div class="row">
          <div class="col-md-4">
            <div class="card mini-stats-wid bg-warning">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-white">Confirmed Cases</h5>
                    <h4 class="mb-0">{{ results.confirmed.value }}</h4>
                    <p class="text-white">Updated:  {{ moment(results.lastUpdate ).startOf('day').fromNow() }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mini-stats-wid bg-success">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-white">Recovered</h5>
                    <h4 class="mb-0">{{ results.recovered.value }}</h4>
                    <p class="text-white">Updated:  {{ moment(results.lastUpdate ).startOf('day').fromNow() }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mini-stats-wid bg-danger">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-white">Deaths</h5>
                    <h4 class="mb-0">{{ results.deaths.value }}</h4>
                    <p class="text-white">Updated:  {{ moment(results.lastUpdate ).startOf('day').fromNow() }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {
 
  },
  data() {
    return {
      countries: [],
      selected_country: null,
      results: []
    };
  },
  watch: {
    
  },
  methods: {
    getStatsByCountry(val) {
      if(val == null) {
        return null
      } else {
        axios
          .get("https://covid19.mathdro.id/api/countries/" + val)
          .then(response => {
            this.results = response.data;
            console.log(this.results)
          });
      }
    }
  },
  mounted() {
    axios.get("https://covid19.mathdro.id/api/countries").then(response => {
      this.countries = response.data.countries;
    });
  }
};
</script>
