Imports System
Imports System.Diagnostics

Namespace $NameSpace$
    Public Enum ImageType
        Pre
        Post
    End Enum

    Public Enum ExecutionModeEnum
        Synchronous = 0
        Asynchronous = 1
    End Enum

    Public Enum ImageTypeEnum
        PreImage = 0
        PostImage = 1
        Both = 2
    End Enum

    Public Enum IsolationModeEnum
        None = 0
        Sandbox = 1
        External = 2
    End Enum

    Public Enum SourceTypeEnum
        Database = 0
        Disk = 1
        Normal = 2
        AzureWebApp = 3
        FileStore = 4
    End Enum

    Public Enum PluginStepOperationEnum
        Activate = 0
        Deactivate = 1
    End Enum

    Public Enum StageEnum
        PreValidation = 10
        PreOperation = 20
        PostOperation = 40
    End Enum

    Public Enum PluginType
        Plugin = 0
        Workflow = 1
        CustomAction = 2
        DataProvider = 3
        CustomApi = 4
    End Enum

    <DebuggerNonUserCode()>
    <AttributeUsage(AttributeTargets.Class, Inherited:=False, AllowMultiple:=True)>
    Public Class CrmPluginRegistrationAttribute
        Inherits Attribute

        Public Sub New(ByVal message As String, ByVal entityLogicalName As String, ByVal stage As StageEnum, ByVal executionMode As ExecutionModeEnum, ByVal filteringAttributes As String, ByVal stepName As String, ByVal executionOrder As Integer, ByVal isolationModel As IsolationModeEnum)
            Me.Message = message
            Me.EntityLogicalName = entityLogicalName
            Me.Stage = stage
            Me.ExecutionMode = executionMode
            Me.FilteringAttributes = filteringAttributes
            Me.Name = stepName
            Me.ExecutionOrder = executionOrder
            Me.IsolationMode = isolationModel
        End Sub

        Public Sub New(ByVal name As String, ByVal friendlyName As String, ByVal description As String, ByVal groupName As String, ByVal isolationModel As IsolationModeEnum)
            Me.Name = name
            Me.FriendlyName = friendlyName
            Me.Description = description
            Me.GroupName = groupName
            Me.IsolationMode = isolationModel
        End Sub

        Public Sub New(ByVal name As String, ByVal message As String, ByVal pluginType As PluginType)
            Me.Name = name
            Me.Message = message
            Me.PluginType = pluginType
        End Sub

        Public Property Id As String = String.Empty
        Public Property Unregister As Boolean = False
        Public Property RunAs As String = String.Empty
        Public Property FriendlyName As String = String.Empty
        Public Property GroupName As String = String.Empty
        Public Property Description As String = String.Empty
        Public Property DeleteAsyncOperation As Boolean = True
        Public Property Offline As Boolean = False
        Public Property Server As Boolean = True
        Public Property Action As PluginStepOperationEnum = PluginStepOperationEnum.Activate
        Public Property IsolationMode As IsolationModeEnum = IsolationModeEnum.Sandbox
        Public Property Message As String = String.Empty
        Public Property EntityLogicalName As String = String.Empty
        Public Property FilteringAttributes As String = String.Empty
        Public Property Name As String = String.Empty
        Public Property ExecutionOrder As Integer = 1
        Public Property Stage As StageEnum = StageEnum.PostOperation
        Public Property ExecutionMode As ExecutionModeEnum = ExecutionModeEnum.Asynchronous
        Public Property UnSecureConfiguration As String = String.Empty
        Public Property SecureConfiguration As String = String.Empty
        Public Property Image1Name As String = String.Empty
        Public Property Image1Alias As String = String.Empty
        Public Property Image1Type As ImageTypeEnum = ImageTypeEnum.PreImage
        Public Property Image1Attributes As String = String.Empty
        Public Property Image2Name As String = String.Empty
        Public Property Image2Alias As String = String.Empty
        Public Property Image2Type As ImageTypeEnum = ImageTypeEnum.PostImage
        Public Property Image2Attributes As String = String.Empty
        Public Property Image3Name As String = String.Empty
        Public Property Image3Alias As String = String.Empty
        Public Property Image3Type As ImageTypeEnum = ImageTypeEnum.PostImage
        Public Property Image3Attributes As String = String.Empty
        Public Property Image4Name As String = String.Empty
        Public Property Image4Alias As String = String.Empty
        Public Property Image4Type As ImageTypeEnum = ImageTypeEnum.PostImage
        Public Property Image4Attributes As String = String.Empty
        Public Property PluginType As PluginType
        Public Property DataSource As String
    End Class

    <DebuggerNonUserCode()>
    <AttributeUsage(AttributeTargets.Assembly, Inherited:=False, AllowMultiple:=False)>
    Public Class DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute
        Inherits Attribute

        Public Property TenantId As String
        Public Property CertificateFileName As String
        Public Property CertificatePassword As String
        Public Property ApplicationIds As String = String.Empty
    End Class

    <DebuggerNonUserCode()>
    <AttributeUsage(AttributeTargets.Assembly, Inherited:=False, AllowMultiple:=False)>
    Public Class DynamicsCrmDevKitPluginAssemblyAttribute
        Inherits Attribute

        Public Property IsolationMode As IsolationModeEnum = IsolationModeEnum.Sandbox
        Public Property SourceType As SourceTypeEnum = SourceTypeEnum.Database
    End Class
End Namespace
