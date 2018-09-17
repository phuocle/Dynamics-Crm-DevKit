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
            this.chkListForm = new System.Windows.Forms.CheckedListBox();
            this.chkOthers = new System.Windows.Forms.CheckBox();
            this.btnDefaultNetVersion = new System.Windows.Forms.Button();
            this.cboNetVersion = new System.Windows.Forms.ComboBox();
            this.lblNetVersion = new System.Windows.Forms.Label();
            this.btnConnection = new System.Windows.Forms.Button();
            this.cboEntity = new System.Windows.Forms.ComboBox();
            this.btnDefaultCrmVersion = new System.Windows.Forms.Button();
            this.lblProjectName = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.lblCrmVersion = new System.Windows.Forms.Label();
            this.cboCrmVersion = new System.Windows.Forms.ComboBox();
            this.btnCancel = new System.Windows.Forms.Button();
            this.btnOk = new System.Windows.Forms.Button();
            this.lblProject = new System.Windows.Forms.Label();
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.lblResourceStringName = new System.Windows.Forms.Label();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.lblResourceStringName);
            this.groupBox.Controls.Add(this.btnLoadForms);
            this.groupBox.Controls.Add(this.chkListForm);
            this.groupBox.Controls.Add(this.chkOthers);
            this.groupBox.Controls.Add(this.btnDefaultNetVersion);
            this.groupBox.Controls.Add(this.cboNetVersion);
            this.groupBox.Controls.Add(this.lblNetVersion);
            this.groupBox.Controls.Add(this.btnConnection);
            this.groupBox.Controls.Add(this.cboEntity);
            this.groupBox.Controls.Add(this.btnDefaultCrmVersion);
            this.groupBox.Controls.Add(this.lblProjectName);
            this.groupBox.Controls.Add(this.txtName);
            this.groupBox.Controls.Add(this.lblCrmVersion);
            this.groupBox.Controls.Add(this.cboCrmVersion);
            this.groupBox.Controls.Add(this.btnCancel);
            this.groupBox.Controls.Add(this.btnOk);
            this.groupBox.Controls.Add(this.lblProject);
            this.groupBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox.Location = new System.Drawing.Point(5, 0);
            this.groupBox.Margin = new System.Windows.Forms.Padding(25);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(5, 25, 5, 2);
            this.groupBox.Size = new System.Drawing.Size(570, 330);
            this.groupBox.TabIndex = 2;
            this.groupBox.TabStop = false;
            // 
            // btnLoadForms
            // 
            this.btnLoadForms.Enabled = false;
            this.btnLoadForms.Location = new System.Drawing.Point(9, 73);
            this.btnLoadForms.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnLoadForms.Name = "btnLoadForms";
            this.btnLoadForms.Size = new System.Drawing.Size(150, 30);
            this.btnLoadForms.TabIndex = 22;
            this.btnLoadForms.Text = "Load Forms";
            this.btnLoadForms.UseVisualStyleBackColor = true;
            this.btnLoadForms.Visible = false;
            this.btnLoadForms.Click += new System.EventHandler(this.btnLoadForms_Click);
            // 
            // chkListForm
            // 
            this.chkListForm.FormattingEnabled = true;
            this.chkListForm.Location = new System.Drawing.Point(9, 107);
            this.chkListForm.Margin = new System.Windows.Forms.Padding(2);
            this.chkListForm.Name = "chkListForm";
            this.chkListForm.Size = new System.Drawing.Size(388, 220);
            this.chkListForm.TabIndex = 21;
            this.chkListForm.Visible = false;
            this.chkListForm.SelectedIndexChanged += new System.EventHandler(this.chkListForm_SelectedIndexChanged);
            // 
            // chkOthers
            // 
            this.chkOthers.AutoSize = true;
            this.chkOthers.Location = new System.Drawing.Point(471, 47);
            this.chkOthers.Margin = new System.Windows.Forms.Padding(2);
            this.chkOthers.Name = "chkOthers";
            this.chkOthers.Size = new System.Drawing.Size(70, 21);
            this.chkOthers.TabIndex = 20;
            this.chkOthers.Text = "Others";
            this.chkOthers.UseVisualStyleBackColor = true;
            this.chkOthers.Visible = false;
            this.chkOthers.CheckedChanged += new System.EventHandler(this.chkOthers_CheckedChanged);
            // 
            // btnDefaultNetVersion
            // 
            this.btnDefaultNetVersion.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDefaultNetVersion.Location = new System.Drawing.Point(282, 153);
            this.btnDefaultNetVersion.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnDefaultNetVersion.Name = "btnDefaultNetVersion";
            this.btnDefaultNetVersion.Size = new System.Drawing.Size(37, 28);
            this.btnDefaultNetVersion.TabIndex = 19;
            this.btnDefaultNetVersion.Text = "><";
            this.btnDefaultNetVersion.UseVisualStyleBackColor = true;
            this.btnDefaultNetVersion.Visible = false;
            // 
            // cboNetVersion
            // 
            this.cboNetVersion.DisplayMember = "Version";
            this.cboNetVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboNetVersion.FormattingEnabled = true;
            this.cboNetVersion.Location = new System.Drawing.Point(115, 113);
            this.cboNetVersion.Margin = new System.Windows.Forms.Padding(5, 2, 5, 2);
            this.cboNetVersion.Name = "cboNetVersion";
            this.cboNetVersion.Size = new System.Drawing.Size(111, 25);
            this.cboNetVersion.TabIndex = 18;
            this.cboNetVersion.ValueMember = "Version";
            this.cboNetVersion.SelectedIndexChanged += new System.EventHandler(this.cboNetVersion_SelectedIndexChanged);
            // 
            // lblNetVersion
            // 
            this.lblNetVersion.AutoSize = true;
            this.lblNetVersion.Location = new System.Drawing.Point(2, 116);
            this.lblNetVersion.Margin = new System.Windows.Forms.Padding(7, 0, 7, 0);
            this.lblNetVersion.Name = "lblNetVersion";
            this.lblNetVersion.Size = new System.Drawing.Size(96, 17);
            this.lblNetVersion.TabIndex = 17;
            this.lblNetVersion.Text = ".NET Version:";
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(519, 17);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(37, 27);
            this.btnConnection.TabIndex = 16;
            this.btnConnection.Text = "><";
            this.btnConnection.UseVisualStyleBackColor = true;
            this.btnConnection.Click += new System.EventHandler(this.btnConnection_ClickAsync);
            // 
            // cboEntity
            // 
            this.cboEntity.DisplayMember = "Name";
            this.cboEntity.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboEntity.FormattingEnabled = true;
            this.cboEntity.Location = new System.Drawing.Point(115, 18);
            this.cboEntity.Margin = new System.Windows.Forms.Padding(5, 2, 5, 2);
            this.cboEntity.Name = "cboEntity";
            this.cboEntity.Size = new System.Drawing.Size(400, 25);
            this.cboEntity.TabIndex = 15;
            this.cboEntity.SelectedIndexChanged += new System.EventHandler(this.cboEntity_SelectedIndexChanged);
            // 
            // btnDefaultCrmVersion
            // 
            this.btnDefaultCrmVersion.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDefaultCrmVersion.Location = new System.Drawing.Point(240, 153);
            this.btnDefaultCrmVersion.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnDefaultCrmVersion.Name = "btnDefaultCrmVersion";
            this.btnDefaultCrmVersion.Size = new System.Drawing.Size(37, 28);
            this.btnDefaultCrmVersion.TabIndex = 14;
            this.btnDefaultCrmVersion.Text = "><";
            this.btnDefaultCrmVersion.UseVisualStyleBackColor = true;
            this.btnDefaultCrmVersion.Visible = false;
            // 
            // lblProjectName
            // 
            this.lblProjectName.AutoSize = true;
            this.lblProjectName.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblProjectName.ForeColor = System.Drawing.Color.Red;
            this.lblProjectName.Location = new System.Drawing.Point(115, 46);
            this.lblProjectName.Margin = new System.Windows.Forms.Padding(0);
            this.lblProjectName.Name = "lblProjectName";
            this.lblProjectName.Size = new System.Drawing.Size(32, 17);
            this.lblProjectName.TabIndex = 13;
            this.lblProjectName.Text = "aaa";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(115, 18);
            this.txtName.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(400, 23);
            this.txtName.TabIndex = 1;
            this.txtName.TabStop = false;
            this.txtName.TextChanged += new System.EventHandler(this.txtName_TextChanged);
            // 
            // lblCrmVersion
            // 
            this.lblCrmVersion.AutoSize = true;
            this.lblCrmVersion.Location = new System.Drawing.Point(2, 78);
            this.lblCrmVersion.Margin = new System.Windows.Forms.Padding(7, 0, 7, 0);
            this.lblCrmVersion.Name = "lblCrmVersion";
            this.lblCrmVersion.Size = new System.Drawing.Size(89, 17);
            this.lblCrmVersion.TabIndex = 11;
            this.lblCrmVersion.Text = "Crm Version:";
            // 
            // cboCrmVersion
            // 
            this.cboCrmVersion.DisplayMember = "Version";
            this.cboCrmVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCrmVersion.FormattingEnabled = true;
            this.cboCrmVersion.Location = new System.Drawing.Point(115, 75);
            this.cboCrmVersion.Margin = new System.Windows.Forms.Padding(5, 2, 5, 2);
            this.cboCrmVersion.Name = "cboCrmVersion";
            this.cboCrmVersion.Size = new System.Drawing.Size(111, 25);
            this.cboCrmVersion.TabIndex = 2;
            this.cboCrmVersion.ValueMember = "Version";
            this.cboCrmVersion.SelectedIndexChanged += new System.EventHandler(this.cboCrmVersion_SelectedIndexChanged);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(406, 113);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(150, 30);
            this.btnCancel.TabIndex = 4;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(406, 75);
            this.btnOk.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(150, 30);
            this.btnOk.TabIndex = 0;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // lblProject
            // 
            this.lblProject.AutoSize = true;
            this.lblProject.Location = new System.Drawing.Point(2, 21);
            this.lblProject.Margin = new System.Windows.Forms.Padding(7, 0, 7, 0);
            this.lblProject.Name = "lblProject";
            this.lblProject.Size = new System.Drawing.Size(97, 17);
            this.lblProject.TabIndex = 2;
            this.lblProject.Text = "Project Name:";
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(5, 325);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(570, 5);
            this.progressBar.Style = System.Windows.Forms.ProgressBarStyle.Marquee;
            this.progressBar.TabIndex = 24;
            this.progressBar.Visible = false;
            // 
            // lblResourceStringName
            // 
            this.lblResourceStringName.AutoSize = true;
            this.lblResourceStringName.Location = new System.Drawing.Point(2, 46);
            this.lblResourceStringName.Margin = new System.Windows.Forms.Padding(7, 0, 7, 0);
            this.lblResourceStringName.Name = "lblResourceStringName";
            this.lblResourceStringName.Size = new System.Drawing.Size(49, 17);
            this.lblResourceStringName.TabIndex = 23;
            this.lblResourceStringName.Text = "Name:";
            this.lblResourceStringName.Visible = false;
            // 
            // FormProject
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(580, 335);
            this.ControlBox = false;
            this.Controls.Add(this.progressBar);
            this.Controls.Add(this.groupBox);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormProject";
            this.Padding = new System.Windows.Forms.Padding(5, 0, 5, 5);
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Add new Console Project";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

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
        private System.Windows.Forms.Button btnDefaultCrmVersion;
        private System.Windows.Forms.Button btnConnection;
        private System.Windows.Forms.ComboBox cboEntity;
        private System.Windows.Forms.ComboBox cboNetVersion;
        private System.Windows.Forms.Label lblNetVersion;
        private System.Windows.Forms.Button btnDefaultNetVersion;
        private System.Windows.Forms.CheckBox chkOthers;
        private System.Windows.Forms.CheckedListBox chkListForm;
        private System.Windows.Forms.Button btnLoadForms;
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.Label lblResourceStringName;
    }
}