let productLikes = {};

function likeProduct(productName) {
    productLikes[productName] = (productLikes[productName] || 0) + 1;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = $(`#likeCounter-${productName}`);

    if (likeCounter.length) {
        likeCounter.text(`Likes: ${productLikes[productName]}`);
    }
}

function addComment(productName) {
    const commentInput = $(`#comment-${productName}`);
    const commentText = commentInput.val().trim();

    if (commentText !== '') {
        const commentsDiv = $(`#comments-${productName}`);
        commentsDiv.append(`<p>${commentText}</p>`);
        commentInput.val('');
    }
}

$(document).ready(function() {
    function login() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'user' && password === 'user123') {
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password.');
        }
    }

    $('#form button').click(function() {
        login();
    });

    $('#form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        login();
    });
});
