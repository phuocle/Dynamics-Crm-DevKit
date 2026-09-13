using DynamicsCrm.DevKit.Tool.Commands;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    [DoNotParallelize]
    public class CommandSettingsTests
    {
        private readonly Dictionary<string, string> environment = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        private string originalDirectory;
        private string tempTestDirectory;

        [TestInitialize]
        public void ClearDevKitEnvironment()
        {
            foreach (var key in ProjectEnvironment.ConnectionKeys)
            {
                environment[key] = Environment.GetEnvironmentVariable(key);
                Environment.SetEnvironmentVariable(key, null);
            }
            originalDirectory = Directory.GetCurrentDirectory();
            tempTestDirectory = Path.Combine(Path.GetTempPath(), "devkit-tool-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempTestDirectory);
            Directory.SetCurrentDirectory(tempTestDirectory);
        }

        [TestCleanup]
        public void RestoreDevKitEnvironment()
        {
            Directory.SetCurrentDirectory(originalDirectory);
            if (Directory.Exists(tempTestDirectory))
                Directory.Delete(tempTestDirectory, true);

            foreach (var pair in environment)
                Environment.SetEnvironmentVariable(pair.Key, pair.Value);
        }

        [TestMethod]
        public void DecryptSettings_PasswordRequired()
        {
            Assert.IsFalse(new DecryptSettings().Validate().Successful);
            Assert.IsTrue(new DecryptSettings { Password = "x" }.Validate().Successful);
            Assert.AreEqual("--password is required", new DecryptSettings().Validate().Message);
        }

        [TestMethod]
        public void NUglifySettings_SourceAndDestinationRequired()
        {
            Assert.IsFalse(new NUglifySettings().Validate().Successful);
            Assert.AreEqual("--source is required", new NUglifySettings().Validate().Message);
            Assert.AreEqual("--destination is required", new NUglifySettings { Source = "a" }.Validate().Message);
            Assert.IsTrue(new NUglifySettings { Source = "a", Destination = "b" }.Validate().Successful);
        }

        [TestMethod]
        public void CoverageToXmlSettings_AllRequired()
        {
            Assert.AreEqual("--coverage is required", new CoverageToXmlSettings().Validate().Message);
            Assert.AreEqual("--xml is required", new CoverageToXmlSettings { Coverage = "a" }.Validate().Message);
            Assert.AreEqual("--dlls is required", new CoverageToXmlSettings { Coverage = "a", Xml = "b" }.Validate().Message);
            Assert.IsTrue(new CoverageToXmlSettings { Coverage = "a", Xml = "b", Dlls = "c" }.Validate().Successful);
        }

        [TestMethod]
        public void DocumentGeneratorSettings_AllRequired()
        {
            Assert.AreEqual("--conn is required", new DocumentGeneratorSettings().Validate().Message);
            Assert.AreEqual("--folder is required", new DocumentGeneratorSettings { Connection = "a" }.Validate().Message);
            Assert.AreEqual("--solution is required", new DocumentGeneratorSettings { Connection = "a", Folder = "b" }.Validate().Message);
            Assert.IsTrue(new DocumentGeneratorSettings { Connection = "a", Folder = "b", Solution = "c" }.Validate().Successful);
        }

        [TestMethod]
        public void DataverseSettings_IgnoreMachineEnvironmentConnection()
        {
            Environment.SetEnvironmentVariable(ProjectEnvironment.AuthType, "ClientSecret");
            Environment.SetEnvironmentVariable(ProjectEnvironment.Url, "https://org.crm.dynamics.com");
            Assert.IsFalse(new DocumentGeneratorSettings { Folder = "b", Solution = "c" }.Validate().Successful);
        }

        [TestMethod]
        public void DataverseSettings_AcceptProjectEnvironmentConnection()
        {
            var originalDirectory = Directory.GetCurrentDirectory();
            var directory = Path.Combine(Path.GetTempPath(), "devkit-tool-env-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(directory);

            try
            {
                File.WriteAllLines(Path.Combine(directory, ProjectEnvironment.FileName), new[]
                {
                    $"{ProjectEnvironment.AuthType}=ClientSecret",
                    $"{ProjectEnvironment.Url}=https://project.crm.dynamics.com"
                });
                Directory.SetCurrentDirectory(directory);

                Assert.IsTrue(new DocumentGeneratorSettings { Folder = "b", Solution = "c" }.Validate().Successful);
            }
            finally
            {
                Directory.SetCurrentDirectory(originalDirectory);
                Directory.Delete(directory, true);
            }
        }

        [TestMethod]
        public void DocumentCodeGeneratorSettings_OrgRequiredWhenDevOps()
        {
            Assert.AreEqual("--folder is required", new DocumentCodeGeneratorSettings().Validate().Message);
            Assert.AreEqual("--output is required", new DocumentCodeGeneratorSettings { Folder = "a" }.Validate().Message);
            Assert.AreEqual("--org is required when --devops is specified",
                new DocumentCodeGeneratorSettings { Folder = "a", Output = "b", DevOps = "AzureDevOps" }.Validate().Message);
            Assert.IsTrue(new DocumentCodeGeneratorSettings { Folder = "a", Output = "b" }.Validate().Successful);
            Assert.IsTrue(new DocumentCodeGeneratorSettings { Folder = "a", Output = "b", DevOps = "GitHub", Org = "o" }.Validate().Successful);
        }

        [TestMethod]
        public void CreateEntitySettings_AllRequiredAndTypeValidated()
        {
            Assert.AreEqual("--conn is required", new CreateEntitySettings().Validate().Message);
            Assert.AreEqual("--solution is required", new CreateEntitySettings { Connection = "a" }.Validate().Message);
            Assert.AreEqual("--entity is required", new CreateEntitySettings { Connection = "a", Solution = "b" }.Validate().Message);
            Assert.AreEqual("--type is required", new CreateEntitySettings { Connection = "a", Solution = "b", EntityDisplayName = "c" }.Validate().Message);
            Assert.AreEqual(
                "--type must be one of: UserOwned, OrganizationOwned, Activity, Elastic_UserOwned, Elastic_OrganizationOwned",
                new CreateEntitySettings { Connection = "a", Solution = "b", EntityDisplayName = "c", EntityType = "Bogus" }.Validate().Message);
            Assert.IsTrue(new CreateEntitySettings { Connection = "a", Solution = "b", EntityDisplayName = "c", EntityType = "Activity" }.Validate().Successful);
        }

        [TestMethod]
        public void SolutionLayerSettings_AllRequired()
        {
            Assert.AreEqual("--conn is required", new SolutionLayerSettings().Validate().Message);
            Assert.AreEqual("--solutions is required", new SolutionLayerSettings { Connection = "a" }.Validate().Message);
            Assert.IsTrue(new SolutionLayerSettings { Connection = "a", Solutions = "b" }.Validate().Successful);
        }
    }
}
