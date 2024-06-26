@echo off
REM adjust to your environment

IF EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\" set NPM=c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\npm.exe
IF NOT EXIST "c:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\" goto no_npm
IF "%1"=="" goto invalid_arguments
IF NOT EXIST %1 goto folder_not_exist

pushd "%1"

call %NPM install && %NPM% run dev

popd


echo Done
exit /b 0

:invalid_arguments
echo This batch script requires a parameter for the folder to install
exit /b 1

:no_npm
echo Can't find npm, not using path variable"
exit /b 1

:folder_not_exist
echo the folder does not exist [%1]
exit /b 1