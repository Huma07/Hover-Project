let data = [
    {
        name: 'Huma',
        age: '17'
    },
    {
        name: 'Fozia',
        age: '20'
    },
    {
        name: 'Rubina',
        age: '26'
    },
    {
        name: 'Jamshed',
        age: '22'
    },
    {
        name: 'Asif',
        age: '24'
    },
    {
        name: 'Ameer',
        age: '40'
    },
]

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
})

info.innerHTML = details.join('\n');