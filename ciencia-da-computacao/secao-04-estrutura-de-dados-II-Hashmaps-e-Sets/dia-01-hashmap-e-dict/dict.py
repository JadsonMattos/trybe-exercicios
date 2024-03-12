import string


employee_registry = {}

employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

dict1 = {}
dict2 = dict()

dict3 = {1: 'name1', 2: 'name2'}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

dict1[14] = 'name1'
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")

# exercício 5
double = {i: i*2 for i in range(3, 21)}

# exercício 7
for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3

print(double)

# exercício 6
count_chars = {}

for char in string:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)
