# Exercício 4
from calculate_perimeter import CalculatePerimeter


class Triangle(CalculatePerimeter):
    def __init__(self, side_1: int, side_2: int, side_3: int) -> None:
        self.side_1 = side_1
        self.side_2 = side_2
        self.side_3 = side_3

    def calculate_perimeter(self) -> str:
        return f"O perímetro do triângulo é de {self.side_1 + self.side_2 + self.side_3} cm"


triangle = Triangle(5, 5, 5)
print(triangle.calculate_perimeter())
