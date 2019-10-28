import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    mounted () {
        this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Legend',
            backgroundColor: 'lightblue',
            data: [46, 55, 59, 80, 81, 38, 65, 59]
          }
        ]
      })
    }
}
