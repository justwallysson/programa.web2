#VARIAVEIS E TIPOS BASICOS
nome = "maria"
idade = 25
altura = 1.68
esta_estudando = True

print(nome, idade, altura, esta_estudando)
nome = input("DIgite seu nome: ")
print (f"Ola, {nome} Seja bem vindo!" )

#Soma de dois números
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: ")) 
soma = num1 + num2 
print("A soma é:", soma)

#NUMERO IMPAR OU PAR
numero = int(input("Digite um numero: "))
if numero % 2 == 0:
    print("O numero é par")
else:
    print("O numero é impar")