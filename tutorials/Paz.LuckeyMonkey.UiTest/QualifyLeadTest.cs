using System;
using System.Collections.Generic;
using System.Security;
using Microsoft.Dynamics365.UIAutomation.Api;
using Microsoft.Dynamics365.UIAutomation.Browser;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.Shared.Entities;

namespace Paz.LuckeyMonkey.UiTest
{
    [TestClass]
    public class QualifyLeadTest
    {
        private readonly SecureString _username = System.Configuration.ConfigurationManager.AppSettings["Username"].ToSecureString();
        private readonly SecureString _password = System.Configuration.ConfigurationManager.AppSettings["Password"].ToSecureString();
        private readonly Uri _xrmUri = new Uri(System.Configuration.ConfigurationManager.AppSettings["OnlineCrmUrl"].ToString());

        [TestMethod]
        public void UiQualifyLeadTest()
        {
            using (var chrome = new Browser(TestSettings.Options))
            {
                var key = $"key{new Random().Next().ToString("000000")}";
                chrome.LoginPage.Login(_xrmUri, _username, _password);                
                chrome.Navigation.OpenSubArea("Sales", "Leads");
                chrome.Grid.SwitchView("All Leads");
                chrome.CommandBar.ClickCommand("New");
                chrome.Entity.SetValue("subject", key);
                var fields = new List<Field>
                {
                    new Field() {Id = "firstname", Value = key},
                    new Field() {Id = "lastname", Value = key}
                };
                chrome.Entity.SetValue(new CompositeControl() { Id = "fullname", Fields = fields });
                chrome.Entity.SetValue("paz_field1", key);                
                chrome.Entity.SetValue("companyname", key);
                chrome.CommandBar.ClickCommand("Save & Close");
                chrome.Grid.SwitchView("Open Leads");
                chrome.Grid.SelectRecord(0);
                chrome.CommandBar.ClickCommand("Edit");
                chrome.ThinkTime(1000);
                chrome.CommandBar.ClickCommand("Qualify");
                chrome.ThinkTime(10000);
                //now check real data ??
                //check Account
                var fetchData = new
                {
                    name = key
                };
                var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <attribute name='accountid'/>
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>
";
                var accounts = AppSettings.CrmService.RetrieveAll<Account>(fetchXml);
                Assert.AreEqual(1, accounts.Count);
                var account = accounts[0];
                var accountId = account.Id;
                //check lead
                var fetchData2 = new
                {
                    subject = key
                };
                var fetchXml2 = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='lead'>
    <attribute name='leadid'/>
    <attribute name='subject'/>
    <attribute name='statecode'/>
    <filter type='and'>
      <condition attribute='subject' operator='eq' value='{fetchData2.subject}'/>
    </filter>
  </entity>
</fetch>
";
                var leads = AppSettings.CrmService.RetrieveAll<Lead>(fetchXml2);
                Assert.AreEqual(1, leads.Count);
                var lead = leads[0];
                Assert.AreEqual(key.ToUpper(), lead.Subject, false);
                Assert.AreEqual(Shared.Entities.LeadOptionSets.StateCode.Qualified, lead.StateCode.Value);
                var leadId = lead.Id;
                //check contact
                var fetchData3 = new
                {
                    firstname = key,
                    lastname = key
                };
                var fetchXml3 = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='contact'>
    <attribute name='contactid'/>
    <filter type='and'>
      <condition attribute='firstname' operator='eq' value='{fetchData3.firstname}'/>
      <condition attribute='lastname' operator='eq' value='{fetchData3.lastname}'/>
    </filter>
  </entity>
</fetch>
";
                var contacts = AppSettings.CrmService.RetrieveAll<Contact>(fetchXml3);
                Assert.AreEqual(1, contacts.Count);
                var contact = contacts[0];
                var contactId = contact.Id;
                //check email
                var fetchData4 = new
                {
                    regardingobjectid = leadId
                };
                var fetchXml4 = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='email'>
    <attribute name='activityid'/>
    <filter type='and'>
      <condition attribute='regardingobjectid' operator='eq' value='{fetchData4.regardingobjectid}'/>
    </filter>
  </entity>
</fetch>
";
                var emails = AppSettings.CrmService.RetrieveAll<Email>(fetchXml4);
                Assert.AreEqual(2, emails.Count);
                //Delete data
                //AppSettings.CrmService.Delete(Email.EntityLogicalName, emails[1].Id);
                //AppSettings.CrmService.Delete(Email.EntityLogicalName, emails[0].Id);
                //AppSettings.CrmService.Delete(Contact.EntityLogicalName, contactId);
                //AppSettings.CrmService.Delete(Account.EntityLogicalName, accountId);
                //AppSettings.CrmService.Delete(Lead.EntityLogicalName, leadId);
                //Success delete data
                Assert.IsTrue(true);
            }
        }
    }
}