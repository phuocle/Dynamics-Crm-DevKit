# For C# (.cs)
* Everytime when you reponse, always said 'Hi, I'm GitHub Copilot. I will help you with your prompt Phuoc'
* When I said a 'helper' in prompt, please find in these files name that contains 'Helper'
* Every update, should build the solution to ensure nothing is broken.
* Try to suggest using async/await for asynchronous operations.
* Automatic include hashtag #solution for each prompt
* If used ServiceClient type, the variable name should be 'serviceClient'

# For Solution
* Scan the files for the loaded project in the open solution.

# Develop DynamicsCrm.DevKit.Cli
* If the prompt related to DynamicsCrm.DevKit.Cli, please check the code in these folders only
    * DynamicsCrm.DevKit.Cli
    * DynamicsCrm.DevKit.Shared
* If you found text 'cli' means is said 'DynamicsCrm.DevKit.Cli' project
* If you need build cli, you need use MSBuild to build the solution DynamicsCrm.DevKit.Cli.sln
* If you need run cli, you need check launchSettings.json in DynamicsCrm.DevKit.Cli project
* If I provide build and run profile "server", it means you need build and run DynamicsCrm.DevKit.Cli project with launchSettings.json profile "server"

# Develop DynamicsCrm.DevKit.Tools
* If the prompt related to DynamicsCrm.DevKit.Tools, please check the code in these folders
    * DynamicsCrm.DevKit.Tools
    * DynamicsCrm.DevKit.Shared

# Develop DynamicsCrm.DevKit
* If the prompt related to DynamicsCrm.DevKit, please check the code in these folders
    * DynamicsCrm.DevKit
    * DynamicsCrm.DevKit.Shared

# Develop DynamicsCrm.DevKit.Analyzers
* If the prompt related to DynamicsCrm.DevKit.Analyzers, please check the code
    * DynamicsCrm.DevKit.Analyzers
    * DynamicsCrm.DevKit.Shared

# BUILD PROJECTS/SOLUTION
* After each code change, please build the solution to ensure nothing is broken.
* DON'T use dotnet build, please use MSBuild to build the solution.
* Path to MSBuild: C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe

* ALWAYS use BeastMode.prompt.md in folder .github\prompts for each prompt