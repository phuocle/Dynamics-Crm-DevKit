using HarmonyLib;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Tool.UnitTests.TestInfrastructure;

/// <summary>
/// Detours every ServiceClient constructor so connection builders can be
/// exercised offline: the constructor is skipped and the uninitialized
/// instance is registered with configurable IsReady/LastError values.
/// Tests enqueue an entry before calling code that news up a ServiceClient;
/// unregistered (default) entries report IsReady=false with a null LastError,
/// which preserves the "connection failed" behavior existing tests expect.
/// Only one instance is expected per test; classes using this harness are
/// marked DoNotParallelize.
/// </summary>
public static class FakeServiceClientCtor
{
    private static readonly object Gate = new();
    private static readonly ConcurrentDictionary<ServiceClient, Entry> Registry = new();
    private static readonly ConcurrentQueue<Entry> Pending = new();
    private static bool patched;

    public sealed class Entry
    {
        public Func<bool> IsReady { get; set; } = () => true;
        public Func<string> LastError { get; set; } = () => null;

        /// <summary>Token-provider delegate captured from the constructor arguments.</summary>
        public Func<string, Task<string>> TokenProvider { get; set; }
    }

    /// <summary>Entry for the most recently constructed ServiceClient.</summary>
    public static Entry LastEntry { get; private set; }

    public static Entry EnqueueNext(Func<bool> isReady, Func<string> lastError = null)
    {
        var entry = new Entry { IsReady = isReady, LastError = lastError };
        EnsurePatched();
        Pending.Enqueue(entry);
        return entry;
    }

    public static void EnsurePatched()
    {
        lock (Gate)
        {
            if (patched) return;
            patched = true;

            var harmony = new Harmony("devkit.test.fakeserviceclientctor");
            var prefix = new HarmonyMethod(typeof(Patches), nameof(Patches.CtorPrefix));
            foreach (var constructor in typeof(ServiceClient).GetConstructors())
            {
                harmony.Patch(constructor, prefix: prefix);
            }

            var isReadyGetter = AccessTools.Property(typeof(ServiceClient), "IsReady")?.GetMethod;
            if (isReadyGetter != null)
            {
                harmony.Patch(isReadyGetter, prefix: new HarmonyMethod(typeof(Patches), nameof(Patches.IsReadyPrefix)));
            }

            var lastErrorGetter = AccessTools.Property(typeof(ServiceClient), "LastError")?.GetMethod;
            if (lastErrorGetter != null)
            {
                harmony.Patch(lastErrorGetter, prefix: new HarmonyMethod(typeof(Patches), nameof(Patches.LastErrorPrefix)));
            }
        }
    }

    private static class Patches
    {
        public static bool CtorPrefix(ServiceClient __instance, object[] __args)
        {
            var entry = Pending.TryDequeue(out var pending)
                ? pending
                : new Entry { IsReady = () => false, LastError = () => null };
            entry.TokenProvider = __args?
                .OfType<Func<string, Task<string>>>()
                .FirstOrDefault();
            Registry[__instance] = entry;
            LastEntry = entry;
            return false;
        }

        public static bool IsReadyPrefix(ServiceClient __instance, ref bool __result)
        {
            if (!Registry.TryGetValue(__instance, out var entry)) return true;
            __result = entry.IsReady();
            return false;
        }

        public static bool LastErrorPrefix(ServiceClient __instance, ref string __result)
        {
            if (!Registry.TryGetValue(__instance, out var entry)) return true;
            __result = entry.LastError();
            return false;
        }
    }
}
