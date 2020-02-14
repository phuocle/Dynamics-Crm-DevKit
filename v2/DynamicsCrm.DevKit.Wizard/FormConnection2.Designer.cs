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
            this.txtName = new System.Windows.Forms.TextBox();
            this.labelName = new System.Windows.Forms.Label();
            this.btnConnect = new System.Windows.Forms.Button();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.labelPassword = new System.Windows.Forms.Label();
            this.txtUserName = new System.Windows.Forms.TextBox();
            this.labelUserName = new System.Windows.Forms.Label();
            this.txtUrl = new System.Windows.Forms.TextBox();
            this.labelUrl = new System.Windows.Forms.Label();
            this.labelType = new System.Windows.Forms.Label();
            this.cboType = new System.Windows.Forms.ComboBox();
            this.groupBoxConnection.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(691, 2);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(4);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(101, 39);
            this.btnCancel.TabIndex = 10;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // labelCrmConnection
            // 
            this.labelCrmConnection.AutoSize = true;
            this.labelCrmConnection.Location = new System.Drawing.Point(13, 9);
            this.labelCrmConnection.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelCrmConnection.Name = "labelCrmConnection";
            this.labelCrmConnection.Size = new System.Drawing.Size(152, 24);
            this.labelCrmConnection.TabIndex = 9;
            this.labelCrmConnection.Text = "Crm Connection:";
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(583, 2);
            this.btnOk.Margin = new System.Windows.Forms.Padding(4);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(100, 39);
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
            this.cboConnection.Location = new System.Drawing.Point(173, 6);
            this.cboConnection.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.cboConnection.Name = "cboConnection";
            this.cboConnection.Size = new System.Drawing.Size(402, 32);
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
            this.groupBoxConnection.Location = new System.Drawing.Point(17, 45);
            this.groupBoxConnection.Margin = new System.Windows.Forms.Padding(4);
            this.groupBoxConnection.Name = "groupBoxConnection";
            this.groupBoxConnection.Padding = new System.Windows.Forms.Padding(4);
            this.groupBoxConnection.Size = new System.Drawing.Size(766, 216);
            this.groupBoxConnection.TabIndex = 11;
            this.groupBoxConnection.TabStop = false;
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(149, 21);
            this.txtName.Margin = new System.Windows.Forms.Padding(4);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(413, 29);
            this.txtName.TabIndex = 8;
            // 
            // labelName
            // 
            this.labelName.AutoSize = true;
            this.labelName.Location = new System.Drawing.Point(10, 24);
            this.labelName.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(61, 24);
            this.labelName.TabIndex = 7;
            this.labelName.Text = "Name";
            // 
            // btnConnect
            // 
            this.btnConnect.Location = new System.Drawing.Point(570, 135);
            this.btnConnect.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.btnConnect.Name = "btnConnect";
            this.btnConnect.Size = new System.Drawing.Size(181, 66);
            this.btnConnect.TabIndex = 4;
            this.btnConnect.Text = "Connect ?";
            this.btnConnect.UseVisualStyleBackColor = true;
            this.btnConnect.Click += new System.EventHandler(this.btnConnect_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(149, 172);
            this.txtPassword.Margin = new System.Windows.Forms.Padding(4);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.PasswordChar = '*';
            this.txtPassword.Size = new System.Drawing.Size(413, 29);
            this.txtPassword.TabIndex = 3;
            // 
            // labelPassword
            // 
            this.labelPassword.AutoSize = true;
            this.labelPassword.Location = new System.Drawing.Point(10, 175);
            this.labelPassword.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelPassword.Name = "labelPassword";
            this.labelPassword.Size = new System.Drawing.Size(92, 24);
            this.labelPassword.TabIndex = 6;
            this.labelPassword.Text = "Password";
            // 
            // txtUserName
            // 
            this.txtUserName.Location = new System.Drawing.Point(149, 135);
            this.txtUserName.Margin = new System.Windows.Forms.Padding(4);
            this.txtUserName.Name = "txtUserName";
            this.txtUserName.Size = new System.Drawing.Size(413, 29);
            this.txtUserName.TabIndex = 2;
            // 
            // labelUserName
            // 
            this.labelUserName.AutoSize = true;
            this.labelUserName.Location = new System.Drawing.Point(8, 138);
            this.labelUserName.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelUserName.Name = "labelUserName";
            this.labelUserName.Size = new System.Drawing.Size(105, 24);
            this.labelUserName.TabIndex = 3;
            this.labelUserName.Text = "User Name";
            // 
            // txtUrl
            // 
            this.txtUrl.Location = new System.Drawing.Point(149, 98);
            this.txtUrl.Margin = new System.Windows.Forms.Padding(4);
            this.txtUrl.Name = "txtUrl";
            this.txtUrl.Size = new System.Drawing.Size(602, 29);
            this.txtUrl.TabIndex = 1;
            // 
            // labelUrl
            // 
            this.labelUrl.AutoSize = true;
            this.labelUrl.Location = new System.Drawing.Point(10, 101);
            this.labelUrl.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelUrl.Name = "labelUrl";
            this.labelUrl.Size = new System.Drawing.Size(33, 24);
            this.labelUrl.TabIndex = 0;
            this.labelUrl.Text = "Url";
            // 
            // labelType
            // 
            this.labelType.AutoSize = true;
            this.labelType.Location = new System.Drawing.Point(10, 61);
            this.labelType.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelType.Name = "labelType";
            this.labelType.Size = new System.Drawing.Size(53, 24);
            this.labelType.TabIndex = 9;
            this.labelType.Text = "Type";
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
            this.cboType.Location = new System.Drawing.Point(149, 58);
            this.cboType.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.cboType.Name = "cboType";
            this.cboType.Size = new System.Drawing.Size(413, 32);
            this.cboType.TabIndex = 10;
            this.cboType.SelectedIndexChanged += new System.EventHandler(this.cboType_SelectedIndexChanged);
            // 
            // FormConnection2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(11F, 24F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(796, 275);
            this.ControlBox = false;
            this.Controls.Add(this.groupBoxConnection);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.labelCrmConnection);
            this.Controls.Add(this.btnOk);
            this.Controls.Add(this.cboConnection);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "FormConnection2";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit - v.";
            this.groupBoxConnection.ResumeLayout(false);
            this.groupBoxConnection.PerformLayout();
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
    }
}