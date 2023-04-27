import serial
from selenium import webdriver
import os

caminho = "file:"+os.path.dirname(os.path.abspath(__file__))+ "/Site/testeSiteHtml.html"

porta = 'COM5'

ser = serial.Serial(porta, 9600)

maxRange = ser.read_until().decode('ascii').strip()

a = True
while a:
    try:
        maxRange = ser.read_until().decode('ascii').strip() #Maximo
        print("Max "+maxRange)
    except:
        a=False
driver = webdriver.Chrome()

driver.get(caminho)

dataAnterior = ser.read_until().decode('ascii').strip()

while True:
    data = ser.readline().decode().strip()  # leitura da porta serial
    print(f"Valor do encoder: {data}")  # exibição do valor do encode
    if(dataAnterior != data):
        driver.execute_script(f"moverHorizontalmente("+str(data)+","+str(maxRange)+");")
        dataAnterior = data
