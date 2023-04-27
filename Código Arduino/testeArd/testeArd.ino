
#include <Encoder.h>
// Define os pinos para o encoder
const int pinA = 2;
const int pinB = 3;

// Define o fator de divisão dos pulsos por rotação
const int divisionFactor = 100;

// Cria o objeto do Encoder
Encoder myEncoder(pinA, pinB);

void setup() {
  // Inicia o serial
  Serial.begin(9600);
}

void loop() {
  // Lê a atual posição do encoder e divide pelo fator
  long encoderPos = myEncoder.read() / divisionFactor;

  // Printa a posição atual do serial
  Serial.println(encoderPos);

  // Espera de um breve período para evitar leituras desnecessárias
  delay(10);
}
