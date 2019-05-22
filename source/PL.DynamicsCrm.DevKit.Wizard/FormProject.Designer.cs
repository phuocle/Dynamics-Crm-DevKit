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
            this.cboCrmVersion = new System.Windows.Forms.ComboBox();
            this.lblCrmVersion = new System.Windows.Forms.Label();
            this.btnConnection = new System.Windows.Forms.Button();
            this.lblProjectName = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.lblCrmName = new System.Windows.Forms.Label();
            this.cboCrmName = new System.Windows.Forms.ComboBox();
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
            this.groupBox.Controls.Add(this.cboCrmVersion);
            this.groupBox.Controls.Add(this.lblCrmVersion);
            this.groupBox.Controls.Add(this.btnConnection);
            this.groupBox.Controls.Add(this.lblProjectName);
            this.groupBox.Controls.Add(this.txtName);
            this.groupBox.Controls.Add(this.lblCrmName);
            this.groupBox.Controls.Add(this.cboCrmName);
            this.groupBox.Controls.Add(this.btnCancel);
            this.groupBox.Controls.Add(this.btnOk);
            this.groupBox.Controls.Add(this.lblProject);
            this.groupBox.Controls.Add(this.chkListForm);
            this.groupBox.Controls.Add(this.cboEntity);
            this.groupBox.Location = new System.Drawing.Point(10, 26);
            this.groupBox.Margin = new System.Windows.Forms.Padding(0);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(7, 7, 7, 0);
            this.groupBox.Size = new System.Drawing.Size(464, 224);
            this.groupBox.TabIndex = 2;
            this.groupBox.TabStop = false;
            // 
            // btnLoadForms
            // 
            this.btnLoadForms.Enabled = false;
            this.btnLoadForms.Location = new System.Drawing.Point(9, 53);
            this.btnLoadForms.Name = "btnLoadForms";
            this.btnLoadForms.Size = new System.Drawing.Size(80, 27);
            this.btnLoadForms.TabIndex = 28;
            this.btnLoadForms.Text = "Load Forms";
            this.btnLoadForms.UseVisualStyleBackColor = true;
            this.btnLoadForms.Visible = false;
            this.btnLoadForms.Click += new System.EventHandler(this.btnLoadForms_Click);
            // 
            // chkOthers
            // 
            this.chkOthers.AutoSize = true;
            this.chkOthers.Location = new System.Drawing.Point(399, 19);
            this.chkOthers.Margin = new System.Windows.Forms.Padding(1);
            this.chkOthers.Name = "chkOthers";
            this.chkOthers.Size = new System.Drawing.Size(57, 17);
            this.chkOthers.TabIndex = 20;
            this.chkOthers.Text = "Others";
            this.chkOthers.UseVisualStyleBackColor = true;
            this.chkOthers.Visible = false;
            this.chkOthers.CheckedChanged += new System.EventHandler(this.chkOthers_CheckedChanged);
            // 
            // cboCrmVersion
            // 
            this.cboCrmVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCrmVersion.FormattingEnabled = true;
            this.cboCrmVersion.Location = new System.Drawing.Point(84, 79);
            this.cboCrmVersion.Margin = new System.Windows.Forms.Padding(3, 1, 3, 1);
            this.cboCrmVersion.Name = "cboCrmVersion";
            this.cboCrmVersion.Size = new System.Drawing.Size(183, 21);
            this.cboCrmVersion.TabIndex = 18;
            this.cboCrmVersion.Visible = false;
            this.cboCrmVersion.SelectedIndexChanged += new System.EventHandler(this.cboCrmVersion_SelectedIndexChanged);
            // 
            // lblCrmVersion
            // 
            this.lblCrmVersion.AutoSize = true;
            this.lblCrmVersion.Location = new System.Drawing.Point(10, 83);
            this.lblCrmVersion.Name = "lblCrmVersion";
            this.lblCrmVersion.Size = new System.Drawing.Size(66, 13);
            this.lblCrmVersion.TabIndex = 17;
            this.lblCrmVersion.Text = "Crm Version:";
            this.lblCrmVersion.Visible = false;
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(366, 12);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(0);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(28, 27);
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
            this.lblProjectName.Location = new System.Drawing.Point(83, 38);
            this.lblProjectName.Margin = new System.Windows.Forms.Padding(0);
            this.lblProjectName.Name = "lblProjectName";
            this.lblProjectName.Size = new System.Drawing.Size(25, 13);
            this.lblProjectName.TabIndex = 13;
            this.lblProjectName.Text = "aaa";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(84, 16);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(278, 20);
            this.txtName.TabIndex = 1;
            this.txtName.TabStop = false;
            this.txtName.Visible = false;
            this.txtName.TextChanged += new System.EventHandler(this.txtName_TextChanged);
            // 
            // lblCrmName
            // 
            this.lblCrmName.AutoSize = true;
            this.lblCrmName.Location = new System.Drawing.Point(10, 56);
            this.lblCrmName.Name = "lblCrmName";
            this.lblCrmName.Size = new System.Drawing.Size(59, 13);
            this.lblCrmName.TabIndex = 11;
            this.lblCrmName.Text = "Crm Name:";
            this.lblCrmName.Visible = false;
            // 
            // cboCrmName
            // 
            this.cboCrmName.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCrmName.FormattingEnabled = true;
            this.cboCrmName.Location = new System.Drawing.Point(84, 53);
            this.cboCrmName.Margin = new System.Windows.Forms.Padding(3, 1, 3, 1);
            this.cboCrmName.Name = "cboCrmName";
            this.cboCrmName.Size = new System.Drawing.Size(183, 21);
            this.cboCrmName.TabIndex = 2;
            this.cboCrmName.Visible = false;
            this.cboCrmName.SelectedIndexChanged += new System.EventHandler(this.cboCrmName_SelectedIndexChanged);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(370, 53);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(0);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(80, 27);
            this.btnCancel.TabIndex = 4;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(284, 53);
            this.btnOk.Margin = new System.Windows.Forms.Padding(0);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(80, 27);
            this.btnOk.TabIndex = 0;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // lblProject
            // 
            this.lblProject.AutoSize = true;
            this.lblProject.Location = new System.Drawing.Point(10, 19);
            this.lblProject.Name = "lblProject";
            this.lblProject.Size = new System.Drawing.Size(74, 13);
            this.lblProject.TabIndex = 2;
            this.lblProject.Text = "Project Name:";
            // 
            // chkListForm
            // 
            this.chkListForm.FormattingEnabled = true;
            this.chkListForm.Location = new System.Drawing.Point(9, 86);
            this.chkListForm.Margin = new System.Windows.Forms.Padding(1);
            this.chkListForm.Name = "chkListForm";
            this.chkListForm.Size = new System.Drawing.Size(269, 124);
            this.chkListForm.TabIndex = 21;
            this.chkListForm.Visible = false;
            this.chkListForm.SelectedIndexChanged += new System.EventHandler(this.chkListForm_SelectedIndexChanged);
            // 
            // cboEntity
            // 
            this.cboEntity.DisplayMember = "Name";
            this.cboEntity.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboEntity.FormattingEnabled = true;
            this.cboEntity.Location = new System.Drawing.Point(84, 16);
            this.cboEntity.Margin = new System.Windows.Forms.Padding(3, 1, 3, 1);
            this.cboEntity.Name = "cboEntity";
            this.cboEntity.Size = new System.Drawing.Size(278, 21);
            this.cboEntity.TabIndex = 15;
            this.cboEntity.Visible = false;
            this.cboEntity.SelectedIndexChanged += new System.EventHandler(this.cboEntity_SelectedIndexChanged);
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(0, 260);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(480, 3);
            this.progressBar.Style = System.Windows.Forms.ProgressBarStyle.Marquee;
            this.progressBar.TabIndex = 24;
            this.progressBar.Visible = false;
            // 
            // link
            // 
            this.link.AutoSize = true;
            this.link.Location = new System.Drawing.Point(10, 10);
            this.link.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.link.Name = "link";
            this.link.Size = new System.Drawing.Size(55, 13);
            this.link.TabIndex = 25;
            this.link.TabStop = true;
            this.link.Text = "linkLabel1";
            this.link.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.link_LinkClicked);
            // 
            // FormProject
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.ClientSize = new System.Drawing.Size(480, 263);
            this.ControlBox = false;
            this.Controls.Add(this.link);
            this.Controls.Add(this.progressBar);
            this.Controls.Add(this.groupBox);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(1, 1, 1, 1);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormProject";
            this.ShowIcon = false;
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
        private System.Windows.Forms.Label lblCrmName;
        private System.Windows.Forms.ComboBox cboCrmName;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.Label lblProject;
        private System.Windows.Forms.Label lblProjectName;
        private System.Windows.Forms.Button btnConnection;
        private System.Windows.Forms.ComboBox cboEntity;
        private System.Windows.Forms.ComboBox cboCrmVersion;
        private System.Windows.Forms.Label lblCrmVersion;
        private System.Windows.Forms.CheckBox chkOthers;
        private System.Windows.Forms.CheckedListBox chkListForm;
        private System.Windows.Forms.Button btnLoadForms;
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.LinkLabel link;
    }
}