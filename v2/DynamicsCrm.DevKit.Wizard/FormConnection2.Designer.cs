namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormConnection2
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
            this.btnCancel = new System.Windows.Forms.Button();
            this.labelCrmConnection = new System.Windows.Forms.Label();
            this.btnOk = new System.Windows.Forms.Button();
            this.cboConnection = new System.Windows.Forms.ComboBox();
            this.groupBoxConnection = new System.Windows.Forms.GroupBox();
            this.cboType = new System.Windows.Forms.ComboBox();
            this.labelType = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.labelName = new System.Windows.Forms.Label();
            this.btnConnect = new System.Windows.Forms.Button();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.labelPassword = new System.Windows.Forms.Label();
            this.txtUserName = new System.Windows.Forms.TextBox();
            this.labelUserName = new System.Windows.Forms.Label();
            this.txtUrl = new System.Windows.Forms.TextBox();
            this.labelUrl = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.chkCheck0 = new System.Windows.Forms.CheckBox();
            this.chkCheck1 = new System.Windows.Forms.CheckBox();
            this.groupBoxConnection.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(320, 239);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(2);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(105, 28);
            this.btnCancel.TabIndex = 10;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // labelCrmConnection
            // 
            this.labelCrmConnection.AutoSize = true;
            this.labelCrmConnection.Location = new System.Drawing.Point(8, 21);
            this.labelCrmConnection.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelCrmConnection.Name = "labelCrmConnection";
            this.labelCrmConnection.Size = new System.Drawing.Size(103, 13);
            this.labelCrmConnection.TabIndex = 9;
            this.labelCrmConnection.Text = "Saved Connections:";
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(209, 239);
            this.btnOk.Margin = new System.Windows.Forms.Padding(2);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(105, 28);
            this.btnOk.TabIndex = 8;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // cboConnection
            // 
            this.cboConnection.DisplayMember = "Name";
            this.cboConnection.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboConnection.FormattingEnabled = true;
            this.cboConnection.Location = new System.Drawing.Point(164, 18);
            this.cboConnection.Margin = new System.Windows.Forms.Padding(2);
            this.cboConnection.Name = "cboConnection";
            this.cboConnection.Size = new System.Drawing.Size(256, 21);
            this.cboConnection.TabIndex = 0;
            // 
            // groupBoxConnection
            // 
            this.groupBoxConnection.Controls.Add(this.cboType);
            this.groupBoxConnection.Controls.Add(this.labelType);
            this.groupBoxConnection.Controls.Add(this.txtName);
            this.groupBoxConnection.Controls.Add(this.labelName);
            this.groupBoxConnection.Controls.Add(this.btnConnect);
            this.groupBoxConnection.Controls.Add(this.txtPassword);
            this.groupBoxConnection.Controls.Add(this.labelPassword);
            this.groupBoxConnection.Controls.Add(this.txtUserName);
            this.groupBoxConnection.Controls.Add(this.labelUserName);
            this.groupBoxConnection.Controls.Add(this.txtUrl);
            this.groupBoxConnection.Controls.Add(this.labelUrl);
            this.groupBoxConnection.Location = new System.Drawing.Point(10, 39);
            this.groupBoxConnection.Margin = new System.Windows.Forms.Padding(2);
            this.groupBoxConnection.Name = "groupBoxConnection";
            this.groupBoxConnection.Padding = new System.Windows.Forms.Padding(2);
            this.groupBoxConnection.Size = new System.Drawing.Size(410, 162);
            this.groupBoxConnection.TabIndex = 11;
            this.groupBoxConnection.TabStop = false;
            // 
            // cboType
            // 
            this.cboType.DisplayMember = "Name";
            this.cboType.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboType.FormattingEnabled = true;
            this.cboType.Items.AddRange(new object[] {
            "AD",
            "ClientSecret",
            "Office365"});
            this.cboType.Location = new System.Drawing.Point(98, 15);
            this.cboType.Margin = new System.Windows.Forms.Padding(2);
            this.cboType.Name = "cboType";
            this.cboType.Size = new System.Drawing.Size(197, 21);
            this.cboType.TabIndex = 1;
            this.cboType.SelectedIndexChanged += new System.EventHandler(this.cboType_SelectedIndexChanged);
            // 
            // labelType
            // 
            this.labelType.AutoSize = true;
            this.labelType.Location = new System.Drawing.Point(4, 18);
            this.labelType.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelType.Name = "labelType";
            this.labelType.Size = new System.Drawing.Size(31, 13);
            this.labelType.TabIndex = 9;
            this.labelType.Text = "Type";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(98, 43);
            this.txtName.Margin = new System.Windows.Forms.Padding(2);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(197, 20);
            this.txtName.TabIndex = 2;
            // 
            // labelName
            // 
            this.labelName.AutoSize = true;
            this.labelName.Location = new System.Drawing.Point(4, 46);
            this.labelName.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(35, 13);
            this.labelName.TabIndex = 7;
            this.labelName.Text = "Name";
            // 
            // btnConnect
            // 
            this.btnConnect.Location = new System.Drawing.Point(299, 99);
            this.btnConnect.Margin = new System.Windows.Forms.Padding(2);
            this.btnConnect.Name = "btnConnect";
            this.btnConnect.Size = new System.Drawing.Size(107, 48);
            this.btnConnect.TabIndex = 4;
            this.btnConnect.Text = "Connect ?";
            this.btnConnect.UseVisualStyleBackColor = true;
            this.btnConnect.Click += new System.EventHandler(this.btnConnect_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(98, 127);
            this.txtPassword.Margin = new System.Windows.Forms.Padding(2);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.PasswordChar = '*';
            this.txtPassword.Size = new System.Drawing.Size(197, 20);
            this.txtPassword.TabIndex = 5;
            // 
            // labelPassword
            // 
            this.labelPassword.AutoSize = true;
            this.labelPassword.Location = new System.Drawing.Point(4, 130);
            this.labelPassword.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelPassword.Name = "labelPassword";
            this.labelPassword.Size = new System.Drawing.Size(73, 13);
            this.labelPassword.TabIndex = 6;
            this.labelPassword.Text = "Client Secrect";
            // 
            // txtUserName
            // 
            this.txtUserName.Location = new System.Drawing.Point(98, 99);
            this.txtUserName.Margin = new System.Windows.Forms.Padding(2);
            this.txtUserName.Name = "txtUserName";
            this.txtUserName.Size = new System.Drawing.Size(197, 20);
            this.txtUserName.TabIndex = 4;
            // 
            // labelUserName
            // 
            this.labelUserName.AutoSize = true;
            this.labelUserName.Location = new System.Drawing.Point(4, 102);
            this.labelUserName.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelUserName.Name = "labelUserName";
            this.labelUserName.Size = new System.Drawing.Size(45, 13);
            this.labelUserName.TabIndex = 3;
            this.labelUserName.Text = "Client Id";
            // 
            // txtUrl
            // 
            this.txtUrl.Location = new System.Drawing.Point(98, 71);
            this.txtUrl.Margin = new System.Windows.Forms.Padding(2);
            this.txtUrl.Name = "txtUrl";
            this.txtUrl.Size = new System.Drawing.Size(308, 20);
            this.txtUrl.TabIndex = 3;
            // 
            // labelUrl
            // 
            this.labelUrl.AutoSize = true;
            this.labelUrl.Location = new System.Drawing.Point(4, 74);
            this.labelUrl.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelUrl.Name = "labelUrl";
            this.labelUrl.Size = new System.Drawing.Size(20, 13);
            this.labelUrl.TabIndex = 0;
            this.labelUrl.Text = "Url";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.chkCheck0);
            this.groupBox1.Controls.Add(this.groupBoxConnection);
            this.groupBox1.Controls.Add(this.labelCrmConnection);
            this.groupBox1.Controls.Add(this.cboConnection);
            this.groupBox1.Location = new System.Drawing.Point(9, 10);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(2);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(2);
            this.groupBox1.Size = new System.Drawing.Size(428, 210);
            this.groupBox1.TabIndex = 12;
            this.groupBox1.TabStop = false;
            // 
            // chkCheck0
            // 
            this.chkCheck0.AutoSize = true;
            this.chkCheck0.Checked = true;
            this.chkCheck0.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chkCheck0.Location = new System.Drawing.Point(0, 0);
            this.chkCheck0.Margin = new System.Windows.Forms.Padding(2);
            this.chkCheck0.Name = "chkCheck0";
            this.chkCheck0.Size = new System.Drawing.Size(110, 17);
            this.chkCheck0.TabIndex = 13;
            this.chkCheck0.Text = "Connection String";
            this.chkCheck0.UseVisualStyleBackColor = true;
            this.chkCheck0.CheckedChanged += new System.EventHandler(this.chkCheck0_CheckedChanged);
            // 
            // chkCheck1
            // 
            this.chkCheck1.AutoSize = true;
            this.chkCheck1.Location = new System.Drawing.Point(9, 230);
            this.chkCheck1.Margin = new System.Windows.Forms.Padding(2);
            this.chkCheck1.Name = "chkCheck1";
            this.chkCheck1.Size = new System.Drawing.Size(139, 17);
            this.chkCheck1.TabIndex = 13;
            this.chkCheck1.Text = "OOB SDK Control Login";
            this.chkCheck1.UseVisualStyleBackColor = true;
            this.chkCheck1.CheckedChanged += new System.EventHandler(this.chkCheck1_CheckedChanged);
            // 
            // FormConnection2
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.ClientSize = new System.Drawing.Size(444, 278);
            this.ControlBox = false;
            this.Controls.Add(this.chkCheck1);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.btnOk);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormConnection2";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit";
            this.groupBoxConnection.ResumeLayout(false);
            this.groupBoxConnection.PerformLayout();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Label labelCrmConnection;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.ComboBox cboConnection;
        private System.Windows.Forms.GroupBox groupBoxConnection;
        private System.Windows.Forms.TextBox txtName;
        private System.Windows.Forms.Label labelName;
        private System.Windows.Forms.Button btnConnect;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Label labelPassword;
        private System.Windows.Forms.TextBox txtUserName;
        private System.Windows.Forms.Label labelUserName;
        private System.Windows.Forms.TextBox txtUrl;
        private System.Windows.Forms.Label labelUrl;
        private System.Windows.Forms.ComboBox cboType;
        private System.Windows.Forms.Label labelType;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.CheckBox chkCheck0;
        private System.Windows.Forms.CheckBox chkCheck1;
    }
}
