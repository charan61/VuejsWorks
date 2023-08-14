const app = Vue.createApp({
    //data , functions
    // template:'<h2>template bro</h2>' 
    data(){
        return{
            url:'https://www.youtube.com/',
            urls:[{url1:'https://www.youtube.com/'},
                  {url1:'https://www.geeksforgeeks.org/'}
                 ],

            booktitle: 'Naruto',
            author:'brandun',
            age:67,
            showbooks:true,
            x:0,
            y:0,
            books:[
                {title: 'Naruto',bookauthor:'brandun'},
                {title: 'Baruto',bookauthor:'csakc'},
                {title: 'onepiece',bookauthor:'hsa'}
            ]
        }
    }
   
    

    ,
    methods:{
        changebooktitle(){
            this.booktitle = 'NARUTO'
        },
        changetitle(title){
            this.booktitle = title
        },
        hideData(){
            this.showbooks = !this.showbooks
        },
        handleevent(e,parameter){
            console.log(e,e.type)

            if(parameter){
                console.log(parameter)
            }
        },
        mousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')