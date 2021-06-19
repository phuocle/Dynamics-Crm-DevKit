using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormReport : Form
    {

        public CrmServiceClient CrmServiceClient { get; set; }
        private bool IsOrLoad { get; set; } = true;


        public FormReport(CrmServiceClient crmServiceClient, SavedMappingReport savedMappingReport)
        {
            InitializeComponent();

            CrmServiceClient = crmServiceClient;

            IsOrLoad = true;

            LoadLanguages();
            LoadSolutions();
            if (savedMappingReport != null)
            {
                comboLanguages.Text = ((List<NameValue>)comboLanguages.DataSource).FirstOrDefault(x => x.Value == savedMappingReport.Language.ToString()).Name;
                comboSolutions.Text = savedMappingReport.Solution;
                IsOrLoad = false;
            }
            LoadReports();
            if (savedMappingReport != null)
            {
                IsOrLoad = false;
                comboReports.Text = savedMappingReport.ReportName;
            }
            CheckOKButton();

            IsOrLoad = false;
        }

        public int Language {
            get {
                var selected = (NameValue)comboLanguages.SelectedItem;
                return int.Parse(selected.Value);
            }
        }

        public string Solution
        {
            get
            {
                return comboSolutions.Text;
            }
        }

        public string ReportName
        {
            get
            {
                return comboReports.Text;
            }
        }

        public Guid ReportId
        {
            get
            {
                var selected = (NameValueGuid)comboReports.SelectedItem;
                return selected.Value;
            }
        }

        private void CheckOKButton()
        {
            buttonOk.Enabled = ((List<NameValueGuid>)comboReports.DataSource)?.Count > 0;
        }

        private void LoadReports()
        {
            if (IsOrLoad) return;
            var language = ((NameValue)comboLanguages?.SelectedItem)?.Value;
            var solution = ((NameValueGuidExtend)comboSolutions?.SelectedItem)?.Value;
            if (language == null || solution == null) return;
            var fetchData = new
            {
                languagecode = language,
                solutionid = solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='filename' />
    <attribute name='name' />
    <filter>
      <condition attribute='languagecode' operator='eq' value='{fetchData.languagecode}'/>
    </filter>
    <link-entity name='solutioncomponent' from='objectid' to='reportid'>
      <filter>
        <condition attribute='solutionid' operator='eq' value='{fetchData.solutionid}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";

            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = new List<NameValueGuid>();
            foreach(var entity in rows.Entities)
            {
                list.Add(new NameValueGuid
                {
                    Name = entity.GetAttributeValue<string>("name"),
                    Value = entity.Id
                });
            }
            comboReports.DataSource = list;
            CheckOKButton();
        }

        private void LoadSolutions()
        {
            var solutions = XrmHelper.GetAllSolutions(CrmServiceClient);
            comboSolutions.DataSource = solutions;
        }

        private void LoadLanguages()
        {
            var languages = XrmHelper.GetProvisionedLanguages(CrmServiceClient);
            comboLanguages.DataSource = Utility.GetLanguages().Where(x => languages.Contains(int.Parse(x.Value))).ToList();
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void comboLanguages_SelectedIndexChanged(object sender, EventArgs e)
        {
            LoadReports();
        }

        private void comboSolutions_SelectedIndexChanged(object sender, EventArgs e)
        {
            LoadReports();
        }
    }
}
