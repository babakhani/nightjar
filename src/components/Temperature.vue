<template>
  <q-page class="q-pa-lg">
    <div>
      <h4 class="q-mb-md">{{ $t('temperature_msg') }}</h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-lg">
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    <q-input type="number" v-model="inputValue" float-label="Enter Number" />
                  </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="inputUnit"
                       float-label="from base"
                       :options="items"
                       />
                  </div>
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="outputUnit"
                       float-label="to base"
                       :options="items"
                       />
                  </div>
                </div>
                <div class="q-mt-md">
                  <q-btn @click="back" label="Back"/>
                </div>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Temperature',
  data () {
    return { 
      inputUnit: 'F',
      outputUnit: '',
      base: '',
      items: [
        {
          label: 'Fahrenheit',
          value: 'F'
        },
        {
          label: 'Kelvin',
          value: 'K'
        },
        {
          label: 'Rankine',
          value: 'R'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

