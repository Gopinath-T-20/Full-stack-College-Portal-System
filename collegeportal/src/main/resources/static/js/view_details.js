function loadAlumni() {
    fetch('http://localhost:8080/api/alumni')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('alumniTableBody');
            tableBody.innerHTML = "";

            if (data.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='7'>No alumni registered yet.</td></tr>";
                return;
            }

            let sno = 1;
            data.forEach(alumni => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${sno}</td>
                    <td>${alumni.name}</td>
                    <td>${alumni.dob}</td>
                    <td>${alumni.department}</td>
                    <td>${alumni.gender}</td>
                    <td>${alumni.attending}</td>
                    <td><button onclick="deleteAlumni(${alumni.id})">Delete</button></td>
                `;
                tableBody.appendChild(row);
                sno++;
            });
        })
        .catch(error => {
            console.error('Error fetching alumni:', error);
        });
}

function deleteAlumni(id) {
    if (!confirm('Are you sure you want to delete this record?')) return;

    fetch(`http://localhost:8080/api/alumni/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.text())
        .then(data => {
            loadAlumni();
        })
        .catch(error => {
            console.error('Error deleting:', error);
            alert('Delete failed!');
        });
}

loadAlumni();