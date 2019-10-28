import { Line } from 'vue-chartjs'



export default {
    extends: Line,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            backgroundColor: '#3ac47d',
            data: [65, 59, 80, 81, 46, 55, 38, 59]
          }
        ]
      })
    }
  }