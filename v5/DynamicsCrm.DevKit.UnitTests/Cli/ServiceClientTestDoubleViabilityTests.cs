using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

/// <summary>
/// Documents why TaskServer/TaskWebResource cannot be supplied with a minimal
/// ServiceClient subclass backed by FakeXrmEasy: their concrete dependency's
/// CRUD methods are final virtual members, not overridable extension points.
/// </summary>
[TestClass]
public sealed class ServiceClientTestDoubleViabilityTests
{
    [TestMethod]
    public void ServiceClientCrudMembers_AreFinalVirtualAndCannotBeOverridden()
    {
        Assert.IsFalse(typeof(ServiceClient).IsSealed);

        foreach (var name in new[] { "RetrieveMultiple", "Execute", "Create", "Update", "Delete" })
        {
            var methods = typeof(ServiceClient).GetMethods(BindingFlags.Instance | BindingFlags.Public)
                .Where(m => m.Name == name)
                .ToList();
            Assert.IsTrue(methods.Count > 0, $"Expected ServiceClient.{name}.");
            Assert.IsTrue(methods.All(m => m.IsVirtual && m.IsFinal),
                $"ServiceClient.{name} must remain final virtual; a derived FakeXrmEasy adapter cannot override it.");
        }
    }
}
