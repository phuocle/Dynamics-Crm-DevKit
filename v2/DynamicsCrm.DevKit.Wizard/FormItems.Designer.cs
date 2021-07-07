namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormItems
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.txtWebResource = new System.Windows.Forms.TextBox();
            this.txtWebResourcePrefix = new System.Windows.Forms.TextBox();
            this.labelWebResource = new System.Windows.Forms.Label();
            this.comboItems = new System.Windows.Forms.ComboBox();
            this.labelItem = new System.Windows.Forms.Label();
            this.buttonOk = new System.Windows.Forms.Button();
            this.buttonCancel = new System.Windows.Forms.Button();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.txtWebResource);
            this.groupBox.Controls.Add(this.txtWebResourcePrefix);
            this.groupBox.Controls.Add(this.labelWebResource);
            this.groupBox.Controls.Add(this.comboItems);
            this.groupBox.Controls.Add(this.labelItem);
            this.groupBox.Location = new System.Drawing.Point(6, 2);
            this.groupBox.Margin = new System.Windows.Forms.Padding(2);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(2);
            this.groupBox.Size = new System.Drawing.Size(559, 70);
            this.groupBox.TabIndex = 5;
            this.groupBox.TabStop = false;
            // 
            // txtWebResource
            // 
            this.txtWebResource.Location = new System.Drawing.Point(167, 55);
            this.txtWebResource.Margin = new System.Windows.Forms.Padding(2);
            this.txtWebResource.Name = "txtWebResource";
            this.txtWebResource.Size = new System.Drawing.Size(379, 20);
            this.txtWebResource.TabIndex = 1;
            this.txtWebResource.Text = " ";
            this.txtWebResource.Visible = false;
            // 
            // txtWebResourcePrefix
            // 
            this.txtWebResourcePrefix.Enabled = false;
            this.txtWebResourcePrefix.Location = new System.Drawing.Point(97, 55);
            this.txtWebResourcePrefix.Margin = new System.Windows.Forms.Padding(2);
            this.txtWebResourcePrefix.Name = "txtWebResourcePrefix";
            this.txtWebResourcePrefix.Size = new System.Drawing.Size(66, 20);
            this.txtWebResourcePrefix.TabIndex = 6;
            this.txtWebResourcePrefix.Text = " ";
            this.txtWebResourcePrefix.Visible = false;
            // 
            // labelWebResource
            // 
            this.labelWebResource.AutoSize = true;
            this.labelWebResource.Location = new System.Drawing.Point(5, 58);
            this.labelWebResource.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelWebResource.Name = "labelWebResource";
            this.labelWebResource.Size = new System.Drawing.Size(76, 13);
            this.labelWebResource.TabIndex = 5;
            this.labelWebResource.Text = "WebResource";
            this.labelWebResource.Visible = false;
            // 
            // comboItems
            // 
            this.comboItems.DisplayMember = "Name";
            this.comboItems.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboItems.FormattingEnabled = true;
            this.comboItems.Location = new System.Drawing.Point(97, 25);
            this.comboItems.Margin = new System.Windows.Forms.Padding(2);
            this.comboItems.Name = "comboItems";
            this.comboItems.Size = new System.Drawing.Size(449, 21);
            this.comboItems.TabIndex = 4;
            this.comboItems.ValueMember = "Value";
            this.comboItems.SelectedIndexChanged += new System.EventHandler(this.comboItems_SelectedIndexChanged);
            // 
            // labelItem
            // 
            this.labelItem.AutoSize = true;
            this.labelItem.Location = new System.Drawing.Point(5, 28);
            this.labelItem.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelItem.Name = "labelItem";
            this.labelItem.Size = new System.Drawing.Size(76, 13);
            this.labelItem.TabIndex = 0;
            this.labelItem.Text = "WebResource";
            // 
            // buttonOk
            // 
            this.buttonOk.Location = new System.Drawing.Point(574, 11);
            this.buttonOk.Margin = new System.Windows.Forms.Padding(2);
            this.buttonOk.Name = "buttonOk";
            this.buttonOk.Size = new System.Drawing.Size(94, 29);
            this.buttonOk.TabIndex = 3;
            this.buttonOk.Text = "&OK";
            this.buttonOk.UseVisualStyleBackColor = true;
            this.buttonOk.Click += new System.EventHandler(this.buttonOk_Click);
            // 
            // buttonCancel
            // 
            this.buttonCancel.Location = new System.Drawing.Point(574, 44);
            this.buttonCancel.Margin = new System.Windows.Forms.Padding(2);
            this.buttonCancel.Name = "buttonCancel";
            this.buttonCancel.Size = new System.Drawing.Size(94, 29);
            this.buttonCancel.TabIndex = 4;
            this.buttonCancel.Text = "&Cancel";
            this.buttonCancel.UseVisualStyleBackColor = true;
            this.buttonCancel.Click += new System.EventHandler(this.buttonancel_Click);
            // 
            // FormItems
            // 
            this.AcceptButton = this.buttonOk;
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.ClientSize = new System.Drawing.Size(677, 81);
            this.ControlBox = false;
            this.Controls.Add(this.buttonCancel);
            this.Controls.Add(this.buttonOk);
            this.Controls.Add(this.groupBox);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormItems";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.Label labelItem;
        private System.Windows.Forms.Button buttonOk;
        private System.Windows.Forms.Button buttonCancel;
        private System.Windows.Forms.ComboBox comboItems;
        private System.Windows.Forms.Label labelWebResource;
        private System.Windows.Forms.TextBox txtWebResource;
        private System.Windows.Forms.TextBox txtWebResourcePrefix;
    }
}
