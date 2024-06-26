REM @echo off
REM adjust to your environment

IF EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\" set NODE="c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\node.exe"

IF EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\" set NPM="c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\npm.cmd"

IF NOT EXIST node_modules\npm\bin\npm-cli.js goto instalL_npm

:after_npm_install

IF %NPM% == "" goto no_npm
IF "%1" == "" goto invalid_arguments
IF EXIST %1 goto directory_already_exists

%NODE% node_modules\npm\bin\npm-cli.js version
IF NOT "%ERRORLEVEL%"=="0" goto fail_execute_npm

%NODE% node_modules\npm\bin\npm-cli.js create vite@latest "%1" -- --template react
IF NOT "%ERRORLEVEL%"=="0" goto fail_execute_npm
echo Created %1 environment
pushd "%1"

goto install_npm_subdir
:after_install_npm_subdir

%NODE% node_modules\npm\bin\npm-cli.js install && %NODE% node_modules\npm\bin\npm-cli.js run dev
IF NOT "%ERRORLEVEL%"=="0" echo Something went wrong with install or devrun
popd


echo Done
exit /b 0

:invalid_arguments
echo This batch script requires a parameter for the folder to install
exit /b 1

:no_npm
echo Can't find npm, not using path variable
exit /b 1

:directory_already_exists
echo The folder [%1] already exists
exit /b 1

:no_npm
echo NPM [%NPM%] is empty
exit /b 1

:fail_execute_npm
echo Failed to execute npm
exit /b 1

:install_npm
CALL %npm% install npm
goto after_install_npm

:install_npm_subdir
CALL %npm% install npm
goto after_install_npm_subdir