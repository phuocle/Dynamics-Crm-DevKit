﻿using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Tooling.CrmConnectControl;
using System;
using System.Windows;
using System.Windows.Threading;

namespace Dev.DevKit.Console
{
    public partial class LoginForm : Window
    {
        private CrmServiceClient CrmSvc = null;
        private bool bIsConnectedComplete = false;
        private CrmConnectionManager mgr = null;
        private bool resetUiFlag = false;

        public CrmConnectionManager CrmConnectionMgr { get { return mgr; } }
        public event EventHandler ConnectionToCrmCompleted;

        public LoginForm()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            bIsConnectedComplete = false;
            mgr = new CrmConnectionManager();
            mgr.ParentControl = CrmLoginCtrl;
            mgr.UseUserLocalDirectoryForConfigStore = true;
            mgr.ClientId = "51f81489-12ee-4a9e-aaae-a2591f45987d";
            mgr.RedirectUri = new Uri("app://58145B91-0C36-4500-8554-080854F2AC97");
            CrmLoginCtrl.SetGlobalStoreAccess(mgr);
            CrmLoginCtrl.SetControlMode(ServerLoginConfigCtrlMode.FullLoginPanel);
            CrmLoginCtrl.ConnectionCheckBegining += new EventHandler(CrmLoginCtrl_ConnectionCheckBegining);
            CrmLoginCtrl.ConnectErrorEvent += new EventHandler<ConnectErrorEventArgs>(CrmLoginCtrl_ConnectErrorEvent);
            CrmLoginCtrl.ConnectionStatusEvent += new EventHandler<ConnectStatusEventArgs>(CrmLoginCtrl_ConnectionStatusEvent);
            CrmLoginCtrl.UserCancelClicked += new EventHandler(CrmLoginCtrl_UserCancelClicked);
            if (!mgr.RequireUserLogin())
            {
                if (MessageBox.Show("Credentials already saved in configuration\nChoose Yes to Auto Login or No to Reset Credentials", "DynamicsCrm.DevKit - Auto Login", MessageBoxButton.YesNo, MessageBoxImage.Question) == MessageBoxResult.Yes)
                {
                    CrmLoginCtrl.IsEnabled = false;
                    mgr.ServerConnectionStatusUpdate += new EventHandler<ServerConnectStatusEventArgs>(mgr_ServerConnectionStatusUpdate);
                    mgr.ConnectionCheckComplete += new EventHandler<ServerConnectStatusEventArgs>(mgr_ConnectionCheckComplete);
                    mgr.ConnectToServerCheck();
                    CrmLoginCtrl.ShowMessageGrid();
                }
            }
        }

        private void mgr_ServerConnectionStatusUpdate(object sender, ServerConnectStatusEventArgs e)
        {
            Dispatcher.Invoke(DispatcherPriority.Normal,
                new System.Action(() =>
                {
                    this.Title = string.IsNullOrWhiteSpace(e.StatusMessage) ? e.ErrorMessage : e.StatusMessage;
                }
            ));
        }

        private void mgr_ConnectionCheckComplete(object sender, ServerConnectStatusEventArgs e)
        {
            ((CrmConnectionManager)sender).ConnectionCheckComplete -= mgr_ConnectionCheckComplete;
            ((CrmConnectionManager)sender).ServerConnectionStatusUpdate -= mgr_ServerConnectionStatusUpdate;
            if (!e.Connected)
            {
                if (e.MultiOrgsFound)
                    MessageBox.Show("Unable to Login to CRM using cached credentials. Org Not found", "Login Failure");
                else
                    MessageBox.Show("Unable to Login to CRM using cached credentials", "Login Failure");
                resetUiFlag = true;
                CrmLoginCtrl.GoBackToLogin();
                Dispatcher.Invoke(DispatcherPriority.Normal,
                    new System.Action(() =>
                    {
                        this.Title = "Failed to Login with cached credentials.";
                        MessageBox.Show(this.Title, "Notification from ConnectionManager", MessageBoxButton.OK, MessageBoxImage.Error);
                        CrmLoginCtrl.IsEnabled = true;
                    }
                ));
                resetUiFlag = false;
            }
            else
            {
                if (e.Connected && !bIsConnectedComplete)
                    ProcessSuccess();
            }
        }

        private void CrmLoginCtrl_ConnectionCheckBegining(object sender, EventArgs e)
        {
            bIsConnectedComplete = false;
            Dispatcher.Invoke(DispatcherPriority.Normal,
                new System.Action(() =>
                {
                    this.Title = "Starting Login Process. ";
                    CrmLoginCtrl.IsEnabled = true;
                }
            ));
        }

        private void CrmLoginCtrl_ConnectionStatusEvent(object sender, ConnectStatusEventArgs e)
        {
            if (e.ConnectSucceeded && !bIsConnectedComplete)
                ProcessSuccess();
        }

        private void CrmLoginCtrl_ConnectErrorEvent(object sender, ConnectErrorEventArgs e)
        {
        }

        private void CrmLoginCtrl_UserCancelClicked(object sender, EventArgs e)
        {
            if (!resetUiFlag)
                this.Close();
        }

        private void ProcessSuccess()
        {
            resetUiFlag = true;
            bIsConnectedComplete = true;
            CrmSvc = mgr.CrmSvc;
            CrmLoginCtrl.GoBackToLogin();
            Dispatcher.Invoke(DispatcherPriority.Normal,
               new System.Action(() =>
               {
                   this.Title = "Notification from Parent";
                   CrmLoginCtrl.IsEnabled = true;
               }
            ));
            if (ConnectionToCrmCompleted != null)
                ConnectionToCrmCompleted(this, null);
            resetUiFlag = false;
        }
    }
}
