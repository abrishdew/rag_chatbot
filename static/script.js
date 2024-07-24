document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const questionInput = document.getElementById('question-input');
    const responseDiv = document.getElementById('response');

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({question: questionInput.value})
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.textContent = data.response;
        questionInput.value = ''; // Clear input field after sending
    });
});