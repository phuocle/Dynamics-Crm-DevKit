using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security;
using System.Windows;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit._2019
{
    public partial class FormReportMapping : Window
    {
        private readonly CrmServiceClient serviceClient;
        private readonly string fullFileName;
        private readonly DeployReport cachedMapping;

        public DeployReport SelectedReport { get; private set; }

        public FormReportMapping(CrmServiceClient serviceClient, string fullFileName, DeployReport cachedMapping)
        {
            InitializeComponent();
            this.serviceClient = serviceClient;
            this.fullFileName = fullFileName;
            this.cachedMapping = cachedMapping;
            textboxFile.Text = fullFileName;
            LoadReports();
        }

        private void LoadReports()
        {
            var reports = GetReports(serviceClient, fullFileName);
            comboReports.ItemsSource = reports;

            var selected = reports.FirstOrDefault(x => cachedMapping != null && x.ReportId == cachedMapping.ReportId);
            if (selected == null)
            {
                var localFileName = Path.GetFileName(fullFileName);
                selected = reports.FirstOrDefault(x => string.Equals(x.ReportFileName, localFileName, StringComparison.OrdinalIgnoreCase));
            }
            if (selected != null)
            {
                comboReports.SelectedItem = selected;
            }
            else if (reports.Count > 0)
            {
                comboReports.SelectedIndex = 0;
            }
            CheckButtonOk();
        }

        private void ComboReports_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            CheckButtonOk();
        }

        private void CheckButtonOk()
        {
            buttonOK.IsEnabled = comboReports.SelectedItem is DeployReport;
            textStatus.Visibility = buttonOK.IsEnabled ? Visibility.Collapsed : Visibility.Visible;
            textStatus.Text = buttonOK.IsEnabled ? string.Empty : "No report found for the selected file name.";
        }

        private void ButtonOK_Click(object sender, RoutedEventArgs e)
        {
            SelectedReport = comboReports.SelectedItem as DeployReport;
            if (SelectedReport == null) return;
            SelectedReport.File = fullFileName;
            DialogResult = true;
        }

        private void ButtonCancel_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private static List<DeployReport> GetReports(CrmServiceClient serviceClient, string fullFileName)
        {
            var reportName = Path.GetFileNameWithoutExtension(fullFileName);
            var reportFileName = Path.GetFileName(fullFileName);
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='reportid' />
    <attribute name='name' />
    <attribute name='filename' />
    <attribute name='languagecode' />
    <attribute name='ismanaged' />
    <order attribute='filename' />
    <filter type='or'>
      <condition attribute='filename' operator='eq' value='{SecurityElement.Escape(reportFileName)}'/>
      <condition attribute='filename' operator='like' value='%{SecurityElement.Escape(reportName)}%'/>
      <condition attribute='name' operator='like' value='%{SecurityElement.Escape(reportName)}%'/>
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
