const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: 'Hello world!',
        message: 'This is a message'
    }
});
const example = new Vue({
    el: '#example',
    data: {
        title: 'Ahoi!',
        message: 'Land Land Land!',
        name: 'Captain',
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'A placeholder image of animals'
        }
    }
});