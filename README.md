# Passo a passo de como foi criado a API do 0
* instalar o node 
* instalar o VsCode
* abrir uma pasta que deseja criar o arquivo abrir o terminal no vscode 
   executar node --version para saber se o node esta instalado
* npm init (inicia o projeto node defini algumas configurações nome ...)

## Projeto iniciado com arquivo package.jason que contem as informações sobre o projeto

## Dependencias que serão utilizadas (5)
- express     (recursos para apps web e mobile reponsavel por configurar as rotas )
- body-parser (realiza o parse/searilização das informações que serão enviadas como respostas atravez das requisições que vamos disponibilizar)
- cors      	( gerencia quem podera fazer as requisições )
- nodemon     ( restarta o servidor de acordo com as alterações realizadas no código )
- morgan	    (log no lado do servidor/ ver todas as requisições que forem realizadas, oque foi  passado o status da requisição)

## Instalar essas depedencias
* npm install express
* npm install body-parser
* npm install cors
* npm install nodemon
* npm install morgan
