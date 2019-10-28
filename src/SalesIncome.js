import { Line } from 'vue-chartjs'



export default {
    extends: Line,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            backgroundColor: '#3f6ad8',
            data: [65, 33, 80, 45, 46, 33, 38, 71]
          }
        ]
      })
    }
  }