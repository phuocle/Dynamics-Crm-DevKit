using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItems : Form
    {
        public Guid ResourceId { get; set; } = Guid.Empty;
        public string ResourceName { get; set; } = string.Empty;

        public FormItems(List<NameValueGuid> list, string fullFileName)
        {
            InitializeComponent();
            comboItems.DataSource = list;
            var selected = DevKitSetting.SelectedWebResources.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
            if (selected != null)
            {
                comboItems.Text = selected.WebResourceName;
            }
            else
                comboItems.SelectedIndex = 0;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            ResourceId = Guid.Parse(comboItems.SelectedValue.ToString());
            ResourceName = ((NameValueGuid)comboItems.SelectedItem).Name;
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }
    }
}
