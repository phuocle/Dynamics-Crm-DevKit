using System;
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
                switch (CrmItemType)
                {
                    case CrmItemType.WebResource:
                        labelItem.Text = "WebResource";
                        Size = new System.Drawing.Size(693, 120);
                        groupBox.Size = new System.Drawing.Size(559, 66);

                        var selected = DevKitSetting.SelectedWebResources.Where(x => x.FullFileName == FullFileName).FirstOrDefault();
                        if (selected != null)
                        {
                            comboItems.Text = selected.WebResourceName;
                        }
                        else
                            comboItems.SelectedIndex = 0;

                        break;
                    case CrmItemType.NewWebResource:
                        labelItem.Text = "Solution";
                        labelWebResource.Visible = true;
                        txtWebResource.Visible = true;
                        txtWebResourcePrefix.Visible = true;
                        groupBox.Size = new System.Drawing.Size(559, 90);
                        Size = new System.Drawing.Size(693, 140);
                        comboItems.SelectedIndex = 0;
                        comboItems_SelectedIndexChanged(null, null);
                        break;
                }
            }
        }
        public Guid ObjectId {
            get {
                switch (CrmItemType)
                {
                    case CrmItemType.WebResource:
                        return Guid.Parse(comboItems.SelectedValue.ToString());
                }
                throw new Exception("ResourceId");
            }
        }

        public string SolutionUniqueName {
            get
            {
                switch(CrmItemType)
                {
                    case CrmItemType.NewWebResource:
                        return ((NameValueGuidExtend)comboItems.SelectedItem).SolutionUniqueName;

                }
                throw new Exception("SolutionUniqueName");
            }
        }

        public string ResourceName
        {
            get
            {
                switch (CrmItemType)
                {
                    case CrmItemType.WebResource:
                        return ((NameValueGuid)comboItems.SelectedItem).Name;
                    case CrmItemType.NewWebResource:
                        return $"{txtWebResourcePrefix.Text}{txtWebResource.Text}";
                }
                throw new Exception("ResourceName");
            }
        }
        private string FullFileName { get; set; }
        public void SetWebResourceName(string webResourceName)
        {
            txtWebResource.Text = FullFileName.Substring(webResourceName.Length).Replace(@"\", "/");
        }

        public FormItems(CrmItemType crmItemType, object list, string fullFileName, string crmUrl)
        {
            InitializeComponent();

            FullFileName = fullFileName;
            Text = $"Connected: {crmUrl}";
            comboItems.DataSource = list;
            CrmItemType = crmItemType;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void comboItems_SelectedIndexChanged(object sender, EventArgs e)
        {
            switch(CrmItemType)
            {
                case CrmItemType.NewWebResource:
                    var selected = (NameValueGuidExtend)comboItems.SelectedItem;
                    txtWebResourcePrefix.Text = selected.SolutionPrefix + "_";
                    break;
            }
        }
    }
}
