<template>
    <v-layout align-start justify-center row fill-height :class="culoareFundal">
       <v-flex xs12 md9 >
            <v-card class="ma-3 " elevation='12'>
                <v-img src='thumb.jpg'
                >
                       <!-- aspect-ratio -->

                </v-img>
            </v-card>
       </v-flex>

    </v-layout>
</template>
<script>
export default {
    data () {
        return {
            culoareFundal:fundal
        }
    }
}
</script>

