//СОХРАНЕНИЕ API КЛЮЧА
axios.defaults.headers.common['x-api-key'] = "c2b4f9b4-b876-49ea-8c7d-c45a3280b695"
var vm = new Vue({ 
        el: '#app',
        vuetify: new Vuetify(),
        //СОХРАНЯЕМ 15 ИЗОБРАЖЕНИЙ
        data: {
            images: [{ url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, 
            { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}, 
            { url: ""}, { url: ""}, { url: ""}, { url: ""}, { url: ""}]
        },
        created(){
            this.loadNextImage();
        } ,
        methods:{
            async loadNextImage(){
                try{
                    //ПОЛУЧЕМ МАССИВ ИЗ 15 СЛУЧАЙНЫХ ИЗОБРАЖЕНИЙ
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=jpg', { params: { limit:(this.images.length), size:"square" } })
                    //СОХРАНЯЕМ В СООТВЕТСТВУЮЩУЮ ЯЧЕЙКУ DATA
                    for (var i = 0; i < this.images.length; i++)  {
                        this.images[i].url = response.data[i].url
                    }
                }catch(err){
                    //ВЫВОДИМ ОШИБКУ В КОНСОЛЬцыц
                    console.log(err)
                }
            }
        }
    })