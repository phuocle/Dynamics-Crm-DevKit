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
        public FormReportDatasets(string filePath, Func<Task<ServiceClient>> connectionFactory)
        {
            InitializeComponent();
            service = new ReportDatasetService(filePath);
            this.connectionFactory = connectionFactory;
            textboxFile.Text = filePath;
            Refresh();
            textStatus.Text = FormatMessages(service.Warnings).TrimStart();
        }

        private void Refresh()
        {
            gridDatasets.ItemsSource = null;
            var datasets = service.List();
            gridDatasets.ItemsSource = datasets;
            if (datasets.Count > 0 && gridDatasets.SelectedItem == null) gridDatasets.SelectedIndex = 0;
            else if (datasets.Count == 0) StartAdd();
        }

        private void Dataset_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            current = gridDatasets.SelectedItem as ReportDatasetInfo;
            adding = false;
            validation = null;
            buttonApply.Content = "Update Dataset";
            if (current == null) return;
            textboxName.Text = current.Name;
            textboxName.IsReadOnly = true;
            textboxFetchXml.Text = current.CommandText;
            gridFields.ItemsSource = current.Fields;
            gridParameters.ItemsSource = current.Parameters;
            gridPrefilters.ItemsSource = current.FetchEntities;
            checkboxPrefilter.IsChecked = current.FetchEntities.Any(x => x.IsPreFiltered);
            textStatus.Text = FormatMessages(current.Warnings).TrimStart();
        }

        private void Add_Click(object sender, RoutedEventArgs e)
        {
            StartAdd();
        }

        private void StartAdd()
        {
            adding = true;
            current = null;
            validation = null;
            buttonApply.Content = "Add Dataset";
            textboxName.IsReadOnly = false;
            var existingNames = new HashSet<string>(service.List().Select(x => x.Name), StringComparer.OrdinalIgnoreCase);
            var suffix = 1;
            while (existingNames.Contains("Dataset" + suffix)) suffix++;
            textboxName.Text = "Dataset" + suffix;
            textboxFetchXml.Clear();
            checkboxPrefilter.IsChecked = false;
            gridFields.ItemsSource = null;
            gridParameters.ItemsSource = null;
            gridPrefilters.ItemsSource = null;
        }

        [SuppressMessage("Usage", "VSTHRD100:Avoid async void methods", Justification = "WPF event handler catches and reports all failures.")]
        private async void Validate_Click(object sender, RoutedEventArgs e)
        {
            gridPrefilters.CommitEdit();
            gridPrefilters.CommitEdit(System.Windows.Controls.DataGridEditingUnit.Row, true);
            var syntax = service.ValidateSyntax(textboxFetchXml.Text);
            if (!syntax.IsSuccess)
            {
                textStatus.Text = string.Join(" | ", syntax.Errors);
                return;
            }
            SetBusy(true);
            try
            {
                var client = await connectionFactory();
                if (client == null)
                {
                    textStatus.Text = "Dataverse connection was cancelled; metadata validation was not run.";
                    return;
                }
                validation = await service.ValidateAsync(client, textboxFetchXml.Text, Selections(), adding ? null : current?.Name);
                if (checkboxPrefilter.IsChecked != true)
                {
                    foreach (var entity in validation.FetchEntities) entity.IsPreFiltered = false;
                }
                else if (!validation.FetchEntities.Any(x => x.IsPreFiltered))
                {
                    var root = validation.FetchEntities.FirstOrDefault(x => x.IsRoot);
                    if (root != null) root.IsPreFiltered = true;
                }
                gridFields.ItemsSource = validation.Fields;
                gridParameters.ItemsSource = validation.Parameters;
                gridPrefilters.ItemsSource = validation.FetchEntities;
                textStatus.Text = validation.IsSuccess
                    ? "Projection validated. Fields were generated from metadata." + FormatMessages(validation.Warnings)
                    : string.Join(" | ", validation.Errors);
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

        private void Apply_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (validation == null || !validation.IsSuccess)
                {
                    textStatus.Text = "Validate FetchXML before adding or updating the dataset.";
                    return;
                }
                if (!string.Equals(validation.FetchXml, textboxFetchXml.Text, StringComparison.Ordinal))
                {
                    textStatus.Text = "FetchXML changed after validation. Validate again before Add/Update.";
                    return;
                }
                gridParameters.CommitEdit();
                gridParameters.CommitEdit(System.Windows.Controls.DataGridEditingUnit.Row, true);
                gridPrefilters.CommitEdit();
                gridPrefilters.CommitEdit(System.Windows.Controls.DataGridEditingUnit.Row, true);
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
                        MessageBoxResult.No) != MessageBoxResult.Yes) return;
                }
                if (adding) service.Add(textboxName.Text.Trim(), validation);
                else service.Update(textboxName.Text.Trim(), validation);
                var warnings = validation.Warnings.ToList();
                Refresh();
                textStatus.Text = "Dataset staged; press Save to write the RDL." + FormatMessages(warnings);
            }
            catch (Exception ex)
            {
                textStatus.Text = ex.Message;
            }
        }

        [SuppressMessage("Usage", "VSTHRD100:Avoid async void methods", Justification = "WPF event handler catches and reports all failures.")]
        private async void Save_Click(object sender, RoutedEventArgs e)
        {
            if (HasUnappliedEditorChanges())
            {
                textStatus.Text = "Apply the current dataset editor changes before Save.";
                return;
            }
            SetBusy(true);
            try
            {
                string solutionFolder = null;
                try { solutionFolder = await VsixHelper.GetSolutionFolderAsync(); }
                catch { }
                var backup = await service.SaveAsync(solutionFolder);
                textStatus.Text = backup == null ? "No changes." : "Saved; backup: " + Path.GetFileName(backup);
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

        private void Delete_Click(object sender, RoutedEventArgs e)
        {
            if (current == null) return;
            var references = service.FindReferences(current.Name).ToList();
            var deleteMessage = "This dataset is referenced by the following report locations:\n" +
                string.Join("\n", references) +
                "\n\nDelete anyway?";
            if (references.Count > 0 && MessageBox.Show(
                deleteMessage,
                "Confirm",
                MessageBoxButton.YesNo,
                MessageBoxImage.Warning,
                MessageBoxResult.No) != MessageBoxResult.Yes) return;
            service.Delete(current.Name);
            validation = null;
            Refresh();
            textStatus.Text = "Dataset deleted from the working copy; press Save to write the RDL.";
        }

        private void Reload_Click(object sender, RoutedEventArgs e)
        {
            if ((service.IsDirty || HasUnappliedEditorChanges()) && MessageBox.Show(
                "Discard unsaved changes and reload the RDL from disk?",
                "Reload",
                MessageBoxButton.YesNo,
                MessageBoxImage.Warning,
                MessageBoxResult.No) != MessageBoxResult.Yes) return;
            service.Reload();
            validation = null;
            Refresh();
            textStatus.Text = "RDL reloaded from disk.";
        }

        private void PrefilterToggle_Click(object sender, RoutedEventArgs e)
        {
            var entities = gridPrefilters.ItemsSource as IEnumerable<ReportFetchEntityInfo>;
            if (entities == null) return;
            var items = entities.ToList();
            if (checkboxPrefilter.IsChecked == true && !items.Any(x => x.IsPreFiltered))
            {
                var root = items.FirstOrDefault(x => x.IsRoot);
                if (root != null) root.IsPreFiltered = true;
            }
            else if (checkboxPrefilter.IsChecked != true)
                foreach (var entity in items) entity.IsPreFiltered = false;
            gridPrefilters.Items.Refresh();
        }

        private void FormatXml_Click(object sender, RoutedEventArgs e)
        {
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

        private void Cancel_Click(object sender, RoutedEventArgs e)
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
                    x => checkboxPrefilter.IsChecked == true && x.IsPreFiltered,
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
            buttonFormat.IsEnabled = !isBusy;
            buttonValidate.IsEnabled = !isBusy;
            buttonApply.IsEnabled = !isBusy;
            buttonSave.IsEnabled = !isBusy;
            if (isBusy) textStatus.Text = "Working...";
        }
    }
}
