let data = [
    {
        name: 'Amit',
        Age: '25'
    },

    {
        name: 'Vikas',
        Age: '25'
    },

    {
        name: 'Ranveer',
        Age: '23'
    },

    {
        name: 'Akshay',
        Age: '25'
    },

    {
        name: 'Prabhjot',
        Age: '21'
    },

    {
        name: 'Praveen',
        Age: '27'
    },
];

const info = document.querySelector('#info');

let details  = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.Age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');