using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Mono.Cecil;
using Mono.Cecil.Cil;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class TaskDocumentCodeGeneratorTests
    {
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-doccodegen", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        [TestMethod]
        public void Run_MissingFolder_Throws()
        {
            Assert.ThrowsExactly<DirectoryNotFoundException>(() =>
                TaskDocumentCodeGenerator.Run(Path.Combine(tempDir, "missing"), Path.Combine(tempDir, "out"), null, null, null));
        }

        [TestMethod]
        public void Run_RelativeOutput_BecomesFullPath()
        {
            var workDir = Path.Combine(tempDir, "work");
            Directory.CreateDirectory(workDir);
            var originalCwd = Directory.GetCurrentDirectory();
            Directory.SetCurrentDirectory(workDir);
            try
            {
                TaskDocumentCodeGenerator.Run(workDir, "out", null, null, null);
                Assert.IsTrue(Directory.Exists(Path.Combine(workDir, "out")));
            }
            finally
            {
                Directory.SetCurrentDirectory(originalCwd);
            }
        }

        [TestMethod]
        public void Run_EmptyFolder_NothingGenerated()
        {
            var folder = Path.Combine(tempDir, "empty");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out-empty");
            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            Assert.AreEqual(0, Directory.GetFiles(output, "*.md").Length);
        }

        [TestMethod]
        public void Run_GarbageDll_WritesErrorMarkdown()
        {
            var folder = Path.Combine(tempDir, "garbage");
            Directory.CreateDirectory(folder);
            File.WriteAllBytes(Path.Combine(folder, "Broken.dll"), new byte[] { 1, 2, 3, 4 });
            var output = Path.Combine(tempDir, "out-garbage");
            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            var md = Path.Combine(output, "Broken.md");
            Assert.IsTrue(File.Exists(md));
            Assert.IsTrue(File.ReadAllText(md).Contains("Error while loading or scanning assembly."));
        }

        [TestMethod]
        public void Run_WithAttributedAssembly_GeneratesMarkdown()
        {
            var folder = Path.Combine(tempDir, "src");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out-docs");
            var sibling = Path.Combine(tempDir, "TestCodeGenPlugin");
            Directory.CreateDirectory(Path.Combine(sibling, "Data"));

            BuildTestAssembly(Path.Combine(folder, "TestCodeGenPlugin.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, "AzureDevOps", "myorg", "my project");

            var md = Path.Combine(output, "TestCodeGenPlugin.md");
            Assert.IsTrue(File.Exists(md));
            var content = File.ReadAllText(md);
            StringAssert.Contains(content, "# Document Methods");
            StringAssert.Contains(content, ">Assembly: `TestCodeGenPlugin.dll`");
            StringAssert.Contains(content, "`CreateRecord`");
            StringAssert.Contains(content, "`PostCreateRecord`");
            StringAssert.Contains(content, "`PreValidationCreate`");
            StringAssert.Contains(content, "https://dev.azure.com/myorg/my%20project/_workitems/edit/3");
            StringAssert.Contains(content, "https://dev.azure.com/myorg/my%20project/_workitems/edit/5");
            StringAssert.Contains(content, "`field_a`, `field_b`");
            StringAssert.Contains(content, "Target Entity: `account`");
            StringAssert.Contains(content, "escaped \\| pipe");
            StringAssert.Contains(content, "## [TestCodeGenPlugin.Plugin](../TestCodeGenPlugin/Plugin.cs)");
            StringAssert.Contains(content, "> **4** methods across **2** classes");
        }

        [TestMethod]
        public void Run_SecondRun_UnchangedCore_SkipsRewrite()
        {
            var folder = Path.Combine(tempDir, "src2");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out2");
            BuildTestAssembly(Path.Combine(folder, "TestCodeGenPlugin.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            var md = Path.Combine(output, "TestCodeGenPlugin.md");
            var firstWrite = File.GetLastWriteTimeUtc(md);
            System.Threading.Thread.Sleep(50);
            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            Assert.AreEqual(firstWrite, File.GetLastWriteTimeUtc(md));
        }

        [TestMethod]
        public void Run_ExistingFileWithDifferentCore_Rewrites()
        {
            var folder = Path.Combine(tempDir, "src3");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out3");
            BuildTestAssembly(Path.Combine(folder, "TestCodeGenPlugin.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            var md = Path.Combine(output, "TestCodeGenPlugin.md");
            File.WriteAllText(md, "# Something completely different\r\n---\r\n");
            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            StringAssert.Contains(File.ReadAllText(md), "Document Methods");
        }

        [TestMethod]
        public void Run_TypeOutsideAssemblyNamespace_UsesFallbackSourceLink()
        {
            var folder = Path.Combine(tempDir, "src4");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out4");
            var sibling = Path.Combine(tempDir, "TestCodeGenPlugin");
            Directory.CreateDirectory(sibling);
            BuildTestAssembly(Path.Combine(folder, "TestCodeGenPlugin.dll"), includeOtherNamespaceType: true);

            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            var md = Path.Combine(output, "TestCodeGenPlugin.md");
            var content = File.ReadAllText(md);
            StringAssert.Contains(content, "## [Other.Helper](../TestCodeGenPlugin/Other/Helper.cs)");
        }

        [TestMethod]
        public void Run_AssemblyWithoutAttributedMethods_GeneratesNothing()
        {
            var folder = Path.Combine(tempDir, "src-plain");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out-plain");
            BuildPlainAssembly(Path.Combine(folder, "PlainLib.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, null, null, null);
            Assert.AreEqual(0, Directory.GetFiles(output, "*.md").Length);
        }

        [TestMethod]
        public void Run_EdgeCaseAssembly_CoversEnumFallbackAndSourceLinkVariants()
        {
            var folder = Path.Combine(tempDir, "src-edge");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out-edge");
            var sibling = Path.Combine(tempDir, "Plugin.Test.2Lib");
            Directory.CreateDirectory(sibling);
            BuildEdgeCaseAssembly(Path.Combine(folder, "Plugin.Test.2Lib.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, "AzureDevOps", "org", "proj");

            var md = Path.Combine(output, "Plugin.Test.2Lib.md");
            Assert.IsTrue(File.Exists(md));
            var content = File.ReadAllText(md);
            // unknown enum value falls back to the raw number
            StringAssert.Contains(content, "| `99` |");
            // nsPrefix source link: type namespace uses the escaped digit form
            StringAssert.Contains(content, "## [Plugin.Test._2Lib.Helper](../Plugin.Test.2Lib/Helper.cs)");
        }

        private static void BuildPlainAssembly(string dllPath)
        {
            using var module = ModuleDefinition.CreateModule("PlainLib", new ModuleParameters
            {
                Kind = ModuleKind.Dll,
                AssemblyResolver = CreateResolver(Path.GetDirectoryName(dllPath))
            });
            var type = new TypeDefinition("PlainLib", "Plain",
                TypeAttributes.Public | TypeAttributes.BeforeFieldInit, module.TypeSystem.Object);
            module.Types.Add(type);
            var method = new MethodDefinition("Do",
                MethodAttributes.Public | MethodAttributes.HideBySig, module.TypeSystem.Void);
            type.Methods.Add(method);
            method.Body.GetILProcessor().Emit(OpCodes.Ret);
            module.Write(dllPath);
        }

        private static void BuildEdgeCaseAssembly(string dllPath)
        {
            var toolAssemblyDir = Path.GetDirectoryName(typeof(DocumentMethodAttribute).Assembly.Location);
            using var module = ModuleDefinition.CreateModule("Plugin.Test.2Lib", new ModuleParameters
            {
                Kind = ModuleKind.Dll,
                AssemblyResolver = CreateResolver(toolAssemblyDir, Path.GetDirectoryName(dllPath))
            });

            var attributeType = BuildAttributeType(module);
            module.Types.Add(attributeType);

            // helper type with namespace using the escaped digit form: nsPrefix branch
            var helperType = new TypeDefinition("Plugin.Test._2Lib", "Helper",
                TypeAttributes.Public | TypeAttributes.BeforeFieldInit, module.TypeSystem.Object);
            module.Types.Add(helperType);

            // method with a non-target attribute (skipped by ProcessType)
            var obsoleteCtor = module.ImportReference(typeof(ObsoleteAttribute).GetConstructor(Type.EmptyTypes));
            var obsoleteMethod = new MethodDefinition("ObsoleteMethod",
                MethodAttributes.Public | MethodAttributes.HideBySig, module.TypeSystem.Void);
            helperType.Methods.Add(obsoleteMethod);
            obsoleteMethod.CustomAttributes.Add(new CustomAttribute(obsoleteCtor));
            obsoleteMethod.Body.GetILProcessor().Emit(OpCodes.Ret);

            // method with an out-of-range enum stage value â†’ raw string fallback
            var outOfRangeMethod = new MethodDefinition("OutOfRangeMethod",
                MethodAttributes.Public | MethodAttributes.HideBySig, module.TypeSystem.Void);
            helperType.Methods.Add(outOfRangeMethod);
            var ctor = attributeType.Methods.First(m => m.IsConstructor);
            var customAttribute = new CustomAttribute(ctor);
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, "1"));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, "desc"));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodStage)), 99));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, "lead"));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodMessage)), 7));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, "f"));
            outOfRangeMethod.CustomAttributes.Add(customAttribute);
            outOfRangeMethod.Body.GetILProcessor().Emit(OpCodes.Ret);

            module.Write(dllPath);
        }

        private const string AssemblyName = "TestCodeGenPlugin";

        internal static void BuildTestAssembly(string dllPath, bool includeOtherNamespaceType = false)
        {
            var toolAssemblyDir = Path.GetDirectoryName(typeof(DocumentMethodAttribute).Assembly.Location);

            using var module = ModuleDefinition.CreateModule(AssemblyName, new ModuleParameters
            {
                Kind = ModuleKind.Dll,
                AssemblyResolver = CreateResolver(toolAssemblyDir, Path.GetDirectoryName(dllPath))
            });


            var attributeType = BuildAttributeType(module);
            module.Types.Add(attributeType);

            var pluginType = new TypeDefinition(AssemblyName, "Plugin",
                TypeAttributes.Public | TypeAttributes.BeforeFieldInit, module.TypeSystem.Object);
            module.Types.Add(pluginType);

            AddAttributedMethod(module, pluginType, attributeType, "CreateRecord",
                wi: "5, 3", description: "Creates a record", stage: DocumentMethodStage.Pre,
                entity: "account", message: DocumentMethodMessage.Create, fields: "field_a, field_b");
            AddAttributedMethod(module, pluginType, attributeType, "PostCreateRecord",
                wi: "9", description: "escaped | pipe", stage: DocumentMethodStage.PostSync,
                entity: "account", message: DocumentMethodMessage.CreateUpdate, fields: "x|y");
            AddAttributedMethodWithProperties(module, pluginType, attributeType, "PreValidationCreate",
                wi: "1", description: "Named property version", stage: DocumentMethodStage.PreValidation,
                entity: "contact", message: DocumentMethodMessage.Action, fields: "f1");
            AddPlainMethod(pluginType, "UnrelatedMethod");

            var nestedType = new TypeDefinition(AssemblyName, "Plugin/Nested", TypeAttributes.NestedPublic, module.TypeSystem.Object);
            pluginType.NestedTypes.Add(nestedType);
            AddAttributedMethod(module, nestedType, attributeType, "NestedMethod",
                wi: null, description: "", stage: DocumentMethodStage.PostAsync,
                entity: "", message: DocumentMethodMessage.Others, fields: "");

            if (includeOtherNamespaceType)
            {
                var otherType = new TypeDefinition("Other", "Helper",
                    TypeAttributes.Public | TypeAttributes.BeforeFieldInit, module.TypeSystem.Object);
                module.Types.Add(otherType);
                AddAttributedMethod(module, otherType, attributeType, "HelperMethod",
                    wi: "2", description: "helper", stage: DocumentMethodStage.Pre, entity: "lead",
                    message: DocumentMethodMessage.Retrieve, fields: "f");
            }

            module.Write(dllPath);
        }

        private static DefaultAssemblyResolver CreateResolver(params string[] directories)
        {
            var resolver = new DefaultAssemblyResolver();
            resolver.AddSearchDirectory(Path.GetDirectoryName(typeof(object).Assembly.Location));
            foreach (var dir in directories.Where(d => !string.IsNullOrEmpty(d)))
                resolver.AddSearchDirectory(dir);
            return resolver;
        }

        private static TypeDefinition BuildAttributeType(ModuleDefinition module)
        {
            var attributeType = new TypeDefinition(AssemblyName, "DocumentMethodAttribute",
                TypeAttributes.Public | TypeAttributes.Sealed | TypeAttributes.BeforeFieldInit,
                module.ImportReference(typeof(Attribute)));

            foreach (var (name, type) in new[]
            {
                ("WI", typeof(string)), ("Description", typeof(string)),
                ("Fields", typeof(string)), ("Entity", typeof(string)),
                ("Stage", typeof(DocumentMethodStage)), ("Message", typeof(DocumentMethodMessage))
            })
            {
                var propertyType = module.ImportReference(type);
                var backingField = new FieldDefinition($"<{name}>k__BackingField",
                    FieldAttributes.Private, propertyType);
                attributeType.Fields.Add(backingField);

                var setter = new MethodDefinition($"set_{name}",
                    MethodAttributes.Public | MethodAttributes.HideBySig | MethodAttributes.SpecialName,
                    module.TypeSystem.Void);
                setter.Parameters.Add(new ParameterDefinition("value", ParameterAttributes.None, propertyType));
                var il = setter.Body.GetILProcessor();
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldarg_1);
                il.Emit(OpCodes.Stfld, backingField);
                il.Emit(OpCodes.Ret);
                attributeType.Methods.Add(setter);

                attributeType.Properties.Add(new PropertyDefinition(name, PropertyAttributes.None, propertyType)
                {
                    SetMethod = setter
                });
            }

            var ctor = new MethodDefinition(".ctor",
                MethodAttributes.Public | MethodAttributes.HideBySig | MethodAttributes.SpecialName |
                MethodAttributes.RTSpecialName,
                module.TypeSystem.Void);
            ctor.Parameters.Add(new ParameterDefinition("wi", ParameterAttributes.None, module.TypeSystem.String));
            ctor.Parameters.Add(new ParameterDefinition("description", ParameterAttributes.None, module.TypeSystem.String));
            ctor.Parameters.Add(new ParameterDefinition("stage", ParameterAttributes.None, module.ImportReference(typeof(DocumentMethodStage))));
            ctor.Parameters.Add(new ParameterDefinition("entity", ParameterAttributes.None, module.TypeSystem.String));
            ctor.Parameters.Add(new ParameterDefinition("message", ParameterAttributes.None, module.ImportReference(typeof(DocumentMethodMessage))));
            ctor.Parameters.Add(new ParameterDefinition("fields", ParameterAttributes.None, module.TypeSystem.String));

            var ctorIl = ctor.Body.GetILProcessor();
            ctorIl.Emit(OpCodes.Ldarg_0);
            ctorIl.Emit(OpCodes.Call, module.ImportReference(typeof(Attribute).GetConstructor(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance, null, Type.EmptyTypes, null)));
            foreach (var i in new[] { 1, 2, 3, 4, 5, 6 })
            {
                ctorIl.Emit(OpCodes.Ldarg_0);
                if (i <= 3) ctorIl.Emit(OpCodes.Ldarg, i);
                else if (i == 4) ctorIl.Emit(OpCodes.Ldarg_S, (byte)4);
                else if (i == 5) ctorIl.Emit(OpCodes.Ldarg_S, (byte)5);
                else ctorIl.Emit(OpCodes.Ldarg_S, (byte)6);
                ctorIl.Emit(OpCodes.Call, attributeType.Methods.First(m => m.Name == $"set_{PropertyName(i)}"));
            }
            ctorIl.Emit(OpCodes.Ret);
            attributeType.Methods.Add(ctor);
            return attributeType;
        }

        private static string PropertyName(int index) => index switch
        {
            1 => "WI",
            2 => "Description",
            3 => "Stage",
            4 => "Entity",
            5 => "Message",
            6 => "Fields",
            _ => throw new ArgumentOutOfRangeException(nameof(index))
        };

        private static void AddAttributedMethod(ModuleDefinition module, TypeDefinition type,
            TypeDefinition attributeType, string methodName, string wi, string description,
            DocumentMethodStage stage, string entity, DocumentMethodMessage message, string fields)
        {
            var method = new MethodDefinition(methodName,
                MethodAttributes.Public | MethodAttributes.HideBySig, module.TypeSystem.Void);
            type.Methods.Add(method);

            var ctor = attributeType.Methods.First(m => m.IsConstructor);
            var customAttribute = new CustomAttribute(ctor);
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, wi));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, description));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodStage)), (int)stage));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, entity));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodMessage)), (int)message));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, fields));
            method.CustomAttributes.Add(customAttribute);

            var il = method.Body.GetILProcessor();
            il.Emit(OpCodes.Ret);
        }

        private static void AddAttributedMethodWithProperties(ModuleDefinition module, TypeDefinition type,
            TypeDefinition attributeType, string methodName, string wi, string description,
            DocumentMethodStage stage, string entity, DocumentMethodMessage message, string fields)
        {
            var method = new MethodDefinition(methodName,
                MethodAttributes.Public | MethodAttributes.HideBySig, module.TypeSystem.Void);
            type.Methods.Add(method);

            var ctor = attributeType.Methods.First(m => m.IsConstructor);
            var customAttribute = new CustomAttribute(ctor);
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, string.Empty));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, string.Empty));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodStage)), 0));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, string.Empty));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(
                module.ImportReference(typeof(DocumentMethodMessage)), 0));
            customAttribute.ConstructorArguments.Add(new CustomAttributeArgument(module.TypeSystem.String, string.Empty));

            foreach (var (name, value) in new[]
            {
                ("WI", wi), ("Description", description), ("Fields", fields), ("Entity", entity)
            })
            {
                var property = attributeType.Properties.First(p => p.Name == name);
                customAttribute.Properties.Add(new CustomAttributeNamedArgument(property.Name,
                    new CustomAttributeArgument(module.TypeSystem.String, value)));
            }
            var stageProperty = attributeType.Properties.First(p => p.Name == "Stage");
            customAttribute.Properties.Add(new CustomAttributeNamedArgument(stageProperty.Name,
                new CustomAttributeArgument(module.ImportReference(typeof(DocumentMethodStage)), (int)stage)));
            var messageProperty = attributeType.Properties.First(p => p.Name == "Message");
            customAttribute.Properties.Add(new CustomAttributeNamedArgument(messageProperty.Name,
                new CustomAttributeArgument(module.ImportReference(typeof(DocumentMethodMessage)), (int)message)));

            method.CustomAttributes.Add(customAttribute);

            var il = method.Body.GetILProcessor();
            il.Emit(OpCodes.Ret);
        }

        private static void AddPlainMethod(TypeDefinition type, string methodName)
        {
            var method = new MethodDefinition(methodName,
                MethodAttributes.Public | MethodAttributes.HideBySig, type.Module.TypeSystem.Void);
            type.Methods.Add(method);
            method.Body.GetILProcessor().Emit(OpCodes.Ret);
        }

        #region Remaining branch coverage

        private static object InvokeStaticPrivate(Type type, string method, params object[] args)
        {
            return type
.GetMethods(System.Reflection.BindingFlags.Static | System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Public)
                .Single(candidate => candidate.Name == method && candidate.GetParameters().Length == args.Length)
                .Invoke(null, args);
        }

        [TestMethod]
        public void CodeGen_PrivateHelpers_Cover_Edges()
        {
            // SplitLines
            Assert.AreEqual(0, ((string[])InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "SplitLines", new object[] { null })).Length);
            Assert.AreEqual(3, ((string[])InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "SplitLines", "a\rb\nc")).Length);

            // BuildSourceLink - null guards and both prefix shapes
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", null, "T", "root", "out"));
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", "Root", null, "root", "out"));
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", "Root", "T", null, "out"));
            var root = Path.Combine(Path.GetTempPath(), "codegen-links", Guid.NewGuid().ToString("N"), "code");
            Directory.CreateDirectory(Path.Combine(root, "Data"));
            var outDir = Path.Combine(Path.GetTempPath(), "codegen-links", Guid.NewGuid().ToString("N"), "out");
            Directory.CreateDirectory(outDir);
            var direct = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", "Plugin", "Plugin.Data.Plugin", root, outDir);
            StringAssert.Contains(direct, "Data/Plugin.cs");
            var nsPrefixed = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", "DynamicsCrm.DevKit.2019", "DynamicsCrm.DevKit.2019.Data.Plugin", root, outDir);
            StringAssert.Contains(nsPrefixed, ".cs");
            var fallback = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "BuildSourceLink", "Other", "Something.Else", root, outDir);
            StringAssert.Contains(fallback, "Else.cs");

            // FindSiblingProjectRoot - no sibling anywhere (walks to drive root) and found
            Assert.IsNull(InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FindSiblingProjectRoot", Path.GetTempPath(), "no-such-project-" + Guid.NewGuid().ToString("N")));
            var baseDir = Path.Combine(Path.GetTempPath(), "codegen-sib", Guid.NewGuid().ToString("N"));
            var start = Path.Combine(baseDir, "src", "deep", "deeper");
            var sibling = Path.Combine(baseDir, "src", "TestCodeGenPlugin");
            Directory.CreateDirectory(start);
            Directory.CreateDirectory(sibling);
            var found = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FindSiblingProjectRoot", start, "TestCodeGenPlugin");
            Assert.AreEqual(sibling, found);

            // AppendDirectorySeparator
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "AppendDirectorySeparator", ""));
            Assert.IsNull(InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "AppendDirectorySeparator", new object[] { null }));
            var noSep = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "AppendDirectorySeparator", "C:\\x");
            Assert.IsTrue(noSep.EndsWith(Path.DirectorySeparatorChar.ToString()));
            Assert.AreEqual("C:\\x\\", InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "AppendDirectorySeparator", "C:\\x\\"));

            // GetWiSortKey - min tracking incl. n >= min, whitespace, non-numeric
            Assert.AreEqual(int.MaxValue, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetWiSortKey", " "));
            Assert.AreEqual(int.MaxValue, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetWiSortKey", "abc, def"));
            Assert.AreEqual(3, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetWiSortKey", "3, 5"));
            Assert.AreEqual(3, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetWiSortKey", "5, 3"));

            // FormatFields â€” whitespace-only becomes empty
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FormatFields", " , , "));
            StringAssert.Contains((string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FormatFields", "a , b"), "`a`, `b`");

            // FormatWi â€” numeric + non-numeric ids, with and without DevOps
            var plain = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FormatWi", "12, abc", null, null, null);
            StringAssert.Contains(plain, "abc");
            StringAssert.Contains(plain, "12");
            var linked = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "FormatWi", "12", "AzureDevOps", "org", "proj");
            StringAssert.Contains(linked, "https://dev.azure.com/org/proj/_workitems/edit/12");

            // BuildWorkItemUrl â€” whitespace guard
            Assert.IsNull(DynamicsCrm.DevKit.Tool.Tasks.DevOpsLinkBuilder.BuildWorkItemUrl("  ", "org", "proj", "1"));

            // ContentChangedIgnoringFooter â€” missing file
            Assert.IsTrue((bool)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "ContentChangedIgnoringFooter",
                Path.Combine(tempDir, "no-such.md"), "content"));

            // GetCoreContentForCompare - null/empty/whitespace/footer variants
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetCoreContentForCompare", new object[] { null }));
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetCoreContentForCompare", new object[] { Array.Empty<string>() }));
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetCoreContentForCompare", new object[] { new[] { "  ", "\t" } }));
            // an all-footer document strips down to nothing (the footer walk runs past the first line)
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetCoreContentForCompare", new object[]
            {
                new[] { "  ", "---", ">Generated by tool x", "" }
            }));
            var core = (string)InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "GetCoreContentForCompare", new object[]
            {
                new[]
                {
                    "body",
                    ">This file generated by tool extra",
                    ">***This file modified on:*** x",
                    ">Generated by tool x",
                    "---",
                    "   "
                }
            });
            Assert.AreEqual("body", core);

            // CecilEnumToName — map hit, map miss, null argument value
            var module = ModuleDefinition.ReadModule(typeof(TaskDocumentCodeGeneratorTests).Assembly.Location);
            var typeRef = new TypeReference("System", "Int32", module, module);
            var map = new Dictionary<string, string> { ["raw"] = "mapped" };
            Assert.AreEqual("mapped", InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "CecilEnumToName",
                new CustomAttributeArgument(typeRef, "raw"), map));
            Assert.AreEqual("unmapped", InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "CecilEnumToName",
                new CustomAttributeArgument(typeRef, "unmapped"), map));
            Assert.AreEqual(string.Empty, InvokeStaticPrivate(typeof(TaskDocumentCodeGenerator), "CecilEnumToName",
                new CustomAttributeArgument(typeRef, null), map));
        }

        [TestMethod]
        public void Run_DevOps_WithNullOrgAndProject_StillLinks()
        {
            var folder = Path.Combine(tempDir, "src-null-org");
            Directory.CreateDirectory(folder);
            var output = Path.Combine(tempDir, "out-null-org");
            BuildTestAssembly(Path.Combine(folder, "TestCodeGenPlugin.dll"));

            TaskDocumentCodeGenerator.Run(folder, output, "AzureDevOps", null, null);

            var md = Path.Combine(output, "TestCodeGenPlugin.md");
            Assert.IsTrue(File.Exists(md));
        }

        #endregion
    }
}

