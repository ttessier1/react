
REM adjust to your environment

IF EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\NUL" set NPM=c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\npm.exe
IF NOT EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\NUL" goto no_npm
IF "%1" == "" goto invalid_arguments
IF EXIST %1

pushd "%1"

%NPM install && %NPM% run dev

popd


echo Done
exit /b 0

:invalid_arguments
echo "This batch script requires a parameter for the folder to install
exit /b 1

:no_npm
echo "Can't find npm, not using path variable"
exit /b 1