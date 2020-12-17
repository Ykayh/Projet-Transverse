<template>
  <div class="algos">
    <div class="algo" v-for="algo in algos" :key="algo">
        <h4>{{algo.name}}</h4>
        <p>{{algo.desciption}}</p>
        <a>Rating: {{algo.rating}}, Comments: {{algo.comments}}</a>
    </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      algos: {
          algo1: {name: "Algo 1", desciption: "Description rapide de l'algo1", rating: 3, comments: 10},
          algo2: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo3: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo4: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo5: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo6: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo7: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo8: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo9: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo10: {name: "Algo 2", desciption: "Description rapide de l'algo2"},
          algo11: {name: "Algo 2", desciption: "Description rapide de l'algo2"}
      }
    }
  }
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}
.algos {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.algo {
    margin: 10px;
    padding: 50px;
    border: 2px solid black;
    border-radius: 10px;
    transform: translateY(0px);
    transition: 0.3s ease;
}

.algo:hover {
    transform: translateY(-10px);
    transition: 0.3s ease;
    background-color: wheat;
    cursor: pointer;
}
</style>