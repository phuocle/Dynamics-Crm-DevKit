# Windows Setup Guide

## Handling Long File Paths

This repository contains some paths that exceed the default Windows MAX_PATH limit of 260 characters. To successfully clone and work with this repository on Windows, you need to enable long path support in Git.

### Solution: Enable Git Long Paths Support

Before cloning the repository, run the following command in your terminal (Command Prompt, PowerShell, or Git Bash):

```bash
git config --global core.longpaths true
```

This tells Git to use Windows long path APIs to handle paths longer than 260 characters.

### Alternative: Enable Long Paths System-Wide (Windows 10 version 1607 and later)

You can also enable long path support at the Windows system level:

1. Open the **Local Group Policy Editor** (type `gpedit.msc` in the Start menu)
2. Navigate to: **Computer Configuration** > **Administrative Templates** > **System** > **Filesystem**
3. Enable the policy: **Enable Win32 long paths**
4. Restart your computer

### Verifying the Configuration

After enabling long paths in Git, verify the setting:

```bash
git config --global core.longpaths
```

This should return `true`.

### Cloning the Repository

Once you've enabled long path support, you can clone the repository normally:

```bash
git clone https://github.com/phuocle/Dynamics-Crm-DevKit.git
```

### Troubleshooting

If you still encounter issues:

1. Make sure you're using a recent version of Git (2.x or later)
2. Try cloning to a shorter base path (e.g., `C:\Dev\` instead of `C:\Users\YourUsername\Documents\Projects\`)
3. Ensure Windows long path support is enabled system-wide (see above)

### More Information

- [Git for Windows Long Paths](https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path)
- [Windows 10 Long Path Support](https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation)
