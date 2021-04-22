using System;
using System.Collections.Generic;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItems : Form
    {
        public Guid ResourceId { get; set; } = Guid.Empty;

        public FormItems(List<NameValueGuid> list)
        {
            InitializeComponent();
            comboItems.DataSource = list;
            comboItems.SelectedIndex = 0;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            ResourceId = Guid.Parse(comboItems.SelectedValue.ToString());
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }
    }
}
