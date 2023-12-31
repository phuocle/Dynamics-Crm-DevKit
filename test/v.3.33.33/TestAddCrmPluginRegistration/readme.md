# 1. Import **TestAddCrmPluginRegistration** solution
From folder **0.solution**, import solution: **TestAddCrmPluginRegistration_1_0_0_0.zip** to your CRM/CDS dev

>Note: this is the **unmanaged** solution

The imported solution contains:

* Plugin **AccountPlugin** and with these register steps
  * AccountPlugin.PostDeleteAccount
  * AccountPlugin.PreAccountMergeSynchronous
  * AccountPlugin.PreDeleteAccount
* Workflow **CustomWorkflow** with these workflows
  * RetrieveUsers
  * SendUsersMail

# 2. Folder **1.before**
This is the full source code of the solution **TestAddCrmPluginRegistration_1_0_0_0.zip**, we use this source code to convert it work with **DynamicsCrm.DevKit**

# 3. Convert solution to work with **DynamicsCrm.DevKit**

1. Copy the folder **1.before** to the same directory and rename to **2.after**
2. Open the solution **SunFlower** with Visual Studio and Rebuild with all succeeded
3. Open file **PostDeleteAccount.cs** then right-click in Visual Studio and select **Add CrmPluginRegistration** and you get the error\
![TestAddCrmPluginRegistration](images/01.png)
4. Add **DynamicsCrm.DevKit Shared Project** to the solution
5. Continue **Add CrmPluginRegistration** and you get another error if you not add reference **DynamicsCrm.DevKit Shared Project** to **AccountPlugin**\
![TestAddCrmPluginRegistration](images/02.png)
6. Continue **Add CrmPluginRegistration** and you get another error request you install **DynamicsCrm.DevKit.Cli** from NuGet, please find and install it\
![TestAddCrmPluginRegistration](images/03.png)
7. Continue **Add CrmPluginRegistration** and you get request to sign-in to Dynamics CRM/CDS\
![TestAddCrmPluginRegistration](images/04.png)
8. **DynamicsCrm.DevKit** check with your connected Dynamics CRM/CDS connection, and found the plugin **AccountPlugin.PostDeleteAccount**, then add the attribute class **CrmPluginRegistration** to make the plugin step can update and deploy with **DynamicsCrm.DevKit**\
![TestAddCrmPluginRegistration](images/05.png)
> Please check **CrmPluginRegistration** help page to config the plugin step
9. Build solution and run the file **deploy.debug.bat** and you get the error\
![TestAddCrmPluginRegistration](images/06.png)
10. Check the current solution folder and you see there 2 new files **DynamicsCrm.DevKit.Cli.json** and **DynamicsCrm.DevKit.js** and add it as the existing files to your solution
11. Open **DynamicsCrm.DevKit.Cli.json** and update the setting section **plugins**\
![TestAddCrmPluginRegistration](images/07.png)
12. Build your solution and run **deploy.debug.bat** again and you will now see the **DynamicsCrm.DevKit** deploy your plugin to your connected CRM/CDS\
![TestAddCrmPluginRegistration](images/08.png)
13. Continue **Add CrmPluginRegistration** with step: **AccountPlugin.PostUpdateAccount** and you get the error\
![TestAddCrmPluginRegistration](images/09.png)\
This step you should manually add **CrmPluginRegistration** to the class attribute (please check the docs) or try to register this step by **Plugin Registration tool** and try **Add CrmPluginRegistration** again
14. Continue use **Add CrmPluginRegistration** with these step:
* AccountPlugin.PreAccountMergeSynchronous
* AccountPlugin.PreDeleteAccount
15. Now, you converted all steps to use and deploy with **DynamicsCrm.DevKit**
>When you right-click on classes **PreCreateAccount** or **PreUpdateAccount** you **not** see the menu **Add CrmPluginRegistration** because the class have Visual Studio setting **Build Action = None**
16. Deploy and you see the result\
![TestAddCrmPluginRegistration](images/10.png)
17. Continue working the same with the **CustomWorkflow** project with the **DynamicsCrm.DevKit.Cli.json** setting section **workflows**\
![TestAddCrmPluginRegistration](images/11.png)
18. Then run **deploy.debug.bat** to deploy\
![TestAddCrmPluginRegistration](images/12.png)
19. **Congratulations** you converted all your plugin/workflow steps to work with **DynamicsCrm.DevKit** by run the **.bat** file