void setup() {
  // Inicia o serial
  Serial.begin(9600);

}

void loop() {

  //printa de 0 a 999 pos, indo de 1 em 1
  for (int i =0; i < 1000; i ++) {
    Serial.println(i);
    delay(100);
  }
  //printa de 1000 a 1 pos, indo de 1 em 1
  for (int i =1000; i > 0; i --) {
    Serial.println(i);
    delay(100);
  }

}
