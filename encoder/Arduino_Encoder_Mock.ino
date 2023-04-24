void setup() {
  // Inicia o serial
  Serial.begin(9600);
}

void loop() {
  // Lê a atual posição do encoder e divide pelo fator
  long encoderPos = 0;
  

  // Printa a posição atual do serial
  for(int i=0;i<=100;i++){
    encoderPos = i;
    Serial.println(encoderPos);
  }
  for(int i=100;i>=0;i--){
    encoderPos = i;
    Serial.println(encoderPos);
  }
  // Espera de um breve período para evitar leituras desnecessárias
  delay(10);
}


