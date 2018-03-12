@echo off
..\packages\Microsoft.CrmSdk.CoreTools.$version$\content\bin\coretools\CrmSvcUtil.exe /url:$CrmUrl$ /username:$CrmUserName$ /password:$CrmPassword$ /namespace:$RootNamespace$ /out:GeneratedCode.cs
exit