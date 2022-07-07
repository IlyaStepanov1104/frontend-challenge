axios.defaults.headers.common['x-api-key'] = "c2b4f9b4-b876-49ea-8c7d-c45a3280b695" // Replace this with your API Key
var vm = new Vue({ 
        el: '#app',
        vuetify: new Vuetify(),
        data: {
            images: [{ url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}]
        },
        created(){
            this.loadNextImage();
        } ,
        methods:{
            async loadNextImage(){
                try{
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=jpg', { params: { limit:(this.images.length), size:"square" } })
                    for (var i = 0; i < this.images.length; i++)  {
                        this.images[i].url = response.data[i].url
                        console.log(i, response.data[i].id)
                    }
                    

                }catch(err){
                    console.log(err)
                }
            }
        }
    })