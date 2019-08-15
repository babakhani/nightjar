<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('Temperatures Converter') }}
        <a
          href=https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
          target="_blank"
          :title="$t('temperature_converter_wiki_icon')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator/>
            <q-card-main>
              <div class="row q-mt-md">
                <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md">
                  <q-input autofocus ref="input" type="text" v-model="inputValue" :float-lable="$t('value_lable')"/>
                </div>
               <div class="col-4 col-lg-6 co-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                <q-select
                   v-model="selectedUnit"
                   :options="units.temperature"
                   >
                </q-select>
                <q-select
                   v-model="outputUnit"
                   :options="units.temperature"
                   >
                </q-select>
                </div>
              <h6> Result: {{ result }} </h6>
              </div>
              <div class="q-mt-lg">
                <q-btn @click="reset" :label="$t('reset')"/>
                  <q-btn @click="back" :label="$t('back')"/>
              </div>
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
import Knowledge from '@/knowledge'

export default {
  name: 'Temperatures',
  data () {
    return {
      selectedUnit: 'C',
      outputUnit: 'F',
      units: Unit,
      inputValue: null
    }
  },
  computed: {
    result () {
      return Knowledge.convert(this.inputValue, this.selectedUnit, this.outputUnit)
    }
  },
  methods: {
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
