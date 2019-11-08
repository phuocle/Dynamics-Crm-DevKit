namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormConnection
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
            this.groupBoxConnection = new System.Windows.Forms.GroupBox();
            this.txtName = new System.Windows.Forms.TextBox();
            this.labelName = new System.Windows.Forms.Label();
            this.btnConnect = new System.Windows.Forms.Button();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.labelPassword = new System.Windows.Forms.Label();
            this.txtUserName = new System.Windows.Forms.TextBox();
            this.labelUserName = new System.Windows.Forms.Label();
            this.labelTips = new System.Windows.Forms.Label();
            this.txtUrl = new System.Windows.Forms.TextBox();
            this.labelUrl = new System.Windows.Forms.Label();
            this.cboConnection = new System.Windows.Forms.ComboBox();
            this.btnOk = new System.Windows.Forms.Button();
            this.labelCrmConnection = new System.Windows.Forms.Label();
            this.btnCancel = new System.Windows.Forms.Button();
            this.groupBoxConnection.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBoxConnection
            // 
            this.groupBoxConnection.Controls.Add(this.txtName);
            this.groupBoxConnection.Controls.Add(this.labelName);
            this.groupBoxConnection.Controls.Add(this.btnConnect);
            this.groupBoxConnection.Controls.Add(this.txtPassword);
            this.groupBoxConnection.Controls.Add(this.labelPassword);
            this.groupBoxConnection.Controls.Add(this.txtUserName);
            this.groupBoxConnection.Controls.Add(this.labelUserName);
            this.groupBoxConnection.Controls.Add(this.labelTips);
            this.groupBoxConnection.Controls.Add(this.txtUrl);
            this.groupBoxConnection.Controls.Add(this.labelUrl);
            this.groupBoxConnection.Location = new System.Drawing.Point(7, 47);
            this.groupBoxConnection.Margin = new System.Windows.Forms.Padding(4);
            this.groupBoxConnection.Name = "groupBoxConnection";
            this.groupBoxConnection.Padding = new System.Windows.Forms.Padding(4);
            this.groupBoxConnection.Size = new System.Drawing.Size(756, 190);
            this.groupBoxConnection.TabIndex = 2;
            this.groupBoxConnection.TabStop = false;
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(111, 26);
            this.txtName.Margin = new System.Windows.Forms.Padding(4);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(637, 24);
            this.txtName.TabIndex = 8;
            // 
            // labelName
            // 
            this.labelName.AutoSize = true;
            this.labelName.Location = new System.Drawing.Point(10, 29);
            this.labelName.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(52, 18);
            this.labelName.TabIndex = 7;
            this.labelName.Text = "Name:";
            // 
            // btnConnect
            // 
            this.btnConnect.Location = new System.Drawing.Point(390, 122);
            this.btnConnect.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.btnConnect.Name = "btnConnect";
            this.btnConnect.Size = new System.Drawing.Size(123, 55);
            this.btnConnect.TabIndex = 4;
            this.btnConnect.Text = "Connect ?";
            this.btnConnect.UseVisualStyleBackColor = true;
            this.btnConnect.Click += new System.EventHandler(this.btnConnect_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(111, 153);
            this.txtPassword.Margin = new System.Windows.Forms.Padding(4);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.PasswordChar = '*';
            this.txtPassword.Size = new System.Drawing.Size(271, 24);
            this.txtPassword.TabIndex = 3;
            // 
            // labelPassword
            // 
            this.labelPassword.AutoSize = true;
            this.labelPassword.Location = new System.Drawing.Point(10, 156);
            this.labelPassword.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelPassword.Name = "labelPassword";
            this.labelPassword.Size = new System.Drawing.Size(79, 18);
            this.labelPassword.TabIndex = 6;
            this.labelPassword.Text = "Password:";
            // 
            // txtUserName
            // 
            this.txtUserName.Location = new System.Drawing.Point(111, 122);
            this.txtUserName.Margin = new System.Windows.Forms.Padding(4);
            this.txtUserName.Name = "txtUserName";
            this.txtUserName.Size = new System.Drawing.Size(271, 24);
            this.txtUserName.TabIndex = 2;
            // 
            // labelUserName
            // 
            this.labelUserName.AutoSize = true;
            this.labelUserName.Location = new System.Drawing.Point(10, 125);
            this.labelUserName.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelUserName.Name = "labelUserName";
            this.labelUserName.Size = new System.Drawing.Size(85, 18);
            this.labelUserName.TabIndex = 3;
            this.labelUserName.Text = "User name:";
            // 
            // labelTips
            // 
            this.labelTips.AutoSize = true;
            this.labelTips.ForeColor = System.Drawing.Color.Red;
            this.labelTips.Location = new System.Drawing.Point(108, 86);
            this.labelTips.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelTips.Name = "labelTips";
            this.labelTips.Size = new System.Drawing.Size(484, 18);
            this.labelTips.TabIndex = 2;
            this.labelTips.Text = "https://abcd.api.crm.dynamics.com/XRMServices/2011/Organization.svc";
            // 
            // txtUrl
            // 
            this.txtUrl.Location = new System.Drawing.Point(111, 58);
            this.txtUrl.Margin = new System.Windows.Forms.Padding(4);
            this.txtUrl.Name = "txtUrl";
            this.txtUrl.Size = new System.Drawing.Size(637, 24);
            this.txtUrl.TabIndex = 1;
            this.txtUrl.Text = "http://???/XRMServices/2011/Organization.svc";
            // 
            // labelUrl
            // 
            this.labelUrl.AutoSize = true;
            this.labelUrl.Location = new System.Drawing.Point(10, 61);
            this.labelUrl.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelUrl.Name = "labelUrl";
            this.labelUrl.Size = new System.Drawing.Size(31, 18);
            this.labelUrl.TabIndex = 0;
            this.labelUrl.Text = "Url:";
            // 
            // cboConnection
            // 
            this.cboConnection.DisplayMember = "Name";
            this.cboConnection.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboConnection.FormattingEnabled = true;
            this.cboConnection.Location = new System.Drawing.Point(149, 14);
            this.cboConnection.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.cboConnection.Name = "cboConnection";
            this.cboConnection.Size = new System.Drawing.Size(402, 26);
            this.cboConnection.TabIndex = 3;
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(559, 7);
            this.btnOk.Margin = new System.Windows.Forms.Padding(4);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(100, 39);
            this.btnOk.TabIndex = 4;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // labelCrmConnection
            // 
            this.labelCrmConnection.AutoSize = true;
            this.labelCrmConnection.Location = new System.Drawing.Point(12, 18);
            this.labelCrmConnection.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelCrmConnection.Name = "labelCrmConnection";
            this.labelCrmConnection.Size = new System.Drawing.Size(121, 18);
            this.labelCrmConnection.TabIndex = 5;
            this.labelCrmConnection.Text = "Crm Connection:";
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(663, 7);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(4);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(101, 39);
            this.btnCancel.TabIndex = 6;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // FormConnection
            // 
            this.AcceptButton = this.btnOk;
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.ClientSize = new System.Drawing.Size(771, 243);
            this.ControlBox = false;
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.labelCrmConnection);
            this.Controls.Add(this.btnOk);
            this.Controls.Add(this.cboConnection);
            this.Controls.Add(this.groupBoxConnection);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormConnection";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit - v.";
            this.groupBoxConnection.ResumeLayout(false);
            this.groupBoxConnection.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBoxConnection;
        private System.Windows.Forms.Button btnConnect;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Label labelPassword;
        private System.Windows.Forms.TextBox txtUserName;
        private System.Windows.Forms.Label labelUserName;
        private System.Windows.Forms.Label labelTips;
        private System.Windows.Forms.TextBox txtUrl;
        private System.Windows.Forms.Label labelUrl;
        private System.Windows.Forms.ComboBox cboConnection;
        private System.Windows.Forms.TextBox txtName;
        private System.Windows.Forms.Label labelName;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.Label labelCrmConnection;
        private System.Windows.Forms.Button btnCancel;
    }
}
