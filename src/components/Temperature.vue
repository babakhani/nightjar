<template>
  <q-page class="q-pa-lg">
    <div>
      <h4 class="q-mb-md">{{ $t('temperature_msg') }}</h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
              </q-card-main>
           </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Unit from '@/units'
import Converter from 'convert-units'
import UnitConverter from '@/units-converter'
export default {
  name: 'Temperature',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
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
