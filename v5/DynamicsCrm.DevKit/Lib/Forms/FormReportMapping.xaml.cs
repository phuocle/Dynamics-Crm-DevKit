using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security;
using System.Windows;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormReportMapping : BaseDialogWindow
    {
        private readonly ServiceClient serviceClient;
        private readonly string fullFileName;
        private readonly DeployReport cachedMapping;
        private readonly bool isNew;

        public DeployReport SelectedReport { get; private set; }
        public string SelectedSolutionUniqueName { get; private set; }
        public string NewReportName => textboxNewReportName?.Text?.Trim();

        private sealed class LanguageOption
        {
            public int Code { get; set; }
            public string DisplayName { get; set; }
        }

        public FormReportMapping(ServiceClient serviceClient, string fullFileName, DeployReport cachedMapping)
        {
            InitializeComponent();
            this.serviceClient = serviceClient;
            this.fullFileName = fullFileName;
            this.cachedMapping = cachedMapping;
            Title = "Deploy Dynamics 365 Report";
            textboxFile.Text = fullFileName;
            LoadReports();
        }

        public FormReportMapping(ServiceClient serviceClient, string fullFileName, List<NameValueGuidExtend> solutions)
        {
            InitializeComponent();
            this.serviceClient = serviceClient;
            this.fullFileName = fullFileName;
            isNew = true;
            Title = "Deploy New Dynamics 365 Report";
            textboxFile.Text = fullFileName;
            ExistingReport.Visibility = Visibility.Collapsed;
            NewReport.Visibility = Visibility.Visible;
            textboxNewReportName.Text = Path.GetFileNameWithoutExtension(fullFileName);
            comboSolutions.ItemsSource = solutions ?? new List<NameValueGuidExtend>();
            LoadLanguages();
            CheckButtonOk();
        }

        private void LoadReports()
        {
            try
            {
                var reports = GetReports(serviceClient, fullFileName);
                comboReports.ItemsSource = reports;
                var selected = reports.FirstOrDefault(x => cachedMapping != null && x.ReportId == cachedMapping.ReportId)
                    ?? reports.FirstOrDefault(x => string.Equals(x.ReportFileName, System.IO.Path.GetFileName(fullFileName), StringComparison.OrdinalIgnoreCase));
                if (selected != null) comboReports.SelectedItem = selected;
                else if (reports.Count > 0) comboReports.SelectedIndex = 0;
                CheckButtonOk();
            }
            catch (Exception ex)
            {
                textStatus.Text = $"Unable to load reports: {ex.Message}";
                textStatus.Visibility = Visibility.Visible;
                buttonOK.IsEnabled = false;
            }
        }

        private void ComboReports_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e) => CheckButtonOk();

        private void ComboLanguages_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e) => CheckButtonOk();

        private void ComboSolutions_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e) => CheckButtonOk();

        private void TextboxNewReportName_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e) => CheckButtonOk();

        private void LoadLanguages()
        {
            try
            {
                var provisioned = ((RetrieveProvisionedLanguagesResponse)serviceClient.Execute(new RetrieveProvisionedLanguagesRequest())).RetrieveProvisionedLanguages.ToArray();
                if (provisioned.Length == 0) throw new InvalidOperationException("The organization has no provisioned languages.");
                var values = string.Concat(provisioned.Select(x => $"<value>{x}</value>"));
                var fetch = $@"<fetch><entity name='languagelocale'><attribute name='localeid'/><attribute name='language'/><filter><condition attribute='localeid' operator='in'>{values}</condition></filter></entity></fetch>";
                var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                comboLanguages.ItemsSource = rows.Entities.Select(x => new LanguageOption
                {
                    Code = x.GetAttributeValue<int>("localeid"),
                    DisplayName = $"{x.GetAttributeValue<string>("language")} ({x.GetAttributeValue<int>("localeid")})"
                }).OrderBy(x => x.DisplayName).ToList();
                if (comboLanguages.Items.Count == 0) throw new InvalidOperationException("Unable to resolve provisioned languages.");
            }
            catch (Exception ex)
            {
                textStatus.Text = $"Unable to load languages: {ex.Message}";
                textStatus.Visibility = Visibility.Visible;
            }
        }

        private void CheckButtonOk()
        {
            buttonOK.IsEnabled = isNew
                ? !string.IsNullOrWhiteSpace(NewReportName) && comboLanguages.SelectedItem != null && comboSolutions.SelectedItem != null
                : comboReports.SelectedItem is DeployReport;
            textStatus.Visibility = buttonOK.IsEnabled ? Visibility.Collapsed : Visibility.Visible;
            if (buttonOK.IsEnabled) textStatus.Text = string.Empty;
            else if (string.IsNullOrWhiteSpace(textStatus.Text)) textStatus.Text = isNew
                ? "Report name, language and solution are required."
                : "No report found for the selected file name.";
        }

        private void ButtonOK_Click(object sender, RoutedEventArgs e)
        {
            if (isNew)
            {
                var language = comboLanguages.SelectedItem as LanguageOption;
                var solution = comboSolutions.SelectedItem as NameValueGuidExtend;
                if (language == null || solution == null || string.IsNullOrWhiteSpace(NewReportName)) return;
                SelectedSolutionUniqueName = solution.SolutionUniqueName;
                SelectedReport = new DeployReport
                {
                    File = fullFileName,
                    ReportName = NewReportName,
                    ReportFileName = NewReportName.EndsWith(".rdl", StringComparison.OrdinalIgnoreCase) ? NewReportName : NewReportName + ".rdl",
                    LanguageCode = language.Code,
                    Language = language.DisplayName
                };
                DialogResult = true;
                return;
            }
            SelectedReport = comboReports.SelectedItem as DeployReport;
            if (SelectedReport == null) return;
            SelectedReport.File = fullFileName;
            DialogResult = true;
        }

        private void ButtonCancel_Click(object sender, RoutedEventArgs e) => DialogResult = false;

        private static List<DeployReport> GetReports(ServiceClient serviceClient, string fullFileName)
        {
            var reportName = System.IO.Path.GetFileNameWithoutExtension(fullFileName);
            var reportFileName = System.IO.Path.GetFileName(fullFileName);
            var safeFile = SecurityElement.Escape(reportFileName);
            var safeName = SecurityElement.Escape(reportName);
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='reportid' /><attribute name='name' /><attribute name='filename' />
    <attribute name='languagecode' /><attribute name='ismanaged' />
    <order attribute='filename' />
    <filter type='or'>
      <condition attribute='filename' operator='eq' value='{safeFile}' />
      <condition attribute='filename' operator='like' value='%{safeName}%' />
      <condition attribute='name' operator='like' value='%{safeName}%' />
    </filter>
    <link-entity name='languagelocale' from='localeid' to='languagecode' link-type='outer' alias='l'>
      <attribute name='language' />
    </link-entity>
  </entity>
</fetch>";
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Select(entity => new DeployReport
            {
                ReportId = entity.Id,
                ReportName = entity.GetAttributeValue<string>("name") ?? string.Empty,
                ReportFileName = entity.GetAttributeValue<string>("filename") ?? string.Empty,
                LanguageCode = entity.GetAttributeValue<int?>("languagecode") ?? 0,
                Language = entity.GetAttributeValue<AliasedValue>("l.language")?.Value?.ToString() ?? string.Empty,
                IsManaged = entity.GetAttributeValue<bool?>("ismanaged") ?? false
            }).ToList();
        }

    }
}
