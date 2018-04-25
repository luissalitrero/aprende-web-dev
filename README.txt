https://www.semrush.com/blog/semantic-html5-guide/
https://www.semrush.com/blog/schema-markup-for-company-corporations/
https://www.w3schools.com/tags/default.asp
https://blog.jayway.com/2014/03/28/running-scripts-with-npm/

<h1>Estos son los pasos iniciales a seguir para tener listo el tutorial:</h1>
<ul>
  <li>
    Instalar node y npm.
    Ubuntu:
      sudo apt-get update
      sudo apt-get install nodejs
      sudo apt-get install npm

    Ubuntu con NVM: https://mx.godaddy.com/help/instalar-nodejs-ubuntu-17395
      sudo apt-get update
      sudo apt-get install build-essential libssl-dev
      curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
      source ~/.profile

      nvm ls-remote             // Listar versiones: V6.7.0 v6.8.0 v6.8.1 v6.9.0 v6.9.1 v7.0.0 v7.1.0
      nvm install v8.1.0        // Instalar versión 7.1.0 de nodejs
      nvm use v8.1.0            // Usar la versión 8.1.0 durante la sesión actual
      nvm alias default v8.1.0  // Establecer la versión 8.1.0 como la predeterminada, asignándole el alias "default"

    Windows: http://blog.teamtreehouse.com/install-node-js-npm-windows
    Windows con NVM: https://github.com/coreybutler/nvm-windows
  </li>
  <li>
    Reiniciar la consola command prompt.
  </li>
  <li>
    Verificar la instalación.
    node -v
    npm -v
  </li>
  <li>
    npm run install-dependencies  // Alias para npm install
    // check the autoprefixer option for grunt: https://www.npmjs.com/package/autoprefixer
  </li>
</ul>
