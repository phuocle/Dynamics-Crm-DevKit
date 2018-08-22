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
            this.progressBar = new System.Windows.Forms.ProgressBar();
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
            this.groupBox1.Location = new System.Drawing.Point(8, 0);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(2);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(8);
            this.groupBox1.Size = new System.Drawing.Size(398, 165);
            this.groupBox1.TabIndex = 2;
            this.groupBox1.TabStop = false;
            // 
            // btnConnection
            // 
            this.btnConnection.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConnection.Location = new System.Drawing.Point(352, 20);
            this.btnConnection.Margin = new System.Windows.Forms.Padding(7, 6, 7, 6);
            this.btnConnection.Name = "btnConnection";
            this.btnConnection.Size = new System.Drawing.Size(37, 27);
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
            this.ddlExecution.Location = new System.Drawing.Point(97, 85);
            this.ddlExecution.Margin = new System.Windows.Forms.Padding(2);
            this.ddlExecution.Name = "ddlExecution";
            this.ddlExecution.Size = new System.Drawing.Size(246, 25);
            this.ddlExecution.TabIndex = 12;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(11, 88);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(73, 17);
            this.label1.TabIndex = 13;
            this.label1.Text = "Execution:";
            // 
            // btnCancel
            // 
            this.btnCancel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.btnCancel.Location = new System.Drawing.Point(188, 123);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(2);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(87, 30);
            this.btnCancel.TabIndex = 7;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // btnOk
            // 
            this.btnOk.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.btnOk.Enabled = false;
            this.btnOk.Location = new System.Drawing.Point(97, 123);
            this.btnOk.Margin = new System.Windows.Forms.Padding(2);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(87, 30);
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
            this.ddlStage.Location = new System.Drawing.Point(97, 53);
            this.ddlStage.Margin = new System.Windows.Forms.Padding(2);
            this.ddlStage.Name = "ddlStage";
            this.ddlStage.Size = new System.Drawing.Size(246, 25);
            this.ddlStage.TabIndex = 5;
            this.ddlStage.SelectedIndexChanged += new System.EventHandler(this.ddlStage_SelectedIndexChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(11, 56);
            this.label4.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(49, 17);
            this.label4.TabIndex = 11;
            this.label4.Text = "Stage:";
            // 
            // ddlMessage
            // 
            this.ddlMessage.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ddlMessage.FormattingEnabled = true;
            this.ddlMessage.Location = new System.Drawing.Point(97, 21);
            this.ddlMessage.Margin = new System.Windows.Forms.Padding(2);
            this.ddlMessage.Name = "ddlMessage";
            this.ddlMessage.Size = new System.Drawing.Size(246, 25);
            this.ddlMessage.TabIndex = 4;
            this.ddlMessage.SelectedIndexChanged += new System.EventHandler(this.ddlMessage_SelectedIndexChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(11, 24);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(69, 17);
            this.label3.TabIndex = 8;
            this.label3.Text = "Message:";
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(8, 160);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(398, 5);
            this.progressBar.Style = System.Windows.Forms.ProgressBarStyle.Marquee;
            this.progressBar.TabIndex = 25;
            this.progressBar.Visible = false;
            // 
            // FormClassPlugin
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(414, 173);
            this.ControlBox = false;
            this.Controls.Add(this.progressBar);
            this.Controls.Add(this.groupBox1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormClassPlugin";
            this.Padding = new System.Windows.Forms.Padding(8, 0, 8, 8);
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
        private System.Windows.Forms.ProgressBar progressBar;
    }
}