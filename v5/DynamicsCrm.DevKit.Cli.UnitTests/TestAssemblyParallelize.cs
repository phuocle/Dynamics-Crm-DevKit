#if NET10_0
// Run MSTest classes in parallel across all cores; classes that mutate
// process-wide state (Environment.CurrentDirectory, env vars, SpectreLog
// statics) are marked [DoNotParallelize] and stay sequential.
using Microsoft.VisualStudio.TestTools.UnitTesting;

[assembly: Parallelize(Workers = 0, Scope = ExecutionScope.MethodLevel)]
#endif
