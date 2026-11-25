```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.44.44.44 Build: 25.11.2026 18:26:22

```

# Dataverse tests

MSTest runs these tests in memory using DataverseFakes.Community on .NET Framework 4.6.2 (Windows x64). Run `dotnet test` from this project folder.

Use `devkit new-item --type DataverseTest --project <project-name> --test-target <full-class-name>` to add a test. A generated guard test checks the four guards of a standard DevKit plugin. Replace the inconclusive test with an arrangement and an assertion for your application's behavior.

In Visual Studio, select this project or one of its source folders and choose **Add → New Item → 17. C# Dataverse Test Class**. Select the server class to test. [Dataverse Test Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Dataverse-Test-Item-Template)

To test a plugin that trims an account name, assert the new name on the original Target.

```csharp
[TestMethod]
public void PreAccountUpdate_TrimsName()
{
    var target = new Entity("account", Guid.NewGuid()) { ["name"] = "  Contoso  " };

    RunPlugin<TargetComponent>().WithTarget(target).Execute();

    Assert.AreEqual("Contoso", target.GetAttributeValue<string>("name"));
}
```

- Use the alias from the generated test class and add `using System;` and `using Microsoft.Xrm.Sdk;` for this example.
- Use `Seed` to load records and `Service`, `Query<T>` or `GetRecord<T>` to verify changes.
- Use `RunPlugin<T>()` to supply Target, parameters, and registered images. `Execute` returns input, output, and shared variables. Supply a registration index for a class with multiple steps, or use an explicit descriptor.
- Use `ExecuteWorkflow<T>` for activity arguments, `SetDataSource` for virtual table operations, and `MockRequest<T>` for messages that require test-specific responses.
- Use `ReplayPlugin<T>` or `ReplayCompressedPlugin<T>` to replay DevKit context snapshots. Seed the records required by the scenario separately.
- Use `EnablePipelineSimulation` and `RegisterPluginStep<T>` to exercise registered steps through `Service.Create` or `Service.Update`. A table-bound registration uses the proxy's `EntityTypeCode` or metadata supplied by the test.

The generated framework resides in this project. Test classes can use the facade and SDK types directly.
