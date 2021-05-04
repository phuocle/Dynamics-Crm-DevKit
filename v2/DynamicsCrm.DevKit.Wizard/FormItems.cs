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
        private CrmItemType _CrmItemType;
        private CrmItemType CrmItemType
        {
            get => _CrmItemType;
            set
            {
                _CrmItemType = value;
                switch (_CrmItemType)
                {
                    case CrmItemType.WebResource:
                        labelItem.Text = "WebResource";
                        Size = new System.Drawing.Size(693, 120);
                        groupBox.Size = new System.Drawing.Size(559, 66);
                        break;
                }
            }
        }
        public Guid ResourceId { get; set; } = Guid.Empty;
        public string ResourceName { get; set; } = string.Empty;

        public FormItems(CrmItemType crmItemType, List<NameValueGuid> list, string fullFileName, string crmUrl)
        {
            InitializeComponent();

            Text = $"Connected: {crmUrl}";

            CrmItemType = crmItemType;
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
