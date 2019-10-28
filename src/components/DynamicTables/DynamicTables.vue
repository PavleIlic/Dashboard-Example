<template src='./template.html'></template>
<style src="./style.css"></style>

<script>


  export default {
    data() {
      return {
        perPage: 4,
        currentPage: 1,
        selected: 'b',
        search: "",
        helper: [],
        options: [
          { value: 'a', text: '2 items per page' },
          { value: 'b', text: '4 items per page' },
          { value: 'c', text: '6 items per page' }
        ],
        fields:[
            'id', 
            {key:"name", label: "Country"},
            'area',
            'population'
        ],
        items: [          
          { id: 1, country: { name:'Russia', flag: 'img/russia.jpg' }, area: '17,075,200', population: '146,989,754' },
          { id: 2, country: { name:'France', flag: 'img/france.jpg' }, area: '640,679', population: '64,979,548' },
          { id: 3, country: { name:'Germany', flag: 'img/germany.jpg' }, area: '357,114', population: '357,114' },
          { id: 4, country:{ name:'Portugal', flag: 'img/portugal.png' }, area: '92,090', population: '10,329,506' },
          { id: 5, country: { name:'Canada', flag: 'img/canada.jpg' }, area: '9,976,140', population: '36,624,199' },
          { id: 6, country: { name:'Vietnam', flag: 'img/vietnam.jpg' }, area: '331,212', population: '95,540,800' },
          { id: 7, country:{ name:'Brazil', flag: 'img/brazil.png' }, area: '8,515,767', population: '209,288,278' },
          { id: 8, country: { name:'Mexico', flag: 'img/mexico.jpg' }, area: '1,964,375', population: '129,163,276' },
          { id: 9, country: { name:'United States', flag: 'img/USA.png' }, area: '9,629,091', population: '324,459,463' },
          { id: 10, country: { name:'India', flag: 'img/india.png' }, area: '3,287,263', population: '1,324,171,354' },
          { id: 11, country: { name:'Indonesia', flag: 'img/indonesia.jpg' }, area: '1,910,931', population: '263,991,379' },
          { id: 12, country: { name:'Tuvalu', flag: 'img/tuvalu.jpg' }, area: '26', population: '11,097' },
          { id: 13, country: { name:'China', flag: 'img/china.jpg' }, area: '9,596,960', population: '1,409,517,397' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      
    },
    methods:{
      returnResult(){
        this.items = [          
          { id: 1, country: { name:'Russia', flag: 'img/russia.jpg' }, area: '17,075,200', population: '146,989,754' },
          { id: 2, country: { name:'France', flag: 'img/france.jpg' }, area: '640,679', population: '64,979,548' },
          { id: 3, country: { name:'Germany', flag: 'img/germany.jpg' }, area: '357,114', population: '357,114' },
          { id: 4, country:{ name:'Portugal', flag: 'img/portugal.png' }, area: '92,090', population: '10,329,506' },
          { id: 5, country: { name:'Canada', flag: 'img/canada.jpg' }, area: '9,976,140', population: '36,624,199' },
          { id: 6, country: { name:'Vietnam', flag: 'img/vietnam.jpg' }, area: '331,212', population: '95,540,800' },
          { id: 7, country:{ name:'Brazil', flag: 'img/brazil.png' }, area: '8,515,767', population: '209,288,278' },
          { id: 8, country: { name:'Mexico', flag: 'img/mexico.jpg' }, area: '1,964,375', population: '129,163,276' },
          { id: 9, country: { name:'United States', flag: 'img/USA.png' }, area: '9,629,091', population: '324,459,463' },
          { id: 10, country: { name:'India', flag: 'img/india.png' }, area: '3,287,263', population: '1,324,171,354' },
          { id: 11, country: { name:'Indonesia', flag: 'img/indonesia.jpg' }, area: '1,910,931', population: '263,991,379' },
          { id: 12, country: { name:'Tuvalu', flag: 'img/tuvalu.jpg' }, area: '26', population: '11,097' },
          { id: 13, country: { name:'China', flag: 'img/china.jpg' }, area: '9,596,960', population: '1,409,517,397' }
        ]
      },
      searchResult() {
        this.helper = [];
        this.items.forEach(item => {


            if (item.country.name.toLowerCase().indexOf(this.search) > -1)
                  {
                    this.helper.push(item);
                  }else{
                    this.items = [          
                      { id: 1, country: { name:'Russia', flag: 'img/russia.jpg' }, area: '17,075,200', population: '146,989,754' },
                      { id: 2, country: { name:'France', flag: 'img/france.jpg' }, area: '640,679', population: '64,979,548' },
                      { id: 3, country: { name:'Germany', flag: 'img/germany.jpg' }, area: '357,114', population: '357,114' },
                      { id: 4, country:{ name:'Portugal', flag: 'img/portugal.png' }, area: '92,090', population: '10,329,506' },
                      { id: 5, country: { name:'Canada', flag: 'img/canada.jpg' }, area: '9,976,140', population: '36,624,199' },
                      { id: 6, country: { name:'Vietnam', flag: 'img/vietnam.jpg' }, area: '331,212', population: '95,540,800' },
                      { id: 7, country:{ name:'Brazil', flag: 'img/brazil.png' }, area: '8,515,767', population: '209,288,278' },
                      { id: 8, country: { name:'Mexico', flag: 'img/mexico.jpg' }, area: '1,964,375', population: '129,163,276' },
                      { id: 9, country: { name:'United States', flag: 'img/USA.png' }, area: '9,629,091', population: '324,459,463' },
                      { id: 10, country: { name:'India', flag: 'img/india.png' }, area: '3,287,263', population: '1,324,171,354' },
                      { id: 11, country: { name:'Indonesia', flag: 'img/indonesia.jpg' }, area: '1,910,931', population: '263,991,379' },
                      { id: 12, country: { name:'Tuvalu', flag: 'img/tuvalu.jpg' }, area: '26', population: '11,097' },
                      { id: 13, country: { name:'China', flag: 'img/china.jpg' }, area: '9,596,960', population: '1,409,517,397' }
                    ]
                }
        });

          this.items = this.helper;
      },
        fnPerPage(){
            if(this.selected == 'a')
                return this.perPage = 2;
            else if(this.selected == 'b')
                return this.perPage = 4;
            else
                return this.perPage = 6;
        }
    }
}
</script>