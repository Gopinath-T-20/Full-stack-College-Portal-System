document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('student_name', document.getElementById('student_name').value);
    formData.append('department', document.getElementById('department').value);
    formData.append('cutoff', document.getElementById('cutoff').value);
    formData.append('marksheet', document.getElementById('marksheet').files[0]);

    fetch('http://localhost:8080/api/admission/apply', {
        method: 'POST',
        body: formData
        // Content-Type header vaikka koodadhu, browser automatic-a set pannidum
    })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                window.location.href = 'application_success.html';
            } else {
                alert('Error: ' + data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong!');
        });
});