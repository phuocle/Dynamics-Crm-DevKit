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
            this.groupBoxConnection.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(476, 9);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(2);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(80, 25);
            this.btnCancel.TabIndex = 10;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // labelCrmConnection
            // 
            this.labelCrmConnection.Location = new System.Drawing.Point(9, 14);
            this.labelCrmConnection.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelCrmConnection.Name = "labelCrmConnection";
            this.labelCrmConnection.Size = new System.Drawing.Size(95, 20);
            this.labelCrmConnection.TabIndex = 9;
            this.labelCrmConnection.Text = "Crm Connection:";
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(392, 9);
            this.btnOk.Margin = new System.Windows.Forms.Padding(2);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(80, 25);
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
            this.cboConnection.Location = new System.Drawing.Point(118, 11);
            this.cboConnection.Margin = new System.Windows.Forms.Padding(2);
            this.cboConnection.Name = "cboConnection";
            this.cboConnection.Size = new System.Drawing.Size(270, 21);
            this.cboConnection.TabIndex = 7;
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
            this.groupBoxConnection.Location = new System.Drawing.Point(9, 36);
            this.groupBoxConnection.Margin = new System.Windows.Forms.Padding(2);
            this.groupBoxConnection.Name = "groupBoxConnection";
            this.groupBoxConnection.Padding = new System.Windows.Forms.Padding(2);
            this.groupBoxConnection.Size = new System.Drawing.Size(547, 152);
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
            "IFD",
            "Office365",
            "ClientSecret"});
            this.cboType.Location = new System.Drawing.Point(85, 42);
            this.cboType.Margin = new System.Windows.Forms.Padding(2);
            this.cboType.Name = "cboType";
            this.cboType.Size = new System.Drawing.Size(227, 21);
            this.cboType.TabIndex = 10;
            this.cboType.SelectedIndexChanged += new System.EventHandler(this.cboType_SelectedIndexChanged);
            // 
            // labelType
            // 
            this.labelType.Location = new System.Drawing.Point(5, 45);
            this.labelType.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelType.Name = "labelType";
            this.labelType.Size = new System.Drawing.Size(76, 17);
            this.labelType.TabIndex = 9;
            this.labelType.Text = "Type";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(85, 17);
            this.txtName.Margin = new System.Windows.Forms.Padding(2);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(227, 20);
            this.txtName.TabIndex = 8;
            // 
            // labelName
            // 
            this.labelName.Location = new System.Drawing.Point(5, 20);
            this.labelName.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(76, 17);
            this.labelName.TabIndex = 7;
            this.labelName.Text = "Name";
            // 
            // btnConnect
            // 
            this.btnConnect.Location = new System.Drawing.Point(316, 93);
            this.btnConnect.Margin = new System.Windows.Forms.Padding(2);
            this.btnConnect.Name = "btnConnect";
            this.btnConnect.Size = new System.Drawing.Size(145, 45);
            this.btnConnect.TabIndex = 4;
            this.btnConnect.Text = "Connect ?";
            this.btnConnect.UseVisualStyleBackColor = true;
            this.btnConnect.Click += new System.EventHandler(this.btnConnect_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(85, 118);
            this.txtPassword.Margin = new System.Windows.Forms.Padding(2);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.PasswordChar = '*';
            this.txtPassword.Size = new System.Drawing.Size(227, 20);
            this.txtPassword.TabIndex = 3;
            // 
            // labelPassword
            // 
            this.labelPassword.Location = new System.Drawing.Point(5, 121);
            this.labelPassword.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelPassword.Name = "labelPassword";
            this.labelPassword.Size = new System.Drawing.Size(76, 17);
            this.labelPassword.TabIndex = 6;
            this.labelPassword.Text = "Password";
            // 
            // txtUserName
            // 
            this.txtUserName.Location = new System.Drawing.Point(85, 93);
            this.txtUserName.Margin = new System.Windows.Forms.Padding(2);
            this.txtUserName.Name = "txtUserName";
            this.txtUserName.Size = new System.Drawing.Size(227, 20);
            this.txtUserName.TabIndex = 2;
            // 
            // labelUserName
            // 
            this.labelUserName.Location = new System.Drawing.Point(5, 96);
            this.labelUserName.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelUserName.Name = "labelUserName";
            this.labelUserName.Size = new System.Drawing.Size(76, 17);
            this.labelUserName.TabIndex = 3;
            this.labelUserName.Text = "User Name";
            // 
            // txtUrl
            // 
            this.txtUrl.Location = new System.Drawing.Point(85, 68);
            this.txtUrl.Margin = new System.Windows.Forms.Padding(2);
            this.txtUrl.Name = "txtUrl";
            this.txtUrl.Size = new System.Drawing.Size(456, 20);
            this.txtUrl.TabIndex = 1;
            // 
            // labelUrl
            // 
            this.labelUrl.Location = new System.Drawing.Point(5, 71);
            this.labelUrl.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelUrl.Name = "labelUrl";
            this.labelUrl.Size = new System.Drawing.Size(76, 17);
            this.labelUrl.TabIndex = 0;
            this.labelUrl.Text = "Url";
            // 
            // FormConnection2
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.ClientSize = new System.Drawing.Size(561, 195);
            this.ControlBox = false;
            this.Controls.Add(this.groupBoxConnection);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.labelCrmConnection);
            this.Controls.Add(this.btnOk);
            this.Controls.Add(this.cboConnection);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormConnection2";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit - v.";
            this.groupBoxConnection.ResumeLayout(false);
            this.groupBoxConnection.PerformLayout();
            this.ResumeLayout(false);

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
    }
}