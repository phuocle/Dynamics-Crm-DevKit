using System;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// McpConnectionFactory.ValidateGroupRequiredFields — per-auth-type required
/// field validation applied when a .env group id is present.
/// </summary>
[TestClass]
public class McpConnectionFactoryGroupValidationTests
{
    private static CrmConnection Connection(string authType) => new()
    {
        Type = authType,
        Url = "https://org.example.invalid"
    };

    private static void AssertThrows(string authType, Action<CrmConnection> configure, string expectedFragment)
    {
        var connection = Connection(authType);
        configure(connection);
        var ex = Assert.ThrowsExactly<Exception>(() =>
            McpConnectionFactory.ValidateGroupRequiredFields(authType, connection, "1"));
        StringAssert.Contains(ex.Message, "Environment group '1'");
        StringAssert.Contains(ex.Message, expectedFragment);
    }

    // ──────────────────────────────────────────────
    // ClientSecret
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ClientSecret_MissingClientIdAndUsername_Throws()
        => AssertThrows("ClientSecret", c => { }, "CLIENT_ID");

    [TestMethod]
    public void ClientSecret_MissingSecretAndPassword_Throws()
        => AssertThrows("ClientSecret", c => c.ClientId = "cid", "CLIENT_SECRET");

    [TestMethod]
    public void ClientSecret_UsernameSatisfiesIdentityCheck_DoesNotThrow()
    {
        var connection = Connection("ClientSecret");
        connection.UserName = "user@contoso.com";
        connection.ClientSecret = "secret";

        McpConnectionFactory.ValidateGroupRequiredFields("ClientSecret", connection, "1");
    }

    [TestMethod]
    public void ClientSecret_PasswordSatisfiesSecretCheck_DoesNotThrow()
    {
        var connection = Connection("ClientSecret");
        connection.ClientId = "cid";
        connection.Password = "pw";

        McpConnectionFactory.ValidateGroupRequiredFields("ClientSecret", connection, "1");
    }

    [TestMethod]
    public void ClientSecret_AuthTypeCaseInsensitive_StillValidates()
        => AssertThrows("clientsecret", c => { }, "CLIENT_ID");

    // ──────────────────────────────────────────────
    // OAuth
    // ──────────────────────────────────────────────

    [TestMethod]
    public void OAuth_MissingUsername_Throws()
        => AssertThrows("OAuth", c => { }, "USERNAME");

    [TestMethod]
    public void OAuth_MissingPassword_Throws()
        => AssertThrows("OAuth", c => c.UserName = "user@contoso.com", "PASSWORD");

    [TestMethod]
    public void OAuth_Complete_DoesNotThrow()
    {
        var connection = Connection("OAuth");
        connection.UserName = "user@contoso.com";
        connection.Password = "pw";

        McpConnectionFactory.ValidateGroupRequiredFields("OAuth", connection, "1");
    }

    // ──────────────────────────────────────────────
    // AD
    // ──────────────────────────────────────────────

    [TestMethod]
    public void AD_MissingUsername_Throws()
        => AssertThrows("AD", c => { }, "USERNAME");

    [TestMethod]
    public void AD_MissingPassword_Throws()
        => AssertThrows("AD", c => c.UserName = "CORP\\user", "PASSWORD");

    [TestMethod]
    public void AD_Complete_DoesNotThrow()
    {
        var connection = Connection("AD");
        connection.UserName = "CORP\\user";
        connection.Password = "pw";

        McpConnectionFactory.ValidateGroupRequiredFields("AD", connection, "1");
    }

    // ──────────────────────────────────────────────
    // Other auth types are not group-validated
    // ──────────────────────────────────────────────

    [TestMethod]
    [DataRow("Interactive")]
    [DataRow("DeviceCode")]
    [DataRow("FromPac")]
    [DataRow("SomethingElse")]
    public void OtherAuthTypes_EmptyConnection_DoesNotThrow(string authType)
        => McpConnectionFactory.ValidateGroupRequiredFields(authType, Connection(authType), "1");
}
