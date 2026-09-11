using DynamicsCrm.DevKit.Lib.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormReportDatasets : BaseDialogWindow
    {
        private readonly ReportDatasetService service;
        private readonly Func<Task<ServiceClient>> connectionFactory;
        private ReportDatasetInfo current;
        private ReportDatasetValidationResult validation;
        private bool adding;
        private bool synchronizingPrefilters;
        public FormReportDatasets(string filePath, Func<Task<ServiceClient>> connectionFactory)
        {
            InitializeComponent();
            service = new ReportDatasetService(filePath);
            this.connectionFactory = connectionFactory;
            textboxFile.Text = filePath;
            Refresh();
            textStatus.Text = FormatMessages(service.Warnings).TrimStart();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            FormatXml_Click(buttonFormat, e);
        }

        private void Refresh(string selectDatasetName = null)
        {
            comboDataset.ItemsSource = null;
            var datasets = service.List();
            comboDataset.ItemsSource = datasets;
            if (!string.IsNullOrWhiteSpace(selectDatasetName))
            {
                comboDataset.SelectedItem = datasets.FirstOrDefault(x =>
                    string.Equals(x.Name, selectDatasetName, StringComparison.OrdinalIgnoreCase));
            }
            else if (datasets.Count > 0 && comboDataset.SelectedItem == null) comboDataset.SelectedIndex = 0;
            else if (datasets.Count == 0) StartAdd();
        }

        private void Dataset_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            current = comboDataset.SelectedItem as ReportDatasetInfo;
            validation = null;
            // Clearing the selection is part of entering New mode. Do not let
            // that transient SelectionChanged event cancel the add state.
            if (current == null)
            {
                if (!adding)
                    textboxName.IsReadOnly = false;
                return;
            }
            adding = false;
            textboxName.Text = current.Name;
            textboxFetchXml.Text = current.CommandText;
            FormatXml_Click(buttonFormat, e);
            gridFields.ItemsSource = current.Fields;
            gridParameters.ItemsSource = current.Parameters;
            SetPrefilterItemsSource(current.FetchEntities);
            textStatus.Text = FormatMessages(current.Warnings).TrimStart();
        }

        private void New_Click(object sender, RoutedEventArgs e)
        {
            StartAdd();
        }

        private void StartAdd()
        {
            adding = true;
            current = null;
            validation = null;
            comboDataset.SelectedItem = null;
            textboxName.IsReadOnly = false;
            var existingNames = new HashSet<string>(service.List().Select(x => x.Name), StringComparer.OrdinalIgnoreCase);
            var suffix = 1;
            while (existingNames.Contains("Dataset" + suffix)) suffix++;
            textboxName.Text = "Dataset" + suffix;
            textboxFetchXml.Clear();
            gridFields.ItemsSource = null;
            gridParameters.ItemsSource = null;
            SetPrefilterItemsSource(null);
        }

        [SuppressMessage("Usage", "VSTHRD100:Avoid async void methods", Justification = "WPF event handler catches and reports all failures.")]
        private async void Validate_Click(object sender, RoutedEventArgs e)
        {
            SetBusy(true);
            try
            {
                if (await ValidateCurrentAsync())
                {
                    if (ApplyCurrentChanges())
                        textStatus.Text = "Dataset validated and applied to the working copy. Click Save RDL to write the RDL file.";
                }
            }
            catch (Exception ex)
            {
                textStatus.Text = ex.Message;
            }
            finally
            {
                SetBusy(false);
            }
        }

        private async Task<bool> ValidateCurrentAsync()
        {
            if (adding && string.IsNullOrWhiteSpace(textboxName.Text))
            {
                textStatus.Text = "Dataset name is required.";
                return false;
            }
            var syntax = service.ValidateSyntax(textboxFetchXml.Text);
            if (!syntax.IsSuccess)
            {
                textStatus.Text = string.Join(" | ", syntax.Errors);
                return false;
            }
            var client = await connectionFactory();
            if (client == null)
            {
                textStatus.Text = "Dataverse connection was cancelled; metadata validation was not run.";
                return false;
            }
            validation = await service.ValidateAsync(client, textboxFetchXml.Text, Selections(), adding ? null : current?.Name);
            gridFields.ItemsSource = validation.Fields;
            gridParameters.ItemsSource = validation.Parameters;
            SetPrefilterItemsSource(validation.FetchEntities);
            textStatus.Text = validation.IsSuccess
                ? "Projection validated. Fields were generated from metadata."
                + FormatMessages(validation.Warnings)
                : string.Join(" | ", validation.Errors);
            return validation.IsSuccess;
        }

        private bool ApplyCurrentChanges()
        {
            if (validation == null || !validation.IsSuccess)
            {
                textStatus.Text = "The dataset could not be saved because validation failed.";
                return false;
            }
            if (!string.Equals(validation.FetchXml, textboxFetchXml.Text, StringComparison.Ordinal))
            {
                textStatus.Text = "FetchXML changed during validation. Save again to validate the latest content.";
                return false;
            }
            gridParameters.CommitEdit();
            gridParameters.CommitEdit(System.Windows.Controls.DataGridEditingUnit.Row, true);
            if (!adding && current != null)
            {
                var removed = current.Fields.Select(x => x.Name).Except(validation.Fields.Select(x => x.Name), StringComparer.OrdinalIgnoreCase).ToList();
                var removeMessage = "The following fields will be removed from the dataset:\n" +
                    string.Join("\n", removed) +
                    "\n\nContinue with the update?";
                if (removed.Count > 0 && MessageBox.Show(
                    removeMessage,
                    "Removed fields",
                    MessageBoxButton.YesNo,
                    MessageBoxImage.Warning,
                    MessageBoxResult.No) != MessageBoxResult.Yes) return false;
            }
            var datasetName = textboxName.Text.Trim();
            if (adding) service.Add(datasetName, validation);
            else
            {
                var originalName = current?.Name;
                if (string.IsNullOrWhiteSpace(originalName))
                    throw new InvalidOperationException("Select a dataset before updating it.");
                service.Update(originalName, datasetName, validation);
            }
            Refresh(datasetName);
            return true;
        }

        [SuppressMessage("Usage", "VSTHRD100:Avoid async void methods", Justification = "WPF event handler catches and reports all failures.")]
        private async void Save_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (HasUnappliedEditorChanges())
                {
                    textStatus.Text = "Validating FetchXML and resolving Dataverse metadata...";
                    // Keep the dialog responsive while the connection prompt is displayed.
                    await Task.Yield();
                    if (!await ValidateCurrentAsync()) return;
                    SetBusy(true);
                    if (!ApplyCurrentChanges()) return;
                }
                else SetBusy(true);
                string solutionFolder = null;
                try { solutionFolder = await VsixHelper.GetSolutionFolderAsync(); }
                catch { }
                var backup = await service.SaveAsync(solutionFolder);
                textStatus.Text = backup == null ? "No changes." : "Report dataset saved successfully. Backup: " + Path.GetFileName(backup);
                if (backup != null) DialogResult = true;
            }
            catch (Exception ex)
            {
                textStatus.Text = ex.Message;
            }
            finally
            {
                SetBusy(false);
            }
        }

        private void FetchXml_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (synchronizingPrefilters) return;
            RebuildPrefilterGridFromXml();
        }

        private void Prefilter_Click(object sender, RoutedEventArgs e)
        {
            var checkBox = sender as System.Windows.Controls.CheckBox;
            SetPrefilterFromGrid(sender, checkBox?.IsChecked == true);
        }

        private void SetPrefilterFromGrid(object sender, bool enabled)
        {
            if (synchronizingPrefilters) return;
            var checkBox = sender as System.Windows.Controls.CheckBox;
            var entity = checkBox?.DataContext as ReportFetchEntityInfo;
            if (entity == null || string.IsNullOrWhiteSpace(entity.Path)) return;
            try
            {
                var fetch = XDocument.Parse(textboxFetchXml.Text, LoadOptions.PreserveWhitespace);
                var node = ReportDatasetService.FindFetchEntityForEditor(fetch, entity.Path);
                if (node == null) return;
                if (enabled)
                {
                    node.SetAttributeValue("enableprefiltering", "1");
                    node.SetAttributeValue("prefilterparametername", entity.PrefilterParameterName);
                }
                else
                {
                    node.Attribute("enableprefiltering")?.Remove();
                    node.Attribute("prefilterparametername")?.Remove();
                }
                synchronizingPrefilters = true;
                textboxFetchXml.Text = fetch.ToString(SaveOptions.None);
                validation = null;
                textStatus.Text = enabled
                    ? "Pre-filter enabled for " + entity.DisplayName + ". Validate the FetchXML before saving."
                    : "Pre-filter disabled for " + entity.DisplayName + ". Validate the FetchXML before saving.";
            }
            catch (Exception ex)
            {
                textStatus.Text = "Cannot update pre-filter: " + ex.Message;
            }
            finally
            {
                synchronizingPrefilters = false;
                RebuildPrefilterGridFromXml();
            }
        }

        private void RebuildPrefilterGridFromXml()
        {
            if (synchronizingPrefilters) return;
            var entities = ReportDatasetService.ReadFetchEntitiesForEditor(textboxFetchXml.Text).ToList();
            SetPrefilterItemsSource(entities);
        }

        private void SetPrefilterItemsSource(IEnumerable<ReportFetchEntityInfo> entities)
        {
            var previous = synchronizingPrefilters;
            synchronizingPrefilters = true;
            try
            {
                gridPrefilters.ItemsSource = entities;
            }
            finally
            {
                synchronizingPrefilters = previous;
            }
        }

        private void FormatXml_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(textboxFetchXml.Text)) return;
            try
            {
                textboxFetchXml.Text = XDocument.Parse(textboxFetchXml.Text).ToString(SaveOptions.None);
                validation = null;
                textStatus.Text = "FetchXML formatted in editor only.";
            }
            catch (Exception ex)
            {
                textStatus.Text = "Cannot format XML: " + ex.Message;
            }
        }

        private void Close_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void Window_Closing(object sender, CancelEventArgs e)
        {
            if (!service.IsDirty && !HasUnappliedEditorChanges()) return;
            if (MessageBox.Show(
                "Discard unsaved dataset changes?",
                "Manage Report Datasets",
                MessageBoxButton.YesNo,
                MessageBoxImage.Warning,
                MessageBoxResult.No) != MessageBoxResult.Yes) e.Cancel = true;
        }

        private IDictionary<string, bool> Selections()
        {
            var entities = gridPrefilters.ItemsSource as IEnumerable<ReportFetchEntityInfo>;
            return entities?
                .Where(x => !string.IsNullOrWhiteSpace(x.Path))
                .ToDictionary(
                    x => x.Path,
                    x => x.IsPreFiltered,
                    StringComparer.OrdinalIgnoreCase);
        }

        private static string FormatMessages(IEnumerable<string> messages)
        {
            var values = messages?.Where(x => !string.IsNullOrWhiteSpace(x)).ToList();
            return values == null || values.Count == 0 ? string.Empty : " " + string.Join(" | ", values);
        }

        private bool HasUnappliedEditorChanges()
        {
            if (validation != null) return true;
            if (adding) return !string.IsNullOrWhiteSpace(textboxFetchXml.Text);
            return current != null && !string.Equals(current.CommandText, textboxFetchXml.Text, StringComparison.Ordinal);
        }

        private void SetBusy(bool isBusy)
        {
            contentGrid.IsEnabled = !isBusy;
            comboDataset.IsEnabled = !isBusy;
            buttonNew.IsEnabled = !isBusy;
            buttonFormat.IsEnabled = !isBusy;
            buttonValidate.IsEnabled = !isBusy;
            buttonSave.IsEnabled = !isBusy;
            if (isBusy) textStatus.Text = "Working...";
        }
    }
}
