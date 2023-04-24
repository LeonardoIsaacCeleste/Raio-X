import os
import serial
from selenium import webdriver
from time import sleep

# TROCAR DEPENDENDO DE QUAL FOR A PORTA (/dev/tty/ACM0, COM5)
serial_port = '/dev/tty/ACM0'
html_file = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), "testeSiteHtml.html")


ser = serial.Serial(serial_port, 9600)
maxRange = ser.readline().decode().strip()  # 0


a = True

while a:
    try:
        maxRange = ser.readline().decode().strip()  # Maximo
        print("Max "+maxRange)
    except:
        a = False

driver = webdriver.Chrome()
driver.get(html_file)
dataAnterior = ser.readline().decode().strip()

while True:
    data = ser.readline().decode().strip()  # leitura da porta serial
    print(f"Valor do encoder: {data}")  # exibição do valor do encode
    if (dataAnterior != data):
        print("movendo")
        driver.execute_script(f"habilitarRolagemHorizontal;")
        driver.execute_script(
            f"moverHorizontalmente("+str(data)+","+str(maxRange)+");")
        driver.execute_script(f"desabilitarRolagemHorizontal();")
        dataAnterior = data
