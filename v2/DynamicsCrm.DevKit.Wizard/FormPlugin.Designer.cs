namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormPlugin
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
            this.buttonConnection = new System.Windows.Forms.Button();
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.labelClass = new System.Windows.Forms.Label();
            this.labelExecution = new System.Windows.Forms.Label();
            this.labelStage = new System.Windows.Forms.Label();
            this.textPluginClass = new System.Windows.Forms.TextBox();
            this.labelMessage = new System.Windows.Forms.Label();
            this.comboBoxExecution = new System.Windows.Forms.ComboBox();
            this.comboBoxStage = new System.Windows.Forms.ComboBox();
            this.comboBoxMessage = new System.Windows.Forms.ComboBox();
            this.comboBoxEntity = new System.Windows.Forms.ComboBox();
            this.labelEntity = new System.Windows.Forms.Label();
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.link = new System.Windows.Forms.LinkLabel();
            this.buttonCancel = new System.Windows.Forms.Button();
            this.buttonOk = new System.Windows.Forms.Button();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // buttonConnection
            // 
            this.buttonConnection.Location = new System.Drawing.Point(600, 0);
            this.buttonConnection.Name = "buttonConnection";
            this.buttonConnection.Size = new System.Drawing.Size(110, 40);
            this.buttonConnection.TabIndex = 0;
            this.buttonConnection.Text = "Co&nnection";
            this.buttonConnection.UseVisualStyleBackColor = true;
            this.buttonConnection.Click += new System.EventHandler(this.buttonConnection_Click);
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.labelClass);
            this.groupBox.Controls.Add(this.labelExecution);
            this.groupBox.Controls.Add(this.labelStage);
            this.groupBox.Controls.Add(this.textPluginClass);
            this.groupBox.Controls.Add(this.labelMessage);
            this.groupBox.Controls.Add(this.comboBoxExecution);
            this.groupBox.Controls.Add(this.comboBoxStage);
            this.groupBox.Controls.Add(this.comboBoxMessage);
            this.groupBox.Controls.Add(this.comboBoxEntity);
            this.groupBox.Controls.Add(this.labelEntity);
            this.groupBox.Controls.Add(this.progressBar);
            this.groupBox.Location = new System.Drawing.Point(9, 22);
            this.groupBox.Name = "groupBox";
            this.groupBox.Size = new System.Drawing.Size(580, 246);
            this.groupBox.TabIndex = 11;
            this.groupBox.TabStop = false;
            // 
            // labelClass
            // 
            this.labelClass.AutoSize = true;
            this.labelClass.Location = new System.Drawing.Point(9, 71);
            this.labelClass.Name = "labelClass";
            this.labelClass.Size = new System.Drawing.Size(50, 18);
            this.labelClass.TabIndex = 12;
            this.labelClass.Text = "Class:";
            // 
            // labelExecution
            // 
            this.labelExecution.AutoSize = true;
            this.labelExecution.Location = new System.Drawing.Point(9, 204);
            this.labelExecution.Name = "labelExecution";
            this.labelExecution.Size = new System.Drawing.Size(77, 18);
            this.labelExecution.TabIndex = 10;
            this.labelExecution.Text = "Execution:";
            // 
            // labelStage
            // 
            this.labelStage.AutoSize = true;
            this.labelStage.Location = new System.Drawing.Point(9, 158);
            this.labelStage.Name = "labelStage";
            this.labelStage.Size = new System.Drawing.Size(50, 18);
            this.labelStage.TabIndex = 9;
            this.labelStage.Text = "Stage:";
            // 
            // textPluginClass
            // 
            this.textPluginClass.Enabled = false;
            this.textPluginClass.Location = new System.Drawing.Point(105, 68);
            this.textPluginClass.Name = "textPluginClass";
            this.textPluginClass.Size = new System.Drawing.Size(446, 24);
            this.textPluginClass.TabIndex = 2;
            // 
            // labelMessage
            // 
            this.labelMessage.AutoSize = true;
            this.labelMessage.Location = new System.Drawing.Point(9, 114);
            this.labelMessage.Name = "labelMessage";
            this.labelMessage.Size = new System.Drawing.Size(73, 18);
            this.labelMessage.TabIndex = 8;
            this.labelMessage.Text = "Message:";
            // 
            // comboBoxExecution
            // 
            this.comboBoxExecution.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxExecution.Enabled = false;
            this.comboBoxExecution.FormattingEnabled = true;
            this.comboBoxExecution.Items.AddRange(new object[] {
            "Synchronous",
            "Asynchronous"});
            this.comboBoxExecution.Location = new System.Drawing.Point(105, 201);
            this.comboBoxExecution.Name = "comboBoxExecution";
            this.comboBoxExecution.Size = new System.Drawing.Size(446, 26);
            this.comboBoxExecution.TabIndex = 5;
            this.comboBoxExecution.SelectedIndexChanged += new System.EventHandler(this.comboBoxExecution_SelectedIndexChanged);
            // 
            // comboBoxStage
            // 
            this.comboBoxStage.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxStage.Enabled = false;
            this.comboBoxStage.FormattingEnabled = true;
            this.comboBoxStage.Items.AddRange(new object[] {
            "PreValidation",
            "PreOperation",
            "PostOperation"});
            this.comboBoxStage.Location = new System.Drawing.Point(105, 155);
            this.comboBoxStage.Name = "comboBoxStage";
            this.comboBoxStage.Size = new System.Drawing.Size(446, 26);
            this.comboBoxStage.TabIndex = 4;
            this.comboBoxStage.SelectedIndexChanged += new System.EventHandler(this.comboBoxStage_SelectedIndexChanged);
            // 
            // comboBoxMessage
            // 
            this.comboBoxMessage.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxMessage.Enabled = false;
            this.comboBoxMessage.FormattingEnabled = true;
            this.comboBoxMessage.Location = new System.Drawing.Point(105, 111);
            this.comboBoxMessage.Name = "comboBoxMessage";
            this.comboBoxMessage.Size = new System.Drawing.Size(446, 26);
            this.comboBoxMessage.TabIndex = 3;
            this.comboBoxMessage.SelectedIndexChanged += new System.EventHandler(this.comboBoxMessage_SelectedIndexChanged);
            // 
            // comboBoxEntity
            // 
            this.comboBoxEntity.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxEntity.Enabled = false;
            this.comboBoxEntity.FormattingEnabled = true;
            this.comboBoxEntity.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxEntity.Location = new System.Drawing.Point(105, 22);
            this.comboBoxEntity.Name = "comboBoxEntity";
            this.comboBoxEntity.Size = new System.Drawing.Size(446, 26);
            this.comboBoxEntity.TabIndex = 1;
            this.comboBoxEntity.SelectedIndexChanged += new System.EventHandler(this.comboBoxEntity_SelectedIndexChanged);
            // 
            // labelEntity
            // 
            this.labelEntity.AutoSize = true;
            this.labelEntity.Location = new System.Drawing.Point(9, 25);
            this.labelEntity.Name = "labelEntity";
            this.labelEntity.Size = new System.Drawing.Size(48, 18);
            this.labelEntity.TabIndex = 0;
            this.labelEntity.Text = "Entity:";
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(3, 239);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(574, 4);
            this.progressBar.TabIndex = 7;
            // 
            // link
            // 
            this.link.Location = new System.Drawing.Point(0, 0);
            this.link.Margin = new System.Windows.Forms.Padding(0);
            this.link.Name = "link";
            this.link.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.link.Size = new System.Drawing.Size(405, 26);
            this.link.TabIndex = 9;
            this.link.TabStop = true;
            this.link.Text = "WIKI: Add new WebResource Project";
            this.link.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.link.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.link_LinkClicked);
            // 
            // buttonCancel
            // 
            this.buttonCancel.Location = new System.Drawing.Point(600, 112);
            this.buttonCancel.Name = "buttonCancel";
            this.buttonCancel.Size = new System.Drawing.Size(110, 40);
            this.buttonCancel.TabIndex = 7;
            this.buttonCancel.Text = "&Cancel";
            this.buttonCancel.UseVisualStyleBackColor = true;
            this.buttonCancel.Click += new System.EventHandler(this.buttonCancel_Click);
            // 
            // buttonOk
            // 
            this.buttonOk.Enabled = false;
            this.buttonOk.Location = new System.Drawing.Point(600, 66);
            this.buttonOk.Name = "buttonOk";
            this.buttonOk.Size = new System.Drawing.Size(110, 40);
            this.buttonOk.TabIndex = 6;
            this.buttonOk.Text = "&OK";
            this.buttonOk.UseVisualStyleBackColor = true;
            this.buttonOk.Click += new System.EventHandler(this.buttonOk_Click);
            // 
            // FormPlugin
            // 
            this.AcceptButton = this.buttonOk;
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.ClientSize = new System.Drawing.Size(722, 281);
            this.ControlBox = false;
            this.Controls.Add(this.buttonConnection);
            this.Controls.Add(this.groupBox);
            this.Controls.Add(this.link);
            this.Controls.Add(this.buttonCancel);
            this.Controls.Add(this.buttonOk);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormPlugin";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit - v.";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button buttonConnection;
        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.ComboBox comboBoxEntity;
        private System.Windows.Forms.Label labelEntity;
        private System.Windows.Forms.LinkLabel link;
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.Button buttonCancel;
        private System.Windows.Forms.Button buttonOk;
        private System.Windows.Forms.Label labelExecution;
        private System.Windows.Forms.Label labelStage;
        private System.Windows.Forms.Label labelMessage;
        private System.Windows.Forms.ComboBox comboBoxExecution;
        private System.Windows.Forms.ComboBox comboBoxStage;
        private System.Windows.Forms.ComboBox comboBoxMessage;
        private System.Windows.Forms.Label labelClass;
        private System.Windows.Forms.TextBox textPluginClass;
    }
}
