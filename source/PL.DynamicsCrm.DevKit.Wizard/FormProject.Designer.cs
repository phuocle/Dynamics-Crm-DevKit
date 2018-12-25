namespace PL.DynamicsCrm.DevKit.Wizard
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
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.btnLoadForms = new System.Windows.Forms.Button();
            this.chkOthers = new System.Windows.Forms.CheckBox();
            this.cboNetVersion = new System.Windows.Forms.ComboBox();
            this.lblNetVersion = new System.Windows.Forms.Label();
            this.btnConnection = new System.Windows.Forms.Button();
            this.lblProjectName = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.lblCrmVersion = new System.Windows.Forms.Label();
            this.cboCrmVersion = new System.Windows.Forms.ComboBox();
            this.btnCancel = new System.Windows.Forms.Button();
            this.btnOk = new System.Windows.Forms.Button();
            this.lblProject = new System.Windows.Forms.Label();
            this.chkListForm = new System.Windows.Forms.CheckedListBox();
            this.cboEntity = new System.Windows.Forms.ComboBox();
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.link = new System.Windows.Forms.LinkLabel();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox
            // 
            this.groupBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBox.AutoSize = true;
            this.groupBox.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.groupBox.Controls.Add(this.btnLoadForms);
            this.groupBox.Controls.Add(this.chkOthers);
            this.groupBox.Controls.Add(this.cboNetVersion);
            this.groupBox.Controls.Add(this.lblNetVersion);
            this.groupBox.Controls.Add(this.btnConnection);
            this.groupBox.Controls.Add(this.lblProjectName);
            this.groupBox.Controls.Add(this.txtName);
            this.groupBox.Controls.Add(this.lblCrmVersion);
            this.groupBox.Controls.Add(this.cboCrmVersion);
            this.groupBox.Controls.Add(this.btnCancel);
            this.groupBox.Controls.Add(this.btnOk);
            this.groupBox.Controls.Add(this.lblProject);
            this.groupBox.Controls.Add(this.chkListForm);
            this.groupBox.Controls.Add(this.cboEntity);
            this.groupBox.Location = new System.Drawing.Point(13, 32);
            this.groupBox.Margin = new System.Windows.Forms.Padding(0);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(9, 9, 9, 0);
            this.groupBox.Size = new System.Drawing.Size(609, 275);
            this.groupBox.TabIndex = 2;
            this.groupBox.TabStop = false;
            // 
            // btnLoadForms
            // 
            this.btnLoadForms.Enabled = false;
            this.btnLoadForms.Location = new System.Drawing.Point(12, 78);
            this.btnLoadForms.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.btnLoadForms.Name = "btnLoadForms";
            this.btnLoadForms.Size = new System.Drawing.Size(107, 34);
            this.btnLoadForms.TabIndex = 28;
            this.btnLoadForms.Text = "Load Forms";
            this.btnLoadForms.UseVisualStyleBackColor = true;
            this.btnLoadForms.Visible = false;
            this.btnLoadForms.Click += new System.EventHandler(this.btnLoadForms_Click);
            // 
            // chkOthers
            // 
            this.chkOthers.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.chkOthers.AutoSize = true;
            this.chkOthers.Location = new System.Drawing.Point(532, 23);
            this.chkOthers.Margin = new System.Windows.Forms.Padding(1);
            this.chkOthers.Name = "chkOthers";
            this.chkOthers.Size = new System.Drawing.Size(73, 21);
            this.chkOthers.TabIndex = 20;
            this.chkOthers.Text = "Others";
            this.chkOthers.UseVisualStyleBackColor = true;
            this.chkOthers.Visible = false;
            this.chkOthers.CheckedChanged += new System.EventHandler(this.chkOthers_CheckedChanged);
            // 
            // cboNetVersion
            // 
            this.cboNetVersion.DisplayMember = "Version";
            this.cboNetVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboNetVersion.FormattingEnabled = true;
            this.cboNetVersion.Location = new System.Drawing.Point(112, 98);
            this.cboNetVersion.Margin = new System.Windows.Forms.Padding(4, 1, 4, 1);
            this.cboNetVersion.Name = "cboNetVersion";
            this.cboNetVersion.Size = new System.Drawing.Size(243, 24);
            this.cboNetVersion.TabIndex = 18;
            this.cboNetVersion.ValueMember = "Version";
            this.cboNetVersion.Visible = false;
            this.cboNetVersion.SelectedIndexChanged += new System.EventHandler(this.cboNetVersion_SelectedIndexChanged);
            // 
            // lblNetVersion
            // 
            this.lblNetVersion.AutoSize = true;
            this.lblNetVersion.Location = new System.Drawing.Point(13, 102);
            this.lblNetVersion.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lblNetVersion.Name = "lblNetVersion";
            this.lblNetVersion.Size = new System.Drawing.Size(96, 17);
            this.lblNetVersion.TabIndex = 17;
            this.lblNetVersion.Text = ".NET Version:";
            this.lblNetVersion.Visible = false;
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(488, 15);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(0);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(37, 34);
            this.btnConnection.TabIndex = 16;
            this.btnConnection.Text = "><";
            this.btnConnection.UseVisualStyleBackColor = true;
            this.btnConnection.Visible = false;
            this.btnConnection.Click += new System.EventHandler(this.btnConnection_ClickAsync);
            // 
            // lblProjectName
            // 
            this.lblProjectName.AutoSize = true;
            this.lblProjectName.ForeColor = System.Drawing.Color.Red;
            this.lblProjectName.Location = new System.Drawing.Point(111, 45);
            this.lblProjectName.Margin = new System.Windows.Forms.Padding(0);
            this.lblProjectName.Name = "lblProjectName";
            this.lblProjectName.Size = new System.Drawing.Size(32, 17);
            this.lblProjectName.TabIndex = 13;
            this.lblProjectName.Text = "aaa";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(112, 20);
            this.txtName.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(369, 22);
            this.txtName.TabIndex = 1;
            this.txtName.TabStop = false;
            this.txtName.Visible = false;
            this.txtName.TextChanged += new System.EventHandler(this.txtName_TextChanged);
            // 
            // lblCrmVersion
            // 
            this.lblCrmVersion.AutoSize = true;
            this.lblCrmVersion.Location = new System.Drawing.Point(13, 69);
            this.lblCrmVersion.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lblCrmVersion.Name = "lblCrmVersion";
            this.lblCrmVersion.Size = new System.Drawing.Size(89, 17);
            this.lblCrmVersion.TabIndex = 11;
            this.lblCrmVersion.Text = "Crm Version:";
            this.lblCrmVersion.Visible = false;
            // 
            // cboCrmVersion
            // 
            this.cboCrmVersion.DisplayMember = "Version";
            this.cboCrmVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCrmVersion.FormattingEnabled = true;
            this.cboCrmVersion.Location = new System.Drawing.Point(112, 65);
            this.cboCrmVersion.Margin = new System.Windows.Forms.Padding(4, 1, 4, 1);
            this.cboCrmVersion.Name = "cboCrmVersion";
            this.cboCrmVersion.Size = new System.Drawing.Size(243, 24);
            this.cboCrmVersion.TabIndex = 2;
            this.cboCrmVersion.ValueMember = "Version";
            this.cboCrmVersion.Visible = false;
            this.cboCrmVersion.SelectedIndexChanged += new System.EventHandler(this.cboCrmVersion_SelectedIndexChanged);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(493, 65);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(0);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(107, 34);
            this.btnCancel.TabIndex = 4;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(379, 65);
            this.btnOk.Margin = new System.Windows.Forms.Padding(0);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(107, 34);
            this.btnOk.TabIndex = 0;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // lblProject
            // 
            this.lblProject.AutoSize = true;
            this.lblProject.Location = new System.Drawing.Point(13, 23);
            this.lblProject.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lblProject.Name = "lblProject";
            this.lblProject.Size = new System.Drawing.Size(97, 17);
            this.lblProject.TabIndex = 2;
            this.lblProject.Text = "Project Name:";
            // 
            // chkListForm
            // 
            this.chkListForm.FormattingEnabled = true;
            this.chkListForm.Location = new System.Drawing.Point(12, 119);
            this.chkListForm.Margin = new System.Windows.Forms.Padding(1);
            this.chkListForm.Name = "chkListForm";
            this.chkListForm.Size = new System.Drawing.Size(357, 140);
            this.chkListForm.TabIndex = 21;
            this.chkListForm.Visible = false;
            this.chkListForm.SelectedIndexChanged += new System.EventHandler(this.chkListForm_SelectedIndexChanged);
            // 
            // cboEntity
            // 
            this.cboEntity.DisplayMember = "Name";
            this.cboEntity.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboEntity.FormattingEnabled = true;
            this.cboEntity.Location = new System.Drawing.Point(112, 20);
            this.cboEntity.Margin = new System.Windows.Forms.Padding(4, 1, 4, 1);
            this.cboEntity.Name = "cboEntity";
            this.cboEntity.Size = new System.Drawing.Size(369, 24);
            this.cboEntity.TabIndex = 15;
            this.cboEntity.Visible = false;
            this.cboEntity.SelectedIndexChanged += new System.EventHandler(this.cboEntity_SelectedIndexChanged);
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(0, 330);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(640, 4);
            this.progressBar.Style = System.Windows.Forms.ProgressBarStyle.Marquee;
            this.progressBar.TabIndex = 24;
            this.progressBar.Visible = false;
            // 
            // link
            // 
            this.link.AutoSize = true;
            this.link.Location = new System.Drawing.Point(13, 12);
            this.link.Name = "link";
            this.link.Size = new System.Drawing.Size(72, 17);
            this.link.TabIndex = 25;
            this.link.TabStop = true;
            this.link.Text = "linkLabel1";
            this.link.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.link_LinkClicked);
            // 
            // FormProject
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.ClientSize = new System.Drawing.Size(640, 334);
            this.ControlBox = false;
            this.Controls.Add(this.link);
            this.Controls.Add(this.progressBar);
            this.Controls.Add(this.groupBox);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(1, 2, 1, 2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormProject";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Add new Console Project";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.TextBox txtName;
        private System.Windows.Forms.Label lblCrmVersion;
        private System.Windows.Forms.ComboBox cboCrmVersion;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.Label lblProject;
        private System.Windows.Forms.Label lblProjectName;
        private System.Windows.Forms.Button btnConnection;
        private System.Windows.Forms.ComboBox cboEntity;
        private System.Windows.Forms.ComboBox cboNetVersion;
        private System.Windows.Forms.Label lblNetVersion;
        private System.Windows.Forms.CheckBox chkOthers;
        private System.Windows.Forms.CheckedListBox chkListForm;
        private System.Windows.Forms.Button btnLoadForms;
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.LinkLabel link;
    }
}