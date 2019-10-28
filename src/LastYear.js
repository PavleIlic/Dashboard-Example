import { Line } from 'vue-chartjs'


export default {
    extends: Line,
    mounted () {
        this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Legend',
            backgroundColor: '#20c997',
            data: [65, 59, 80, 81, 56, 38, 59, 80]
          }
        ]
      })
    }
}