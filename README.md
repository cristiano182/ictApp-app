# ictapp
Aplicativo para compartilhamento de arquivos entre alunos da Unifesp


<img src="https://github.com/cristiano182/ictApp-app/blob/master/preview.mp4" alt="preview" />


# Sobre este projeto
A ideia do aplicativo é:

"Replicar um modelo de pagina que existe no facebook, onde alunos de forma anonima  interagem entre si".

PS: Todo o código pode ser reutilizado para qualquer outro aplicativo que reproduz salas de chat, como foi utilizado WebSockets você pode reutilizar para qualquer outra ideia dentro deste contexto!

# Porque?
Este projeto faz parte do meu portfolio pessoal, por isso, é um projeto que pode ter qualquer comentário sobre o projeto, código, estrutura ou qualquer outra coisa que possa fazer um relatório melhor!

Email-me: olivera.cristiano@unifesp.br

Conecte-se comigo no LinkedIn .

Além disso, você pode usar o seu estilo como desejar, seja para o estudo, seja para fazer uma melhora ou ganhar dinheiro com isso!

É grátis!

# Algumas observações sobre este aplicativo
1 - Faça um cadastro rapido e acesse o aplicativo para navegar entre as paginas.


# Instaladores

Instalador Android .apk : em breve !


# Começando
Pré-requisitos
Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico para executar um aplicativo React-Native, que pode ser encontrado aqui .

Além disso, você precisará do servidor em execução localmente em sua máquina com os dados simulados. Você pode encontrar o servidor e todas as instruções para iniciar o servidor aqui .

# Instalando
Clonando o repositório

$ git clone https://github.com/cristiano182/segredosUnifesp

$ cd segredosUnifesp

Instalando dependências

$ yarn
ou

$ npm install
Conectando o aplicativo com o servidor
1 - Siga as instruções no servidor segredosUnifesp para que o servidor esteja funcionando em sua máquina.

2 - Com o servidor instalado e funcionando, vá para o arquivo /.env.development e edite o valor SERVER_URL para o IP da sua máquina (você pode ter alguns problemas com o localhost se você estiver rodando em um dispositivo físico android).

Deve ser assim:
SERVER_URL = http: // IP_OF_YOUR_MACHINE : 3001 / mind-cast / api / v1
ou
SERVER_URL = http: // localhost: 3001 / mind-cast / api / v1

# Começando
Com todas as dependências instaladas e o ambiente configurado corretamente, agora você pode executar o aplicativo:

react-native run-android

# Construído com
React-Native - Construa o aplicativo nativo usando JavaScript e React

React-Navigation - Roteador

Redux - Gerente do Estado de Reação

Redux-Thunk - middleware de efeitos colaterais para o Redux

Axios - Cliente HTTP

ESlint - Linter

React-Native-Dotenv - Configs do arquivo .env

Babel - JavaScript Compiler

# Contribuindo
Você pode enviar quantos RPs quiser, terei prazer em analisá-los e aceitá-los! E se você tem alguma dúvida sobre o projeto ...

Email-me: oliveira.cristiano@unifesp.br

Conecte-se comigo no LinkedIn

Obrigado!

# Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para detalhes
