import os
import serial
from selenium import webdriver

# TROCAR DEPENDENDO DE QUAL FOR A PORTA (/dev/tty/ACM0, COM5)
serial_port = '/dev/ttyACM0'


ser = serial.Serial(serial_port, 9600)
maxRange = ser.read_until().decode('ascii').strip()

driver = webdriver.Chrome()
driver.get('file:/home/thiago/Documentos/projetos/flowih/RaioX-main/ui/index.html')
oldData = ser.read_until().decode('ascii').strip()

can_move = True
debug = True

while can_move:
    try:
        data = ser.read_until().decode('ascii').strip()  # leitura da porta serial
        print("Pos: "+data)
        driver.execute_script(f"habilitarRolagemHorizontal;")
        if not debug:
            driver.execute_script(
                f"moverHorizontalmente("+str(data)+","+str(maxRange)+");")
            driver.execute_script(f"desabilitarRolagemHorizontal();")
        oldData = data
    except Exception as e:
        print(e)
        can_move = False
