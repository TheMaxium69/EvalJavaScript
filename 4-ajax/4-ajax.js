$.ajax({
    url: "https://fakerapi.it/api/v1/images?_quantity=1",
    dataType: "json",
    success: function (result) {
        let data = result.data[0];
        $('#title').html(data.title);
        $('#desc').html(data.description);
        $('#image').attr('src', data.url);
    }
});

fetch('https://fakerapi.it/api/v1/images?_quantity=10')
    .then(function(jsonData) {
        return jsonData.json();
    })
    .then(function (result) {
        let images = result.data;
        let multipleContent = document.querySelector('#content-multiple');

        for (const value of images) {
            let h1Card = document.createElement('h1');
            h1Card.innerHTML = value.title;

            let imgCard = document.createElement('img');
            imgCard.setAttribute('src', value.url);

            let descCard = document.createElement('p');
            descCard.innerHTML = value.description;

            multipleContent.appendChild(h1Card);
            multipleContent.appendChild(imgCard);
            multipleContent.appendChild(descCard);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
