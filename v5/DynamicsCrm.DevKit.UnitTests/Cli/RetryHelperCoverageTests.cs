using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class RetryHelperCoverageTests
{
    [TestMethod]
    public async Task ExecuteWithRetry_FirstAttemptSucceeds()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            return "ok";
        });
        Assert.AreEqual("ok", result);
        Assert.AreEqual(1, count);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_NonTransient_ThrowsImmediately()
    {
        var count = 0;
        try
        {
            await RetryHelper.ExecuteWithRetryAsync<string>(async () =>
            {
                count++;
                await Task.Yield();
                throw new InvalidOperationException("non-transient");
            });
            Assert.Fail("expected throw");
        }
        catch (InvalidOperationException) { }
        Assert.AreEqual(1, count);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_Timeout_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 3) throw new TimeoutException("timeout");
            return "ok";
        }, maxRetries: 5);
        Assert.AreEqual("ok", result);
        Assert.AreEqual(3, count);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_HttpRequest_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new HttpRequestException("connection");
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_MaxRetriesReached_Throws()
    {
        var count = 0;
        try
        {
            await RetryHelper.ExecuteWithRetryAsync<string>(async () =>
            {
                count++;
                await Task.Yield();
                throw new TimeoutException("persistent");
            }, maxRetries: 2);
            Assert.Fail("expected throw");
        }
        catch (TimeoutException) { }
        Assert.IsTrue(count >= 2);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_ServerBusy_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new Exception("server is busy");
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_Throttl_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new Exception("throttled");
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_503_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new Exception("service returned 503");
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_429_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new Exception("429 rate limit");
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_InnerException_Retries()
    {
        var count = 0;
        var result = await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2)
            {
                throw new Exception("outer", new TimeoutException("inner"));
            }
            return "ok";
        }, maxRetries: 3);
        Assert.AreEqual("ok", result);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_Cancelled_ThrowsImmediately()
    {
        var cts = new CancellationTokenSource();
        cts.Cancel();
        try
        {
            await RetryHelper.ExecuteWithRetryAsync<string>(async () =>
            {
                await Task.Yield();
                return "x";
            }, maxRetries: 3, cancellationToken: cts.Token);
            Assert.Fail("expected");
        }
        catch (OperationCanceledException) { }
    }

    [TestMethod]
    public async Task ExecuteWithRetry_VoidOverload_Succeeds()
    {
        var count = 0;
        await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
        });
        Assert.AreEqual(1, count);
    }

    [TestMethod]
    public async Task ExecuteWithRetry_VoidOverload_Retries()
    {
        var count = 0;
        await RetryHelper.ExecuteWithRetryAsync(async () =>
        {
            count++;
            await Task.Yield();
            if (count < 2) throw new TimeoutException("t");
        }, maxRetries: 3);
        Assert.AreEqual(2, count);
    }
}
