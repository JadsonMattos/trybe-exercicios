# Exercise 1
def add_two_numbers(num1: int, num2: int) -> int:
    return num1 + num2


# Eercise 2
class Person:
    def __init__(self, name: str, age: int, height: float) -> None:
        self.name = name
        self.age = age
        self.height = height


# Exercise 3
class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried {self.capacity} people across {distance} "
            "kilometers."
        )


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"


class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        self.name = name
        self.capacity = 2


my_car = Car(name="Opala", capacity=4)
my_bike = Motorcycle(name="Factor 125")

print(my_car.move(10)) # Car Opala carried 4 people across 10 kilometers.
print(my_bike.move(10)) # Factor 125 carried 2 people across 10 kilometers.


# Exercício 4
class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self) -> None:
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self) -> None:
        print(f"{self.name} faz au au!")


dog = Dog("Rex")
dog.make_sound() # Rex fazendo som
dog.breastfeed() # Rex amamentando
dog.bark() # Rex faz au au!


# Eexrcício 5
class Rectangle:
    def __init__(self, base: int, height: int) -> None:
        self.base = base
        self.height = height

    def calculate_area(self) -> int:
        return self.base * self.height

    def calculate_perimeter(self) -> int:
        return 2 * (self.base + self.height)


# Exercício 6
rectangle = Rectangle(5, 10)
print("Área:", rectangle.calculate_area()) # Área: 50
print("Perímetro:", rectangle.calculate_perimeter()) # Perímetro: 30


# Exercício 7
class MonthlyExpense:
    def __init__(self,
        internet: float,
        grocery: float,
        power: float,
        water: float,
        rent: float
    ) -> None:
        self.internet = internet
        self.grocery = grocery
        self._power = power
        self._water = water
        self.__rent = rent

# Exercício 8
    def get_power(self) -> float:
        return self._power

    def set_power(self, new_power: float) -> None:
        self._power = new_power

    def get_water(self) -> float:
        return self._water

    def set_water(self, new_water: float) -> None:
        self._water = new_water


# Exercício 9
class Product:
    def __init__(self, name: str, price: float) -> None:
        self._name = name
        self._price = price

    def get_description(self) -> None:
        pass

    def get_price(self) -> None:
        pass


class Book(Product):
    def __init__(self, name: str, author: str, price: float) -> None:
        super().__init__(name, price)
        self._author = author

    def get_description(self) -> str:
        return f"{self._name} por {self._author}"

    def get_price(self) -> float:
        return self._price


class DVD(Product):
    def __init__(self, name: str, direction: str, price: float) -> None:
        super().__init__(name, price)
        self._direction = direction

    def get_description(self) -> str:
        return f"{self._name} dirigido por {self._direction}"

    def get_price(self) -> float:
        return self._price


# Exercício 10
def print_details(product: Product) -> None:
    print(f"Descrição: {product.description()}")
    print(f"Preço: {product.price()}")

products = [
    Book("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99),
    DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
]

for product in products:
    print_details(product)

# Saída:
# Descrição: O Senhor dos Anéis por J.R.R. Tolkien
# Preço: 29.99
# Descrição: O Poderoso Chefão dirigido por Francis Ford Coppola
# Preço: 19.99
