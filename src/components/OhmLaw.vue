<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('ohm_law') }}
        <a
          href=https://en.wikipedia.org/wiki/Ohm%27s_law
          target="_blank"
          :title="$t('ohm_wiki_icon')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-5">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-md">
                  <div class="col-12 col-md-11 col-sm-10 col-xs-12 q-xl-12 q-lg-10 q-mb-md q-pr-md" >
                    <q-input autofocus ref="input" type="text" v-model="voltage" @change="OHM"
                      :float-label="$t('voltage_label')"/>
                  </div>
                </div>
                    <div class="row">
                      <div class="col-12 col-md-11 col-sm-10 col-xs-12 q-xl-12 q-lg-10 q-mb-md q-pr-md" >
                        <q-input type="text" v-model="current" @change="OHM" :float-label="$t('current_label')"/>
                      </div>
                    </div>
                   <div class="row">
                     <div class="col-12 col-md-11 col-sm-10 col-xs-12 q-xl-12 q-lg-10 q-mb-md q-pr-md" >
                       <q-input type="text" :value="newValue" v-model="resistance" :float-label="$t('resistance_label')"/>
                      </div>
                   </div>
                   <q-field> {{OHM}} </q-field>
                   <div class="q-mt-md">
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
import Knowledge from '@/knowledge'

export default {
  name: 'OhmLaw',
  data () {
    return {
      unit: Unit,
      voltage: null,
      current: null,
      resistance: null,
      newValue: this.OHM
    }
  },
  computed: {
    OHM () {
      let out = Knowledge.calculateOHM(this.voltage, this.current)
      return out
    }
  },
  methods: {
    openURL,
    reset () {
      this.voltage = null
      this.current = null
      this.resistance = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
a {
  text-decoration : none;
}
</style>
