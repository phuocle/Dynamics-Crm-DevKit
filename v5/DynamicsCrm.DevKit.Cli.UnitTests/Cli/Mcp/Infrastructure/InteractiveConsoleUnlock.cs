using HarmonyLib;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// Test-side Harmony patch making <see cref="Console.IsInputRedirected"/>
/// report false. TaskNewShared.CanPrompt gates every 'devkit new' prompt
/// chain on it, and under MSTest stdin is always redirected, so the prompt
/// halves of those chains are unreachable without this detour. Pair it
/// with ScriptedConsole (which answers the Spectre prompts) and
/// SpectreLog.IsPlain = false. The patch is process-wide: install it in
/// TestInitialize, uninstall in TestCleanup, and mark the test class
/// [DoNotParallelize] so no other test observes the patched value.
/// </summary>
public static class InteractiveConsoleUnlock
{
    private static Harmony? _harmony;
    private static HarmonyMethod? _prefix;

    public static void Install()
    {
        if (_harmony != null) return;
        _harmony = new Harmony("devkit.test.interactiveunlock");
        _prefix = new HarmonyMethod(typeof(InteractiveConsoleUnlock), nameof(ReturnFalsePrefix));
        _harmony.Patch(
            typeof(Console).GetProperty(nameof(Console.IsInputRedirected))!.GetMethod!,
            prefix: _prefix);
    }

    public static void Uninstall()
    {
        if (_harmony == null) return;
        _harmony.UnpatchAll(_harmony.Id);
        _harmony = null;
        _prefix = null;
    }

    private static bool ReturnFalsePrefix(ref bool __result)
    {
        __result = false;
        return false;
    }
}
