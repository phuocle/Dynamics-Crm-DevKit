using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.T4
{
    /// <summary>
    /// Platform-neutral T4 rendering contract. Hosts supply the engine:
    /// the CLI uses Mono.TextTemplating (MonoTextTransformer in the CLI
    /// project), the VSIX may keep the Visual Studio COM T4 service behind
    /// the same interface. All .tt templates and T4Context building are
    /// shared so rendered output stays identical across hosts.
    /// </summary>
    public interface ITextTransformer
    {
        Task<string> TransformAsync(string t4Code, T4Context context);
    }
}
