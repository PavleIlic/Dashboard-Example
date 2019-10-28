import { Line } from 'vue-chartjs'



export default {
    extends: Line,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Legend',
            backgroundColor: '#f87979',
            data: [65, 59, 80, 81, 46, 55, 38, 59]
          }
        ]
      })
    }
  }