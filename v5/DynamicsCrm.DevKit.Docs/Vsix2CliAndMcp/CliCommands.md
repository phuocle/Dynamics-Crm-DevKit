```bat
dotnet new sln -n Dev.AllInOne --format slnx
devkit new-project --type Shared --name Dev.AllInOne.Shared --solution Dev.AllInOne.slnx
devkit new-project --type Console --name Dev.AllInOne.Console --solution Dev.AllInOne.slnx
devkit new-project --type ConsoleCore --name Dev.AllInOne.ConsoleCore --solution Dev.AllInOne.slnx
devkit new-project --type Server --name Dev.AllInOne.Server --solution Dev.AllInOne.slnx
devkit new-project --type Package --name Dev.AllInOne.Package --solution Dev.AllInOne.slnx
devkit new-project --type WebResource --name Dev.AllInOne.WebResource --solution Dev.AllInOne.slnx
devkit new-project --type SharedTest --name Dev.AllInOne.Shared.Test --solution Dev.AllInOne.slnx
devkit new-project --type ProxyTypes --name Dev.AllInOne.ProxyTypes --solution Dev.AllInOne.slnx
devkit new-project --type Test --name Dev.AllInOne.Test --solution Dev.AllInOne.slnx
devkit new-project --type UiTest --name Dev.AllInOne.UiTest --solution Dev.AllInOne.slnx --auth OAuth
devkit new-project --type SolutionPackager --name Dev.AllInOne.SolutionPackager --solution Dev.AllInOne.slnx
devkit new-project --type Report --name Dev.AllInOne.Report --solution Dev.AllInOne.slnx
devkit new-project --type WebResourceTs --name Dev.AllInOne.WebResourceTs --solution Dev.AllInOne.slnx
devkit new-item --type LateBound --entity Account --project Dev.AllInOne.Shared --out Dev.AllInOne.Shared\Entities
devkit new-item --type JsForm --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\entities
devkit new-item --type JsWebApi --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\entities
devkit new-item --type Plugin --entity Account --message Create --stage PostOperation --execution Asynchronous --name PostAccountCreateAsynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomAction --entity none --message v4_CustomAction --stage PostOperation --execution Synchronous --name PostNonev4_CustomActionSynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomApi --entity none --message v4_CustomApi --name v4_CustomApiRequest --project Dev.AllInOne.Server
devkit new-item --type Workflow --name SendEmailToTeam --project Dev.AllInOne.Server
devkit new-item --type DataProvider --datasource all_serversql --project Dev.AllInOne.Server
dotnet add Dev.AllInOne.Test\Dev.AllInOne.Test.csproj reference Dev.AllInOne.Server\Dev.AllInOne.Server.csproj
devkit new-item --type Test --name PostAccountCreateAsynchronousTest --test-target Dev.AllInOne.Server.PostAccountCreateAsynchronous --project Dev.AllInOne.Test
devkit new-item --type UiTest --name Login --project Dev.AllInOne.UiTest
devkit new-item --type ResourceString --name Resource --language 1033 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\resources
mkdir Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name download.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name upload.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name download.webresources.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name deploy.datasource.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name devkit.js --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type BatFile --name Plugin-Managed-Identity.ps1 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\bat
devkit new-item --type TsForm --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\entities
devkit new-item --type TsWebApi --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\entities
devkit new-item --type TsDialog --name "Dataverse Dialog Builder Demo" --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\entities
devkit new-item --type JsDialog --name "Dataverse Dialog Builder Demo" --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\entities
devkit new-item --type Report --entity account --name Account.rdl --project Dev.AllInOne.Report
```
