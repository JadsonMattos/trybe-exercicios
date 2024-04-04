# Exercício 1
from abc import ABC, abstractmethod


class Person(ABC):
    @abstractmethod
    def print_role(self) -> None:
        pass


class Seller(Person):
    def print_role(self) -> None:
        print("Meu cargo é de vendedor.")


class Manager(Person):
    def print_role(self) -> None:
        print("Meu cargo é de gerente.")


seller = Seller()
seller.print_role()

manager = Manager()
manager.print_role()


# Exercício 2
class Product:
    def __init__(self, price: float) -> None:
        self.price = price

    def print_price(self) -> None:
        raise NotImplementedError(
            "Classes derivadas de Product precisam implementar o método print_price."
        )


class Book(Product):
    def __init__(self, price: float) -> None:
        super().__init__(price)

    def print_price(self) -> None:
        print(f"O preço do livro é: {self.price}")


book = Book(10)
book.print_price()
