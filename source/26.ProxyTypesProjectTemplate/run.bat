@echo off
..\packages\Microsoft.CrmSdk.CoreTools.$versionCoreTools$\content\bin\coretools\CrmSvcUtil.exe /url:$CrmUrl$ /interactivelogin /namespace:$RootNamespace$ /out:GeneratedCode.cs
exit