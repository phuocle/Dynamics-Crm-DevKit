namespace PL.DynamicsCrm.DevKit.Wizard
{
    partial class FormClassPlugin
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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btnConnection = new System.Windows.Forms.Button();
            this.ddlExecution = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.btnCancel = new System.Windows.Forms.Button();
            this.btnOk = new System.Windows.Forms.Button();
            this.ddlStage = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.ddlMessage = new System.Windows.Forms.ComboBox();
            this.label3 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btnConnection);
            this.groupBox1.Controls.Add(this.ddlExecution);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Controls.Add(this.btnCancel);
            this.groupBox1.Controls.Add(this.btnOk);
            this.groupBox1.Controls.Add(this.ddlStage);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.ddlMessage);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox1.Location = new System.Drawing.Point(10, 0);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(10);
            this.groupBox1.Size = new System.Drawing.Size(467, 181);
            this.groupBox1.TabIndex = 2;
            this.groupBox1.TabStop = false;
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(422, 26);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(8);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(28, 28);
            this.btnConnection.TabIndex = 17;
            this.btnConnection.Text = "><";
            this.btnConnection.UseVisualStyleBackColor = true;
            this.btnConnection.Click += new System.EventHandler(this.btnConnection_Click);
            // 
            // ddlExecution
            // 
            this.ddlExecution.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ddlExecution.FormattingEnabled = true;
            this.ddlExecution.Items.AddRange(new object[] {
            "Synchronous",
            "Asynchronous"});
            this.ddlExecution.Location = new System.Drawing.Point(96, 94);
            this.ddlExecution.Name = "ddlExecution";
            this.ddlExecution.Size = new System.Drawing.Size(315, 28);
            this.ddlExecution.TabIndex = 12;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 97);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(83, 20);
            this.label1.TabIndex = 13;
            this.label1.Text = "Execution:";
            // 
            // btnCancel
            // 
            this.btnCancel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.btnCancel.Location = new System.Drawing.Point(191, 134);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(89, 31);
            this.btnCancel.TabIndex = 7;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.btnOk.Enabled = false;
            this.btnOk.Location = new System.Drawing.Point(96, 134);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(89, 31);
            this.btnOk.TabIndex = 6;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // ddlStage
            // 
            this.ddlStage.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ddlStage.FormattingEnabled = true;
            this.ddlStage.Items.AddRange(new object[] {
            "PreValidation",
            "PreOperation",
            "PostOperation"});
            this.ddlStage.Location = new System.Drawing.Point(96, 60);
            this.ddlStage.Name = "ddlStage";
            this.ddlStage.Size = new System.Drawing.Size(315, 28);
            this.ddlStage.TabIndex = 5;
            this.ddlStage.SelectedIndexChanged += new System.EventHandler(this.ddlStage_SelectedIndexChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(13, 63);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(56, 20);
            this.label4.TabIndex = 11;
            this.label4.Text = "Stage:";
            // 
            // ddlMessage
            // 
            this.ddlMessage.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ddlMessage.FormattingEnabled = true;
            this.ddlMessage.Location = new System.Drawing.Point(96, 26);
            this.ddlMessage.Name = "ddlMessage";
            this.ddlMessage.Size = new System.Drawing.Size(315, 28);
            this.ddlMessage.TabIndex = 4;
            this.ddlMessage.SelectedIndexChanged += new System.EventHandler(this.ddlMessage_SelectedIndexChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(13, 29);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(78, 20);
            this.label3.TabIndex = 8;
            this.label3.Text = "Message:";
            // 
            // FormClassPlugin
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(487, 191);
            this.Controls.Add(this.groupBox1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormClassPlugin";
            this.Padding = new System.Windows.Forms.Padding(10, 0, 10, 10);
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Add New Plugin Class";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.ComboBox ddlExecution;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.ComboBox ddlStage;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox ddlMessage;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btnConnection;
    }
}