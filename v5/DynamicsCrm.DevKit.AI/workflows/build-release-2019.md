# Visual Studio 2019 Configured Release

Run this workflow when the Visual Studio 2019 release must be built and published.

1. Confirm source version remains `4.44.44.44` and the working tree is clean or contains only the intended changes.
2. Run from the repository root:

   ```powershell
   & ".\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-2019.ps1" -Configuration Release -Clean
   ```

3. Wait for MSBuild to complete successfully using a Visual Studio 2019 MSBuild installation.
4. Verify `Published\4.44.44.44\DynamicsCrm.DevKit.Vsix.2019.4.44.44.44.vsix` exists and is non-empty.
5. Verify the VSIX source is `DynamicsCrm.DevKit.Vsix.2019\bin\Release\DynamicsCrm.DevKit.2019.vsix`.
6. Confirm the script did not leave temporary build-date replacements or unrelated working-tree changes.

The Visual Studio 2019 SDK and VSSDK BuildTools packages must remain on their VS2019-compatible 16.x lines. Do not use `dotnet build` for this solution; use the MSBuild selected by the release script.
