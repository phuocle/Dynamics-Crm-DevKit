namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormProject
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
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.buttonConnection = new System.Windows.Forms.Button();
            this.link = new System.Windows.Forms.LinkLabel();
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.comboBoxEntity = new System.Windows.Forms.ComboBox();
            this.comboBoxCrmName = new System.Windows.Forms.ComboBox();
            this.labelDynamicsCrm = new System.Windows.Forms.Label();
            this.labelProjectName = new System.Windows.Forms.Label();
            this.textProjectName = new System.Windows.Forms.TextBox();
            this.labelProject = new System.Windows.Forms.Label();
            this.buttonOk = new System.Windows.Forms.Button();
            this.buttonCancel = new System.Windows.Forms.Button();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(3, 110);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(510, 4);
            this.progressBar.TabIndex = 1;
            // 
            // buttonConnection
            // 
            this.buttonConnection.Location = new System.Drawing.Point(533, 0);
            this.buttonConnection.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonConnection.Name = "buttonConnection";
            this.buttonConnection.Size = new System.Drawing.Size(125, 36);
            this.buttonConnection.TabIndex = 0;
            this.buttonConnection.Text = "Co&nnection";
            this.buttonConnection.UseVisualStyleBackColor = true;
            this.buttonConnection.Click += new System.EventHandler(this.buttonConnection_Click);
            // 
            // link
            // 
            this.link.Location = new System.Drawing.Point(0, 0);
            this.link.Margin = new System.Windows.Forms.Padding(0);
            this.link.Name = "link";
            this.link.Padding = new System.Windows.Forms.Padding(13, 0, 0, 0);
            this.link.Size = new System.Drawing.Size(524, 23);
            this.link.TabIndex = 4;
            this.link.TabStop = true;
            this.link.Text = "WIKI: Add new WebResource Project";
            this.link.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.link.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.link_LinkClicked);
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.comboBoxEntity);
            this.groupBox.Controls.Add(this.comboBoxCrmName);
            this.groupBox.Controls.Add(this.labelDynamicsCrm);
            this.groupBox.Controls.Add(this.labelProjectName);
            this.groupBox.Controls.Add(this.textProjectName);
            this.groupBox.Controls.Add(this.labelProject);
            this.groupBox.Controls.Add(this.progressBar);
            this.groupBox.Location = new System.Drawing.Point(8, 20);
            this.groupBox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox.Size = new System.Drawing.Size(516, 116);
            this.groupBox.TabIndex = 5;
            this.groupBox.TabStop = false;
            // 
            // comboBoxEntity
            // 
            this.comboBoxEntity.Enabled = false;
            this.comboBoxEntity.FormattingEnabled = true;
            this.comboBoxEntity.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxEntity.Location = new System.Drawing.Point(133, 15);
            this.comboBoxEntity.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.comboBoxEntity.Name = "comboBoxEntity";
            this.comboBoxEntity.Size = new System.Drawing.Size(363, 24);
            this.comboBoxEntity.TabIndex = 4;
            this.comboBoxEntity.Visible = false;
            this.comboBoxEntity.SelectedIndexChanged += new System.EventHandler(this.comboBoxEntity_SelectedIndexChanged);
            this.comboBoxEntity.TextUpdate += new System.EventHandler(this.comboBoxEntity_TextUpdate);
            // 
            // comboBoxCrmName
            // 
            this.comboBoxCrmName.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxCrmName.Enabled = false;
            this.comboBoxCrmName.FormattingEnabled = true;
            this.comboBoxCrmName.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxCrmName.Location = new System.Drawing.Point(137, 76);
            this.comboBoxCrmName.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.comboBoxCrmName.Name = "comboBoxCrmName";
            this.comboBoxCrmName.Size = new System.Drawing.Size(359, 24);
            this.comboBoxCrmName.TabIndex = 2;
            // 
            // labelDynamicsCrm
            // 
            this.labelDynamicsCrm.Location = new System.Drawing.Point(8, 80);
            this.labelDynamicsCrm.Name = "labelDynamicsCrm";
            this.labelDynamicsCrm.Size = new System.Drawing.Size(120, 31);
            this.labelDynamicsCrm.TabIndex = 3;
            this.labelDynamicsCrm.Text = "Dynamics Crm:";
            // 
            // labelProjectName
            // 
            this.labelProjectName.Location = new System.Drawing.Point(133, 39);
            this.labelProjectName.Name = "labelProjectName";
            this.labelProjectName.Size = new System.Drawing.Size(364, 34);
            this.labelProjectName.TabIndex = 2;
            this.labelProjectName.Text = "AAAAA AAAA AAAA AAAA AAA AAA AAAA";
            // 
            // textProjectName
            // 
            this.textProjectName.Enabled = false;
            this.textProjectName.Location = new System.Drawing.Point(133, 15);
            this.textProjectName.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.textProjectName.Name = "textProjectName";
            this.textProjectName.Size = new System.Drawing.Size(363, 22);
            this.textProjectName.TabIndex = 1;
            this.textProjectName.TextChanged += new System.EventHandler(this.textProjectName_TextChanged);
            // 
            // labelProject
            // 
            this.labelProject.Location = new System.Drawing.Point(8, 18);
            this.labelProject.Name = "labelProject";
            this.labelProject.Size = new System.Drawing.Size(120, 38);
            this.labelProject.TabIndex = 0;
            this.labelProject.Text = "Project Name:";
            // 
            // buttonOk
            // 
            this.buttonOk.Enabled = false;
            this.buttonOk.Location = new System.Drawing.Point(533, 59);
            this.buttonOk.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonOk.Name = "buttonOk";
            this.buttonOk.Size = new System.Drawing.Size(125, 36);
            this.buttonOk.TabIndex = 3;
            this.buttonOk.Text = "&OK";
            this.buttonOk.UseVisualStyleBackColor = true;
            this.buttonOk.Click += new System.EventHandler(this.buttonOk_Click);
            // 
            // buttonCancel
            // 
            this.buttonCancel.Location = new System.Drawing.Point(533, 100);
            this.buttonCancel.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonCancel.Name = "buttonCancel";
            this.buttonCancel.Size = new System.Drawing.Size(125, 36);
            this.buttonCancel.TabIndex = 4;
            this.buttonCancel.Text = "&Cancel";
            this.buttonCancel.UseVisualStyleBackColor = true;
            this.buttonCancel.Click += new System.EventHandler(this.buttonancel_Click);
            // 
            // FormProject
            // 
            this.AcceptButton = this.buttonOk;
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(659, 148);
            this.ControlBox = false;
            this.Controls.Add(this.buttonConnection);
            this.Controls.Add(this.buttonCancel);
            this.Controls.Add(this.buttonOk);
            this.Controls.Add(this.groupBox);
            this.Controls.Add(this.link);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormProject";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.Button buttonConnection;
        private System.Windows.Forms.LinkLabel link;
        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.TextBox textProjectName;
        private System.Windows.Forms.Label labelProject;
        private System.Windows.Forms.Label labelProjectName;
        private System.Windows.Forms.ComboBox comboBoxCrmName;
        private System.Windows.Forms.Label labelDynamicsCrm;
        private System.Windows.Forms.Button buttonOk;
        private System.Windows.Forms.Button buttonCancel;
        private System.Windows.Forms.ComboBox comboBoxEntity;
    }
}
