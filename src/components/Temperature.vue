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
                <sub>{{ convertTemperature }}</sub>
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
      outputUnit: 'K',
      inputValue : '',
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
          label: 'Celsius',
          value: 'C'
        },
        {
          label: 'Rankine',
          value: 'R'
        }
      ]
    }
  },
  computed: {
   convertTemperature () {
    var condition = this.inputUnit.concat('-To-', this.outputUnit)
     switch(condition) {
      case 'F-To-K':
      return ((this.inputValue + 459.67)/1.8)
       break;
      case 'F-To-R':
       return (this.inputValue + 459.67)
       break;
      case 'F-To-C':
       return ((this.inputValue - 32) * 5.9 )
       break;
      case 'K-To-F':
       return ((this.inputValue * 1.8) - 459.67)
       break;
      case 'K-To-R':
       return (this.inputValue * 1.8)
       break;
      case 'K-To-C':
       return (this.inputValue - 273.15)
       break;
      case 'R-To-K':
       return (this.inputValue / 1.8)
       break;
      case 'R-To-F':
       return (this.inputValue - 459.67)
       break;
      case 'R-To-C':
       return ((this.inputValue - 491.67) * 5.9 )
       break;
      case 'C-To-F':
       return ((this.inputValue * 9.5) + 32 )
       break;
      case 'C-To-K':
       return (this.inputValue + 273.15 )
       break;
      case 'C-To-R':
       return ((this.inputValue + 273.15) * 9.5 )
       break;
      default:
       console.log('not found')
     } 
   }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

