function removeTodosItens() {
    this._STORAGE_NAME = 'todo';
    let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));

    var answer = confirm("Deseja limpar a lista?");
    if (answer === true) {

        lista = null;

        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
        location = 'index.html';


    } else {
        return false;
    }



}