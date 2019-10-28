import { Line } from 'vue-chartjs'



export default {
    extends: Line,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            backgroundColor: '#f7b924',
            data: [33, 80, 24, 81, 46, 55, 38, 59]
          }
        ]
      })
    }
}