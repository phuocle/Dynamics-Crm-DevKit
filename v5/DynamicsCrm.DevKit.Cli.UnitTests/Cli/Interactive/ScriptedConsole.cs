using Spectre.Console;
using Spectre.Console.Rendering;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Scripted console input — replays a pushed key sequence. The product
/// prompts (SelectionPrompt/TextPrompt/ConfirmationPrompt) read through
/// IAnsiConsoleInput, so the sequence answers them like a user would.
/// Exhausting the queue throws instead of returning null: the Spectre
/// prompt loops treat a null key as "keep waiting" and a silent null
/// would hang the test run.
/// </summary>
internal sealed class ScriptedConsoleInput : IAnsiConsoleInput
{
    private readonly Queue<ConsoleKeyInfo> _keys = new();

    /// <summary>Pushes typed text — every character is injected as a key press.</summary>
    public ScriptedConsoleInput PushText(string text)
    {
        foreach (var ch in text)
        {
            _keys.Enqueue(new ConsoleKeyInfo(ch, (ConsoleKey)ch, char.IsUpper(ch), false, false));
        }
        return this;
    }

    /// <summary>Pushes typed text followed by the Enter key.</summary>
    public ScriptedConsoleInput PushTextWithEnter(string text)
    {
        PushText(text);
        PushKey(ConsoleKey.Enter);
        return this;
    }

    /// <summary>Pushes a navigation/control key (arrows, Enter, Escape, ...).</summary>
    public ScriptedConsoleInput PushKey(ConsoleKey key)
    {
        _keys.Enqueue(new ConsoleKeyInfo('\0', key, false, false, false));
        return this;
    }

    public bool IsKeyAvailable()
    {
        lock (_keys) return _keys.Count > 0;
    }

    public ConsoleKeyInfo? ReadKey(bool intercept)
    {
        lock (_keys)
        {
            if (_keys.Count == 0)
            {
                throw new InvalidOperationException(
                    "ScriptedConsoleInput exhausted — push the answer keys the prompt expects before calling it.");
            }
            return _keys.Dequeue();
        }
    }

    public Task<ConsoleKeyInfo?> ReadKeyAsync(bool intercept, CancellationToken cancellationToken)
    {
        return Task.FromResult(ReadKey(intercept));
    }
}

/// <summary>
/// A fully interactive in-memory IAnsiConsole: the render pipeline writes
/// to a StringWriter while the input replays scripted keys. Spectre 0.57
/// has no settings hook for the input (IAnsiConsole.Input is get-only and
/// AnsiConsoleSettings carries no Input), so the wrapper delegates every
/// member to a real AnsiConsole and overrides only the input — the same
/// trick Spectre.Console.Testing's TestConsole uses.
/// </summary>
internal sealed class ScriptedConsole : IAnsiConsole, IDisposable
{
    private readonly IAnsiConsole _inner;
    private readonly StringWriter _writer = new();

    public ScriptedConsoleInput Input { get; } = new();

    public ScriptedConsole()
    {
        _inner = AnsiConsole.Create(new AnsiConsoleSettings
        {
            Ansi = AnsiSupport.Yes,
            Interactive = InteractionSupport.Yes,
            Out = new AnsiConsoleOutput(_writer),
        });
    }

    /// <summary>
    /// Swaps the static AnsiConsole.Console for a scripted console and
    /// returns it. Restore() puts the original console back — call it in
    /// finally, the static is shared process-wide.
    /// </summary>
    public static ScriptedConsole Install()
    {
        _saved = AnsiConsole.Console;
        var console = new ScriptedConsole();
        AnsiConsole.Console = console;
        return console;
    }

    public static void Restore()
    {
        AnsiConsole.Console = _saved;
    }

    private static IAnsiConsole _saved = null!;

    /// <summary>Everything the product rendered to the console so far.</summary>
    public string Output => _writer.ToString();

    public void Dispose()
    {
        _writer.Dispose();
    }

    public Profile Profile => _inner.Profile;
    public IAnsiConsoleCursor Cursor => _inner.Cursor;
    IAnsiConsoleInput IAnsiConsole.Input => Input;
    public IExclusivityMode ExclusivityMode => _inner.ExclusivityMode;
    public RenderPipeline Pipeline => _inner.Pipeline;
    public void Clear(bool home) => _inner.Clear(home);
    public void Write(IRenderable renderable) => _inner.Write(renderable);
    public void WriteAnsi(Action<AnsiWriter> action) => _inner.WriteAnsi(action);
}
