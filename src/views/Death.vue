<template>
  <div class="death">
    <div class="row">
      <div class="col-12">
        <div
          class="page-title-box d-flex align-items-center justify-content-between"
        >
          <h4 class="mb-0 font-size-18">Death Cases</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Total Death Cases</h4>
            <div class="row">
              <div class="col-sm-6">
                <h3 class="text-danger">{{ death_cases.value }}</h3>
                <p class="text-muted">
                  Updated <br />
                  <span class="text-success mr-2">
                    {{ moment(latest_update).startOf('day').fromNow() }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Death Stats By Country</h4>
              <label>Select Country</label>
              <select v-model="selected_country" 
                      @click="getDeathByCountry(selected_country)" 
                      class="form-control form-control-sm">
                <option v-for="(country, index) in countries" 
                        :value="country" 
                        :key="index">
                        {{index}}
                </option>
              </select>
            <div v-if="results.deaths !== ''" class="row">
              <div class="col-sm-6 mt-3">
                <h3 class="text-danger">{{ results.deaths }}</h3>
                <p class="text-muted">
                  Updated <br />
                  <span class="text-success mr-2">
                    {{ moment(results.latest_update).startOf('day').fromNow() }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="clearfix"></div>
            <DeathMap />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mt-3">
        
      </div>
    </div>
  </div>
</template>

<script>
import DeathMap from "@/components/DeathMap";
import axios from 'axios'

export default {
  name: "Death",
  components: {
    DeathMap
  },
  data() {
    return {
      countries: [],
      results: {
        deaths: '',
        latest_update: Date
      },
      selected_country: '',
      death_cases: Number,
      latest_update: Date
    };
  },
  methods: {
    getDeathByCountry(val) {
      if(val == null) {
        return null
      } else {
        axios
          .get("https://covid19.mathdro.id/api/countries/" + val)
          .then(response => {
            this.results.deaths = response.data.deaths.value
            this.results.latest_update = response.data.lastUpdate
          });
      }
    }
  },
  mounted() {
    axios.get('https://covid19.mathdro.id/api').then(response => {
      this.death_cases = response.data.deaths
      this.latest_update = response.data.lastUpdate
    });
    axios.get("https://covid19.mathdro.id/api/countries").then(response => {
      this.countries = response.data.countries;
    });
  },
};
</script>
