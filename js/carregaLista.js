function carregaLista() {
    this._STORAGE_NAME = 'todo';

    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    if (lista === null) {
        
    } else {
        return lista;
    }
}