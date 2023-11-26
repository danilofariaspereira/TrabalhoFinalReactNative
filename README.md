# TrabalhoFinal-ReactNative

![IMG_5932](https://github.com/danilofariaspereira/TrabalhoFinalReactNative/assets/143275664/af70bc21-4bcf-4b90-9a49-7496aded3563)
![IMG_5934](https://github.com/danilofariaspereira/TrabalhoFinalReactNative/assets/143275664/dc3eddf9-9679-4206-95ff-417aea135971)
![IMG_5933](https://github.com/danilofariaspereira/TrabalhoFinalReactNative/assets/143275664/0f0606e7-1dfe-420b-abf4-b766d23b5b56)


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

