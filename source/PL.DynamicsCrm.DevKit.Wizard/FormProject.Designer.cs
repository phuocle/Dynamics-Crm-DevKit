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
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox
            // 
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
            this.groupBox.Location = new System.Drawing.Point(10, 0);
            this.groupBox.Margin = new System.Windows.Forms.Padding(30, 31, 30, 31);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(10, 31, 30, 31);
            this.groupBox.Size = new System.Drawing.Size(590, 179);
            this.groupBox.TabIndex = 2;
            this.groupBox.TabStop = false;
            // 
            // chkOthers
            // 
            this.chkOthers.AutoSize = true;
            this.chkOthers.Location = new System.Drawing.Point(511, 25);
            this.chkOthers.Name = "chkOthers";
            this.chkOthers.Size = new System.Drawing.Size(76, 24);
            this.chkOthers.TabIndex = 20;
            this.chkOthers.Text = "Others";
            this.chkOthers.UseVisualStyleBackColor = true;
            this.chkOthers.Visible = false;
            this.chkOthers.CheckedChanged += new System.EventHandler(this.chkOthers_CheckedChanged);
            // 
            // btnDefaultNetVersion
            // 
            this.btnDefaultNetVersion.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDefaultNetVersion.Location = new System.Drawing.Point(279, 136);
            this.btnDefaultNetVersion.Margin = new System.Windows.Forms.Padding(8);
            this.btnDefaultNetVersion.Name = "btnDefaultNetVersion";
            this.btnDefaultNetVersion.Size = new System.Drawing.Size(28, 28);
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
            this.cboNetVersion.Location = new System.Drawing.Point(136, 136);
            this.cboNetVersion.Margin = new System.Windows.Forms.Padding(6, 3, 6, 3);
            this.cboNetVersion.Name = "cboNetVersion";
            this.cboNetVersion.Size = new System.Drawing.Size(132, 28);
            this.cboNetVersion.TabIndex = 18;
            this.cboNetVersion.ValueMember = "Version";
            this.cboNetVersion.SelectedIndexChanged += new System.EventHandler(this.cboNetVersion_SelectedIndexChanged);
            // 
            // lblNetVersion
            // 
            this.lblNetVersion.AutoSize = true;
            this.lblNetVersion.Location = new System.Drawing.Point(6, 139);
            this.lblNetVersion.Margin = new System.Windows.Forms.Padding(8, 0, 8, 0);
            this.lblNetVersion.Name = "lblNetVersion";
            this.lblNetVersion.Size = new System.Drawing.Size(106, 20);
            this.lblNetVersion.TabIndex = 17;
            this.lblNetVersion.Text = ".NET Version:";
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(479, 23);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(8);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(28, 28);
            this.btnConnection.TabIndex = 16;
            this.btnConnection.Text = "><";
            this.btnConnection.UseVisualStyleBackColor = true;
            this.btnConnection.Click += new System.EventHandler(this.btnConnection_Click);
            // 
            // cboEntity
            // 
            this.cboEntity.DisplayMember = "Name";
            this.cboEntity.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboEntity.FormattingEnabled = true;
            this.cboEntity.Location = new System.Drawing.Point(136, 23);
            this.cboEntity.Margin = new System.Windows.Forms.Padding(6, 3, 6, 3);
            this.cboEntity.Name = "cboEntity";
            this.cboEntity.Size = new System.Drawing.Size(329, 28);
            this.cboEntity.TabIndex = 15;
            this.cboEntity.SelectedIndexChanged += new System.EventHandler(this.cboEntity_SelectedIndexChanged);
            // 
            // btnDefaultCrmVersion
            // 
            this.btnDefaultCrmVersion.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDefaultCrmVersion.Location = new System.Drawing.Point(279, 93);
            this.btnDefaultCrmVersion.Margin = new System.Windows.Forms.Padding(8);
            this.btnDefaultCrmVersion.Name = "btnDefaultCrmVersion";
            this.btnDefaultCrmVersion.Size = new System.Drawing.Size(28, 28);
            this.btnDefaultCrmVersion.TabIndex = 14;
            this.btnDefaultCrmVersion.Text = "><";
            this.btnDefaultCrmVersion.UseVisualStyleBackColor = true;
            this.btnDefaultCrmVersion.Visible = false;
            // 
            // lblProjectName
            // 
            this.lblProjectName.AutoSize = true;
            this.lblProjectName.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblProjectName.ForeColor = System.Drawing.Color.Red;
            this.lblProjectName.Location = new System.Drawing.Point(133, 57);
            this.lblProjectName.Margin = new System.Windows.Forms.Padding(0);
            this.lblProjectName.Name = "lblProjectName";
            this.lblProjectName.Size = new System.Drawing.Size(35, 16);
            this.lblProjectName.TabIndex = 13;
            this.lblProjectName.Text = "aaa";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(136, 23);
            this.txtName.Margin = new System.Windows.Forms.Padding(8);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(329, 26);
            this.txtName.TabIndex = 1;
            this.txtName.TabStop = false;
            this.txtName.TextChanged += new System.EventHandler(this.txtName_TextChanged);
            // 
            // lblCrmVersion
            // 
            this.lblCrmVersion.AutoSize = true;
            this.lblCrmVersion.Location = new System.Drawing.Point(6, 96);
            this.lblCrmVersion.Margin = new System.Windows.Forms.Padding(8, 0, 8, 0);
            this.lblCrmVersion.Name = "lblCrmVersion";
            this.lblCrmVersion.Size = new System.Drawing.Size(100, 20);
            this.lblCrmVersion.TabIndex = 11;
            this.lblCrmVersion.Text = "Crm Version:";
            // 
            // cboCrmVersion
            // 
            this.cboCrmVersion.DisplayMember = "Version";
            this.cboCrmVersion.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboCrmVersion.FormattingEnabled = true;
            this.cboCrmVersion.Location = new System.Drawing.Point(136, 93);
            this.cboCrmVersion.Margin = new System.Windows.Forms.Padding(6, 3, 6, 3);
            this.cboCrmVersion.Name = "cboCrmVersion";
            this.cboCrmVersion.Size = new System.Drawing.Size(132, 28);
            this.cboCrmVersion.TabIndex = 2;
            this.cboCrmVersion.ValueMember = "Version";
            this.cboCrmVersion.SelectedIndexChanged += new System.EventHandler(this.cboCrmVersion_SelectedIndexChanged);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(479, 82);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(8);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(100, 34);
            this.btnCancel.TabIndex = 4;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(363, 82);
            this.btnOk.Margin = new System.Windows.Forms.Padding(8);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(100, 34);
            this.btnOk.TabIndex = 3;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // lblProject
            // 
            this.lblProject.AutoSize = true;
            this.lblProject.Location = new System.Drawing.Point(6, 26);
            this.lblProject.Margin = new System.Windows.Forms.Padding(8, 0, 8, 0);
            this.lblProject.Name = "lblProject";
            this.lblProject.Size = new System.Drawing.Size(108, 20);
            this.lblProject.TabIndex = 2;
            this.lblProject.Text = "Project Name:";
            // 
            // FormProject
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(610, 189);
            this.Controls.Add(this.groupBox);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormProject";
            this.Padding = new System.Windows.Forms.Padding(10, 0, 10, 10);
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
    }
}