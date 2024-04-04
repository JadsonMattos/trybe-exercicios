# Exercício 3
from typing import Protocol


class CalculatePerimeter(Protocol):
    def calculate_perimeter(self) -> str:
        pass


class Square(CalculatePerimeter):
    def __init__(self, side: int) -> None:
        self.side = side

    def calculate_perimeter(self) -> str:
        return f"O perímetro do quadrado é de {self.side * 4} cm"


square = Square(5)
print(square.calculate_perimeter())
