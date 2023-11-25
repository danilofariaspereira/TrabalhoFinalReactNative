# TrabalhoFinal-ReactNative
![Capturar3](https://github.com/danilofariaspereira/TrabalhoFinalReactNative/assets/143275664/4e762dba-dcbc-4056-97c6-e893b874320a)
![Capturar4](https://github.com/danilofariaspereira/TrabalhoFinalReactNative/assets/143275664/3de829b4-96e7-4511-b53d-4df9cdf4e434)


instalações dependências:

Assync -> npx expo install @react-native-async-storage/async-storage

Navigation -> npm install @react-navigation/native npx expo install react-native-screens react-native-safe-area-context npm install @react-navigation/native-stack

Axios -> npm install axios

Bottom Tabs Navigator -> npm install @react-navigation/bottom-tabs

Json Server -> npm install -g json-server

Ionicons -> npm install --save react-native-vector-icons

-------------------

para rodar o projeto --> npm install e npx expo start
para rodar o Json Server --> npx json-server --host 0.0.0.0 db.json

Obs: Na pasta Services/apiUser/api.tsx, trocar a url a partir do Endereço IPv4 da sua máquina (rodar o comando ipconfig no CMD e pegar o número do Endereço IPv4)
Ex: const url = "http://{Endereço IPv4}:3000/usuarios";

