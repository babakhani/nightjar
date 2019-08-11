<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('temperatures converter') }}
        <a
          href=#
          target="_blank"
          :title="$t('thermometer.svg')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-main>
              <input v-model="inputValue" />
              </p>
              <div>
                <select v-model="selectedUnit" >
                  <option v-for="(unit, key) in units">
                  {{ key }}
                  </option>
                </select>
                <select v-model="outputUnit" >
                  <option v-for="(unit, key) in units">
                  {{ key }}
                  </option>
                </select>
              </div>
              <h6> Result: {{ result }} </h6>
            </q-card-main>
          </q-card>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import Unit from '@/units'
import Converter from 'convert-units'
import UnitConverter from '@/units-converter'

export default {
  name: 'Temperatures',
  data () {
    return {
      selectedUnit: 'cilisiuc',
      outputUnit: 'fahrenheit',
      units: {
        'cilisiuc': 'C',
        'fahrenheit': 'F',
        'kelvin': 'K'
      },
      inputValue: 100
    }
  },
  computed: {
    result () {
      return Converter(parseInt(this.inputValue)).from(this.units[this.selectedUnit]).to(this.units[this.outputUnit])
    }
  }
}
</script>

<style>
a {
  text-decoration : none;
}
</style>
