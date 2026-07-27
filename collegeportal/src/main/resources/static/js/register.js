document.getElementById('alumniForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const attendingRadio = document.querySelector('input[name="a_attending"]:checked');

    if (!attendingRadio) {
        alert('Please select Yes or No for attending!');
        return;
    }

    const alumniData = {
        name: document.getElementById('a_name').value,
        dob: document.getElementById('a_dob').value,
        department: document.getElementById('a_dept').value,
        gender: document.getElementById('a_gender').value,
        attending: attendingRadio.value
    };

    fetch('http://localhost:8080/api/alumni/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumniData)
    })
        .then(response => response.json())
        .then(data => {
            alert('Alumni details saved successfully!');
            window.location.href = 'view_details.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong!');
        });
});