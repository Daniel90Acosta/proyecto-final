const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchClear = document.getElementById('search-clear');

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchForm.submit();
    }
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        searchResults.classList.add('hidden');
        searchResults.classList.remove('block');
        searchResults.innerHTML = '';
    } else {
        fetch('/api/productos/buscar-producto?nombre=' + searchTerm)
            .then(response => response.json())
            .then(data => {
                const productos = data.data;
                if (productos.length === 0) {
                    searchResults.innerHTML = '<p>Producto no encontrado</p>';
                    searchResults.classList.remove('hidden');
                    searchResults.classList.add('block');
                } else {
                    const html = `
                        <table class="table-auto ">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${productos.map(producto => {
                                    return `
                                        <tr>
                                            <td>${producto.nombre}</td>
                                            <td>${producto.precio}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    `;
                    searchResults.innerHTML = html;
                    searchResults.classList.remove('hidden');
                    searchResults.classList.add('block');
                }
            })
            .catch(error => console.error(error));
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchResults.classList.add('hidden');
        searchResults.classList.remove('block');
        searchResults.innerHTML = '';
    }
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.classList.add('hidden');
    searchResults.classList.remove('block');
    searchResults.innerHTML = '';
});