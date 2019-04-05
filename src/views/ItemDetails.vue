<template>
  <div>
    <ImgModal />
    <ListaEven />
  </div>
</template>

<script>
  import ListaEven from '../components/cListaEven.vue'
  import ImgModal from '../components/cImg&modal.vue'

  
  export default {
    components: {
      ListaEven, ImgModal
  }
  }
</script>
