function loadAdmissions() {
    fetch('http://localhost:8080/api/admission')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('admissionTableBody');
            tableBody.innerHTML = "";

            if (data.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='6'>No admission applications yet.</td></tr>";
                return;
            }

            data.forEach(admission => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${admission.id}</td>
                    <td>${admission.student}</td>
                    <td>${admission.department}</td>
                    <td>${admission.cutoff}</td>
                    <td>${admission.marksheet}</td>
                    <td><button onclick="deleteAdmission(${admission.id})">Delete</button></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching admissions:', error);
        });
}

function deleteAdmission(id) {
    if (!confirm('Are you sure you want to delete this application?')) return;

    fetch(`http://localhost:8080/api/admission/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.text())
        .then(data => {
            loadAdmissions();
        })
        .catch(error => {
            console.error('Error deleting:', error);
            alert('Delete failed!');
        });
}

loadAdmissions();