/*ZROZUMIENIE KONCEPCJI -------- Wyjaśnienie słowa this/znaczenie/użycie 
- this to słowo kluczowe, które wskazuje na obiekt, w kontekście którego wywołano funkcję;
- odnosi się do obiektu, w kontekście którego wykonano funkcję;
- może wskazywać na różne obiekty w zależności od miejsca i sposobu wywołania funkcji;


 Przykłady
- tworzenie obiektów za pomocą konstruktorów - pozwala na przypisanie właściwości i metod specyficznych
dla danej klasy;


-metody obiektów - odnosi się do obiektu, na którym została wywołana, pozwala na interakcję z innymi
właściwościami i metodami rzeczonego obiektu; */

//ZASTOSOWANIE PRAKTYCZNE

const maciej = {
    username: "Maciej",
    showName() {
        console.log(this.username);
    },
};

maciej.showName();
