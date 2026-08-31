using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
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

        public DeployReport SelectedReport { get; private set; }

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

        private void CheckButtonOk()
        {
            buttonOK.IsEnabled = comboReports.SelectedItem is DeployReport;
            textStatus.Visibility = buttonOK.IsEnabled ? Visibility.Collapsed : Visibility.Visible;
            if (buttonOK.IsEnabled) textStatus.Text = string.Empty;
            else if (string.IsNullOrWhiteSpace(textStatus.Text)) textStatus.Text = "No report found for the selected file name.";
        }

        private void ButtonOK_Click(object sender, RoutedEventArgs e)
        {
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
