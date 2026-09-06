using System;
using EnvDTE80;

namespace DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure
{
    /// <summary>
    /// DTE2 fake built on InterfaceProxy (EnvDTE indexed properties cannot be
    /// implemented in plain C#). Only Solution.FullName is meaningful; anything
    /// else throws NotSupportedException.
    /// </summary>
    internal static class FakeDte
    {
        public const string SolutionFileName = @"C:\fake\MySolution.sln";

        public static DTE2 Create(string solutionFullName = SolutionFileName)
        {
            return InterfaceProxy.Create<DTE2>((key, args) =>
            {
                if (key.EndsWith(".get_Solution"))
                {
                    return InterfaceProxy.Create<EnvDTE.Solution>((solutionKey, _) =>
                        solutionKey.EndsWith(".get_FullName")
                            ? solutionFullName
                            : throw new NotSupportedException(solutionKey));
                }
                throw new NotSupportedException(key);
            });
        }
    }
}
