namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormReport
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
            this.comboReports = new System.Windows.Forms.ComboBox();
            this.labelReport = new System.Windows.Forms.Label();
            this.comboSolutions = new System.Windows.Forms.ComboBox();
            this.labelSolution = new System.Windows.Forms.Label();
            this.comboLanguages = new System.Windows.Forms.ComboBox();
            this.labelLanguage = new System.Windows.Forms.Label();
            this.buttonOk = new System.Windows.Forms.Button();
            this.buttonCancel = new System.Windows.Forms.Button();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.comboReports);
            this.groupBox.Controls.Add(this.labelReport);
            this.groupBox.Controls.Add(this.comboSolutions);
            this.groupBox.Controls.Add(this.labelSolution);
            this.groupBox.Controls.Add(this.comboLanguages);
            this.groupBox.Controls.Add(this.labelLanguage);
            this.groupBox.Location = new System.Drawing.Point(6, 2);
            this.groupBox.Margin = new System.Windows.Forms.Padding(2);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(2);
            this.groupBox.Size = new System.Drawing.Size(559, 144);
            this.groupBox.TabIndex = 5;
            this.groupBox.TabStop = false;
            // 
            // comboReports
            // 
            this.comboReports.DisplayMember = "Name";
            this.comboReports.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboReports.FormattingEnabled = true;
            this.comboReports.Location = new System.Drawing.Point(97, 99);
            this.comboReports.Margin = new System.Windows.Forms.Padding(2);
            this.comboReports.Name = "comboReports";
            this.comboReports.Size = new System.Drawing.Size(449, 21);
            this.comboReports.TabIndex = 8;
            this.comboReports.ValueMember = "Value";
            // 
            // labelReport
            // 
            this.labelReport.AutoSize = true;
            this.labelReport.Location = new System.Drawing.Point(5, 102);
            this.labelReport.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelReport.Name = "labelReport";
            this.labelReport.Size = new System.Drawing.Size(39, 13);
            this.labelReport.TabIndex = 7;
            this.labelReport.Text = "Report";
            // 
            // comboSolutions
            // 
            this.comboSolutions.DisplayMember = "Name";
            this.comboSolutions.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboSolutions.FormattingEnabled = true;
            this.comboSolutions.Location = new System.Drawing.Point(97, 61);
            this.comboSolutions.Margin = new System.Windows.Forms.Padding(2);
            this.comboSolutions.Name = "comboSolutions";
            this.comboSolutions.Size = new System.Drawing.Size(449, 21);
            this.comboSolutions.TabIndex = 6;
            this.comboSolutions.ValueMember = "Value";
            this.comboSolutions.SelectedIndexChanged += new System.EventHandler(this.comboSolutions_SelectedIndexChanged);
            // 
            // labelSolution
            // 
            this.labelSolution.AutoSize = true;
            this.labelSolution.Location = new System.Drawing.Point(5, 64);
            this.labelSolution.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelSolution.Name = "labelSolution";
            this.labelSolution.Size = new System.Drawing.Size(45, 13);
            this.labelSolution.TabIndex = 5;
            this.labelSolution.Text = "Solution";
            // 
            // comboLanguages
            // 
            this.comboLanguages.DisplayMember = "Name";
            this.comboLanguages.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboLanguages.FormattingEnabled = true;
            this.comboLanguages.Location = new System.Drawing.Point(97, 25);
            this.comboLanguages.Margin = new System.Windows.Forms.Padding(2);
            this.comboLanguages.Name = "comboLanguages";
            this.comboLanguages.Size = new System.Drawing.Size(449, 21);
            this.comboLanguages.TabIndex = 4;
            this.comboLanguages.ValueMember = "Value";
            this.comboLanguages.SelectedIndexChanged += new System.EventHandler(this.comboLanguages_SelectedIndexChanged);
            // 
            // labelLanguage
            // 
            this.labelLanguage.AutoSize = true;
            this.labelLanguage.Location = new System.Drawing.Point(5, 28);
            this.labelLanguage.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.labelLanguage.Name = "labelLanguage";
            this.labelLanguage.Size = new System.Drawing.Size(55, 13);
            this.labelLanguage.TabIndex = 0;
            this.labelLanguage.Text = "Language";
            // 
            // buttonOk
            // 
            this.buttonOk.Location = new System.Drawing.Point(574, 11);
            this.buttonOk.Margin = new System.Windows.Forms.Padding(2);
            this.buttonOk.Name = "buttonOk";
            this.buttonOk.Size = new System.Drawing.Size(94, 29);
            this.buttonOk.TabIndex = 3;
            this.buttonOk.Text = "&OK";
            this.buttonOk.UseVisualStyleBackColor = true;
            this.buttonOk.Click += new System.EventHandler(this.buttonOk_Click);
            // 
            // buttonCancel
            // 
            this.buttonCancel.Location = new System.Drawing.Point(574, 44);
            this.buttonCancel.Margin = new System.Windows.Forms.Padding(2);
            this.buttonCancel.Name = "buttonCancel";
            this.buttonCancel.Size = new System.Drawing.Size(94, 29);
            this.buttonCancel.TabIndex = 4;
            this.buttonCancel.Text = "&Cancel";
            this.buttonCancel.UseVisualStyleBackColor = true;
            this.buttonCancel.Click += new System.EventHandler(this.buttonancel_Click);
            // 
            // FormReport
            // 
            this.AcceptButton = this.buttonOk;
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.ClientSize = new System.Drawing.Size(677, 153);
            this.ControlBox = false;
            this.Controls.Add(this.buttonCancel);
            this.Controls.Add(this.buttonOk);
            this.Controls.Add(this.groupBox);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormReport";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.Label labelLanguage;
        private System.Windows.Forms.Button buttonOk;
        private System.Windows.Forms.Button buttonCancel;
        private System.Windows.Forms.ComboBox comboLanguages;
        private System.Windows.Forms.ComboBox comboReports;
        private System.Windows.Forms.Label labelReport;
        private System.Windows.Forms.ComboBox comboSolutions;
        private System.Windows.Forms.Label labelSolution;
    }
}
