#pragma warning disable

/// <summary>
/// DEVKIT1005: EntityReference maybe null analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1005 only.
/// - Visual Studio Error List should show DEVKIT1005 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1005 is restored.
///
/// Severity Rules:
/// - EntityReference member access that may be null: WARNING - guard or safely handle null references
/// </summary>
#pragma warning restore DEVKIT1005

using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    public class TestA {
        public EntityReference ABC { get; set; }
    }



    internal class DEVKIT1005
    {
        private void Test()
        {
            var entity = new EntityReference("", Guid.NewGuid());

            var A = ReadData(entity?.Id, entity?.Name);
            entity.Id = Guid.NewGuid();
            entity.Name = "Test";
            entity.LogicalName = "Test";

            var id = entity.Id;
            var test = new TestA { ABC = new EntityReference { Name = "string", Id = Guid.Empty } };
            if (test.ABC?.Id == null) { }

            var test2 = new TestA { ABC = new EntityReference() };
            if (test.ABC?.Id == test.ABC?.Id)
            {
            }
            test.ABC.Id = Guid.NewGuid();
            var t = ReadData(test.ABC?.Id, test.ABC?.Name);

            string t1 = $"{entity?.Id} - {test.ABC?.Id}";
            var t2 = entity?.Id.ToString() + test.ABC.Id.ToString();
            var a = entity.Id;
            Guid? aa = entity?.Id;
            var en = new Entity("", test.ABC.Id)
            {

            };

        }

        private bool ReadData(Guid? guid, string a)
        {
            return false;
        }

    }
}
#pragma warning restore
