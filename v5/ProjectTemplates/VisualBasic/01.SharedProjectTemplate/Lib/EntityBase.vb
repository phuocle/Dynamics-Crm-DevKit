Imports Microsoft.Xrm.Sdk
Imports System
Imports System.Collections.Generic
Imports System.Diagnostics
Imports System.IO
Imports System.Linq

Namespace $NameSpace$
    <DebuggerNonUserCode()>
    Public MustInherit Class EntityBase
        Protected Function GetAliasedValue(Of T)(ByVal name As String) As T
            Dim aliased = Entity.GetAttributeValue(Of AliasedValue)(name)
            If aliased Is Nothing Then Return Nothing
            If GetType(T) Is GetType(EntityReference) AndAlso TypeOf aliased.Value Is Guid Then
                Return DirectCast(DirectCast(New EntityReference(aliased.EntityLogicalName, CType(aliased.Value, Guid)), Object), T)
            End If
            If GetType(T) Is GetType(Guid) AndAlso TypeOf aliased.Value Is EntityReference Then
                Return DirectCast(DirectCast(CType(aliased.Value, EntityReference).Id, Object), T)
            End If
            Return CType(aliased.Value, T)
        End Function

        Public Property Entity As Entity
        Protected Property PreEntity As Entity

        Public ReadOnly Property Id As Guid
            Get
                Return Entity.Id
            End Get
        End Property

        Public ReadOnly Property LogicalName As String
            Get
                Return Entity.LogicalName
            End Get
        End Property

        Protected Function CloneAttribute(ByVal value As Object) As Object
            If value Is Nothing Then
                Return Nothing
            End If

            Dim stringValue = TryCast(value, String)
            If stringValue IsNot Nothing Then
                Return New String(stringValue.ToCharArray())
            End If

            Dim optionSetValue = TryCast(value, OptionSetValue)
            If optionSetValue IsNot Nothing Then
                Return New OptionSetValue(optionSetValue.Value)
            End If

            Dim optionSetValueCollection = TryCast(value, OptionSetValueCollection)
            If optionSetValueCollection IsNot Nothing Then
                Return New OptionSetValueCollection(optionSetValueCollection)
            End If

            Dim entityReferenceValue = TryCast(value, EntityReference)
            If entityReferenceValue IsNot Nothing Then
                Return New EntityReference With {
                    .LogicalName = TryCast(CloneAttribute(If(entityReferenceValue Is Nothing, Nothing, entityReferenceValue.LogicalName)), String),
                    .Id = entityReferenceValue.Id,
                    .Name = TryCast(CloneAttribute(If(entityReferenceValue Is Nothing, Nothing, entityReferenceValue.Name)), String)
                }
            End If

            Dim booleanManagedValue = TryCast(value, BooleanManagedProperty)
            If booleanManagedValue IsNot Nothing Then
                Return New BooleanManagedProperty(booleanManagedValue.Value)
            End If

            Dim moneyValue = TryCast(value, Money)
            If moneyValue IsNot Nothing Then
                Return New Money(moneyValue.Value)
            End If

            Dim aliasedValue = TryCast(value, AliasedValue)
            If aliasedValue IsNot Nothing Then
                Return New AliasedValue(TryCast(CloneAttribute(aliasedValue.EntityLogicalName), String), TryCast(CloneAttribute(aliasedValue.AttributeLogicalName), String), CloneAttribute(aliasedValue.Value))
            End If

            Dim entityCollectionValue = TryCast(value, EntityCollection)
            If entityCollectionValue IsNot Nothing Then
                Return New EntityCollection(entityCollectionValue.Entities.Select(AddressOf CloneThisEntity).ToList())
            End If

            Dim valueTypes = New List(Of Type) From {
                GetType(Long), GetType(Boolean), GetType(DateTime),
                GetType(Decimal), GetType(Double), GetType(Integer),
                GetType(Guid), GetType(Single), GetType(Byte), GetType([Enum])
            }
            Dim type = value.GetType()
            If valueTypes.Contains(type) Then
                Return value
            End If
            Throw New InvalidDataException("Attribute of type '" & type.Name & "' is not supported yet. Please file an issue on GitHub: https://github.com/DigitalFlow/Xrm-Update-Context")
        End Function

        Protected Function CloneThisEntity(ByVal entity As Entity) As Entity
            Dim clone = New Entity With {
                .Id = entity.Id,
                .LogicalName = entity.LogicalName
            }
            For Each attribute In entity.Attributes
                clone(attribute.Key) = CloneAttribute(attribute.Value)
            Next
            Return clone
        End Function

        Public Function GetCreateEntity() As Entity
            Return Me.Entity
        End Function

        Public Function GetUpdateEntity() As Entity
            Dim MethodUpdate As Func(Of String) = Function()
                                                      Dim stackTrace = New System.Diagnostics.StackTrace()
                                                      Dim method = stackTrace.GetFrame(2).GetMethod()
                                                      Return $"{method?.ReflectedType?.Namespace}.{method?.ReflectedType?.Name}.{method?.Name}"
                                                  End Function
            Dim update = New Entity(Entity.LogicalName)
            update.Id = Entity.Id
            For Each [property] In Entity.Attributes
                Dim key = [property].Key
                Dim value = [property].Value
                If Not PreEntity.Attributes.ContainsKey(key) Then
                    update(key) = value
                ElseIf Not Object.Equals(PreEntity(key), Entity(key)) Then
                    update(key) = value
                End If
            Next
            If update.Attributes.Count = 0 Then Throw New InvalidPluginExecutionException($"Update {Entity.LogicalName} without attributes on method: {MethodUpdate()}")
            If Entity.Id = Guid.Empty Then Throw New InvalidPluginExecutionException($"Update {Entity.LogicalName} without Guid on method: {MethodUpdate()}")
            Return update
        End Function

        Public Function ToEntityReference() As EntityReference
            If Entity Is Nothing OrElse Entity.Id = Guid.Empty Then Return Nothing
            Return Entity.ToEntityReference()
        End Function

        Public Function Contains(ByVal field As String) As Boolean
            Return Me.Entity.Contains(field)
        End Function

        Public Sub Remove(ByVal field As String)
            Me.Entity.Attributes.Remove(field)
        End Sub

        Public Function Exist() As Boolean
            If Entity Is Nothing OrElse Entity.Id = Guid.Empty Then Return False
            Return True
        End Function
    End Class
End Namespace
